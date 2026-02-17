import { FadeIn, SlideUp, RevealSection } from "@/components/animations/ScrollAnimations";
import BasketHero from "@/components/basket/BasketHero";
import ComparisonTable from "@/components/basket/ComparisonTable";
import DifferentiatorSection from "@/components/basket/DifferentiatorSection";
import Testimonials from "@/components/common/Testimonials";
import ServiceCTA from "@/components/services/ServiceCTA";
import Footer from "@/components/common/Footer";

const Basket = () => {
  return (
    <div className="snap-container">
      <section className="snap-section">
        <FadeIn duration={1.2}>
          <BasketHero />
        </FadeIn>
      </section>
      <section className="snap-section">
        <SlideUp>
          <ComparisonTable />
        </SlideUp>
      </section>
      <section className="snap-section">
        <RevealSection>
          <DifferentiatorSection />
        </RevealSection>
      </section>
      <section className="snap-section">
        <FadeIn>
          <Testimonials />
        </FadeIn>
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

export default Basket;
