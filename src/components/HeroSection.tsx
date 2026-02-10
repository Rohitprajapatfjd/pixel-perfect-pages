import HeroBackground from "./HeroBackground";
import HeroBottomNotches from "./HeroBottomNotches";
import SpendingCard from "./SpendingCard";
import DownloadCard from "./DownloadCard";
import AnalysisCard from "./AnalysisCard";
import { ArrowUpRight } from "lucide-react";

const HeroSection = () => {
  const navLinks = [
    { name: "Home", href: "#", active: true },
    { name: "Education", href: "#" },
    { name: "Algo", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Contact", href: "#" },
  ];

  return (
    <section className="bg-[hsl(var(--page-bg))] pt-6 px-6">
      <div className="max-w-[1200px] mx-auto relative">
        {/* Logo positioned absolutely outside blue area */}
        <div className="absolute left-0 top-0 z-20 rounded-tr-[30px] rounded-tl-[20px] px-6 py-4 pb-8" style={{ bottom: 'auto' }}>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 flex items-center justify-center">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path d="M16 4L16 14" stroke="#2563EB" strokeWidth="3" strokeLinecap="round" />
                <path d="M16 14L24 8" stroke="#2563EB" strokeWidth="3" strokeLinecap="round" />
                <path d="M16 14L8 8" stroke="#2563EB" strokeWidth="3" strokeLinecap="round" />
                <path d="M16 14L24 20" stroke="#22C55E" strokeWidth="3" strokeLinecap="round" />
                <path d="M16 14L8 20" stroke="#22C55E" strokeWidth="3" strokeLinecap="round" />
                <path d="M16 14L16 24" stroke="#22C55E" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </div>
            <span className="text-xl font-bold text-primary">Stockbazaari</span>
          </div>
        </div>

        {/* Hero Container with blue background */}
        <div className="hero-container px-8 md:px-12 pt-0 pb-32 min-h-[520px] rounded-t-[20px]">
          <HeroBackground />

          {/* Navbar inside blue area */}
          <nav className="relative z-10 flex items-center justify-between h-16 pt-4">
            {/* Empty space for logo */}
            <div className="w-[200px]"></div>

            {/* Center Nav Links */}
            <div className="hidden md:flex items-center gap-10">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={
                    link.active
                      ? "text-white font-semibold text-sm"
                      : "text-white/80 hover:text-white transition-colors duration-200 text-sm font-medium"
                  }
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Download Button */}
            <a
              href="#"
              className="flex items-center gap-2 font-medium text-sm text-white hover:opacity-90 transition-opacity group"
            >
              Download Now
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </nav>

          {/* Hero Content */}
          <div className="relative z-10 mt-8 md:mt-12">
            <div className="grid lg:grid-cols-2 gap-8 items-start">
              {/* Left - Heading */}
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-[56px] font-bold text-white leading-[1.15]">
                  Smart Digital<br />
                  Stock Market
                </h1>
              </div>

              {/* Right - Paragraph */}
              <div className="lg:pt-2">
                <p className="text-white/90 text-[15px] max-w-[340px] leading-relaxed">
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

          {/* Bottom cutouts */}
          <HeroBottomNotches />
        </div>

        {/* Bottom section outside hero */}
        <div className="bg-card rounded-b-[20px] flex items-center justify-between px-8 md:px-12 py-6">
          <SpotlightButton />
          
          {/* Percentage stat */}
          <div className="text-right hidden sm:block">
            <p className="text-5xl md:text-6xl font-bold text-primary">
              93.84<span className="text-3xl">%</span>
            </p>
            <p className="text-sm text-muted-foreground">Instant transfer Stockbazaari</p>
          </div>
        </div>
      </div>
    </section>
  );
};


const SpotlightButton = () => {
  return (
    <button className="flex items-center gap-2 bg-primary text-primary-foreground px-5 py-3 rounded-full font-medium text-sm hover:bg-primary-dark transition-colors button-shadow">
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A2 2 0 013 12V7a4 4 0 014-4z" />
      </svg>
      Today's Spotlight
    </button>
  );
};

export default HeroSection;
