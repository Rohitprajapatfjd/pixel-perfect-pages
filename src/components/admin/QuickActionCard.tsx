import { cn } from "@/lib/utils";

interface QuickActionCardProps {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  iconBg: string;
  badge?: string;
}

const QuickActionCard = ({ title, subtitle, icon, iconBg, badge }: QuickActionCardProps) => {
  return (
    <button className="flex flex-col items-center gap-2 rounded-2xl border border-border bg-card p-4 hover:shadow-md transition-shadow group">
      <div className={cn("flex h-12 w-12 items-center justify-center rounded-2xl", iconBg)}>
        {icon}
      </div>
      <span className="text-sm font-semibold text-foreground">{title}</span>
      <span className="text-[11px] text-muted-foreground">{subtitle}</span>
      {badge && (
        <span className="rounded-full bg-primary/15 px-2 py-0.5 text-[10px] font-semibold text-primary">
          {badge}
        </span>
      )}
    </button>
  );
};

export default QuickActionCard;
