import type { LucideIcon } from 'lucide-react';
import {
  ArrowLeftRight,
  CircleHelp,
  FileText,
  LayoutDashboard,
  Settings,
} from 'lucide-react';

export interface NavigationLink {
  label: string;
  icon: LucideIcon;
  to?: string;
  hasChildren?: boolean;
}

export const navigation: NavigationLink[] = [
  {
    label: 'Dashboard',
    icon: LayoutDashboard,
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
