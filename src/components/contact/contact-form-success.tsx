"use client";

import { CheckCircle2 } from "lucide-react";

interface ContactFormSuccessProps {
  onReset: () => void;
}

export function ContactFormSuccess({ onReset }: ContactFormSuccessProps) {
  return (
    <div className="my-auto rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-6 text-center space-y-3">
      <div className="mx-auto grid size-12 place-items-center rounded-full bg-emerald-500/20 text-emerald-500">
        <CheckCircle2 size={28} />
      </div>
      <h3 className="text-lg font-bold text-foreground">Message Sent!</h3>
      <p className="text-sm text-muted-foreground max-w-sm mx-auto">
        Thank you for reaching out. I have received your message and will get back to you shortly.
      </p>
      <button
        onClick={onReset}
        type="button"
        className="mt-2 text-xs font-semibold text-primary underline underline-offset-4 cursor-pointer"
      >
        Send another message
      </button>
    </div>
  );
}
