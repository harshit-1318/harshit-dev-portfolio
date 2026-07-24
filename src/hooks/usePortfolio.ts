import { useState, useEffect } from "react";
import type { IPortfolioData } from "@/types/portfolio";
import portfolioStatic from "@/data";
import {
  mapProfileData,
  mapExperienceData,
  mapProjectData,
  mapEducationData,
} from "./portfolio-mappers";

export function usePortfolio() {
  const [data, setData] = useState<IPortfolioData>(portfolioStatic as unknown as IPortfolioData);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchUpdates() {
      try {
        const [profileRes, expRes, projRes, eduRes] = await Promise.all([
          fetch("/api/profile"),
          fetch("/api/experience"),
          fetch("/api/projects"),
          fetch("/api/education"),
        ]);

        const staticData = portfolioStatic as unknown as IPortfolioData;
        const updatedData = { ...staticData };
        let hasUpdates = false;

        if (profileRes.ok) {
          const profile = mapProfileData(await profileRes.json(), staticData.profile);
          if (profile) {
            updatedData.profile = profile;
            hasUpdates = true;
          }
        }

        if (expRes.ok) {
          const experience = mapExperienceData(await expRes.json());
          if (experience) {
            updatedData.experience = experience;
            hasUpdates = true;
          }
        }

        if (projRes.ok) {
          const projects = mapProjectData(await projRes.json());
          if (projects) {
            updatedData.projects = projects;
            hasUpdates = true;
          }
        }

        if (eduRes.ok) {
          const education = mapEducationData(await eduRes.json());
          if (education) {
            updatedData.education = education;
            hasUpdates = true;
          }
        }

        if (hasUpdates) {
          setData(updatedData);
        }
      } catch (error) {
        console.error("Failed to fetch custom portfolio data from API, using static json", error);
      } finally {
        setLoading(false);
      }
    }

    fetchUpdates();
  }, []);

  return { data, loading };
}
