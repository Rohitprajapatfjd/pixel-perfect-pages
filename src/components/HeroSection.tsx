import Header from "./Header";
import HeroBackground from "./HeroBackground";
import SpendingCard from "./SpendingCard";
import DownloadCard from "./DownloadCard";
import AnalysisCard from "./AnalysisCard";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen hero-gradient overflow-hidden">
      <HeroBackground />
      
      <div className="relative z-10">
        <Header />
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 pt-12 pb-24">
          {/* Hero Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left - Text */}
            <div className="pt-8">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight mb-6">
                Smart Digital<br />
                Stock Market
              </h1>
              <p className="text-primary-foreground/80 text-base md:text-lg max-w-md leading-relaxed">
                Manage your finance easily, quickly, and securely. Stockbazaari helps you manage transaction, digital cards, and financial analytics in one intuitive platform
              </p>
            </div>

            {/* Right - Cards */}
            <div className="relative mt-8 lg:mt-0">
              <div className="flex flex-wrap gap-4 justify-center lg:justify-end items-start">
                <SpendingCard />
                <div className="flex flex-col gap-4">
                  <DownloadCard />
                  <AnalysisCard />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
