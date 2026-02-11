import { Search, Sun, Settings, Maximize2 } from "lucide-react";

const AdminTopbar = () => {
  return (
    <header className="sticky top-0 z-20 flex h-16 items-center justify-between border-b border-border bg-card px-6">
      {/* Search */}
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2 rounded-xl border border-border bg-secondary/60 px-4 py-2 w-[280px]">
          <Search className="h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search tools, features..."
            className="flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
          />
          <kbd className="rounded bg-muted px-1.5 py-0.5 text-[10px] font-medium text-muted-foreground">⌘ /</kbd>
        </div>
        <button className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground hover:bg-secondary">
          <Maximize2 className="h-4 w-4" />
        </button>
      </div>

      {/* Right side */}
      <div className="flex items-center gap-3">
        <button className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground hover:bg-secondary">
          <Sun className="h-4 w-4" />
        </button>
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-destructive text-primary-foreground text-xs font-bold">
          A
        </div>
        <div className="flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5">
          <div className="h-2 w-2 rounded-full bg-accent" />
          <span className="text-xs font-medium text-foreground">Gemini</span>
        </div>
        <button className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground hover:bg-secondary">
          <Settings className="h-4 w-4" />
        </button>
        <div className="flex items-center gap-2 pl-2 border-l border-border">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold">
            D
          </div>
          <div className="text-right">
            <p className="text-sm font-semibold text-foreground leading-tight">Demo User</p>
            <p className="text-[11px] text-muted-foreground">⭐ Pro Member</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AdminTopbar;
