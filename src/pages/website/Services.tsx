import ServiceHero from "@/components/services/ServiceHero";
import ResearchServicesGrid from "@/components/services/ResearchServicesGrid";
import LittleMastersSection from "@/components/services/LittleMastersSection";
import ServiceCTA from "@/components/services/ServiceCTA";
import Footer from "@/components/common/Footer";

const Services = () => {
  return (
    <div className="min-h-screen bg-[hsl(var(--page-bg))]">
      <ServiceHero />
      <ResearchServicesGrid />
      <LittleMastersSection />
      <ServiceCTA />
      <Footer />
    </div>
  );
};

export default Services;
