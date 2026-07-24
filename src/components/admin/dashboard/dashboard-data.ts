import {
  FolderKanban,
  Award,
  Briefcase,
  Zap,
  MessageSquare,
  Mail,
  TrendingUp,
  Plus,
  FileText,
  Settings,
} from 'lucide-react';

export interface DashboardStats {
  projects: number;
  certificates: number;
  experiences: number;
  skills: number;
  messages: number;
  unreadMessages: number;
}

export const statsConfig = [
  {
    key: 'projects' as const,
    label: 'Projects',
    description: 'Portfolio showpieces',
    icon: FolderKanban,
    color: 'text-indigo-500',
    bgColor: 'bg-indigo-500/10 border-indigo-500/20',
    gradient: 'from-indigo-500/20 to-indigo-500/5',
    href: '/admin/projects',
  },
  {
    key: 'certificates' as const,
    label: 'Certificates',
    description: 'Verified achievements',
    icon: Award,
    color: 'text-cyan-500',
    bgColor: 'bg-cyan-500/10 border-cyan-500/20',
    gradient: 'from-cyan-500/20 to-cyan-500/5',
    href: '/admin/certificates',
  },
  {
    key: 'experiences' as const,
    label: 'Experiences',
    description: 'Work & internships',
    icon: Briefcase,
    color: 'text-emerald-500',
    bgColor: 'bg-emerald-500/10 border-emerald-500/20',
    gradient: 'from-emerald-500/20 to-emerald-500/5',
    href: '/admin/experience',
  },
  {
    key: 'skills' as const,
    label: 'Skills',
    description: 'Tech stack & tools',
    icon: Zap,
    color: 'text-amber-500',
    bgColor: 'bg-amber-500/10 border-amber-500/20',
    gradient: 'from-amber-500/20 to-amber-500/5',
    href: '/admin/skills',
  },
  {
    key: 'messages' as const,
    label: 'Messages',
    description: 'Form submissions',
    icon: MessageSquare,
    color: 'text-rose-500',
    bgColor: 'bg-rose-500/10 border-rose-500/20',
    gradient: 'from-rose-500/20 to-rose-500/5',
    href: '/admin/messages',
  },
];

export const quickActions = [
  { label: 'Add Project', description: 'Showcase new work', href: '/admin/projects', icon: Plus, badge: 'Projects' },
  { label: 'Add Certificate', description: 'Upload credentials', href: '/admin/certificates', icon: Plus, badge: 'Certs' },
  { label: 'View Messages', description: 'Check inbox & leads', href: '/admin/messages', icon: Mail, badge: 'Inbox' },
  { label: 'Edit Profile', description: 'Update bio & contact', href: '/admin/settings', icon: Settings, badge: 'Settings' },
  { label: 'Manage Resume', description: 'Replace PDF resume', href: '/admin/resume', icon: FileText, badge: 'Resume' },
];
