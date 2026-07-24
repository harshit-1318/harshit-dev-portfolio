"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { ContactQuickTopics } from "./contact-quick-topics";
import { ContactFormInputs } from "./contact-form-inputs";
import { ContactSuccessState } from "./contact-success-state";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleQuickSubject = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      subject: prev.subject === value ? "" : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus("error");
      setErrorMessage("Please fill in all required fields.");
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        throw new Error("Failed to send message. Please try again.");
      }

      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (err: any) {
      setStatus("error");
      setErrorMessage(err.message || "Something went wrong. Please try again.");
    }
  };

  return (
    <div className="h-full flex flex-col justify-between">
      <AnimatePresence mode="wait">
        {status === "success" ? (
          <ContactSuccessState onReset={() => setStatus("idle")} />
        ) : (
          <form onSubmit={handleSubmit} className="space-y-2.5 flex flex-col justify-between h-full">
            <ContactQuickTopics
              selectedSubject={formData.subject}
              onSelectSubject={handleQuickSubject}
            />
            <ContactFormInputs
              formData={formData}
              status={status}
              errorMessage={errorMessage}
              onChange={handleChange}
            />
          </form>
        )}
      </AnimatePresence>
    </div>
  );
}
