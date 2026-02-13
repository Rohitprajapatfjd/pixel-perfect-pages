import { Play, Target, OctagonX, Youtube } from "lucide-react";
import { SlideInLeft, SlideInRight } from "@/components/animations/ScrollAnimations";

const TodaysSpotlight = () => {
  return (
    <section className="bg-muted/30 py-12 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-3xl p-8 shadow-sm">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Left - Hot Pick Card */}
            <SlideInLeft>
            <div className="bg-primary rounded-2xl p-6 text-white relative overflow-hidden">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🔥</span>
                  <span className="font-semibold text-white">Hot Pick Of The Day</span>
                </div>
                <div className="w-8 h-8 flex items-center justify-center opacity-60">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707" />
                  </svg>
                </div>
              </div>

              {/* Stock Info Card */}
              <div className="bg-primary-dark/30 rounded-xl p-4 mb-4">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-2xl font-bold mb-1">RELIANCE</h3>
                    <p className="text-xs text-white/70 mb-3">NSE RELIANCE</p>
                    <p className="text-2xl font-bold text-emerald-400">₹2,847.50</p>
                    <p className="text-xs text-white/70">Current Market Price</p>
                  </div>
                  <span className="bg-primary-foreground/20 text-white text-sm px-4 py-2 rounded-lg font-medium">
                    +3.45%
                  </span>
                </div>
              </div>

              {/* Entry Card */}
              <div className="flex gap-3 mb-4">
                <div className="flex-1 bg-primary-dark/30 rounded-xl p-3 flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                    <span className="text-xl">💰</span>
                  </div>
                  <div className="bg-white rounded-lg px-4 py-2">
                    <p className="text-[10px] text-muted-foreground">Entry</p>
                    <p className="text-sm font-bold text-foreground">₹ 2820</p>
                  </div>
                </div>
              </div>

              {/* Target, Stop, Buy/Sell */}
              <div className="flex gap-3 mb-4">
                <div className="bg-white rounded-xl p-3 flex-1 text-center">
                  <div className="flex justify-center mb-1">
                    <div className="w-8 h-8 rounded-full bg-destructive/10 flex items-center justify-center">
                      <Target className="w-4 h-4 text-destructive" />
                    </div>
                  </div>
                  <p className="text-xs font-medium text-foreground">Target</p>
                  <p className="text-xs text-primary">₹ 3,050</p>
                </div>
                <div className="bg-white rounded-xl p-3 flex-1 text-center">
                  <div className="flex justify-center mb-1">
                    <div className="w-8 h-8 rounded-full bg-destructive/10 flex items-center justify-center">
                      <OctagonX className="w-4 h-4 text-destructive" />
                    </div>
                  </div>
                  <p className="text-xs font-medium text-foreground">Stop</p>
                  <p className="text-xs text-muted-foreground">-</p>
                </div>
                <div className="bg-white rounded-xl p-3 flex-1 flex items-center justify-center gap-2">
                  <button className="w-10 h-10 rounded-full bg-emerald-500 text-white text-xs font-bold">
                    BUY
                  </button>
                  <button className="w-10 h-10 rounded-full bg-destructive text-white text-xs font-bold">
                    SELL
                  </button>
                </div>
              </div>

              {/* Expert Analysis */}
              <div className="bg-amber-400 rounded-xl p-4 mb-4">
                <div className="flex items-start gap-3">
                  <span className="text-xl">💡</span>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">Expert Analysis</h4>
                    <p className="text-xs text-foreground/80 leading-relaxed">
                      Strong breakout above key resistance with massive volume surge institutional buying detected technical indicators showing bulling momentum recommended for short to medium terms gaints
                    </p>
                  </div>
                </div>
              </div>

              {/* Confidence Level */}
              <div className="bg-primary-dark/30 rounded-xl p-4">
                <div className="flex justify-between text-sm mb-2">
                  <span className="font-medium">Confidence Level</span>
                  <span className="font-bold">85%</span>
                </div>
                <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                  <div className="h-full w-[85%] bg-gradient-to-r from-white/40 to-white rounded-full"></div>
                </div>
              </div>
            </div>
            </SlideInLeft>

            {/* Right - Market Insight Video */}
            <SlideInRight delay={0.2}>
            <div>
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none">
                    <path d="M8 8L16 4L24 8L16 12L8 8Z" fill="hsl(var(--primary))" />
                    <path d="M8 8V16L16 20V12L8 8Z" fill="hsl(var(--primary))" opacity="0.8" />
                    <path d="M24 8V16L16 20V12L24 8Z" fill="hsl(var(--primary))" opacity="0.6" />
                  </svg>
                  <span className="font-bold text-foreground text-lg">Stockbaazzari</span>
                </div>
                <button className="flex items-center gap-1 bg-destructive text-white px-3 py-1.5 rounded-md text-sm font-medium">
                  <Youtube className="w-4 h-4" />
                  SUBSCRIBE
                </button>
              </div>

              <h3 className="text-xl font-bold text-primary mb-4">Today's Market Insight</h3>

              {/* Video Player */}
              <div className="bg-slate-800 rounded-2xl overflow-hidden aspect-video relative mb-4">
                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-destructive flex items-center justify-center cursor-pointer hover:scale-105 transition-transform">
                    <Play className="w-6 h-6 text-white fill-white ml-1" />
                  </div>
                </div>
                
                {/* Video Controls */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3">
                  <div className="flex items-center gap-2 mb-2">
                    <button className="text-white">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                        <rect x="6" y="4" width="4" height="16" rx="1" />
                        <rect x="14" y="4" width="4" height="16" rx="1" />
                      </svg>
                    </button>
                    <button className="text-white">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M5 5v14l11-7L5 5z" />
                        <rect x="17" y="5" width="2" height="14" />
                      </svg>
                    </button>
                    <button className="text-white">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M3 9v6h4l5 5V4L7 9H3z" />
                        <path d="M16.5 12A4.5 4.5 0 0014 8v8c1.5-1 2.5-2.5 2.5-4z" />
                      </svg>
                    </button>
                    <div className="flex-1 mx-2">
                      <div className="h-1 bg-white/30 rounded-full">
                        <div className="h-full w-1/3 bg-destructive rounded-full relative">
                          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full"></div>
                        </div>
                      </div>
                    </div>
                    <span className="text-white text-xs">2:35 / 8:25</span>
                    <div className="flex gap-1 ml-2">
                      <button className="text-white text-xs bg-white/20 px-1 rounded">CC</button>
                      <button className="text-white">
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M19.14 12.94c.04-.31.06-.63.06-.94 0-.31-.02-.63-.06-.94l2.03-1.58a.49.49 0 00.12-.61l-1.92-3.32a.488.488 0 00-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54a.484.484 0 00-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.04.31-.06.63-.06.94s.02.63.06.94l-2.03 1.58a.49.49 0 00-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z" />
                        </svg>
                      </button>
                      <button className="text-white">
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                          <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2" fill="none" />
                          <rect x="7" y="7" width="10" height="10" rx="1" />
                        </svg>
                      </button>
                      <button className="text-white">
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Video Skeleton Lines */}
              <div className="space-y-3">
                <div className="flex gap-3">
                  <div className="h-16 bg-muted rounded-lg flex-1"></div>
                  <div className="flex-1 space-y-2">
                    <div className="h-3 bg-muted rounded w-full"></div>
                    <div className="h-3 bg-muted rounded w-3/4"></div>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="h-16 bg-muted rounded-lg flex-1"></div>
                  <div className="flex-1 space-y-2">
                    <div className="h-3 bg-muted rounded w-full"></div>
                    <div className="h-3 bg-muted rounded w-1/2"></div>
                  </div>
                </div>
              </div>
            </div>
            </SlideInRight>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TodaysSpotlight;
