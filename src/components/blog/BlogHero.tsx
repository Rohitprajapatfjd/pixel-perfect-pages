import HeroBackground from "../common/HeroBackground";
import HeroBottomNotches from "../common/HeroBottomNotches";
import { ArrowUpRight } from "lucide-react";

const BlogHero = () => {
  const navLinks = [
    { name: "Home", href: "/", active: false },
    { name: "Education", href: "/education" },
    { name: "Algo", href: "/strategies" },
    { name: "Blog", href: "/blog", active: true },
    { name: "Contact", href: "#" },
  ];

  return (
    <section className="bg-[hsl(var(--page-bg))] pt-6 px-6">
      <div className="max-w-[1200px] mx-auto relative">
        {/* Logo */}
        <div className="absolute left-0 top-0 z-20 px-6 py-4 pb-8">
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

        {/* Hero Container */}
        <div className="hero-container px-8 md:px-12 pt-0 pb-32 min-h-[520px] rounded-t-[20px]">
          <HeroBackground />

          {/* Navbar */}
          <nav className="relative z-10 flex items-center justify-between h-16 pt-4">
            <div className="w-[200px]"></div>
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
              {/* Left */}
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-[56px] font-bold text-white leading-[1.15]">
                  Insights That<br />
                  Shape Smarter<br />
                  Investments
                </h1>
                <p className="text-white/80 text-[15px] mt-6 leading-relaxed max-w-[380px]">
                  Learn the Markets, One Insight at a Time<br />
                  Stay Ahead of the Market Curve<br />
                  From Charts to Clarity.
                </p>
                <button className="mt-8 flex items-center gap-2 bg-white text-primary px-6 py-3 rounded-full font-medium text-sm hover:bg-white/90 transition-colors">
                  Explore Strategies
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>

              {/* Right - Target Market Card */}
              <div className="hidden lg:block">
                <div className="bg-white rounded-2xl p-6 shadow-lg max-w-[400px] ml-auto">
                  <div className="flex gap-6">
                    {/* Left side of card */}
                    <div className="flex-shrink-0">
                      <h3 className="text-lg font-bold text-foreground">Target Market for</h3>
                      <p className="text-3xl font-bold text-primary">2024</p>
                      <button className="mt-4 bg-primary text-white text-xs px-4 py-2 rounded-md flex items-center gap-1">
                        Get Started <span className="w-4 h-4 bg-white/20 rounded-full inline-flex items-center justify-center text-[10px]">●</span>
                      </button>
                      {/* 3D bar chart placeholder */}
                      <div className="mt-4 flex items-end gap-1">
                        <div className="w-8 h-16 bg-primary rounded-t-md"></div>
                        <div className="w-8 h-12 bg-muted rounded-t-md"></div>
                        <div className="w-8 h-8 bg-foreground/20 rounded-t-md"></div>
                      </div>
                    </div>
                    {/* Right side - Options */}
                    <div className="flex flex-col gap-3 text-xs">
                      {["Option One", "Option Two", "Option Three", "Option Four"].map((opt) => (
                        <div key={opt}>
                          <p className="font-semibold text-foreground">{opt}</p>
                          <p className="text-muted-foreground text-[11px]">Lorem ipsum dolor sit amet, consectetur.</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <HeroBottomNotches />
        </div>
      </div>
    </section>
  );
};

export default BlogHero;
