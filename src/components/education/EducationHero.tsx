import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import HeroBackground from "../common/HeroBackground";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Education", href: "/education", active: true },
  { name: "Algo", href: "/strategies" },
  { name: "Blog", href: "blog" },
  { name: "Contact", href: "/contact" },
];

const teamMembers = [
  { name: "Mohith,", role: "Tax specialist" },
  { name: "Paritosh,", role: "CTO" },
  { name: "Kunal,", role: "CIO" },
  { name: "Anuj,", role: "CEO" },
  { name: "Aniket,", role: "Global markets lead" },
  { name: "Nehar,", role: "Value engineer" },
];

const EducationHero = () => {
  return (
    <section className="bg-[hsl(var(--page-bg))]">
      <div className="max-w-full relative">
        {/* Logo notch */}
        <div className="absolute -left-1 -top-2 md:left-0 lg:left-10 md:top-6 lg:top-0 z-50 px-4 sm:px-6 py-4">
          <Link to="/" className="flex items-center gap-2">
          <img
            src="img/logo.png"
            className="hidden sm:block w-32"
            alt="Stackbazaari Logo"
          />
          <img
            src="img/mobile-logo.png"
            className="sm:hidden w-12"
            alt="Stackbazaari Logo"
          />
          </Link>
        </div>

        {/* Hero Container */}
        <div className="hero-container-1 px-8 md:px-12 pt-0 pb-0 min-h-[480px] rounded-[20px] overflow-hidden relative">
          <HeroBackground />

          {/* Navbar */}
          <nav className="relative z-10 flex items-center justify-between h-16 pt-4">
            <div className="w-[130px] md:w-[200px]" />
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
            <a href="#" className="flex items-center gap-2 font-medium text-xs sm:text-sm text-white hover:opacity-90 transition-opacity group">
              Download Now
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </nav>

          {/* Hero Content */}
          <div className="relative z-10 my-12 md:my-20 text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl text-white leading-[1.2] mb-4">
              With <span className="font-bold">StockBazaari Learn to</span> Invest{" "}
              <span className="font-bold">in stock</span>
            </h1>
          </div>

          {/* Team Photo */}
          <div className="relative z-10 flex mt-10  justify-center">
            <div className="relative">
              <img
                src="/img/team-education.png"
                alt="Our Team"
                className="max-h-[340px] object-contain"
                onError={(e) => {
                  // Fallback if image doesn't load
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
              {/* Team member labels */}
              {/* <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-3 px-4">
                {teamMembers.map((member) => (
                  <div
                    key={member.name}
                    className="bg-gray-600/70 backdrop-blur-sm text-white px-4 py-2 rounded-xl text-center min-w-[100px]"
                  >
                    <p className="font-semibold text-sm">{member.name}</p>
                    <p className="text-xs text-white/80">{member.role}</p>
                  </div>
                ))}
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationHero;
