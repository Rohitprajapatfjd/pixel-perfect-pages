import { ArrowUpRight } from "lucide-react";

interface HeroNavbarProps {
  variant?: "light" | "dark";
}

const HeroNavbar = ({ variant = "dark" }: HeroNavbarProps) => {
  const navLinks = [
    { name: "Home", href: "#", active: true },
    { name: "Education", href: "#" },
    { name: "Algo", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Contact", href: "#" },
  ];

  const isLight = variant === "light";

  return (
    <nav className="relative z-10 flex items-center justify-between h-16">
      {/* Logo */}
      {/* <div className="flex items-center gap-2">
        <div className="w-8 h-8 flex items-center justify-center">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <path d="M8 8L16 4L24 8L16 12L8 8Z" fill="#22C55E" />
            <path d="M8 8V16L16 20V12L8 8Z" fill="#16A34A" />
            <path d="M24 8V16L16 20V12L24 8Z" fill="#15803D" />
            <path d="M8 16L16 12L24 16L16 20L8 16Z" fill="#22C55E" opacity="0.8" />
            <path d="M8 16V24L16 28V20L8 16Z" fill="#16A34A" />
            <path d="M24 16V24L16 28V20L24 16Z" fill="#15803D" />
          </svg>
        </div>
        <span className={`text-xl font-bold ${isLight ? "text-primary" : "text-white"}`}>
          Stockbazaari
        </span>
      </div> */}
      <img src="img/logo.png" alt="Stackbazaari Logo" />

      {/* Center Nav Links */}
      <div className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className={
              isLight
                ? link.active
                  ? "text-foreground font-semibold text-sm"
                  : "text-muted-foreground hover:text-foreground transition-colors duration-200 text-sm font-medium"
                : link.active
                  ? "text-white font-semibold text-sm"
                  : "text-white/70 hover:text-white transition-colors duration-200 text-sm font-medium"
            }
          >
            {link.name}
          </a>
        ))}
      </div>

      {/* Download Button */}
      <a
        href="#"
        className={`flex items-center gap-2 font-medium text-sm hover:opacity-90 transition-opacity group ${
          isLight ? "text-foreground" : "text-white"
        }`}
      >
        Download Now
        <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
      </a>
    </nav>
  );
};

export default HeroNavbar;
