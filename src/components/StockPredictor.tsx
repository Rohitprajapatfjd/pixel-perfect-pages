import { TrendingUp } from "lucide-react";

const StockPredictor = () => {
  return (
    <section className="bg-background py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Header Badge */}
        <div className="mb-8">
          <span className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-semibold">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
            Stock Predictor
          </span>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left - Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              StockBazaari Shows Your<br />
              Effortless Prediction
            </h2>
            <h3 className="text-xl text-muted-foreground mb-8">
              Users Trust StockBazaari
            </h3>
          </div>

          {/* Right - 3D Chart Illustration */}
          <div className="flex justify-end">
            <div className="relative">
              {/* 3D Bar Chart */}
              <svg className="w-64 h-48" viewBox="0 0 200 150" fill="none">
                {/* Bars */}
                <g transform="translate(20, 20)">
                  {/* Bar 1 */}
                  <path d="M10 100 L10 80 L25 75 L25 95 Z" fill="hsl(var(--primary))" opacity="0.8" />
                  <path d="M10 80 L17 77 L32 72 L25 75 Z" fill="hsl(var(--primary))" />
                  <path d="M25 75 L32 72 L32 92 L25 95 Z" fill="hsl(var(--primary))" opacity="0.6" />
                  
                  {/* Bar 2 */}
                  <path d="M35 100 L35 70 L50 65 L50 95 Z" fill="hsl(var(--primary))" opacity="0.8" />
                  <path d="M35 70 L42 67 L57 62 L50 65 Z" fill="hsl(var(--primary))" />
                  <path d="M50 65 L57 62 L57 92 L50 95 Z" fill="hsl(var(--primary))" opacity="0.6" />
                  
                  {/* Bar 3 */}
                  <path d="M60 100 L60 55 L75 50 L75 95 Z" fill="hsl(var(--primary))" opacity="0.8" />
                  <path d="M60 55 L67 52 L82 47 L75 50 Z" fill="hsl(var(--primary))" />
                  <path d="M75 50 L82 47 L82 92 L75 95 Z" fill="hsl(var(--primary))" opacity="0.6" />
                  
                  {/* Bar 4 */}
                  <path d="M85 100 L85 40 L100 35 L100 95 Z" fill="hsl(var(--primary))" opacity="0.8" />
                  <path d="M85 40 L92 37 L107 32 L100 35 Z" fill="hsl(var(--primary))" />
                  <path d="M100 35 L107 32 L107 92 L100 95 Z" fill="hsl(var(--primary))" opacity="0.6" />
                  
                  {/* Bar 5 */}
                  <path d="M110 100 L110 25 L125 20 L125 95 Z" fill="hsl(var(--primary))" opacity="0.8" />
                  <path d="M110 25 L117 22 L132 17 L125 20 Z" fill="hsl(var(--primary))" />
                  <path d="M125 20 L132 17 L132 92 L125 95 Z" fill="hsl(var(--primary))" opacity="0.6" />
                </g>
                
                {/* Arrow */}
                <path d="M50 90 Q 100 50, 150 20" stroke="hsl(var(--primary))" strokeWidth="3" fill="none" />
                <polygon points="155,15 145,25 150,15" fill="hsl(var(--primary))" transform="rotate(-30, 150, 20)" />
              </svg>
              
              {/* Description text */}
              <p className="text-sm text-muted-foreground max-w-xs mt-4">
                Built with enterprise-level security and designed for ease of use we empower individuals and business to transaction
              </p>
            </div>
          </div>
        </div>

        {/* Stock Cards Row */}
        <div className="mt-12 grid lg:grid-cols-2 gap-6">
          {/* Left - Stock Card */}
          <div className="border-2 border-primary/20 rounded-3xl p-6 relative">
            {/* Corner decoration */}
            <div className="absolute -top-3 -left-3 w-6 h-6 border-t-2 border-l-2 border-primary rounded-tl-xl"></div>
            <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b-2 border-r-2 border-primary rounded-br-xl"></div>
            
            <div className="text-center mb-6">
              <h4 className="text-xl font-bold text-primary">Reliance Industries Ltd</h4>
              <p className="text-sm text-muted-foreground">Oil & Gas</p>
              <p className="text-3xl font-bold text-foreground mt-2">2745.5₹</p>
            </div>

            {/* Buy Button */}
            <div className="bg-primary text-primary-foreground rounded-xl p-4 text-center mb-6">
              <p className="font-bold text-lg">Buy</p>
              <p className="text-sm opacity-90">Target ₹3200</p>
              <p className="text-xs opacity-75">85% of confidence</p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-muted/50 rounded-xl p-3 text-center">
                <p className="text-xs text-muted-foreground">Market Cap</p>
                <p className="text-sm font-bold text-primary">18.5l Cr</p>
              </div>
              <div className="bg-muted/50 rounded-xl p-3 text-center">
                <p className="text-xs text-muted-foreground">PV Ratio</p>
                <p className="text-sm font-bold text-primary">24.5</p>
              </div>
              <div className="bg-muted/50 rounded-xl p-3 text-center">
                <p className="text-xs text-muted-foreground">ROE</p>
                <p className="text-sm font-bold text-primary">8.9%</p>
              </div>
              <div className="bg-muted/50 rounded-xl p-3 text-center">
                <p className="text-xs text-muted-foreground">Revenue</p>
                <p className="text-sm font-bold text-primary">7.92l Cr</p>
              </div>
            </div>
          </div>

          {/* Right - Accessibility Rate */}
          <div className="border-2 border-primary/20 rounded-3xl p-6 relative">
            {/* Corner decoration */}
            <div className="absolute -top-3 -left-3 w-6 h-6 border-t-2 border-l-2 border-primary rounded-tl-xl"></div>
            <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b-2 border-r-2 border-primary rounded-br-xl"></div>
            
            <div className="flex items-center justify-center h-full">
              <div className="relative">
                {/* Semi-circle gauge */}
                <svg className="w-48 h-32" viewBox="0 0 200 120">
                  {/* Background arc */}
                  <path
                    d="M 20 100 A 80 80 0 0 1 180 100"
                    fill="none"
                    stroke="hsl(var(--muted))"
                    strokeWidth="20"
                    strokeLinecap="round"
                  />
                  {/* Colored segments */}
                  {[...Array(12)].map((_, i) => {
                    const startAngle = 180 + (i * 15);
                    const endAngle = 180 + ((i + 1) * 15) - 3;
                    const startRad = (startAngle * Math.PI) / 180;
                    const endRad = (endAngle * Math.PI) / 180;
                    const x1 = 100 + 80 * Math.cos(startRad);
                    const y1 = 100 + 80 * Math.sin(startRad);
                    const x2 = 100 + 80 * Math.cos(endRad);
                    const y2 = 100 + 80 * Math.sin(endRad);
                    return (
                      <path
                        key={i}
                        d={`M ${x1} ${y1} A 80 80 0 0 1 ${x2} ${y2}`}
                        fill="none"
                        stroke="hsl(var(--primary))"
                        strokeWidth="16"
                        strokeLinecap="round"
                        opacity={i < 3 ? 1 : 0.3}
                      />
                    );
                  })}
                </svg>
                <div className="absolute inset-0 flex items-end justify-center pb-2">
                  <div className="text-center">
                    <p className="text-3xl font-bold text-foreground">20%</p>
                    <p className="text-sm text-muted-foreground">Accessibility rate</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Stats */}
            <div className="grid grid-cols-2 gap-3 mt-6">
              <div className="bg-muted/50 rounded-xl p-3 text-center">
                <p className="text-xs text-muted-foreground">Fair Value</p>
                <p className="text-sm font-bold text-muted-foreground">24.5</p>
              </div>
              <div className="bg-muted/50 rounded-xl p-3 text-center">
                <p className="text-xs text-muted-foreground">Weak Return</p>
                <p className="text-sm font-bold text-muted-foreground">24.5</p>
              </div>
              <div className="bg-muted/50 rounded-xl p-3 text-center">
                <p className="text-xs text-muted-foreground">Dept/Equity</p>
                <p className="text-sm font-bold text-primary">24.5</p>
              </div>
              <div className="bg-muted/50 rounded-xl p-3 text-center">
                <p className="text-xs text-muted-foreground">High Debt</p>
                <p className="text-sm font-bold text-destructive">High Debt</p>
              </div>
            </div>
          </div>
        </div>

        {/* Analysis Scores & Upcoming Events */}
        <div className="mt-6 grid lg:grid-cols-2 gap-6">
          {/* Analysis Scores */}
          <div className="border-2 border-primary/20 rounded-3xl p-6 relative">
            <div className="absolute -top-3 -left-3 w-6 h-6 border-t-2 border-l-2 border-primary rounded-tl-xl"></div>
            
            <h5 className="text-xl font-bold text-foreground mb-6">Analysis Scores</h5>
            
            <div className="space-y-5">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm text-muted-foreground">Fundamental Scores</span>
                  <span className="text-sm font-bold text-primary">8.2/10</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div className="h-full w-[82%] bg-gradient-to-r from-primary to-primary/60 rounded-full"></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm text-muted-foreground">Technical Scores</span>
                  <span className="text-sm font-bold text-primary">7.2/10</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div className="h-full w-[72%] bg-gradient-to-r from-emerald-500 to-emerald-400 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Upcoming Events */}
          <div className="border-2 border-primary/20 rounded-3xl p-6 relative">
            <div className="absolute -top-3 -right-3 w-6 h-6 border-t-2 border-r-2 border-primary rounded-tr-xl"></div>
            
            <h5 className="text-xl font-bold text-primary text-center mb-6">Upcoming Events</h5>
            
            <div className="space-y-4">
              <div className="bg-muted/30 rounded-xl p-4 flex items-center justify-between">
                <div>
                  <p className="font-semibold text-foreground">Q3 Results Declaration</p>
                  <p className="text-sm text-muted-foreground">2024-02-15</p>
                </div>
                <span className="bg-destructive text-destructive-foreground text-sm px-4 py-2 rounded-lg font-medium">
                  High Impact
                </span>
              </div>
              
              <div className="bg-muted/30 rounded-xl p-4 flex items-center justify-between">
                <div>
                  <p className="font-semibold text-foreground">Q3 Results Declaration</p>
                  <p className="text-sm text-muted-foreground">2024-02-15</p>
                </div>
                <span className="bg-emerald-500 text-white text-sm px-4 py-2 rounded-lg font-medium">
                  Low Impact
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StockPredictor;
