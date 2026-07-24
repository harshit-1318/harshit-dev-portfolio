import { MessageSquare } from "lucide-react";

interface ContactFormMessageProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export function ContactFormMessage({ value, onChange }: ContactFormMessageProps) {
  return (
    <div className="space-y-1 group">
      <div className="flex items-center justify-between">
        <label htmlFor="message" className="text-[10px] font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider block">
          Message <span className="text-rose-500 font-bold">*</span>
        </label>
        <span className="text-[9px] text-slate-500 dark:text-slate-400 font-mono font-medium">
          {value.length}/500
        </span>
      </div>
      <div className="relative">
        <div className="absolute top-2.25 left-2.5 z-10 flex items-start pointer-events-none text-slate-500 dark:text-slate-400 group-focus-within:text-indigo-600 dark:group-focus-within:text-indigo-400 transition-colors">
          <MessageSquare size={14} />
        </div>
        <textarea
          id="message"
          name="message"
          rows={2}
          maxLength={500}
          value={value}
          onChange={onChange}
          placeholder="Tell me about your project, timeline, or scope..."
          required
          className="w-full rounded-xl border border-slate-300/90 dark:border-white/15 bg-slate-50/80 dark:bg-white/4 pl-8 pr-3 py-2 text-xs text-slate-900 dark:text-white placeholder:text-slate-400/80 dark:placeholder:text-slate-500 focus:border-indigo-500 focus:bg-white dark:focus:bg-white/8 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 backdrop-blur-md resize-none transition-all shadow-2xs"
        />
      </div>
    </div>
  );
}
