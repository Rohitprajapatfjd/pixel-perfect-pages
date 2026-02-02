import { ArrowUpRight } from "lucide-react";

const AnalysisCard = () => {
  return (
    <div className="feature-card w-full max-w-[320px] animate-float" style={{ animationDelay: "1s" }}>
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <span className="stat-badge bg-primary/10 text-primary text-xs">
            Trusted by 50,000+ users worldwide
          </span>
        </div>
        <button className="w-8 h-8 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors">
          <ArrowUpRight className="w-4 h-4 text-muted-foreground" />
        </button>
      </div>

      {/* Title */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-card-foreground">Analysis</h3>
        <span className="stat-badge bg-accent text-accent-foreground text-xs">Active Customer</span>
      </div>

      {/* Chart */}
      <div className="relative h-32">
        {/* Y-axis labels */}
        <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-[10px] text-muted-foreground">
          <span>100</span>
          <span>80</span>
          <span>60</span>
          <span>40</span>
          <span>20</span>
        </div>

        {/* Chart Area */}
        <div className="ml-8 h-full relative">
          <svg className="w-full h-full" viewBox="0 0 300 120" preserveAspectRatio="none">
            <defs>
              <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="hsl(221, 83%, 53%)" stopOpacity="0.3" />
                <stop offset="100%" stopColor="hsl(221, 83%, 53%)" stopOpacity="0" />
              </linearGradient>
            </defs>
            
            {/* Area fill */}
            <path
              d="M 0 100 Q 30 90, 50 85 T 100 70 T 150 50 T 180 55 T 220 35 T 260 45 T 300 30 L 300 120 L 0 120 Z"
              fill="url(#chartGradient)"
            />
            
            {/* Line */}
            <path
              d="M 0 100 Q 30 90, 50 85 T 100 70 T 150 50 T 180 55 T 220 35 T 260 45 T 300 30"
              fill="none"
              stroke="hsl(221, 83%, 53%)"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            
            {/* Data point */}
            <circle cx="220" cy="35" r="4" fill="hsl(221, 83%, 53%)" />
            <circle cx="220" cy="35" r="6" fill="hsl(221, 83%, 53%)" opacity="0.3" />
          </svg>

          {/* Tooltip */}
          <div className="absolute top-2 right-12 bg-card border border-border rounded-lg px-2 py-1 shadow-sm">
            <span className="text-xs font-medium text-accent">+15.3%</span>
          </div>

          {/* Data indicator */}
          <div className="absolute bottom-0 left-4 flex items-center gap-1 text-[10px] text-muted-foreground">
            <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
            <span>24 January</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalysisCard;
