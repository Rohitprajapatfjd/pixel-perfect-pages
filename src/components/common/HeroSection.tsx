import HeroBackground from "./HeroBackground";
import SpendingCard from "./SpendingCard";
import DownloadCard from "./DownloadCard";
import AnalysisCard from "./AnalysisCard";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const HeroSection = () => {
  const navLinks = [
    { name: "Home", href: "#", active: true },
    { name: "Education", href: "/education" },
    { name: "Algo", href: "/strategies" },
    { name: "Blog", href: "/blog" },
    { name: "Ring", href: "/services" },
    { name: "Contact", href: "#" },
  ];

  const cards = [SpendingCard, DownloadCard, AnalysisCard];

  const [index, setIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  /* Auto slider */
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % cards.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full min-h-screen bg-[hsl(var(--page-bg))] overflow-hidden">
      
      {/* LOGO */}
      <div className="absolute -left-1 -top-2 md:left-0 lg:left-10 md:top-6 lg:top-0 z-50 px-4 sm:px-6 py-4">
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
      </div>

      {/* HERO CONTAINER */}
      <div className="relative w-full min-h-screen flex flex-col rounded-t-[20px] px-6 md:px-12 pt-6 hero-container">
        <HeroBackground />

        {/* ================= NAVBAR ================= */}
        <nav className="relative z-40 flex items-center justify-between h-16">

          <div className="w-[200px]" />

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={
                  link.active
                    ? "text-white font-semibold text-sm"
                    : "text-white/80 hover:text-white transition text-sm font-medium"
                }
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-4">

            {/* Desktop Download */}
            <a
              href="#"
              className="hidden md:flex items-center gap-2 text-white text-sm font-medium group"
            >
              Download Now
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition" />
            </a>

            {/* Modern Animated Burger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden relative z-50 text-white"
            >
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.4 }}
              >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </motion.div>
            </button>
          </div>
        </nav>

        {/* ================= MODERN MOBILE MENU ================= */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 md:hidden z-40"
            >
              {/* Blur Background */}
              <div
                className="absolute inset-0 bg-black/40 backdrop-blur-xl"
                onClick={() => setIsOpen(false)}
              />

              {/* Sliding Panel */}
              <motion.div
                initial={{ y: "-100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-100%" }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="relative h-full bg-gradient-to-br from-blue-600 to-blue-700 flex flex-col justify-center items-center space-y-10"
              >
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + i * 0.1 }}
                    className="text-white text-2xl font-semibold tracking-wide hover:scale-105 transition-transform"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </motion.a>
                ))}

                <motion.a
                  href="#"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-full font-semibold shadow-lg hover:scale-105 transition"
                >
                  Download Now
                  <ArrowUpRight className="w-5 h-5" />
                </motion.a>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ================= HERO CONTENT ================= */}
        <div className="relative z-10 flex-1 flex flex-col justify-center">
          <div className="grid lg:grid-cols-2 gap-8 items-start">

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-[56px] font-bold text-white leading-[1.15]">
                Smart Digital <br />
                Stock Market
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <p className="text-white/90 text-[15px] max-w-[340px] leading-relaxed">
                Manage your finance easily, quickly, and securely.
                Stockbazaari helps you manage transactions,
                digital cards, and analytics in one intuitive platform.
              </p>
            </motion.div>
          </div>

          {/* ================= CARDS ================= */}
          <div className="mt-12">

            {/* Desktop */}
            <div className="hidden lg:flex justify-center gap-6">
              {cards.map((Card, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: i * 0.15 }}
                >
                  <Card />
                </motion.div>
              ))}
            </div>

            {/* Mobile Slider */}
            <div className="lg:hidden overflow-hidden">
              <motion.div
                className="flex"
                animate={{ x: `-${index * 100}%` }}
                transition={{ duration: 0.8 }}
              >
                {cards.map((Card, i) => (
                  <div
                    key={i}
                    className="w-full shrink-0 flex justify-center px-4"
                  >
                    <div className="w-[90%]">
                      <Card />
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;