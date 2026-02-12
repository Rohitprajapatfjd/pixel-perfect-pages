import EducationHero from "@/components/education/EducationHero";
import CoursesSection from "@/components/education/CoursesSection";
import EducationCTA from "@/components/education/EducationCTA";
import Footer from "@/components/common/Footer";

const Education = () => {
  return (
    <div className="min-h-screen bg-[hsl(var(--page-bg))]">
      <EducationHero />
      <CoursesSection />
      <EducationCTA />
      <Footer />
    </div>
  );
};

export default Education;
