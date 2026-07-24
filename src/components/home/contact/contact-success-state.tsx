"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Sparkles } from "lucide-react";

interface ContactSuccessStateProps {
  onReset: () => void;
}

export function ContactSuccessState({ onReset }: ContactSuccessStateProps) {
  return (
    <motion.div
      key="success-card"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className="my-auto rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-5 text-center space-y-2 backdrop-blur-md"
    >
      <div className="mx-auto grid size-11 place-items-center rounded-full bg-emerald-500/20 text-emerald-500">
        <CheckCircle2 size={26} className="animate-bounce" />
      </div>
      <h3 className="text-base font-bold text-slate-900 dark:text-white">Message Sent Successfully!</h3>
      <p className="text-xs text-slate-600 dark:text-slate-300 max-w-xs mx-auto leading-relaxed font-normal">
        Thank you! I have received your message and will reply via email shortly.
      </p>
      <button
        onClick={onReset}
        type="button"
        className="mt-1.5 inline-flex items-center gap-1 px-3 py-1 rounded-lg bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-xs font-semibold cursor-pointer"
      >
        <Sparkles size={12} />
        <span>Send another message</span>
      </button>
    </motion.div>
  );
}
