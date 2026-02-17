import { FadeIn, SlideUp, RevealSection } from "@/components/animations/ScrollAnimations";
import StrategiesHero from "@/components/strategies/StrategiesHero";
import StatsBar from "@/components/strategies/StatsBar";
import TopStrategies from "@/components/strategies/TopStrategies";
import HowItWorks from "@/components/strategies/HowItWorks";
import StrategiesCTA from "@/components/strategies/StrategiesCTA";
import Footer from "@/components/common/Footer";

const Strategies = () => {
  return (
    <div className="snap-container">
      <section className="snap-section">
        <FadeIn duration={1.2}>
          <StrategiesHero />
        </FadeIn>
      </section>
      <section className="snap-section">
        <SlideUp>
          <StatsBar />
        </SlideUp>
      </section>
      <section className="snap-section">
        <RevealSection>
          <TopStrategies />
        </RevealSection>
      </section>
      <section className="snap-section">
        <SlideUp>
          <HowItWorks />
        </SlideUp>
      </section>
      <section className="snap-section">
        <SlideUp>
          <StrategiesCTA />
        </SlideUp>
      </section>
      <section className="snap-section">
        <FadeIn>
          <Footer />
        </FadeIn>
      </section>
    </div>
  );
};

export default Strategies;
