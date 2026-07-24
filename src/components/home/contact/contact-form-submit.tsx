"use client";

import { motion } from "framer-motion";
import { Loader2, Send } from "lucide-react";

interface ContactFormSubmitProps {
  status: "idle" | "loading" | "success" | "error";
}

export function ContactFormSubmit({ status }: ContactFormSubmitProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.98 }}
      type="submit"
      disabled={status === "loading"}
      className="group relative w-full inline-flex items-center justify-center gap-1.5 rounded-xl bg-linear-to-r from-indigo-600 via-purple-600 to-cyan-600 hover:from-indigo-500 hover:via-purple-500 hover:to-cyan-500 px-4 py-2.5 text-xs sm:text-sm font-bold text-white shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 transition-all duration-300 disabled:opacity-50 cursor-pointer overflow-hidden mt-0.5"
    >
      <div className="absolute inset-0 w-1/2 h-full bg-white/20 skew-x-[-25deg] -translate-x-full group-hover:translate-x-[300%] transition-transform duration-1000 ease-out pointer-events-none" />

      {status === "loading" ? (
        <>
          <Loader2 size={15} className="animate-spin" />
          <span>Sending Message...</span>
        </>
      ) : (
        <>
          <span>Send Message</span>
          <Send
            size={14}
            className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200"
          />
        </>
      )}
    </motion.button>
  );
}
