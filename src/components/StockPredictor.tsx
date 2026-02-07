const StockPredictor = () => {
  return (
    <section className="bg-[hsl(var(--page-bg))] py-16 px-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="bg-white rounded-[24px] p-8 md:p-12">
          {/* Header */}
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 mb-10">
            <div>
              <div className="inline-flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A2 2 0 013 12V7a4 4 0 014-4z" />
                </svg>
                Stock Predictor
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-card-foreground">
                StockBazaari Shows Your
              </h2>
              <h3 className="text-3xl md:text-4xl font-bold text-card-foreground">
                Effortless Prediction
              </h3>
              <p className="text-xl text-muted-foreground mt-2">
                Users Trust StockBazaari
              </p>
            </div>

            {/* 3D Bar Chart Illustration */}
            <div className="flex-shrink-0">
              <div className="relative">
                <svg width="200" height="140" viewBox="0 0 200 140">
                  {/* 3D Bars */}
                  <defs>
                    <linearGradient id="bar1" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#3B82F6" />
                      <stop offset="100%" stopColor="#60A5FA" />
                    </linearGradient>
                    <linearGradient id="bar2" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#2563EB" />
                      <stop offset="100%" stopColor="#3B82F6" />
                    </linearGradient>
                  </defs>
                  
                  {/* Bar 1 */}
                  <rect x="20" y="80" width="30" height="50" rx="4" fill="url(#bar1)" />
                  <rect x="50" y="80" width="8" height="50" fill="#1D4ED8" opacity="0.5" />
                  
                  {/* Bar 2 */}
                  <rect x="65" y="60" width="30" height="70" rx="4" fill="url(#bar1)" />
                  <rect x="95" y="60" width="8" height="70" fill="#1D4ED8" opacity="0.5" />
                  
                  {/* Bar 3 */}
                  <rect x="110" y="40" width="30" height="90" rx="4" fill="url(#bar1)" />
                  <rect x="140" y="40" width="8" height="90" fill="#1D4ED8" opacity="0.5" />
                  
                  {/* Bar 4 */}
                  <rect x="155" y="20" width="30" height="110" rx="4" fill="url(#bar1)" />
                  <rect x="185" y="20" width="8" height="110" fill="#1D4ED8" opacity="0.5" />
                  
                  {/* Arrow */}
                  <path d="M30 90 L170 25" stroke="#1D4ED8" strokeWidth="3" strokeLinecap="round" />
                  <polygon points="175,15 165,30 180,28" fill="#1D4ED8" />
                </svg>
                <p className="text-xs text-muted-foreground mt-2 max-w-[180px]">
                  Built with enterprise-level security and designed for ease of use we empower individuals and business to transaction
                </p>
              </div>
            </div>
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Left Column */}
            <div className="space-y-6">
              {/* Stock Card */}
              <div className="border border-border rounded-[16px] p-5">
                <h4 className="text-lg font-bold text-primary">Reliance Industries Ltd</h4>
                <p className="text-sm text-muted-foreground">Oil & Gas</p>
                <p className="text-2xl font-bold text-card-foreground mt-2">2745.5₹</p>
                
                {/* Buy Button */}
                <div className="bg-primary rounded-[12px] p-4 mt-4 text-center">
                  <p className="text-white font-bold text-lg">Buy</p>
                  <p className="text-white/80 text-sm">Target ₹3200</p>
                  <p className="text-white/80 text-xs">85% of confidence</p>
                </div>

                {/* Metrics Grid */}
                <div className="grid grid-cols-2 gap-3 mt-4">
                  <div className="bg-muted/50 rounded-lg p-3 text-center">
                    <p className="text-xs text-muted-foreground">Market Cap</p>
                    <p className="text-sm font-bold text-card-foreground">18.5l Cr</p>
                  </div>
                  <div className="bg-muted/50 rounded-lg p-3 text-center">
                    <p className="text-xs text-muted-foreground">PV Ratio</p>
                    <p className="text-sm font-bold text-card-foreground">24.5</p>
                  </div>
                  <div className="bg-muted/50 rounded-lg p-3 text-center">
                    <p className="text-xs text-muted-foreground">ROE</p>
                    <p className="text-sm font-bold text-card-foreground">8.9%</p>
                  </div>
                  <div className="bg-muted/50 rounded-lg p-3 text-center">
                    <p className="text-xs text-muted-foreground">Revenue</p>
                    <p className="text-sm font-bold text-card-foreground">7.92l Cr</p>
                  </div>
                </div>
              </div>

              {/* Analysis Scores */}
              <div className="border border-border rounded-[16px] p-5">
                <h4 className="text-lg font-bold text-primary mb-4">Analysis Scores</h4>
                
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm text-card-foreground">Fundamental Scores</span>
                      <span className="text-sm font-bold text-primary">8.2/10</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-primary rounded-full" style={{ width: '82%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm text-card-foreground">Technical Scores</span>
                      <span className="text-sm font-bold text-primary">7.2/10</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-primary rounded-full" style={{ width: '72%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              {/* Accessibility Rate Gauge */}
              <div className="flex justify-center">
                <div className="relative">
                  <svg width="220" height="130" viewBox="0 0 220 130">
                    {/* Background arc */}
                    <path
                      d="M 20 120 A 90 90 0 0 1 200 120"
                      fill="none"
                      stroke="#E2E8F0"
                      strokeWidth="20"
                      strokeLinecap="round"
                    />
                    {/* Progress arc - 20% */}
                    <path
                      d="M 20 120 A 90 90 0 0 1 56 50"
                      fill="none"
                      stroke="#3B82F6"
                      strokeWidth="20"
                      strokeLinecap="round"
                    />
                    {/* Tick marks */}
                    {[...Array(12)].map((_, i) => {
                      const angle = (180 / 11) * i;
                      const rad = (angle * Math.PI) / 180;
                      const x1 = 110 + 75 * Math.cos(Math.PI - rad);
                      const y1 = 120 - 75 * Math.sin(Math.PI - rad);
                      const x2 = 110 + 85 * Math.cos(Math.PI - rad);
                      const y2 = 120 - 85 * Math.sin(Math.PI - rad);
                      return (
                        <line
                          key={i}
                          x1={x1}
                          y1={y1}
                          x2={x2}
                          y2={y2}
                          stroke="#CBD5E1"
                          strokeWidth="2"
                        />
                      );
                    })}
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center pt-6">
                    <span className="text-3xl font-bold text-primary">20%</span>
                    <span className="text-sm text-muted-foreground">Accessibility rate</span>
                  </div>
                </div>
              </div>

              {/* Metrics Row */}
              <div className="grid grid-cols-3 gap-4">
                <div className="border border-border rounded-lg p-4">
                  <p className="text-xs text-muted-foreground mb-1">PE Ratio</p>
                  <p className="text-xl font-bold text-primary">24.5</p>
                  <p className="text-xs text-accent">Fair Value</p>
                </div>
                <div className="border border-border rounded-lg p-4">
                  <p className="text-xs text-muted-foreground mb-1">ROE</p>
                  <p className="text-xl font-bold text-primary">24.5</p>
                  <p className="text-xs text-star">Weak Return</p>
                </div>
                <div className="border border-border rounded-lg p-4">
                  <p className="text-xs text-muted-foreground mb-1">Dept/Equity</p>
                  <p className="text-xl font-bold text-card-foreground">24.5</p>
                  <p className="text-xs text-destructive">High Debt</p>
                </div>
              </div>

              {/* Upcoming Events */}
              <div className="border border-border rounded-[16px] p-5">
                <h4 className="text-lg font-bold text-card-foreground mb-4 text-center">Upcoming Events</h4>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between bg-muted/30 rounded-lg p-3">
                    <div>
                      <p className="text-sm font-medium text-card-foreground">Q3 Results Declaration</p>
                      <p className="text-xs text-muted-foreground">2024-02-15</p>
                    </div>
                    <span className="px-3 py-1 bg-destructive/10 text-destructive text-xs font-medium rounded-full">
                      High Impact
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-between bg-muted/30 rounded-lg p-3">
                    <div>
                      <p className="text-sm font-medium text-card-foreground">Q3 Results Declaration</p>
                      <p className="text-xs text-muted-foreground">2024-02-15</p>
                    </div>
                    <span className="px-3 py-1 bg-accent/10 text-accent text-xs font-medium rounded-full">
                      Low Impact
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StockPredictor;
