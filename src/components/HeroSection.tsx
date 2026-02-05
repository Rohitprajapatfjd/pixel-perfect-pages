import HeroBackground from "./HeroBackground";
import SpendingCard from "./SpendingCard";
import DownloadCard from "./DownloadCard";
import AnalysisCard from "./AnalysisCard";
import HeroNavbar from "./HeroNavbar";

const HeroSection = () => {
  return (
    <section className="bg-[hsl(var(--page-bg))] pt-6 px-6">
      <div className="max-w-[1200px] mx-auto">
        {/* Hero Container with unique curved shapes */}
        <div className="hero-container px-8 md:px-12 pt-7 pb-20 min-h-[580px]">
          <HeroBackground />

          {/* Navbar inside hero */}
          <HeroNavbar />

          {/* Hero Content */}
          <div className="relative z-10 mt-12 md:mt-16">
            <div className="grid lg:grid-cols-2 gap-8 items-start">
              {/* Left - Heading */}
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-[64px] font-bold text-white leading-[1.1]">
                  Smart Digital<br />
                  Stock Market
                </h1>
              </div>

              {/* Right - Paragraph */}
              <div className="lg:pt-4">
                <p className="text-white/90 text-base max-w-[360px] leading-relaxed">
                  Manage your finance easily, quickly, and securely. Stockbazaari helps you manage transaction, digital cards, and financial analytics in one intuitive platform
                </p>
              </div>
            </div>

            {/* Cards Row */}
            <div className="mt-10 flex flex-wrap gap-4 justify-start items-start">
              <SpendingCard />
              <DownloadCard />
              <AnalysisCard />
            </div>
          </div>

          {/* Bottom-right percentage */}
          <div className="absolute bottom-8 right-12 text-right z-10 hidden lg:block">
            <p className="text-5xl font-bold text-white/30">
              93.84<span className="text-3xl">%</span>
            </p>
            <p className="text-sm text-white/60 mt-1">Instant transfer Stockbazaari</p>
          </div>
        </div>

        {/* Button below hero - in white area */}
        <SpotlightButton />
      </div>
    </section>
  );
};

const SpotlightButton = () => {
  return (
    <div className="py-6">
      <button className="flex items-center gap-2 bg-primary text-white px-5 py-3 rounded-full font-medium text-sm hover:bg-primary-dark transition-colors shadow-button">
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A2 2 0 013 12V7a4 4 0 014-4z" />
        </svg>
        Today's Spotlight
      </button>
    </div>
  );
};

export default HeroSection;
