import type { LucideIcon } from 'lucide-react';
import {
  ArrowLeftRight,
  CircleHelp,
  FileText,
  LayoutDashboard,
  Settings,
  Users,
} from 'lucide-react';

export interface NavigationLink {
  label: string;
  icon: LucideIcon;
  to?: string;
  hasChildren?: boolean;
}

export const navigation: NavigationLink[] = [
  {
    label: 'Customers',
    icon: Users,
    to: '/customers',
  },
  {
    label: 'Dashboard',
    icon: LayoutDashboard,
    to: '/dashboard',
  },
  {
    label: 'Reports',
    icon: FileText,
    hasChildren: true,
  },
  {
    label: 'Transactions',
    icon: ArrowLeftRight,
    hasChildren: true,
  },
  {
    label: 'Help',
    icon: CircleHelp,
  },
  {
    label: 'Settings',
    icon: Settings,
  },
];
