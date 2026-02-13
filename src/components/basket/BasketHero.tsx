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

const BasketHero = () => {
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
        <div className="hero-container px-8 md:px-12 pt-0 pb-16 min-h-[420px] rounded-[20px] overflow-hidden relative">
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
          <div className="relative z-10 mt-10 md:mt-16 grid md:grid-cols-2 gap-8 items-center">
            {/* Left */}
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-[44px] text-white leading-[1.2] font-light mb-6">
                Why you should<br />
                consider switching to<br />
                <span className="font-bold">StockBazaari Basket</span>
              </h1>
              <button className="flex items-center gap-2 bg-white text-primary px-5 py-2.5 rounded-full font-medium text-sm hover:bg-white/90 transition-colors">
                Schedule an expert call
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Right - Bar Chart Cards */}
            <div className="flex justify-end items-end gap-4">
              {/* Medium bar */}
              <div className="bg-primary/60 rounded-xl w-[120px] h-[160px] flex items-start justify-center pt-4 backdrop-blur-sm">
                <span className="text-white font-bold text-lg">+16.17%</span>
              </div>
              {/* Tall bar */}
              <div className="bg-primary/40 rounded-xl w-[120px] h-[200px] flex items-start justify-center pt-4 backdrop-blur-sm border border-white/20">
                <span className="text-white font-bold text-lg">+17.20%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BasketHero;
