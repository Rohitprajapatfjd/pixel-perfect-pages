import { FadeIn, SlideUp, RevealSection } from "@/components/animations/ScrollAnimations";
import BlogHero from "@/components/blog/BlogHero";
import BlogFilterBar from "@/components/blog/BlogFilterBar";
import SignUpBanner from "@/components/blog/SignUpBanner";
import BlogGrid from "@/components/blog/BlogGrid";
import Footer from "@/components/common/Footer";

const Blog = () => {
  return (
    <div className="snap-container">
      <section className="snap-section">
        <FadeIn duration={1.2}>
          <BlogHero />
        </FadeIn>
      </section>
      <section className="snap-section">
        <SlideUp>
          <BlogFilterBar />
        </SlideUp>
      </section>
      <section className="snap-section">
        <RevealSection>
          <SignUpBanner />
        </RevealSection>
      </section>
      <section className="snap-section">
        <SlideUp>
          <BlogGrid />
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

export default Blog;
