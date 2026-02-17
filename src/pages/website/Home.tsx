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
    <main className="snap-container">
      <section className="snap-section">
        <FadeIn duration={0.8} once={false}>
          <HeroSection />
        </FadeIn>
      </section>
      <BottomSection />
      <section className="snap-section">
        <RevealSection once={false}>
          <TodaysSpotlight />
        </RevealSection>
      </section>
      <section className="snap-section">
        <SlideUp once={false}>
          <CloudCompaniesReport />
        </SlideUp>
      </section>
      <section className="snap-section">
        <RevealSection once={false}>
          <OurServices />
        </RevealSection>
      </section>
      <section className="snap-section">
        <SlideUp delay={0.1} once={false}>
          <TodaysBenefits />
        </SlideUp>
      </section>
      <section className="snap-section">
        <RevealSection once={false}>
          <StockPredictor />
        </RevealSection>
      </section>
      <section className="snap-section">
        <SlideUp once={false}>
          <OurIllustration />
        </SlideUp>
      </section>
      <section className="snap-section">
        <FadeIn once={false}>
          <Testimonials />
        </FadeIn>
      </section>
      <section className="snap-section">
        <FadeIn once={false}>
          <Footer />
        </FadeIn>
      </section>
    </main>
  );
};

export default Home;
