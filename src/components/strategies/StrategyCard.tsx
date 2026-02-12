import { Shield, BarChart3, Calendar, TrendingUp } from "lucide-react";

interface StrategyCardProps {
  tags: string[];
  title: string;
  description: string;
  revenue: string;
  winRate: string;
  riskLevel: string;
  minInsurance: string;
  avgTrade: string;
}

const StrategyCard = ({
  tags,
  title,
  description,
  revenue,
  winRate,
  riskLevel,
  minInsurance,
  avgTrade,
}: StrategyCardProps) => {
  return (
    <div className="bg-card rounded-2xl border border-border p-6 card-shadow hover:shadow-lg transition-shadow">
      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        <span className="bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full">
          {tags[0]}
        </span>
        {tags[1] && (
          <span className="bg-[hsl(var(--star))]/15 text-[hsl(var(--star))] text-xs font-semibold px-3 py-1 rounded-full">
            {tags[1]}
          </span>
        )}
      </div>

      {/* Title & Description */}
      <h3 className="text-lg font-bold text-foreground mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed mb-5">{description}</p>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-3 mb-5">
        <div className="bg-[hsl(var(--accent))]/8 rounded-xl p-3 text-center">
          <p className="text-muted-foreground text-[11px] mb-0.5">Revenue</p>
          <p className="text-[hsl(var(--accent))] text-base font-bold">{revenue} <span className="text-xs font-medium">Annually</span></p>
        </div>
        <div className="bg-primary/8 rounded-xl p-3 text-center">
          <p className="text-muted-foreground text-[11px] mb-0.5">Win Rate</p>
          <p className="text-primary text-base font-bold">{winRate}</p>
        </div>
      </div>

      {/* Info Rows */}
      <div className="space-y-3 mb-6 text-sm">
        <div className="flex items-center justify-between">
          <span className="flex items-center gap-2 text-muted-foreground">
            <Shield className="w-4 h-4" /> Risk Level
          </span>
          <span className="bg-[hsl(var(--star))]/15 text-[hsl(var(--star))] text-xs font-semibold px-2.5 py-0.5 rounded-full">
            {riskLevel}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="flex items-center gap-2 text-muted-foreground">
            <BarChart3 className="w-4 h-4" /> Min Insurance
          </span>
          <span className="font-semibold text-foreground">{minInsurance}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="flex items-center gap-2 text-muted-foreground">
            <Calendar className="w-4 h-4" /> Avg. Trade
          </span>
          <span className="font-semibold text-foreground">{avgTrade}</span>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex gap-3">
        <button className="flex-1 bg-primary text-primary-foreground py-2.5 rounded-lg text-sm font-semibold hover:bg-primary/90 transition-colors">
          Subscribe Now
        </button>
        <button className="flex-1 border-2 border-primary text-primary py-2.5 rounded-lg text-sm font-semibold hover:bg-primary/5 transition-colors">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default StrategyCard;
