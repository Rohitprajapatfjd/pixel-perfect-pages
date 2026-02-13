import { FadeIn, SlideUp, RevealSection } from "@/components/animations/ScrollAnimations";
import BlogHero from "@/components/blog/BlogHero";
import BlogFilterBar from "@/components/blog/BlogFilterBar";
import SignUpBanner from "@/components/blog/SignUpBanner";
import BlogGrid from "@/components/blog/BlogGrid";
import Footer from "@/components/common/Footer";

const Blog = () => {
  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <FadeIn duration={0.8}>
        <BlogHero />
      </FadeIn>
      <SlideUp>
        <BlogFilterBar />
      </SlideUp>
      <RevealSection>
        <SignUpBanner />
      </RevealSection>
      <SlideUp>
        <BlogGrid />
      </SlideUp>
      <FadeIn>
        <Footer />
      </FadeIn>
    </div>
  );
};

export default Blog;
