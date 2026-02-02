import HeroSection from "@/components/HeroSection";
import BottomSection from "@/components/BottomSection";
import TodaysSpotlight from "@/components/TodaysSpotlight";
import CloudCompaniesReport from "@/components/CloudCompaniesReport";
import OurServices from "@/components/OurServices";
import TodaysBenefits from "@/components/TodaysBenefits";
import StockPredictor from "@/components/StockPredictor";
import OurIllustration from "@/components/OurIllustration";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <BottomSection />
      <TodaysSpotlight />
      <CloudCompaniesReport />
      <OurServices />
      <TodaysBenefits />
      <StockPredictor />
      <OurIllustration />
      <Testimonials />
      <Footer />
    </main>
  );
};

export default Index;
