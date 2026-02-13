import { FadeIn, SlideUp, RevealSection } from "@/components/animations/ScrollAnimations";
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
    <main className="min-h-screen overflow-hidden">
      <FadeIn duration={0.8}>
        <HeroSection />
      </FadeIn>
      <BottomSection />
      <RevealSection>
        <TodaysSpotlight />
      </RevealSection>
      <SlideUp>
        <CloudCompaniesReport />
      </SlideUp>
      <RevealSection>
        <OurServices />
      </RevealSection>
      <SlideUp delay={0.1}>
        <TodaysBenefits />
      </SlideUp>
      <RevealSection>
        <StockPredictor />
      </RevealSection>
      <SlideUp>
        <OurIllustration />
      </SlideUp>
      <FadeIn>
        <Testimonials />
      </FadeIn>
      <FadeIn>
        <Footer />
      </FadeIn>
    </main>
  );
};

export default Home;
