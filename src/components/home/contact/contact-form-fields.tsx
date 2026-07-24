import { User, Mail, Tag } from "lucide-react";
import { ContactFormMessage } from "./contact-form-message";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface ContactFormFieldsProps {
  formData: FormData;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

export function ContactFormFields({ formData, onChange }: ContactFormFieldsProps) {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
        <div className="space-y-1 group">
          <label htmlFor="name" className="text-[10px] font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider block">
            Your Name <span className="text-rose-500 font-bold">*</span>
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-2.5 z-10 flex items-center pointer-events-none text-slate-500 dark:text-slate-400 group-focus-within:text-indigo-600 dark:group-focus-within:text-indigo-400 transition-colors">
              <User size={14} />
            </div>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={onChange}
              placeholder="e.g. Alex Rivera"
              required
              className="w-full rounded-xl border border-slate-300/90 dark:border-white/15 bg-slate-50/80 dark:bg-white/4 pl-8 pr-3 py-2 text-xs text-slate-900 dark:text-white placeholder:text-slate-400/80 dark:placeholder:text-slate-500 focus:border-indigo-500 focus:bg-white dark:focus:bg-white/8 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 backdrop-blur-md transition-all shadow-2xs"
            />
          </div>
        </div>

        <div className="space-y-1 group">
          <label htmlFor="email" className="text-[10px] font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider block">
            Your Email <span className="text-rose-500 font-bold">*</span>
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-2.5 z-10 flex items-center pointer-events-none text-slate-500 dark:text-slate-400 group-focus-within:text-indigo-600 dark:group-focus-within:text-indigo-400 transition-colors">
              <Mail size={14} />
            </div>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={onChange}
              placeholder="alex@example.com"
              required
              className="w-full rounded-xl border border-slate-300/90 dark:border-white/15 bg-slate-50/80 dark:bg-white/4 pl-8 pr-3 py-2 text-xs text-slate-900 dark:text-white placeholder:text-slate-400/80 dark:placeholder:text-slate-500 focus:border-indigo-500 focus:bg-white dark:focus:bg-white/8 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 backdrop-blur-md transition-all shadow-2xs"
            />
          </div>
        </div>
      </div>

      <div className="space-y-1 group">
        <label htmlFor="subject" className="text-[10px] font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider block">
          Subject
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-2.5 z-10 flex items-center pointer-events-none text-slate-500 dark:text-slate-400 group-focus-within:text-indigo-600 dark:group-focus-within:text-indigo-400 transition-colors">
            <Tag size={14} />
          </div>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={onChange}
            placeholder="What is this regarding?"
            className="w-full rounded-xl border border-slate-300/90 dark:border-white/15 bg-slate-50/80 dark:bg-white/4 pl-8 pr-3 py-2 text-xs text-slate-900 dark:text-white placeholder:text-slate-400/80 dark:placeholder:text-slate-500 focus:border-indigo-500 focus:bg-white dark:focus:bg-white/8 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 backdrop-blur-md transition-all shadow-2xs"
          />
        </div>
      </div>

      <ContactFormMessage value={formData.message} onChange={onChange} />
    </>
  );
}
