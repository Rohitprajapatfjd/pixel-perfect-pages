import { FadeIn, SlideUp, RevealSection } from "@/components/animations/ScrollAnimations";
import BasketHero from "@/components/basket/BasketHero";
import ComparisonTable from "@/components/basket/ComparisonTable";
import DifferentiatorSection from "@/components/basket/DifferentiatorSection";
import Testimonials from "@/components/common/Testimonials";
import ServiceCTA from "@/components/services/ServiceCTA";
import Footer from "@/components/common/Footer";

const Basket = () => {
  return (
    <div className="min-h-screen bg-[hsl(var(--page-bg))] overflow-hidden">
      <FadeIn duration={1.2}>
        <BasketHero />
      </FadeIn>
      <SlideUp>
        <ComparisonTable />
      </SlideUp>
      <RevealSection>
        <DifferentiatorSection />
      </RevealSection>
      <FadeIn>
        <Testimonials />
      </FadeIn>
      <SlideUp>
        <ServiceCTA />
      </SlideUp>
      <FadeIn>
        <Footer />
      </FadeIn>
    </div>
  );
};

export default Basket;
