import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import {
  LayoutDashboard, Ticket, Users, BarChart3, LogOut,
  PlusCircle, TrendingUp, Settings, ChevronLeft, ChevronRight,
} from 'lucide-react';
import { useState } from 'react';

const userNav = [
  { label: 'Dashboard', icon: LayoutDashboard, path: '/dashboard', tab: 'overview' },
  { label: 'My Tickets', icon: Ticket, path: '/dashboard', tab: 'tickets' },
  { label: 'New Ticket', icon: PlusCircle, path: '/dashboard', tab: 'new' },
];

const adminNav = [
  { label: 'Overview', icon: LayoutDashboard, path: '/admin', tab: 'overview' },
  { label: 'All Tickets', icon: Ticket, path: '/admin', tab: 'tickets' },
  { label: 'Team', icon: Users, path: '/admin', tab: 'team' },
  { label: 'Analytics', icon: BarChart3, path: '/admin', tab: 'analytics' },
];

interface DashboardLayoutProps {
  children: React.ReactNode;
  activeTab?: string;
  onTabChange?: (tab: string) => void;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children, activeTab, onTabChange }) => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);
  const navItems = user?.role === 'admin' ? adminNav : userNav;

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const initials = user?.name.split(' ').map(n => n[0]).join('') || '?';

  return (
    <div className="flex min-h-screen w-full bg-background">
      {/* Sidebar */}
      <aside className={`${collapsed ? 'w-16' : 'w-64'} flex flex-col border-r border-sidebar-border bg-sidebar transition-all duration-300`}>
        {/* Brand */}
        <div className="flex h-16 items-center gap-3 px-4 border-b border-sidebar-border">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg gradient-primary">
            <TrendingUp className="h-5 w-5 text-primary-foreground" />
          </div>
          {!collapsed && (
            <div className="overflow-hidden">
              <h1 className="font-display text-sm font-bold text-sidebar-accent-foreground truncate">StockDesk India</h1>
              <p className="text-[10px] text-sidebar-foreground">Advisory & Course Support</p>
            </div>
          )}
        </div>

        {/* Nav */}
        <nav className="flex-1 px-2 py-4 space-y-1">
          {navItems.map((item) => {
            const isActive = activeTab === item.tab;
            return (
              <button
                key={item.tab}
                onClick={() => onTabChange?.(item.tab)}
                className={`w-full flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? 'bg-sidebar-accent text-sidebar-primary'
                    : 'text-sidebar-foreground hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground'
                }`}
              >
                <item.icon className={`h-4 w-4 shrink-0 ${isActive ? 'text-sidebar-primary' : ''}`} />
                {!collapsed && <span className="truncate">{item.label}</span>}
              </button>
            );
          })}
        </nav>

        {/* Collapse toggle */}
        <div className="px-2 pb-2">
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="w-full flex items-center justify-center gap-2 rounded-lg px-3 py-2 text-xs text-sidebar-foreground hover:bg-sidebar-accent/50 transition-colors"
          >
            {collapsed ? <ChevronRight className="h-4 w-4" /> : <><ChevronLeft className="h-4 w-4" /><span>Collapse</span></>}
          </button>
        </div>

        <Separator className="bg-sidebar-border" />

        {/* User info */}
        <div className="p-3">
          <div className={`flex items-center gap-3 ${collapsed ? 'justify-center' : ''}`}>
            <Avatar className="h-8 w-8 shrink-0 border border-sidebar-border">
              <AvatarFallback className="bg-secondary text-secondary-foreground text-xs font-semibold">{initials}</AvatarFallback>
            </Avatar>
            {!collapsed && (
              <div className="flex-1 min-w-0">
                <p className="text-xs font-semibold text-sidebar-accent-foreground truncate">{user?.name}</p>
                <p className="text-[10px] text-sidebar-foreground truncate">{user?.email}</p>
              </div>
            )}
            {!collapsed && (
              <Button variant="ghost" size="icon" onClick={handleLogout} className="h-7 w-7 shrink-0 text-sidebar-foreground hover:text-destructive hover:bg-destructive/10">
                <LogOut className="h-3.5 w-3.5" />
              </Button>
            )}
          </div>
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1 overflow-auto">
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
