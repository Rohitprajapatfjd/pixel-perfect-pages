import { Zap, BookOpen, TrendingUp, Brain } from "lucide-react";

const TodaysBenefits = () => {
  const benefits = [
    {
      icon: Zap,
      title: "Automate Your Edge.",
      description: "Let algorithms handle execution and precision. Stay ahead with technology-powered trading.",
    },
    {
      icon: BookOpen,
      title: "Algo. Learn. Trade.",
      description: "Master algorithmic trading with structured learning. Apply automation to trade confidently.",
    },
    {
      icon: TrendingUp,
      title: "Strategies That Scale.",
      description: "Master algorithmic trading with structured learning. Apply automation to trade confidently.",
    },
    {
      icon: Brain,
      title: "Trade Smarter",
      description: "Build strong market foundations through expert courses. Use that knowledge to make smarter decisions daily.",
    },
  ];

  return (
    <section className="bg-[hsl(var(--page-bg))] py-16 px-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="bg-card rounded-[24px] p-8 md:p-12">
          {/* Header */}
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-10">
            <div>
              <div className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium mb-4">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A2 2 0 013 12V7a4 4 0 014-4z" />
                </svg>
                Today's Benefits
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-card-foreground">
                Why StockBazaari Makes
              </h2>
              <h3 className="text-3xl md:text-4xl font-bold text-card-foreground">
                Your Finance Effortless
              </h3>
              <p className="text-xl text-muted-foreground mt-2">
                Users Trust StockBazaari
              </p>
            </div>

            {/* Top-right illustration placeholder - parabola chart */}
            <div className="flex-shrink-0">
              <div className="relative">
                <svg width="160" height="120" viewBox="0 0 160 120">
                  {/* Cloud/globe shape */}
                  <defs>
                    <linearGradient id="paraGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="hsl(221, 83%, 53%)" stopOpacity="0.15" />
                      <stop offset="100%" stopColor="hsl(221, 83%, 53%)" stopOpacity="0.05" />
                    </linearGradient>
                  </defs>
                  <ellipse cx="80" cy="55" rx="65" ry="50" fill="url(#paraGrad)" stroke="hsl(221, 83%, 53%)" strokeWidth="1" strokeOpacity="0.2" />
                  {/* Parabola curve */}
                  <path d="M20 90 Q50 20 80 50 Q110 80 140 25" fill="none" stroke="hsl(221, 83%, 53%)" strokeWidth="2.5" strokeLinecap="round" />
                  {/* Dots on curve */}
                  <circle cx="20" cy="90" r="3" fill="hsl(221, 83%, 53%)" />
                  <circle cx="80" cy="50" r="3" fill="hsl(221, 83%, 53%)" />
                  <circle cx="140" cy="25" r="3" fill="hsl(221, 83%, 53%)" />
                </svg>
                <p className="text-xs text-muted-foreground mt-2 max-w-[180px]">
                  Built with enterprise-level security and designed for ease of use we empower individuals and business to transaction
                </p>
              </div>
            </div>
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Left - Trusted Banking Card with orbital illustration */}
            <div className="border border-border rounded-[20px] p-8 relative overflow-hidden">
              {/* Orbital rings illustration */}
              <div className="flex justify-center mb-6">
                <div className="relative w-[200px] h-[200px]">
                  {/* Orbital rings */}
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 200">
                    <ellipse cx="100" cy="100" rx="90" ry="40" fill="none" stroke="hsl(var(--border))" strokeWidth="1" strokeDasharray="4 4" />
                    <ellipse cx="100" cy="100" rx="70" ry="55" fill="none" stroke="hsl(var(--border))" strokeWidth="1" strokeDasharray="4 4" transform="rotate(60 100 100)" />
                    <ellipse cx="100" cy="100" rx="70" ry="55" fill="none" stroke="hsl(var(--border))" strokeWidth="1" strokeDasharray="4 4" transform="rotate(-60 100 100)" />
                    {/* Center icon */}
                    <circle cx="100" cy="100" r="20" fill="hsl(221, 83%, 53%)" fillOpacity="0.1" />
                    {/* Orbital dots */}
                    <circle cx="30" cy="80" r="6" fill="hsl(221, 83%, 93%)" stroke="hsl(221, 83%, 53%)" strokeWidth="1" />
                    <circle cx="170" cy="80" r="6" fill="hsl(221, 83%, 93%)" stroke="hsl(221, 83%, 53%)" strokeWidth="1" />
                    <circle cx="100" cy="45" r="6" fill="hsl(221, 83%, 93%)" stroke="hsl(221, 83%, 53%)" strokeWidth="1" />
                    <circle cx="55" cy="140" r="6" fill="hsl(221, 83%, 93%)" stroke="hsl(221, 83%, 53%)" strokeWidth="1" />
                    <circle cx="145" cy="140" r="6" fill="hsl(221, 83%, 93%)" stroke="hsl(221, 83%, 53%)" strokeWidth="1" />
                  </svg>
                  {/* Center icon */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <h4 className="text-xl font-bold text-card-foreground mb-2">Trusted Banking Network</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Connect seamlessly with global stock market for secure and reliable money management. Easily create & virtual cards for Safer online trading
              </p>
            </div>

            {/* Right - Benefits List */}
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-4 p-4 rounded-[16px] border border-border hover:border-primary/30 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <benefit.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-card-foreground mb-1">{benefit.title}</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TodaysBenefits;
