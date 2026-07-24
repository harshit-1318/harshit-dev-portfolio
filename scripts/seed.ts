import mongoose from "mongoose";
import fs from "fs";
import path from "path";

import {
  adminData as defaultAdminData,
  profileData as defaultProfileData,
  projectsData as defaultProjectsData,
  certificatesData as defaultCertificatesData,
  experiencesData as defaultExperiencesData,
  skillsData as defaultSkillsData,
  educationData as defaultEducationData,
  resumeData as defaultResumeData,
} from "./seedData";

// Load .env manually to ensure it connects to MongoDB Atlas
try {
  const envPath = path.resolve(process.cwd(), ".env");
  if (fs.existsSync(envPath)) {
    const envContent = fs.readFileSync(envPath, "utf8");
    envContent.split("\n").forEach((line) => {
      const parts = line.split("=");
      if (parts.length >= 2) {
        const key = parts[0].trim();
        const value = parts.slice(1).join("=").trim().replace(/^['"]|['"]$/g, "");
        if (key && !key.startsWith("#")) {
          process.env[key] = value;
        }
      }
    });
  }
} catch (e) {
  console.warn("Failed to load .env manually:", e);
}

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/portfolio";

async function seed() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log("Connected to MongoDB");

    // Import models
    const User = (await import("../src/models/User")).default;
    const Project = (await import("../src/models/Project")).default;
    const Certificate = (await import("../src/models/Certificate")).default;
    const Experience = (await import("../src/models/Experience")).default;
    const Skill = (await import("../src/models/Skill")).default;
    const Profile = (await import("../src/models/Profile")).default;
    const Resume = (await import("../src/models/Resume")).default;
    const Education = (await import("../src/models/Education")).default;
    const Blog = (await import("../src/models/Blog")).default;
    const JobPost = (await import("../src/models/JobPost")).default;

    let adminData = { ...defaultAdminData };
    let profileData = { ...defaultProfileData };
    let projectsData = [...defaultProjectsData];
    let certificatesData = [...defaultCertificatesData];
    let experiencesData = [...defaultExperiencesData];
    let skillsData = [...defaultSkillsData];
    let blogsData: any[] = [];
    let educationData = [...defaultEducationData];
    let resumeData = { ...defaultResumeData };

    // Check if --file parameter is specified for custom JSON seed file
    const fileIndex = process.argv.indexOf("--file");
    if (fileIndex !== -1 && process.argv[fileIndex + 1]) {
      const filePath = path.resolve(process.cwd(), process.argv[fileIndex + 1]);
      if (fs.existsSync(filePath)) {
        console.log(`Loading seed data from file: ${filePath}`);
        const fileContent = JSON.parse(fs.readFileSync(filePath, "utf8"));
        
        if (fileContent.admin) adminData = { ...adminData, ...fileContent.admin };
        if (fileContent.profile) profileData = fileContent.profile;
        if (fileContent.projects) projectsData = fileContent.projects;
        if (fileContent.certificates) certificatesData = fileContent.certificates;
        if (fileContent.experiences) experiencesData = fileContent.experiences;
        if (fileContent.skills) skillsData = fileContent.skills;
        if (fileContent.blogs) blogsData = fileContent.blogs;
        if (fileContent.education) educationData = fileContent.education;
        if (fileContent.resume) resumeData = fileContent.resume;
      } else {
        console.warn(`⚠️ Warning: Specified file ${filePath} does not exist. Using fallback data.`);
      }
    }

    // 1. Seed Admin User
    const existingUser = await User.findOne({ email: adminData.email });
    if (!existingUser) {
      await User.create({
        email: adminData.email,
        password: adminData.password,
        name: adminData.name,
        role: "admin",
      });
      console.log("✅ Admin user created");
    } else {
      existingUser.password = adminData.password;
      existingUser.name = adminData.name;
      await existingUser.save();
      console.log("✅ Admin user updated");
    }

    // 2. Seed Profile
    await Profile.deleteMany({});
    await Profile.create(profileData);
    console.log("✅ Profile seeded");

    // 3. Seed Projects
    await Project.deleteMany({});
    await Project.insertMany(projectsData);
    console.log("✅ Projects seeded");

    // 4. Seed Certificates
    await Certificate.deleteMany({});
    await Certificate.insertMany(certificatesData);
    console.log("✅ Certificates seeded");

    // 5. Seed Experience
    await Experience.deleteMany({});
    await Experience.insertMany(experiencesData);
    console.log("✅ Experience seeded");

    // 6. Seed Skills
    await Skill.deleteMany({});
    await Skill.insertMany(skillsData);
    console.log("✅ Skills seeded and synchronized");

    // 7. Seed Blogs
    await Blog.deleteMany({});
    await Blog.insertMany(blogsData);
    console.log("✅ Blogs seeded");

    // 8. Seed Education
    await Education.deleteMany({});
    await Education.insertMany(educationData);
    console.log("✅ Education details seeded");

    // 9. Seed Resume
    await Resume.deleteMany({});
    await Resume.create({
      summary: resumeData.summary,
      pdfUrl: resumeData.pdfUrl,
      highlights: resumeData.highlights,
      downloadCount: 0,
    });
    console.log("✅ Resume data seeded");

    // 10. Seed empty job posts to reset dashboard
    await JobPost.deleteMany({});
    console.log("✅ Job posts reset");

    console.log("\n🎉 Database seeding completed successfully!");
    process.exit(0);
  } catch (error) {
    console.error("❌ Seeding failed:", error);
    process.exit(1);
  }
}

seed();
