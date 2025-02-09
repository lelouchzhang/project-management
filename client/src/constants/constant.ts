import {
  AlertCircle,
  AlertOctagon,
  AlertTriangle,
  Briefcase,
  Clock,
  Grid3X3,
  Home,
  Layers3,
  List,
  LucideIcon,
  Search,
  Settings,
  ShieldAlert,
  Table,
  User,
  Users,
} from "lucide-react";

interface SidebarLink {
  icon: LucideIcon;
  label: string;
  href: string;
}

interface NavLink {
  name: string;
  icon: LucideIcon;
}
export const sidebarLinks: SidebarLink[] = [
  { icon: Home, label: "Home", href: "/" },
  {
    icon: Briefcase,
    label: "Timeline",
    href: "/timeline",
  },
  {
    icon: Search,
    label: "Search",
    href: "/search",
  },
  {
    icon: Settings,
    label: "Settings",
    href: "/settings",
  },
  {
    icon: User,
    label: "Users",
    href: "/users",
  },
  {
    icon: Users,
    label: "Team",
    href: "/teams",
  },
];
export const priorityLinks: SidebarLink[] = [
  { icon: AlertCircle, label: "Urgent", href: "/priority/urgent" },
  { icon: ShieldAlert, label: "High", href: "/priority/high" },
  { icon: AlertTriangle, label: "Medium", href: "/priority/medium" },
  { icon: AlertOctagon, label: "Low", href: "/priority/low" },
  { icon: Layers3, label: "Backlog", href: "/priority/backlog" },
];
export const navLinks: NavLink[] = [
  { name: "Board", icon: Grid3X3 },
  { name: "List", icon: List },
  { name: "Timeline", icon: Clock },
  { name: "Table", icon: Table },
];
export const taskStatus = [
  "To Do",
  "Work In Progress",
  "Under Review",
  "Completed",
];
