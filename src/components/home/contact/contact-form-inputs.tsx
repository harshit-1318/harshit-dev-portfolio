"use client";

import { AlertCircle } from "lucide-react";
import { ContactFormFields } from "./contact-form-fields";
import { ContactFormSubmit } from "./contact-form-submit";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface ContactFormInputsProps {
  formData: FormData;
  status: "idle" | "loading" | "success" | "error";
  errorMessage: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

export function ContactFormInputs({
  formData,
  status,
  errorMessage,
  onChange,
}: ContactFormInputsProps) {
  return (
    <>
      <ContactFormFields formData={formData} onChange={onChange} />

      {status === "error" && (
        <div className="flex items-center gap-1.5 rounded-lg border border-rose-500/30 bg-rose-500/10 p-2 text-xs text-rose-600 dark:text-rose-400">
          <AlertCircle size={14} className="shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}

      <ContactFormSubmit status={status} />
    </>
  );
}
