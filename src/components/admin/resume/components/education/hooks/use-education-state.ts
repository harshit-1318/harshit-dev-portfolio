"use client";

import { useState } from "react";
import type { IEducation } from "@/types";

export const emptyEducation: Partial<IEducation> = {
  institution: '',
  degree: '',
  location: '',
  period: '',
  grade: '',
  coursework: [],
  order: 1,
};

export function useEducationState() {
  const [educations, setEducations] = useState<IEducation[]>([]);
  const [eduLoading, setEduLoading] = useState(true);
  const [showEduForm, setShowEduForm] = useState(false);
  const [editingEduId, setEditingEduId] = useState<string | null>(null);
  const [eduFormData, setEduFormData] = useState<Partial<IEducation>>(emptyEducation);
  const [courseworkInput, setCourseworkInput] = useState('');
  const [eduSaving, setEduSaving] = useState(false);

  return {
    educations, setEducations,
    eduLoading, setEduLoading,
    showEduForm, setShowEduForm,
    editingEduId, setEditingEduId,
    eduFormData, setEduFormData,
    courseworkInput, setCourseworkInput,
    eduSaving, setEduSaving,
  };
}
