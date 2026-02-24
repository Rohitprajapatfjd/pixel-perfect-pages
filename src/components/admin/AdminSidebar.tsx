import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  LayoutDashboard, MessageSquare, Globe, Image, Code2, Languages,
  PenTool, FileText, BookOpen, AlignLeft, ChevronDown, ChevronLeft,
  Sparkles,
  Ticket
} from "lucide-react";
import { cn } from "@/lib/utils";

interface NavItem {
  title: string;
  icon: React.ElementType;
  href: string;
  badge?: string;
}

interface NavGroup {
  label: string;
  items: NavItem[];
}

const navGroups: NavGroup[] = [
  {
    label: "MAIN",
    items: [
      { title: "Dashboard", icon: LayoutDashboard, href: "/admin" },
    ],
  },
  {
    label: "CORE TOOLS",
    items: [
      { title: "AI Chat", icon: MessageSquare, href: "/admin/ai-chat" },
      { title: "Website Builder", icon: Globe, href: "/admin/website-builder", badge: "NEW" },
      { title: "Image Generator", icon: Image, href: "/admin/image-generator" },
      { title: "Code Generator", icon: Code2, href: "/admin/code-generator" },
      { title: "Translation Hub", icon: Languages, href: "/admin/translation-hub" },
      { title: "Support Tickets", icon: Ticket, href: "/admin/ticket" },
    ],
  },
  {
    label: "WRITING",
    items: [
      { title: "Content Writer", icon: PenTool, href: "/admin/content-writer" },
      { title: "Blog Post", icon: FileText, href: "/admin/blog-post", badge: "NEW" },
      { title: "Article Writer", icon: BookOpen, href: "/admin/article-writer", badge: "NEW" },
      { title: "Summarizer", icon: AlignLeft, href: "/admin/summarizer" },
    ],
  },
];

interface AdminSidebarProps {
  collapsed: boolean;
  onToggle: () => void;
}

const AdminSidebar = ({ collapsed, onToggle }: AdminSidebarProps) => {
  const location = useLocation();
  const [openGroups, setOpenGroups] = useState<Record<string, boolean>>({
    MAIN: true,
    "CORE TOOLS": true,
    WRITING: true,
  });

  const toggleGroup = (label: string) => {
    setOpenGroups((prev) => ({ ...prev, [label]: !prev[label] }));
  };

  return (
    <aside
      className={cn(
        "fixed left-0 top-0 z-30 flex h-screen flex-col border-r border-border bg-card transition-all duration-300",
        collapsed ? "w-[68px]" : "w-[250px]"
      )}
    >
      {/* Logo */}
      <div className="flex h-16 items-center justify-between px-4 border-b border-border">
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary">
            <Sparkles className="h-5 w-5 text-primary-foreground" />
          </div>
          {!collapsed && (
            <span className="text-lg font-bold text-foreground">AI Suite</span>
          )}
        </div>
        <button
          onClick={onToggle}
          className="flex h-7 w-7 items-center justify-center rounded-lg text-muted-foreground hover:bg-secondary transition-colors"
        >
          <ChevronLeft className={cn("h-4 w-4 transition-transform", collapsed && "rotate-180")} />
        </button>
      </div>

      {/* Nav Groups */}
      <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-4">
        {navGroups.map((group) => (
          <div key={group.label}>
            {!collapsed && (
              <button
                onClick={() => toggleGroup(group.label)}
                className="flex w-full items-center justify-between px-2 mb-1"
              >
                <span className="text-[11px] font-semibold tracking-wider text-muted-foreground">
                  {group.label}
                </span>
                <ChevronDown
                  className={cn(
                    "h-3.5 w-3.5 text-muted-foreground transition-transform",
                    !openGroups[group.label] && "-rotate-90"
                  )}
                />
              </button>
            )}

            {(collapsed || openGroups[group.label]) && (
              <ul className="space-y-0.5">
                {group.items.map((item) => {
                  const isActive = location.pathname === item.href;
                  return (
                    <li key={item.href}>
                      <NavLink
                        to={item.href}
                        className={cn(
                          "group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                          isActive
                            ? "bg-primary/10 text-primary border-l-[3px] border-primary -ml-0.5"
                            : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                        )}
                        title={collapsed ? item.title : undefined}
                      >
                        <item.icon className={cn("h-[18px] w-[18px] shrink-0", isActive && "text-primary")} />
                        {!collapsed && (
                          <>
                            <span className="flex-1">{item.title}</span>
                            {item.badge && (
                              <span className="rounded-full bg-primary/15 px-2 py-0.5 text-[10px] font-semibold text-primary">
                                {item.badge}
                              </span>
                            )}
                          </>
                        )}
                      </NavLink>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        ))}
      </nav>

      {/* Bottom token info */}
      {!collapsed && (
        <div className="mx-3 mb-4 rounded-xl border border-border bg-secondary/50 p-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-muted-foreground">Monthly Tokens</span>
            <span className="text-sm font-bold text-accent">675,260 left</span>
          </div>
          <div className="mt-2 flex items-center justify-between">
            <span className="text-[11px] text-muted-foreground">Free Plan</span>
            <button className="text-[11px] font-semibold text-primary hover:underline">Upgrade</button>
          </div>
        </div>
      )}
    </aside>
  );
};

export default AdminSidebar;
