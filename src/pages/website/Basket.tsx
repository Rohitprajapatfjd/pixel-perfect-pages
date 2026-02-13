import BasketHero from "@/components/basket/BasketHero";
import ComparisonTable from "@/components/basket/ComparisonTable";
import DifferentiatorSection from "@/components/basket/DifferentiatorSection";
import Testimonials from "@/components/common/Testimonials";
import ServiceCTA from "@/components/services/ServiceCTA";
import Footer from "@/components/common/Footer";

const Basket = () => {
  return (
    <div className="min-h-screen bg-[hsl(var(--page-bg))]">
      <BasketHero />
      <ComparisonTable />
      <DifferentiatorSection />
      <Testimonials />
      <ServiceCTA />
      <Footer />
    </div>
  );
};

export default Basket;
