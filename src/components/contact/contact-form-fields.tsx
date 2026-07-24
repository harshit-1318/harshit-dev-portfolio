"use client";

import { AlertCircle, Loader2 } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface ContactFormFieldsProps {
  formData: FormData;
  status: "idle" | "loading" | "success" | "error";
  errorMessage: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

export function ContactFormFields({
  formData,
  status,
  errorMessage,
  onChange,
}: ContactFormFieldsProps) {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div className="space-y-1">
          <label htmlFor="name" className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider">
            Your Name <span className="text-rose-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={onChange}
            placeholder="John Doe"
            required
            className="w-full rounded-xl border border-border/80 bg-background/60 px-3.5 py-2 text-xs sm:text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary backdrop-blur-sm"
          />
        </div>

        <div className="space-y-1">
          <label htmlFor="email" className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider">
            Your Email <span className="text-rose-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={onChange}
            placeholder="john@example.com"
            required
            className="w-full rounded-xl border border-border/80 bg-background/60 px-3.5 py-2 text-xs sm:text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary backdrop-blur-sm"
          />
        </div>
      </div>

      <div className="space-y-1">
        <label htmlFor="subject" className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider">
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={onChange}
          placeholder="Project Inquiry / Job Opportunity"
          className="w-full rounded-xl border border-border/80 bg-background/60 px-3.5 py-2 text-xs sm:text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary backdrop-blur-sm"
        />
      </div>

      <div className="space-y-1">
        <label htmlFor="message" className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider">
          Message <span className="text-rose-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={3}
          value={formData.message}
          onChange={onChange}
          placeholder="Hi Harshit, I'd like to discuss a project..."
          required
          className="w-full rounded-xl border border-border/80 bg-background/60 px-3.5 py-2 text-xs sm:text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary backdrop-blur-sm resize-none"
        />
      </div>

      {status === "error" && (
        <div className="flex items-center gap-2 rounded-xl border border-rose-500/30 bg-rose-500/10 p-2.5 text-xs text-rose-500">
          <AlertCircle size={15} className="shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-xs sm:text-sm font-semibold text-primary-foreground shadow-md shadow-primary/20 transition hover:bg-primary/90 active:scale-[0.99] disabled:opacity-50 cursor-pointer mt-1"
      >
        {status === "loading" ? (
          <>
            <Loader2 size={15} className="animate-spin" />
            <span>Sending...</span>
          </>
        ) : (
          <span>Send Message</span>
        )}
      </button>
    </>
  );
}
