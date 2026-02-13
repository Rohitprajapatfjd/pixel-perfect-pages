import { FadeIn, SlideUp, RevealSection } from "@/components/animations/ScrollAnimations";
import StrategiesHero from "@/components/strategies/StrategiesHero";
import StatsBar from "@/components/strategies/StatsBar";
import TopStrategies from "@/components/strategies/TopStrategies";
import HowItWorks from "@/components/strategies/HowItWorks";
import StrategiesCTA from "@/components/strategies/StrategiesCTA";
import Footer from "@/components/common/Footer";

const Strategies = () => {
  return (
    <div className="min-h-screen bg-[hsl(var(--page-bg))] overflow-hidden">
      <FadeIn duration={0.8}>
        <StrategiesHero />
      </FadeIn>
      <SlideUp>
        <StatsBar />
      </SlideUp>
      <RevealSection>
        <TopStrategies />
      </RevealSection>
      <SlideUp>
        <HowItWorks />
      </SlideUp>
      <SlideUp>
        <StrategiesCTA />
      </SlideUp>
      <FadeIn>
        <Footer />
      </FadeIn>
    </div>
  );
};

export default Strategies;
