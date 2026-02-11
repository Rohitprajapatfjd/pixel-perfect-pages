import { cn } from "@/lib/utils";
import { TrendingUp } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string;
  subtitle: string;
  trend: string;
  trendLabel: string;
  icon: React.ReactNode;
  trendColor?: "green" | "red";
}

const StatCard = ({ title, value, subtitle, trend, trendLabel, icon, trendColor = "green" }: StatCardProps) => {
  return (
    <div className="flex flex-col gap-2 rounded-2xl border border-border bg-card p-5">
      <div className="flex items-start justify-between">
        <span className="text-sm text-muted-foreground">{title}</span>
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
          {icon}
        </div>
      </div>
      <p className="text-2xl font-bold text-foreground">{value}</p>
      <p className="text-xs text-muted-foreground">{subtitle}</p>
      <div className="flex items-center gap-1 pt-1">
        <TrendingUp className={cn("h-3.5 w-3.5", trendColor === "green" ? "text-accent" : "text-destructive")} />
        <span className={cn("text-xs font-semibold", trendColor === "green" ? "text-accent" : "text-destructive")}>
          {trend}
        </span>
        <span className="text-xs text-muted-foreground">{trendLabel}</span>
      </div>
    </div>
  );
};

export default StatCard;
