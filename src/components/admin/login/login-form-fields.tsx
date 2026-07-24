"use client";

import { Lock, Mail, Eye, EyeOff } from "lucide-react";

interface LoginFormFieldsProps {
  email: string;
  setEmail: (val: string) => void;
  password: string;
  setPassword: (val: string) => void;
  showPassword: boolean;
  setShowPassword: (val: boolean) => void;
  hasError?: boolean;
}

/* ── Password strength score (0–4) ────────────────────────── */
function getStrength(pw: string): number {
  let score = 0;
  if (pw.length >= 8)  score++;
  if (pw.length >= 12) score++;
  if (/[A-Z]/.test(pw) && /[a-z]/.test(pw)) score++;
  if (/\d/.test(pw) || /[^A-Za-z0-9]/.test(pw)) score++;
  return score;
}

const STRENGTH_META: { label: string; color: string }[] = [
  { label: 'Too short',  color: 'bg-rose-500'   },
  { label: 'Weak',       color: 'bg-orange-400'  },
  { label: 'Fair',       color: 'bg-amber-400'   },
  { label: 'Strong',     color: 'bg-emerald-500' },
];

export function LoginFormFields({
  email,
  setEmail,
  password,
  setPassword,
  showPassword,
  setShowPassword,
  hasError = false,
}: LoginFormFieldsProps) {
  const strength    = password.length > 0 ? getStrength(password) : -1;
  const strengthMeta = strength >= 0 ? STRENGTH_META[Math.min(strength, 3)] : null;

  /* Ring colours: error → rose, valid email → green, default → default */
  const emailRing = hasError
    ? 'focus:border-rose-500 focus:ring-rose-500/15'
    : email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
      ? 'focus:border-emerald-500 focus:ring-emerald-500/15'
      : 'focus:border-primary focus:ring-primary/15';

  const pwRing = hasError
    ? 'focus:border-rose-500 focus:ring-rose-500/15'
    : 'focus:border-primary focus:ring-primary/15';

  return (
    <>
      {/* ── Email ─────────────────────────────────────────── */}
      <div className="space-y-1.5">
        <label
          htmlFor="login-email"
          className="block text-[11px] font-bold uppercase tracking-widest text-muted-foreground/80 ml-0.5"
        >
          Email Address
        </label>

        <div className="relative group">
          {/* Icon box */}
          <div className="absolute left-3.5 top-1/2 -translate-y-1/2 w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-focus-within:bg-primary group-focus-within:text-primary-foreground transition-all duration-200 pointer-events-none z-10">
            <Mail className="w-3.5 h-3.5" />
          </div>

          <input
            id="login-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            autoComplete="email"
            placeholder="admin@example.com"
            className={`
              w-full h-12 pl-14 pr-4 rounded-xl
              bg-background/60 border border-border/80
              focus:ring-4 transition-all duration-200
              text-sm font-medium text-foreground
              placeholder:text-muted-foreground/40
              shadow-inner outline-none
              [&:-webkit-autofill]:bg-background/60
              [&:-webkit-autofill]:text-foreground
              ${emailRing}
            `}
          />
        </div>
      </div>

      {/* ── Password ──────────────────────────────────────── */}
      <div className="space-y-1.5">
        <label
          htmlFor="login-password"
          className="block text-[11px] font-bold uppercase tracking-widest text-muted-foreground/80 ml-0.5"
        >
          Password
        </label>

        <div className="relative group">
          {/* Icon box */}
          <div className="absolute left-3.5 top-1/2 -translate-y-1/2 w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-focus-within:bg-primary group-focus-within:text-primary-foreground transition-all duration-200 pointer-events-none z-10">
            <Lock className="w-3.5 h-3.5" />
          </div>

          <input
            id="login-password"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            autoComplete="current-password"
            placeholder="••••••••••••"
            className={`
              w-full h-12 pl-14 pr-12 rounded-xl
              bg-background/60 border border-border/80
              focus:ring-4 transition-all duration-200
              text-sm font-medium text-foreground
              placeholder:text-muted-foreground/40
              shadow-inner outline-none tracking-wide
              ${pwRing}
            `}
          />

          {/* Show/hide toggle */}
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3.5 top-1/2 -translate-y-1/2 p-1.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/80 transition-all cursor-pointer z-10"
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
          </button>
        </div>

        {/* ── Strength indicator ────────────────────────── */}
        {password.length > 0 && (
          <div className="mt-2 space-y-1.5">
            {/* 4-segment bar */}
            <div className="flex gap-1">
              {[0, 1, 2, 3].map((seg) => (
                <div
                  key={seg}
                  className={`
                    h-1 flex-1 rounded-full transition-all duration-300
                    ${seg <= strength ? strengthMeta!.color : 'bg-border'}
                  `}
                />
              ))}
            </div>
            {/* Label */}
            <p className={`text-[10px] font-semibold ml-0.5 transition-colors duration-300 ${
              strength === 0 ? 'text-rose-500' :
              strength === 1 ? 'text-orange-400' :
              strength === 2 ? 'text-amber-400' :
              'text-emerald-500'
            }`}>
              {strengthMeta?.label}
            </p>
          </div>
        )}
      </div>
    </>
  );
}
