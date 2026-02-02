import { Zap, BookOpen, TrendingUp, Brain } from "lucide-react";

const TodaysBenefits = () => {
  const benefits = [
    {
      icon: Zap,
      title: "Automate Your Edge",
      description: "Let algorithms handle precision while you focus on the bigger picture. Smart automation for smarter investments.",
    },
    {
      icon: BookOpen,
      title: "Algo. Learn. Trade.",
      description: "Combine powerful algorithms with continuous learning to stay ahead in the market.",
    },
    {
      icon: TrendingUp,
      title: "Strategies That Scale",
      description: "Market-led tactics today with data-backed strategies for sustainable growth.",
    },
    {
      icon: Brain,
      title: "Trade Smarter",
      description: "AI-led market insights ensuring you make well-informed trading decisions.",
    },
  ];

  return (
    <section className="bg-muted py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Content */}
          <div>
            {/* Header Badge */}
            <div className="flex items-center gap-2 mb-6">
              <span className="text-primary text-lg">▶</span>
              <span className="text-primary font-semibold text-sm">Today's Benefits</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-card-foreground mb-4">
              Why StockBazaari Makes<br />
              Your Finance Effortless
            </h2>
            <h3 className="text-xl text-muted-foreground mb-8">
              Users Trust StockBazaari
            </h3>
            <p className="text-muted-foreground text-sm mb-8 max-w-md">
              Built with enterprise-level security and designed for ease of use to empower individuals and businesses to transact.
            </p>

            {/* Banking Network Card */}
            <div className="bg-card rounded-2xl p-6 card-shadow mb-4">
              <h4 className="text-lg font-bold text-card-foreground mb-2">Trusted Banking Network</h4>
              <p className="text-sm text-muted-foreground">
                Connect seamlessly with global stock market for secure and reliable money management. Easily create & refresh securities. Buy, Sell, or trade easily.
              </p>
            </div>
          </div>

          {/* Right - Benefits Grid */}
          <div className="grid grid-cols-2 gap-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-card rounded-2xl p-5 card-shadow">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <benefit.icon className="w-5 h-5 text-primary" />
                </div>
                <h4 className="text-sm font-bold text-card-foreground mb-2">{benefit.title}</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TodaysBenefits;
