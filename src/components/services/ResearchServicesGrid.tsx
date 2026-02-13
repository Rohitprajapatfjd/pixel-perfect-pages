import { TrendingUp, BarChart3, Wrench, Target } from "lucide-react";

const ResearchServicesGrid = () => {
  return (
    <section className="bg-[hsl(var(--page-bg))] py-16 px-6">
      <div className="max-w-[1200px] mx-auto">
        {/* Badge */}
        <div className="mb-10">
          <span className="inline-flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-full text-sm font-medium">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>
            Research Services
          </span>
        </div>

        {/* Row 1: Large left, Small right */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {/* Large Card - Daily market outlooks */}
          <div className="bg-white rounded-2xl p-8 min-h-[220px] flex flex-col justify-center border border-border">
            <div className="w-12 h-12 flex items-center justify-center mb-6">
              <Target className="w-8 h-8 text-primary" />
            </div>
            <p className="text-xl md:text-2xl font-semibold text-card-foreground">
              <span className="mr-2">•</span>Daily market outlooks and trend analysis
            </p>
          </div>

          {/* Small Card - Illustration */}
          <div className="bg-white rounded-2xl p-6 min-h-[220px] border border-border overflow-hidden relative">
            <p className="text-sm text-muted-foreground mb-2 font-medium">
              A wonderful serenity has taken possession of my entire soul, like these sweet.
            </p>
            <p className="text-xs text-muted-foreground mb-6">
              A wonderful serenity has taken possession of my entire...
            </p>
            {/* Decorative illustration */}
            <div className="flex items-end gap-3 mt-4">
              <div className="flex gap-2 items-end">
                <div className="w-8 h-16 bg-primary/20 rounded-t-lg" />
                <div className="w-8 h-24 bg-primary/40 rounded-t-lg" />
                <div className="w-8 h-12 bg-primary/30 rounded-t-lg" />
              </div>
              <div className="ml-auto flex gap-2">
                <div className="bg-gray-100 rounded-xl px-3 py-2 text-center">
                  <p className="text-[10px] text-muted-foreground">Our goal</p>
                  <p className="text-xs font-semibold text-primary">Awesome company!</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Row 2: Small left (with chart), Large right */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {/* Small Card - Social stats */}
          <div className="bg-white rounded-2xl p-6 min-h-[220px] border border-border">
            <p className="text-sm text-muted-foreground mb-4">
              A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with heart.
            </p>
            {/* Bar chart */}
            <div className="flex items-end gap-2 mb-4">
              <div className="flex flex-col items-center gap-1">
                <div className="w-10 h-20 bg-gray-800 rounded-t-sm" />
              </div>
              <div className="flex flex-col items-center gap-1">
                <div className="w-10 h-28 bg-gray-900 rounded-t-sm" />
              </div>
              <div className="flex flex-col items-center gap-1">
                <div className="w-10 h-16 bg-primary rounded-t-sm" />
              </div>
              <div className="flex flex-col items-center gap-1">
                <div className="w-10 h-24 bg-gray-800 rounded-t-sm" />
              </div>
            </div>
            {/* Social icons row */}
            <div className="flex gap-3">
              {[
                { icon: "🐦", value: "156.2", label: "Tweets" },
                { icon: "f", value: "256.2", label: "Posts" },
                { icon: "📷", value: "556.2", label: "Likes" },
                { icon: "▶", value: "356.2", label: "Viewers" },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center text-white text-xs mx-auto mb-1">
                    {stat.icon}
                  </div>
                  <p className="text-xs font-bold text-card-foreground">{stat.value}</p>
                  <p className="text-[10px] text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Large Card - High-conviction */}
          <div className="bg-white rounded-2xl p-8 min-h-[220px] flex flex-col justify-center border border-border">
            <div className="w-12 h-12 flex items-center justify-center mb-6">
              <BarChart3 className="w-8 h-8 text-primary" />
            </div>
            <p className="text-xl md:text-2xl font-semibold text-card-foreground">
              <span className="mr-2">•</span>High-conviction stock recommendations
            </p>
          </div>
        </div>

        {/* Row 3: Large left, Small right */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {/* Large Card - Technical & fundamental */}
          <div className="bg-white rounded-2xl p-8 min-h-[220px] flex flex-col justify-center border border-border">
            <div className="w-12 h-12 flex items-center justify-center mb-6">
              <Wrench className="w-8 h-8 text-primary" />
            </div>
            <p className="text-xl md:text-2xl font-semibold text-card-foreground">
              <span className="mr-2">•</span>Technical & fundamental research reports
            </p>
          </div>

          {/* Small Card - Brand presentation */}
          <div className="bg-gray-100 rounded-2xl p-6 min-h-[220px] border border-border relative overflow-hidden">
            <p className="text-xs text-muted-foreground mb-1">— essentials.</p>
            <h3 className="text-lg font-bold text-card-foreground mb-2">
              Brand new<br />presentation with<br /><span className="italic">essentials.</span>
            </h3>
            <div className="absolute bottom-4 right-4 flex gap-2">
              <div className="bg-white rounded-lg px-3 py-1.5 text-xs shadow-sm">
                <p className="text-[10px] text-muted-foreground">Option 01</p>
                <p className="text-xs font-bold">3,379,000</p>
              </div>
              <div className="bg-primary rounded-lg px-3 py-1.5 text-xs text-white shadow-sm">
                <p className="text-[10px] text-white/80">Option 02</p>
                <p className="text-xs font-bold">4,314,000</p>
              </div>
            </div>
            {/* Gear decoration */}
            <div className="absolute bottom-2 right-20 opacity-20">
              <svg width="80" height="80" viewBox="0 0 24 24" fill="currentColor" className="text-primary">
                <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
                <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Row 4: Small left (charts), Large right */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Small Card - Creative custom charts */}
          <div className="bg-white rounded-2xl p-6 min-h-[220px] border border-border">
            <p className="text-sm font-semibold text-card-foreground mb-4 italic">Creative custom charts.</p>
            {/* Chart visualization */}
            <div className="relative h-32">
              <svg className="w-full h-full" viewBox="0 0 400 120" preserveAspectRatio="none">
                {/* Bar groups */}
                {[
                  { x: 30, h1: 60, h2: 40, label: "2014" },
                  { x: 80, h1: 70, h2: 50, label: "2017" },
                  { x: 130, h1: 90, h2: 55, label: "2024" },
                  { x: 180, h1: 85, h2: 60, label: "2024" },
                  { x: 230, h1: 50, h2: 70, label: "2025" },
                  { x: 280, h1: 40, h2: 45, label: "2028" },
                  { x: 330, h1: 75, h2: 55, label: "2030" },
                  { x: 380, h1: 65, h2: 50, label: "2032" },
                ].map((bar, i) => (
                  <g key={i}>
                    <rect x={bar.x - 8} y={120 - bar.h1} width="8" height={bar.h1} fill="#3B82F6" rx="2" />
                    <rect x={bar.x + 2} y={120 - bar.h2} width="8" height={bar.h2} fill="#1F2937" rx="2" />
                  </g>
                ))}
                {/* Curve line */}
                <path d="M30 80 Q100 40 180 50 T330 30" fill="none" stroke="#8B5CF6" strokeWidth="2" strokeDasharray="4 4" />
              </svg>
            </div>
            {/* Stats badges */}
            <div className="flex justify-end gap-3 mt-2">
              <div className="text-right">
                <p className="text-xs font-bold text-primary">3,021+ Users</p>
                <p className="text-[10px] text-muted-foreground">Far far away, behind the word mountains</p>
              </div>
            </div>
          </div>

          {/* Large Card - Sector and thematic */}
          <div className="bg-white rounded-2xl p-8 min-h-[220px] flex flex-col justify-center border border-border">
            <div className="w-12 h-12 flex items-center justify-center mb-6">
              <Target className="w-8 h-8 text-primary" />
            </div>
            <p className="text-xl md:text-2xl font-semibold text-card-foreground">
              <span className="mr-2">•</span>Sector and thematic market insights
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResearchServicesGrid;
