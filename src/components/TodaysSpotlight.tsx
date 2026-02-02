import { Play, TrendingUp, TrendingDown, Youtube } from "lucide-react";

const TodaysSpotlight = () => {
  return (
    <section className="bg-background py-12 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Header Badge */}
        <div className="flex items-center gap-2 mb-8">
          <span className="text-star text-lg">★</span>
          <span className="text-primary font-semibold">Today's Spotlight</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left - Stock Card */}
          <div className="bg-card rounded-2xl p-6 card-shadow">
            {/* Header */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-destructive/10 flex items-center justify-center">
                <Play className="w-4 h-4 text-destructive fill-destructive" />
              </div>
              <span className="text-card-foreground font-medium">Hot Pick Of The Day</span>
            </div>

            {/* Stock Info */}
            <div className="flex items-start justify-between mb-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xl font-bold text-card-foreground">RELIANCE</span>
                  <span className="bg-accent text-accent-foreground text-xs px-2 py-1 rounded">+8.98%</span>
                </div>
                <p className="text-3xl font-bold text-card-foreground">₹2,847.50</p>
                <div className="flex items-center gap-2 mt-2">
                  <TrendingUp className="w-4 h-4 text-accent" />
                  <span className="text-accent text-sm font-medium">+234.50 (8.98%)</span>
                </div>
              </div>
              <div className="text-right">
                <div className="grid grid-cols-2 gap-4 text-xs">
                  <div>
                    <p className="text-muted-foreground">High</p>
                    <p className="font-semibold text-card-foreground">2855</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Low</p>
                    <p className="font-semibold text-card-foreground">2790</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Stock Analysis */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Expert analysis</span>
                <span className="text-sm font-medium text-accent">Strong Buy</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Market sentiment</span>
                <span className="text-sm font-medium text-card-foreground">Bullish</span>
              </div>
            </div>

            {/* Confidence Level */}
            <div>
              <div className="flex justify-between text-xs text-muted-foreground mb-2">
                <span>Confidence Level</span>
                <span>87%</span>
              </div>
              <div className="h-2 bg-muted rounded-full overflow-hidden">
                <div className="h-full w-[87%] bg-primary rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Right - Market Insight Card */}
          <div className="bg-primary rounded-2xl p-6 text-primary-foreground relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <svg className="w-full h-full" viewBox="0 0 400 300" fill="none">
                <path d="M0 200 Q 100 150, 200 180 T 400 160" stroke="currentColor" strokeWidth="2" fill="none" />
                <path d="M0 220 Q 100 170, 200 200 T 400 180" stroke="currentColor" strokeWidth="2" fill="none" />
              </svg>
            </div>

            <div className="relative z-10">
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 flex items-center justify-center">
                    <svg width="24" height="24" viewBox="0 0 32 32" fill="none">
                      <path d="M8 8L16 4L24 8L16 12L8 8Z" fill="#22C55E" />
                      <path d="M8 8V16L16 20V12L8 8Z" fill="#16A34A" />
                      <path d="M24 8V16L16 20V12L24 8Z" fill="#15803D" />
                    </svg>
                  </div>
                  <span className="font-bold">Stockbazaari</span>
                </div>
                <div className="flex items-center gap-2">
                  <Youtube className="w-5 h-5 text-destructive" />
                  <span className="bg-destructive text-primary-foreground text-xs px-2 py-1 rounded">SUBSCRIBE</span>
                </div>
              </div>

              <h3 className="text-2xl font-bold mb-6">Today's Market Insight</h3>

              {/* Action Buttons */}
              <div className="flex gap-3 mb-6">
                <button className="flex-1 bg-accent text-accent-foreground py-3 rounded-xl font-medium">
                  BUY
                </button>
                <button className="flex-1 bg-destructive text-primary-foreground py-3 rounded-xl font-medium">
                  SELL
                </button>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-2 mb-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-star">★</span>
                  ))}
                </div>
                <span className="text-sm opacity-80">agree</span>
                <span className="text-sm opacity-80 ml-auto">agree</span>
              </div>

              {/* Video Progress */}
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                  <Play className="w-4 h-4 fill-current" />
                </div>
                <div className="flex-1">
                  <div className="h-1 bg-primary-foreground/30 rounded-full overflow-hidden">
                    <div className="h-full w-1/3 bg-primary-foreground rounded-full"></div>
                  </div>
                </div>
                <span className="text-xs opacity-80">2:35 / 8:25</span>
              </div>
            </div>
          </div>
        </div>

        {/* App Store Section */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-6">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="flex items-center gap-2 bg-card rounded-xl px-4 py-3 card-shadow">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <svg className="w-4 h-4 text-primary-foreground" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                </svg>
              </div>
              <div>
                <p className="text-[10px] text-muted-foreground">Sky Travel</p>
                <p className="text-xs font-medium text-card-foreground">App Store</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TodaysSpotlight;
