import { FadeIn, SlideUp, RevealSection } from "@/components/animations/ScrollAnimations";
import ServiceHero from "@/components/services/ServiceHero";
import ResearchServicesGrid from "@/components/services/ResearchServicesGrid";
import LittleMastersSection from "@/components/services/LittleMastersSection";
import ServiceCTA from "@/components/services/ServiceCTA";
import Footer from "@/components/common/Footer";

const Services = () => {
  return (
    <div className="snap-container">
      <section className="snap-section">
        <FadeIn duration={1.2}>
          <ServiceHero />
        </FadeIn>
      </section>
      <section className="snap-section">
        <RevealSection>
          <ResearchServicesGrid />
        </RevealSection>
      </section>
      <section className="snap-section">
        <SlideUp>
          <LittleMastersSection />
        </SlideUp>
      </section>
      <section className="snap-section">
        <SlideUp>
          <ServiceCTA />
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

export default Services;
