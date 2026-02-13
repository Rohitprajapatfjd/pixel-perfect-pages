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
      <FadeIn duration={0.8} once={false}>
        <HeroSection />
      </FadeIn>
      <BottomSection />
      <RevealSection once={false}>
        <TodaysSpotlight />
      </RevealSection>
      <SlideUp once={false}>
        <CloudCompaniesReport />
      </SlideUp>
      <RevealSection once={false}>
        <OurServices />
      </RevealSection>
      <SlideUp delay={0.1} once={false}>
        <TodaysBenefits />
      </SlideUp>
      <RevealSection once={false}>
        <StockPredictor />
      </RevealSection>
      <SlideUp once={false}>
        <OurIllustration />
      </SlideUp>
      <FadeIn once={false}>
        <Testimonials />
      </FadeIn>
      <FadeIn once={false}>
        <Footer />
      </FadeIn>
    </main>
  );
};

export default Home;
