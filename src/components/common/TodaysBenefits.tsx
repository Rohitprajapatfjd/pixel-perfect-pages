import { Zap, BookOpen, TrendingUp, Brain } from "lucide-react";
import barImage from "../../public/img/bar.jpg";

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
    <section className="bg-[hsl(var(--page-bg))] py-8 px-6 w-full">
      <div className="max-w-[1200px] mx-auto">
        <div className="bg-card rounded-[24px] p-4 md:p-8">
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
                <img className="w-[180px]" src="img/cloud.jpg" alt="Growth bar"/>
                <p className="text-xs text-muted-foreground mt-2 max-w-[220px]">
                  Built with enterprise-level security and designed for ease of use we empower individuals and business to transaction
                </p>
              </div>
            </div>
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Left - Trusted Banking Card with orbital illustration */}
            <div className="border border-border rounded-[20px] p-8 relative overflow-hidden">
              <img src="img/networking.png" alt="" />
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
