import StrategiesHero from "@/components/strategies/StrategiesHero";
import StatsBar from "@/components/strategies/StatsBar";
import TopStrategies from "@/components/strategies/TopStrategies";
import HowItWorks from "@/components/strategies/HowItWorks";
import StrategiesCTA from "@/components/strategies/StrategiesCTA";
import Footer from "@/components/Footer";

const Strategies = () => {
  return (
    <div className="min-h-screen bg-[hsl(var(--page-bg))]">
      <StrategiesHero />
      <StatsBar />
      <TopStrategies />
      <HowItWorks />
      <StrategiesCTA />
      <Footer />
    </div>
  );
};

export default Strategies;
