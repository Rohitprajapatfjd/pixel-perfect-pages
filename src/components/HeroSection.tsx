import Header from "./Header";
import HeroBackground from "./HeroBackground";
import SpendingCard from "./SpendingCard";
import DownloadCard from "./DownloadCard";
import AnalysisCard from "./AnalysisCard";

const HeroSection = () => {
  return (
    <section className="relative bg-background">
      {/* Header on white background */}
      <Header variant="light" />
      
      {/* Blue curved hero container */}
      <div className="relative px-4 md:px-8 lg:px-12 pb-16">
        <div className="relative hero-gradient rounded-[2rem] md:rounded-[3rem] overflow-hidden min-h-[600px] md:min-h-[700px]">
          <HeroBackground />
          
          <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-16 pt-12 pb-24">
            {/* Hero Content */}
            <div className="grid lg:grid-cols-2 gap-8 items-start">
              {/* Left - Text */}
              <div className="pt-4 md:pt-8">
                <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary-foreground leading-tight mb-6">
                  Smart Digital<br />
                  Stock Market
                </h1>
              </div>

              {/* Right - Description */}
              <div className="pt-4 md:pt-8 lg:pt-16">
                <p className="text-primary-foreground/80 text-sm md:text-base max-w-sm leading-relaxed">
                  Manage your finance easily, quickly, and securely.Stockbazaari helps you manage transaction,digital cards,and financial analytics in one intituitive platform
                </p>
              </div>
            </div>

            {/* Cards Row */}
            <div className="mt-8 md:mt-12">
              <div className="flex flex-wrap gap-4 justify-center items-start">
                <div className="w-full sm:w-auto">
                  <SpendingCard />
                </div>
                <div className="w-full sm:w-auto">
                  <DownloadCard />
                </div>
                <div className="w-full sm:w-auto">
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
