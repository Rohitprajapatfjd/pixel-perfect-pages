import { FadeIn, RevealSection, SlideUp } from "@/components/animations/ScrollAnimations";
import EducationHero from "@/components/education/EducationHero";
import CoursesSection from "@/components/education/CoursesSection";
import EducationCTA from "@/components/education/EducationCTA";
import Footer from "@/components/common/Footer";

const Education = () => {
  return (
    <div className="snap-container">
      <section className="snap-section">
        <FadeIn duration={1.2}>
          <EducationHero />
        </FadeIn>
      </section>
      <section className="snap-section">
        <RevealSection>
          <CoursesSection />
        </RevealSection>
      </section>
      <section className="snap-section">
        <SlideUp>
          <EducationCTA />
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

export default Education;
