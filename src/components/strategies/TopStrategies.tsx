import { Star } from "lucide-react";
import StrategyCard from "./StrategyCard";

const strategies = [
  {
    tags: ["Momentum Trading", "Most Popular"],
    title: "AI Momentum Master",
    description: "Advanced momentum-based strategy using AI to identify high-probability trends in real-time market data.",
    revenue: "+42%",
    winRate: "73%",
    riskLevel: "Medium",
    minInsurance: "₹50,000",
    avgTrade: "15-20/month",
  },
  {
    tags: ["Momentum Trading", "Most Popular"],
    title: "AI Momentum Master",
    description: "Advanced momentum-based strategy using AI to identify high-probability trends in real-time market data.",
    revenue: "+42%",
    winRate: "73%",
    riskLevel: "Medium",
    minInsurance: "₹50,000",
    avgTrade: "15-20/month",
  },
  {
    tags: ["Momentum Trading", "Most Popular"],
    title: "AI Momentum Master",
    description: "Advanced momentum-based strategy using AI to identify high-probability trends in real-time market data.",
    revenue: "+42%",
    winRate: "73%",
    riskLevel: "Medium",
    minInsurance: "₹50,000",
    avgTrade: "15-20/month",
  },
  {
    tags: ["Momentum Trading", "Most Popular"],
    title: "AI Momentum Master",
    description: "Advanced momentum-based strategy using AI to identify high-probability trends in real-time market data.",
    revenue: "+42%",
    winRate: "73%",
    riskLevel: "Medium",
    minInsurance: "₹50,000",
    avgTrade: "15-20/month",
  },
  {
    tags: ["Momentum Trading", "Most Popular"],
    title: "AI Momentum Master",
    description: "Advanced momentum-based strategy using AI to identify high-probability trends in real-time market data.",
    revenue: "+42%",
    winRate: "73%",
    riskLevel: "Medium",
    minInsurance: "₹50,000",
    avgTrade: "15-20/month",
  },
  {
    tags: ["Momentum Trading", "Most Popular"],
    title: "AI Momentum Master",
    description: "Advanced momentum-based strategy using AI to identify high-probability trends in real-time market data.",
    revenue: "+42%",
    winRate: "73%",
    riskLevel: "Medium",
    minInsurance: "₹50,000",
    avgTrade: "15-20/month",
  },
];

const TopStrategies = () => {
  return (
    <section className="bg-[hsl(var(--page-bg))] py-16 px-6">
      <div className="max-w-[1200px] mx-auto">
        {/* Section Badge */}
        <div className="flex justify-center mb-4">
          <span className="inline-flex items-center gap-2 bg-primary/10 text-primary text-sm font-semibold px-5 py-2 rounded-full">
            <Star className="w-4 h-4 fill-current" />
            Our Top Rated Strategies
          </span>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {strategies.map((s, i) => (
            <StrategyCard key={i} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopStrategies;
