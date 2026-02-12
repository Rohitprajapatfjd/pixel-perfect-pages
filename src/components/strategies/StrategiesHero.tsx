import { Link } from "react-router-dom";
import { ArrowUpRight, Play } from "lucide-react";
import HeroBackground from "../common/HeroBackground";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Education", href: "#" },
  { name: "Algo", href: "/strategies", active: true },
  { name: "Blog", href: "#" },
  { name: "Contact", href: "#" },
];

const StrategiesHero = () => {
  return (
    <section className="bg-[hsl(var(--page-bg))] pt-6 px-6">
      <div className="max-w-[1200px] mx-auto relative">
        {/* Logo notch */}
        <div className="absolute left-0 top-0 z-20 rounded-tr-[30px] rounded-tl-[20px] px-6 py-4 pb-8">
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
        <div className="hero-container px-8 md:px-12 pt-0 pb-16 min-h-[480px] rounded-[20px]">
          <HeroBackground />

          {/* Navbar */}
          <nav className="relative z-10 flex items-center justify-between h-16 pt-4">
            <div className="w-[200px]" />
            <div className="hidden md:flex items-center gap-10">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={
                    link.active
                      ? "text-white font-semibold text-sm"
                      : "text-white/80 hover:text-white transition-colors duration-200 text-sm font-medium"
                  }
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
          <div className="relative z-10 mt-10 md:mt-16 grid lg:grid-cols-2 gap-10 items-center">
            {/* Left */}
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-[52px] font-bold text-white leading-[1.12] mb-4">
                Algorithmic<br />Trading Strategies
              </h1>
              <p className="text-white/80 text-[15px] max-w-[400px] leading-relaxed mb-8">
                Discover AI-powered trading strategies designed to maximize your returns with minimal risk. Our algorithms work 24/7 so you don't have to.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="border-2 border-white text-white px-6 py-3 rounded-lg text-sm font-semibold hover:bg-white/10 transition-colors">
                  Explore Strategies
                </button>
                <button className="bg-primary text-primary-foreground px-6 py-3 rounded-lg text-sm font-semibold flex items-center gap-2 button-shadow hover:bg-primary/90 transition-colors">
                  <Play className="w-4 h-4 fill-current" />
                  Explore Strategies
                </button>
              </div>
            </div>

            {/* Right - Active Strategies Card */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/15">
              <div className="flex items-center justify-between mb-5">
                <h3 className="text-white font-semibold text-lg">Active Strategies</h3>
                <span className="bg-green-500/20 text-green-300 text-xs font-semibold px-3 py-1 rounded-full">Live</span>
              </div>

              <p className="text-5xl font-bold text-white mb-1">6 <span className="text-lg font-medium text-white/70">Running</span></p>

              <div className="grid grid-cols-2 gap-3 mt-5">
                <div className="bg-white/10 rounded-xl p-4">
                  <p className="text-white/60 text-xs mb-1">Today's P&L</p>
                  <p className="text-green-400 text-lg font-bold">+₹45,230</p>
                </div>
                <div className="bg-white/10 rounded-xl p-4">
                  <p className="text-white/60 text-xs mb-1">Win Rate</p>
                  <p className="text-white text-lg font-bold">74.5%</p>
                </div>
              </div>

              <div className="mt-5 bg-white/10 rounded-xl p-4">
                <div className="flex items-center justify-between mb-3">
                  <p className="text-white/60 text-xs">Performance this month</p>
                  <p className="text-green-400 text-sm font-bold">+8.2%</p>
                </div>
                {/* Mini bar chart */}
                <div className="flex items-end gap-1.5 h-10">
                  {[40, 65, 50, 80, 60, 90, 75, 85, 70, 95, 60, 80].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 bg-green-400/80 rounded-t-sm"
                      style={{ height: `${h}%` }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StrategiesHero;
