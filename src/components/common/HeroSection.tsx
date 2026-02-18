import HeroBackground from "./HeroBackground";
import HeroBottomNotches from "./HeroBottomNotches";
import SpendingCard from "./SpendingCard";
import DownloadCard from "./DownloadCard";
import AnalysisCard from "./AnalysisCard";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
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

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % cards.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full min-h-screen bg-[hsl(var(--page-bg))] overflow-hidden">
      <div className="">
        {/* Logo positioned absolutely outside blue area */}
        <div className="absolute left-0 top-0 z-20 rounded-tr-[30px] rounded-tl-[20px] px-6 py-4 pb-8" style={{ bottom: 'auto' }}>
          {/* <div className="flex items-center gap-2">
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
          </div> */}
          <img src="img/logo.png" className="w-40" alt="Stackbazaari Logo" />
        </div>

        {/* Hero Container with blue background */}
        <div className="hero-container relative w-full min-h-screen flex flex-col rounded-t-[20px] px-6 md:px-12 pt-6">
          <HeroBackground />
          {/* relative w-full h-screen flex flex-col justify-between rounded-b-[30px] hero-container px-6 md:px-16 pt-6 */}

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
          <div className="relative z-10 flex-1 flex flex-col justify-center">
            <div className="grid lg:grid-cols-2 gap-8 items-start">
              {/* Left - Heading */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-50px" }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              >
                <h1 className="text-4xl md:text-5xl lg:text-[56px] font-bold text-white leading-[1.15]">
                  Smart Digital<br />
                  Stock Market
                </h1>
              </motion.div>

              {/* Right - Paragraph */}
              <motion.div
                className="lg:pt-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-50px" }}
                transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              >
                <p className="text-white/90 text-[15px] max-w-[340px] leading-relaxed">
                  Manage your finance easily, quickly, and securely. Stockbazaari helps you manage transaction, digital cards, and financial analytics in one intuitive platform
                </p>
              </motion.div>
            </div>

            {/* Cards Row */}
            {/* Cards Section */}
            <div className="mt-12">
              
              {/* Desktop View */}
              <div className="hidden lg:flex justify-center gap-6 mb-4">
                {[SpendingCard, DownloadCard, AnalysisCard].map((Card, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, margin: "-50px" }}
                    transition={{
                      duration: 0.8,
                      delay: 0.2 + i * 0.15,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  >
                    <Card />
                  </motion.div>
                ))}
              </div>

              {/* Mobile & Tablet Slider */}
              <div className="lg:hidden relative w-full overflow-hidden">

                <motion.div
                  className="flex"
                  animate={{
                    x: `-${index * 100}%`,
                  }}
                  transition={{
                    duration: 0.8,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  drag="x"
                  dragConstraints={{
                    left: -(cards.length - 1) * window.innerWidth,
                    right: 0,
                  }}
                  dragElastic={0.1}
                >
                  {cards.map((Card, i) => (
                    <div
                      key={i}
                      className="
                        shrink-0
                        w-full
                        sm:w-1/2
                        flex
                        justify-center
                        px-4
                      "
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

          {/* Bottom cutouts */}
          {/* <HeroBottomNotches /> */}
        </div>

        {/* Bottom section outside hero */}
        
      </div>
    </section>
  );
};

export default HeroSection;
