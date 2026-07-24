"use client";

import { useState } from "react";
import { ContactFormFields } from "./contact-form-fields";
import { ContactFormSuccess } from "./contact-form-success";

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
      {status === "success" ? (
        <ContactFormSuccess onReset={() => setStatus("idle")} />
      ) : (
        <form onSubmit={handleSubmit} className="space-y-3 flex flex-col justify-between h-full">
          <ContactFormFields
            formData={formData}
            status={status}
            errorMessage={errorMessage}
            onChange={handleChange}
          />
        </form>
      )}
    </div>
  );
}
