import { Link } from "react-router-dom";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import HeroBackground from "../common/HeroBackground";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Education", href: "/education" },
  { name: "Algo", href: "/strategies" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "#" },
];

const ServiceHero = () => {
  return (
    <section className="bg-[hsl(var(--page-bg))] pt-6 px-6">
      <div className="max-w-[1200px] mx-auto relative">
        {/* Logo */}
        <div className="absolute left-0 top-0 z-20 px-6 py-4 pb-8">
          <Link to="/" className="flex items-center gap-2">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <path d="M16 4L16 14" stroke="#2563EB" strokeWidth="3" strokeLinecap="round" />
              <path d="M16 14L24 8" stroke="#2563EB" strokeWidth="3" strokeLinecap="round" />
              <path d="M16 14L8 8" stroke="#2563EB" strokeWidth="3" strokeLinecap="round" />
              <path d="M16 14L24 20" stroke="#22C55E" strokeWidth="3" strokeLinecap="round" />
              <path d="M16 14L8 20" stroke="#22C55E" strokeWidth="3" strokeLinecap="round" />
              <path d="M16 14L16 24" stroke="#22C55E" strokeWidth="3" strokeLinecap="round" />
            </svg>
            <span className="text-xl font-bold text-primary">Stockbazaari</span>
          </Link>
        </div>

        {/* Hero Container */}
        <div className="hero-container px-8 md:px-12 pt-0 pb-16 min-h-[480px] rounded-[20px] overflow-hidden relative">
          <HeroBackground />

          {/* Navbar */}
          <nav className="relative z-10 flex items-center justify-between h-16 pt-4">
            <div className="w-[200px]" />
            <div className="hidden md:flex items-center gap-10">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-white/80 hover:text-white transition-colors duration-200 text-sm font-medium"
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <a href="#" className="flex items-center gap-2 font-medium text-sm text-white hover:opacity-90 transition-opacity group">
              Download Now
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </nav>

          {/* Hero Content */}
          <div className="relative z-10 mt-12 md:mt-20 grid md:grid-cols-2 gap-8 items-center">
            {/* Left */}
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl text-white leading-[1.15] font-light mb-6">
                Research That<br />
                <span className="font-bold">Powers Smarter</span><br />
                <span className="font-bold">Decisions</span>
              </h1>
              <p className="text-white/80 text-sm md:text-base mb-8 max-w-md leading-relaxed">
                Our research combines data, analysis, and market expertise to help you invest with clarity and confidence.
              </p>
              <button className="flex items-center gap-2 bg-white text-primary px-6 py-3 rounded-full font-medium text-sm hover:bg-white/90 transition-colors">
                Research Services
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Right - Stats Card */}
            <div className="flex justify-center">
              <div className="bg-gray-100 rounded-2xl p-8 w-[360px] h-[260px] relative overflow-hidden">
                {/* Circular stats visualization */}
                <div className="relative w-full h-full flex items-center justify-center">
                  {/* Center circle */}
                  <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center z-10">
                    <div className="w-6 h-6 bg-white rounded-full" />
                  </div>
                  
                  {/* Stat badges */}
                  <div className="absolute top-2 left-8">
                    <div className="text-center">
                      <span className="text-2xl font-bold text-primary">75%</span>
                      <p className="text-[10px] text-muted-foreground mt-1">Lorem ipsum dolor sit amet</p>
                    </div>
                  </div>
                  <div className="absolute top-2 right-4">
                    <div className="text-center">
                      <span className="text-lg font-bold text-muted-foreground">50%</span>
                      <p className="text-[10px] text-muted-foreground mt-1">Lorem ipsum dolor sit amet</p>
                    </div>
                  </div>
                  <div className="absolute bottom-6 left-6">
                    <div className="text-center">
                      <span className="text-xl font-bold text-gray-700">40%</span>
                      <p className="text-[10px] text-muted-foreground mt-1">Lorem ipsum dolor sit amet</p>
                    </div>
                  </div>
                  <div className="absolute bottom-6 right-8">
                    <div className="text-center">
                      <span className="text-xl font-bold text-gray-700">85%</span>
                      <p className="text-[10px] text-muted-foreground mt-1">Lorem ipsum dolor sit amet</p>
                    </div>
                  </div>

                  {/* Decorative arcs */}
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 360 260">
                    <path d="M120 40 Q180 20 240 60" fill="none" stroke="#3B82F6" strokeWidth="3" strokeLinecap="round" />
                    <path d="M240 60 Q280 100 260 160" fill="none" stroke="#9CA3AF" strokeWidth="3" strokeLinecap="round" />
                    <path d="M260 160 Q220 220 140 200" fill="none" stroke="#4B5563" strokeWidth="3" strokeLinecap="round" />
                    <path d="M140 200 Q80 180 80 120" fill="none" stroke="#6366F1" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceHero;
