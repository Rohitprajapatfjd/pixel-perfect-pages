import { FadeIn, SlideUp, RevealSection } from "@/components/animations/ScrollAnimations";
import EducationHero from "@/components/education/EducationHero";
import CoursesSection from "@/components/education/CoursesSection";
import EducationCTA from "@/components/education/EducationCTA";
import Footer from "@/components/common/Footer";

const Education = () => {
  return (
    <div className="min-h-screen bg-[hsl(var(--page-bg))] overflow-hidden">
      <FadeIn duration={0.8}>
        <EducationHero />
      </FadeIn>
      <RevealSection>
        <CoursesSection />
      </RevealSection>
      <SlideUp>
        <EducationCTA />
      </SlideUp>
      <FadeIn>
        <Footer />
      </FadeIn>
    </div>
  );
};

export default Education;
