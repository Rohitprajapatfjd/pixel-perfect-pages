import { Sheet, SheetContent, SheetHeader } from "@/components/ui/sheet";
import { ChevronLeft, ChevronRight, Phone } from "lucide-react";

interface ProfileDrawerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const days = [
  { day: "Mon", date: 22 },
  { day: "Tue", date: 23 },
  { day: "Wed", date: 24, active: true },
  { day: "Thu", date: 23 },
  { day: "Fri", date: 23 },
];

const applicants = [
  { name: "Mike Tyson", role: "iOS Developer", color: "bg-orange-100", initials: "" },
  { name: "Zara Thomas", role: "Content Designer", color: "bg-pink-100", initials: "" },
  { name: "Neenu Abraham", role: "Content Designer", color: "bg-blue-100", initials: "" },
  { name: "John Samuel", role: "iOS Developer", color: "bg-green-100", initials: "" },
  { name: "Zara Thomas", role: "Content Designer", color: "bg-purple-200", initials: "Z" },
  { name: "John Samuel", role: "iOS Developer", color: "bg-yellow-100", initials: "" },
];

const trainees = [
  { name: "Mike Tyson", role: "iOS Developer", color: "bg-orange-100" },
  { name: "Samuel John", role: "Android Developer", color: "bg-blue-100" },
  { name: "Jiya George", role: "UI/UX Designer", color: "bg-pink-100" },
];

const ProfileDrawer = ({ open, onOpenChange }: ProfileDrawerProps) => {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="right" className="w-[320px] sm:max-w-[320px] p-0 overflow-y-auto">
        {/* Profile Header */}
        <div className="flex flex-col items-center pt-8 pb-4 px-5 border-b border-border">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white text-2xl font-bold mb-2">
            S
          </div>
          <h3 className="text-base font-bold text-foreground">Sara Abraham</h3>
          <button className="text-xs text-primary hover:underline mt-0.5">View profile</button>
        </div>

        {/* Schedule Calendar */}
        <div className="px-5 py-4 border-b border-border">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <h4 className="text-sm font-bold text-foreground">Schedule Calendar</h4>
              <div className="flex items-center gap-1">
                <button className="h-5 w-5 flex items-center justify-center rounded hover:bg-secondary text-muted-foreground">
                  <ChevronLeft className="h-3.5 w-3.5" />
                </button>
                <button className="h-5 w-5 flex items-center justify-center rounded hover:bg-secondary text-muted-foreground">
                  <ChevronRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
            <button className="flex items-center gap-1 rounded-lg border border-border px-3 py-1 text-xs font-medium text-foreground">
              <svg className="h-3.5 w-3.5" viewBox="0 0 16 16" fill="none"><rect x="2" y="3" width="12" height="11" rx="1.5" stroke="currentColor" strokeWidth="1.2"/><path d="M5 1v3M11 1v3M2 7h12" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/></svg>
              May
            </button>
          </div>
          <div className="grid grid-cols-5 gap-2">
            {days.map((d) => (
              <div
                key={d.day + d.date}
                className={`flex flex-col items-center py-2 rounded-xl text-center cursor-pointer transition-colors ${
                  d.active
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "bg-secondary hover:bg-muted text-foreground"
                }`}
              >
                <span className="text-[10px] font-medium opacity-70">{d.day}</span>
                <span className="text-lg font-bold leading-tight">{d.date}</span>
              </div>
            ))}
          </div>
        </div>

        {/* New Applicants */}
        <div className="px-5 py-4 border-b border-border">
          <div className="flex items-center justify-between mb-3">
            <h4 className="text-sm font-bold text-foreground">New Applicants</h4>
            <button className="text-[11px] font-medium text-primary border border-border rounded-md px-2.5 py-1 hover:bg-secondary">View All</button>
          </div>
          <div className="space-y-3">
            {applicants.map((a, i) => (
              <div key={i} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`w-9 h-9 rounded-full ${a.color} flex items-center justify-center text-sm font-bold text-foreground/70`}>
                    {a.initials || a.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground leading-tight">{a.name}</p>
                    <p className="text-[11px] text-muted-foreground">Applied for : {a.role}</p>
                  </div>
                </div>
                <button className="h-8 w-8 rounded-full border border-primary/30 flex items-center justify-center text-primary hover:bg-primary/10 transition-colors">
                  <Phone className="h-3.5 w-3.5" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Ready For Training */}
        <div className="px-5 py-4">
          <div className="flex items-center justify-between mb-3">
            <h4 className="text-sm font-bold text-foreground">Ready For Training</h4>
            <button className="text-[11px] font-medium text-primary border border-border rounded-md px-2.5 py-1 hover:bg-secondary">View All</button>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {trainees.map((t, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <div className={`w-12 h-12 rounded-full ${t.color} flex items-center justify-center text-lg font-bold text-foreground/70 mb-1.5`}>
                  {t.name.charAt(0)}
                </div>
                <p className="text-xs font-semibold text-foreground leading-tight">{t.name}</p>
                <p className="text-[10px] text-muted-foreground">{t.role}</p>
                <button className="mt-1.5 rounded-md bg-primary px-3 py-1 text-[10px] font-semibold text-primary-foreground hover:bg-primary/90 transition-colors">
                  Start Training
                </button>
              </div>
            ))}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default ProfileDrawer;
