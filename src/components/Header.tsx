import { ArrowUpRight } from "lucide-react";

interface HeaderProps {
  variant?: "light" | "dark";
}

const Header = ({ variant = "dark" }: HeaderProps) => {
  const navLinks = [
    { name: "Home", href: "#", active: true },
    { name: "Education", href: "#" },
    { name: "Algo", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Contact", href: "#" },
  ];

  const isLight = variant === "light";

  return (
    <header className={`w-full py-5 px-6 md:px-12 lg:px-20 ${isLight ? "bg-background" : ""}`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
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
          <span className={`text-xl font-bold ${isLight ? "text-primary" : "text-primary-foreground"}`}>Stockbazaari</span>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
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
                  ? "nav-link-active"
                  : "nav-link"
              }
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <a
          href="#"
          className={`flex items-center gap-2 font-medium text-sm hover:opacity-90 transition-opacity ${
            isLight ? "text-foreground" : "text-primary-foreground"
          }`}
        >
          Download Now
          <ArrowUpRight className="w-4 h-4" />
        </a>
      </div>
    </header>
  );
};

export default Header;
