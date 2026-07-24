'use client';

import Link from 'next/link';
import { Shield, ArrowLeft } from 'lucide-react';
import { ThemeToggle } from '@/components/layout/theme-toggle';
import { LoginForm } from '@/components/admin/login/login-form';

export default function AdminLoginPage() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4 relative">
      {/* Top right actions */}
      <div className="absolute top-4 right-4 sm:top-6 sm:right-6 z-50 flex items-center gap-2">
        <Link
          href="/"
          className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium text-muted-foreground hover:text-foreground bg-card/80 backdrop-blur-md border border-border/60 hover:border-border rounded-xl transition-all shadow-xs cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          Back to Site
        </Link>
        <div className="p-0.5 rounded-xl bg-card/80 backdrop-blur-md border border-border/60 shadow-xs">
          <ThemeToggle />
        </div>
      </div>

      {/* Background decoration */}
      <div className="fixed inset-0 grid-pattern opacity-50 pointer-events-none" />
      <div className="fixed top-1/4 -left-32 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="fixed bottom-1/4 -right-32 w-64 h-64 bg-secondary/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative w-full max-w-md">
        {/* Logo / Heading */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-4 border border-primary/20">
            <Shield className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-3xl font-bold font-heading gradient-text">
            Admin Panel
          </h1>
          <p className="text-muted-foreground mt-2 text-sm">
            Sign in to manage your portfolio
          </p>
        </div>

        <LoginForm />

        {/* Footer */}
        <p className="text-center text-xs text-muted-foreground mt-6">
          Protected area. Authorized personnel only.
        </p>
      </div>
    </div>
  );
}
