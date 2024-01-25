import {
  CalendarDays,
  LayoutDashboard,
  LucideIcon
} from 'lucide-react';

export interface SidebarProps {
  title: string;
  pathUrl: string;
  icon: LucideIcon

}

export const sidebars: SidebarProps[] = [
  {
    icon: LayoutDashboard,
    title: 'Dashboard',
    pathUrl: '/dashboard',
  },
  {
    icon: CalendarDays,
    title: 'Appointments',
    pathUrl: '/providers',
  },

];
