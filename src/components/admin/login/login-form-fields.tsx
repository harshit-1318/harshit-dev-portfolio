"use client";

import { Lock, Mail, Eye, EyeOff } from "lucide-react";

interface LoginFormFieldsProps {
  email: string;
  setEmail: (val: string) => void;
  password: string;
  setPassword: (val: string) => void;
  showPassword: boolean;
  setShowPassword: (val: boolean) => void;
}

export function LoginFormFields({
  email,
  setEmail,
  password,
  setPassword,
  showPassword,
  setShowPassword,
}: LoginFormFieldsProps) {
  return (
    <>
      {/* Email Field */}
      <div className="space-y-2">
        <label
          htmlFor="email"
          className="block text-xs font-bold uppercase tracking-wider text-muted-foreground/90 ml-1"
        >
          Email Address
        </label>
        <div className="relative group">
          <div className="absolute left-3.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-focus-within:bg-primary group-focus-within:text-primary-foreground transition-colors duration-200 pointer-events-none z-10">
            <Mail className="w-4 h-4" />
          </div>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="admin@example.com"
            className="w-full h-12 pl-14 pr-4 rounded-xl bg-background/60 border border-border/80 focus:border-primary focus:ring-4 focus:ring-primary/15 transition-all text-sm font-medium text-foreground placeholder:text-muted-foreground/50 shadow-inner outline-none"
          />
        </div>
      </div>

      {/* Password Field */}
      <div className="space-y-2">
        <div className="flex items-center justify-between ml-1">
          <label
            htmlFor="password"
            className="block text-xs font-bold uppercase tracking-wider text-muted-foreground/90"
          >
            Password
          </label>
        </div>
        <div className="relative group">
          <div className="absolute left-3.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-focus-within:bg-primary group-focus-within:text-primary-foreground transition-colors duration-200 pointer-events-none z-10">
            <Lock className="w-4 h-4" />
          </div>
          <input
            id="password"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="••••••••••••"
            className="w-full h-12 pl-14 pr-12 rounded-xl bg-background/60 border border-border/80 focus:border-primary focus:ring-4 focus:ring-primary/15 transition-all text-sm font-medium text-foreground placeholder:text-muted-foreground/50 shadow-inner outline-none tracking-wide"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3.5 top-1/2 -translate-y-1/2 p-1.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/80 transition-all cursor-pointer z-10"
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? (
              <EyeOff className="w-4 h-4" />
            ) : (
              <Eye className="w-4 h-4" />
            )}
          </button>
        </div>
      </div>
    </>
  );
}
