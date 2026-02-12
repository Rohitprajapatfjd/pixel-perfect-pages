import HeroSection from "@/components/common/HeroSection";
import BottomSection from "@/components/common/BottomSection";
import TodaysSpotlight from "@/components/common/TodaysSpotlight";
import CloudCompaniesReport from "@/components/common/CloudCompaniesReport";
import OurServices from "@/components/common/OurServices";
import TodaysBenefits from "@/components/common/TodaysBenefits";
import StockPredictor from "@/components/common/StockPredictor";
import OurIllustration from "@/components/common/OurIllustration";
import Testimonials from "@/components/common/Testimonials";
import Footer from "@/components/common/Footer";

const Home = () => {
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

export default Home;
