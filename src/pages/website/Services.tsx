import { FadeIn, SlideUp, RevealSection } from "@/components/animations/ScrollAnimations";
import ServiceHero from "@/components/services/ServiceHero";
import ResearchServicesGrid from "@/components/services/ResearchServicesGrid";
import LittleMastersSection from "@/components/services/LittleMastersSection";
import ServiceCTA from "@/components/services/ServiceCTA";
import Footer from "@/components/common/Footer";

const Services = () => {
  return (
    <div className="min-h-screen bg-[hsl(var(--page-bg))] overflow-hidden">
      <FadeIn duration={0.8}>
        <ServiceHero />
      </FadeIn>
      <RevealSection>
        <ResearchServicesGrid />
      </RevealSection>
      <SlideUp>
        <LittleMastersSection />
      </SlideUp>
      <SlideUp>
        <ServiceCTA />
      </SlideUp>
      <FadeIn>
        <Footer />
      </FadeIn>
    </div>
  );
};

export default Services;
