import { useState } from "react";
import { Search, Sun, Settings, Maximize2, Menu } from "lucide-react";
import ProfileDrawer from "./ProfileDrawer";

interface AdminTopbarProps {
  onMenuClick?: () => void;
  showMenuButton?: boolean;
}

const AdminTopbar = ({ onMenuClick, showMenuButton = false }: AdminTopbarProps) => {
  const [profileOpen, setProfileOpen] = useState(false);

  return (
    <>
      <ProfileDrawer open={profileOpen} onOpenChange={setProfileOpen} />
      <header className="sticky top-0 z-20 flex h-16 items-center justify-between border-b border-border bg-card px-4 md:px-6">
        <div className="flex min-w-0 items-center gap-2 md:gap-3">
          {showMenuButton && (
            <button
              onClick={onMenuClick}
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-muted-foreground hover:bg-secondary"
              aria-label="Open menu"
            >
              <Menu className="h-4 w-4" />
            </button>
          )}

          <div className="flex min-w-0 items-center gap-2 rounded-xl border border-border bg-secondary/60 px-3 py-2 md:px-4 w-full md:w-[280px]">
            <Search className="h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search tools..."
              className="flex-1 min-w-0 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
            />
            <kbd className="hidden md:inline rounded bg-muted px-1.5 py-0.5 text-[10px] font-medium text-muted-foreground">⌘ /</kbd>
          </div>

          <button className="hidden md:flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground hover:bg-secondary">
            <Maximize2 className="h-4 w-4" />
          </button>
        </div>

        <div className="flex items-center gap-2 md:gap-3">
          <button className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground hover:bg-secondary">
            <Sun className="h-4 w-4" />
          </button>
          <div className="hidden sm:flex h-9 w-9 items-center justify-center rounded-full bg-destructive text-primary-foreground text-xs font-bold">
            A
          </div>
          <div className="hidden md:flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5">
            <div className="h-2 w-2 rounded-full bg-accent" />
            <span className="text-xs font-medium text-foreground">Gemini</span>
          </div>
          <button className="hidden sm:flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground hover:bg-secondary">
            <Settings className="h-4 w-4" />
          </button>
          <div
            className="flex items-center gap-2 sm:pl-2 sm:border-l border-border cursor-pointer hover:opacity-80 transition-opacity"
            onClick={() => setProfileOpen(true)}
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold">
              D
            </div>
            <div className="hidden md:block text-right">
              <p className="text-sm font-semibold text-foreground leading-tight">Demo User</p>
              <p className="text-[11px] text-muted-foreground">⭐ Pro Member</p>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default AdminTopbar;
