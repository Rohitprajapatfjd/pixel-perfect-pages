import BlogHero from "@/components/blog/BlogHero";
import BlogFilterBar from "@/components/blog/BlogFilterBar";
import SignUpBanner from "@/components/blog/SignUpBanner";
import BlogGrid from "@/components/blog/BlogGrid";
import Footer from "@/components/common/Footer";

const Blog = () => {
  return (
    <div className="min-h-screen bg-white">
      <BlogHero />
      <BlogFilterBar />
      <SignUpBanner />
      <BlogGrid />
      <Footer />
    </div>
  );
};

export default Blog;
