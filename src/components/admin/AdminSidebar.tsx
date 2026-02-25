import { type ElementType, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  MessageSquare,
  Globe,
  Image,
  Code2,
  Languages,
  PenTool,
  FileText,
  BookOpen,
  AlignLeft,
  ChevronDown,
  ChevronLeft,
  Sparkles,
  Ticket,
  X,
  LogOut,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useAuth } from "@/context/AuthContext";

interface SubNavItem {
  title: string;
  href: string;
}

interface NavItem {
  title: string;
  icon: ElementType;
  href: string;
  badge?: string;
  children?: SubNavItem[];
}

interface NavGroup {
  label: string;
  items: NavItem[];
}

const navGroups: NavGroup[] = [
  {
    label: "MAIN",
    items: [{ title: "Dashboard", icon: LayoutDashboard, href: "/admin" }],
  },
  {
    label: "CORE TOOLS",
    items: [
      { title: "AI Chat", icon: MessageSquare, href: "/admin/ai-chat" },
      { title: "Website Builder", icon: Globe, href: "/admin/website-builder", badge: "NEW" },
      { title: "Image Generator", icon: Image, href: "/admin/image-generator" },
      { title: "Code Generator", icon: Code2, href: "/admin/code-generator" },
      { title: "Translation Hub", icon: Languages, href: "/admin/translation-hub" },
      {
        title: "Support Tickets",
        icon: Ticket,
        href: "/admin/ticket/overview",
        children: [
          { title: "Overview", href: "/admin/ticket/overview" },
          { title: "All Tickets", href: "/admin/ticket/tickets" },
          { title: "Team", href: "/admin/ticket/team" },
          { title: "Analytics", href: "/admin/ticket/analytics" },
        ],
      },
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
  isMobile?: boolean;
}

const AdminSidebar = ({ collapsed, onToggle, isMobile = false }: AdminSidebarProps) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { logout } = useAuth();

  const [openGroups, setOpenGroups] = useState<Record<string, boolean>>({
    MAIN: true,
    "CORE TOOLS": true,
    WRITING: true,
  });

  const [openTicketMenu, setOpenTicketMenu] = useState(true);

  const toggleGroup = (label: string) => {
    setOpenGroups((prev) => ({ ...prev, [label]: !prev[label] }));
  };

  const isTicketChildActive = (item: NavItem) =>
    !!item.children?.some((child) => location.pathname === child.href);

  return (
    <aside
      className={cn(
        "flex h-screen flex-col border-r border-border bg-card transition-all duration-300",
        collapsed ? "w-[68px]" : "w-[250px]"
      )}
    >
      <div className="flex h-16 items-center justify-between border-b border-border px-4">
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary">
            <Sparkles className="h-5 w-5 text-primary-foreground" />
          </div>
          {!collapsed && <span className="text-lg font-bold text-foreground">AI Suite</span>}
        </div>
        <button
          onClick={onToggle}
          className="flex h-7 w-7 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-secondary"
        >
          {isMobile ? (
            <X className="h-4 w-4" />
          ) : (
            <ChevronLeft className={cn("h-4 w-4 transition-transform", collapsed && "rotate-180")} />
          )}
        </button>
      </div>

      <nav className="flex-1 space-y-4 overflow-y-auto px-3 py-4">
        {navGroups.map((group) => (
          <div key={group.label}>
            {!collapsed && (
              <button
                onClick={() => toggleGroup(group.label)}
                className="mb-1 flex w-full items-center justify-between px-2"
              >
                <span className="text-[11px] font-semibold tracking-wider text-muted-foreground">{group.label}</span>
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
                  const isParentActive = isTicketChildActive(item);

                  if (item.children && !collapsed) {
                    return (
                      <li key={item.href}>
                        <button
                          onClick={() => setOpenTicketMenu((prev) => !prev)}
                          className={cn(
                            "group flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                            isParentActive
                              ? "bg-primary/10 text-primary border-l-[3px] border-primary -ml-0.5"
                              : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                          )}
                        >
                          <item.icon className={cn("h-[18px] w-[18px] shrink-0", isParentActive && "text-primary")} />
                          <span className="flex-1 text-left">{item.title}</span>
                          <ChevronDown className={cn("h-3.5 w-3.5 transition-transform", !openTicketMenu && "-rotate-90")} />
                        </button>

                        {openTicketMenu && (
                          <ul className="ml-8 mt-1 space-y-1">
                            {item.children.map((child) => {
                              const isChildActive = location.pathname === child.href;
                              return (
                                <li key={child.href}>
                                  <NavLink
                                    to={child.href}
                                    className={cn(
                                      "block rounded-md px-3 py-2 text-xs font-medium transition-colors",
                                      isChildActive
                                        ? "bg-primary/10 text-primary"
                                        : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                                    )}
                                  >
                                    {child.title}
                                  </NavLink>
                                </li>
                              );
                            })}
                          </ul>
                        )}
                      </li>
                    );
                  }

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

      <div className="border-t border-border p-3">
        <button
          onClick={() => {
            logout();
            navigate("/login");
          }}
          className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
        >
          <LogOut className="h-4 w-4" />
          {!collapsed && <span>Logout</span>}
        </button>
      </div>
    </aside>
  );
};

export default AdminSidebar;
