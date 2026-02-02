import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer>
      {/* Contact Banner */}
      <section className="bg-primary py-12 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-2">
                Contact Us for Assistance
              </h2>
              <p className="text-primary-foreground/80 text-sm">
                Experienced stock market guide to gain benefits
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 flex items-center justify-center">
                <svg width="40" height="40" viewBox="0 0 32 32" fill="none">
                  <path d="M8 8L16 4L24 8L16 12L8 8Z" fill="#22C55E" />
                  <path d="M8 8V16L16 20V12L8 8Z" fill="#16A34A" />
                  <path d="M24 8V16L16 20V12L24 8Z" fill="#15803D" />
                  <path d="M8 16L16 12L24 16L16 20L8 16Z" fill="#22C55E" opacity="0.8" />
                  <path d="M8 16V24L16 28V20L8 16Z" fill="#16A34A" />
                  <path d="M24 16V24L16 28V20L24 16Z" fill="#15803D" />
                </svg>
              </div>
              <span className="text-2xl font-bold text-primary-foreground">Stockbazaari</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Footer */}
      <section className="bg-card py-12 px-6 md:px-12 lg:px-20 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 flex items-center justify-center">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <path d="M8 8L16 4L24 8L16 12L8 8Z" fill="#22C55E" />
                    <path d="M8 8V16L16 20V12L8 8Z" fill="#16A34A" />
                    <path d="M24 8V16L16 20V12L24 8Z" fill="#15803D" />
                  </svg>
                </div>
                <span className="text-xl font-bold text-card-foreground">Stockbazaari</span>
              </div>
              <p className="text-sm text-muted-foreground mb-6">
                Your trusted partner in stock market education and trading success.
              </p>
              <div className="flex gap-3">
                {["facebook", "twitter", "linkedin", "instagram"].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors text-primary"
                  >
                    <span className="text-xs font-bold uppercase">{social[0]}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold text-card-foreground mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {["Compliance", "Advisory", "Algo Trading", "Courses"].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="font-bold text-card-foreground mb-4">Legal</h4>
              <ul className="space-y-2">
                {["Privacy Policy", "Terms of Service", "Disclaimer", "Refund Policy"].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-bold text-card-foreground mb-4">Contact Us</h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Phone className="w-4 h-4 text-primary" />
                  +91 98765 43210
                </li>
                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Mail className="w-4 h-4 text-primary" />
                  info@stockbazaari.com
                </li>
                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4 text-primary" />
                  Mumbai, Maharashtra, India
                </li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-12 pt-6 border-t border-border text-center">
            <p className="text-sm text-muted-foreground">
              © 2024 StockBazaari. All rights reserved.
            </p>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
