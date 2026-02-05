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
        <div className="hero-container px-8 md:px-12 pt-7 pb-28 min-h-[580px]">
          <HeroBackground />
          
          {/* Bottom cutouts - multiple rectangular notches */}
          <BottomNotches />

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
        </div>

        {/* Bottom section outside hero */}
        <div className="flex items-center justify-between py-6">
          <SpotlightButton />
          
          {/* Percentage stat */}
          <div className="text-right hidden sm:block">
            <p className="text-5xl md:text-6xl font-bold text-primary/30">
              93.84<span className="text-3xl">%</span>
            </p>
            <p className="text-sm text-muted-foreground">Instant transfer Stockbazaari</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const BottomNotches = () => {
  return (
    <div className="absolute bottom-0 left-0 right-0 z-[2] flex justify-center">
      {/* Left notch */}
      <div className="absolute left-0 bottom-0 w-[100px] h-[50px] bg-[hsl(var(--page-bg))] rounded-tr-[20px]"></div>
      
      {/* Center notches - 4 rectangular cutouts */}
      <div className="flex gap-4 mb-0">
        <div className="w-[140px] h-[50px] bg-[hsl(var(--page-bg))] rounded-t-[16px]"></div>
        <div className="w-[140px] h-[50px] bg-[hsl(var(--page-bg))] rounded-t-[16px]"></div>
        <div className="w-[140px] h-[50px] bg-[hsl(var(--page-bg))] rounded-t-[16px]"></div>
        <div className="w-[140px] h-[50px] bg-[hsl(var(--page-bg))] rounded-t-[16px]"></div>
      </div>
      
      {/* Right notch */}
      <div className="absolute right-0 bottom-0 w-[100px] h-[50px] bg-[hsl(var(--page-bg))] rounded-tl-[20px]"></div>
    </div>
  );
};

const SpotlightButton = () => {
  return (
    <button className="flex items-center gap-2 bg-primary text-white px-5 py-3 rounded-full font-medium text-sm hover:bg-primary-dark transition-colors shadow-button">
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A2 2 0 013 12V7a4 4 0 014-4z" />
      </svg>
      Today's Spotlight
    </button>
  );
};

export default HeroSection;
