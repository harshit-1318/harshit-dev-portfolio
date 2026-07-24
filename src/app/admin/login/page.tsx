'use client';

import { Shield } from 'lucide-react';
import { LoginForm } from '@/components/admin/login/login-form';

export default function AdminLoginPage() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      {/* Background decoration */}
      <div className="fixed inset-0 grid-pattern opacity-50" />
      <div className="fixed top-1/4 -left-32 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      <div className="fixed bottom-1/4 -right-32 w-64 h-64 bg-secondary/10 rounded-full blur-3xl" />

      <div className="relative w-full max-w-md">
        {/* Logo / Heading */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-4">
            <Shield className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-3xl font-bold font-heading gradient-text">
            Admin Panel
          </h1>
          <p className="text-muted-foreground mt-2">
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
