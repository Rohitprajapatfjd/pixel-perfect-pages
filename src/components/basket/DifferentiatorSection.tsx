import { useState } from "react";
import { ChevronRight, Shield, Rocket, Receipt, BarChart3, Coins } from "lucide-react";

const items = [
  { icon: Shield, label: "Risk Management" },
  { icon: Rocket, label: "Onboarding" },
  { icon: Receipt, label: "Tax Efficiency" },
  { icon: Coins, label: "Fees" },
  { icon: BarChart3, label: "Real-Time Tracking" },
];

const ersContent: Record<string, { title: string; desc: string }> = {
  "Risk Management": {
    title: "ERS Basket",
    desc: "Better risk management through dual expertise (PMS manager + Manual Fund Manager) guiding your portfolio.",
  },
  Onboarding: {
    title: "ERS Basket",
    desc: "Seamless digital onboarding with KYC verification completed in under 10 minutes.",
  },
  "Tax Efficiency": {
    title: "ERS Basket",
    desc: "Tax-loss harvesting strategies built into every basket for maximum after-tax returns.",
  },
  Fees: {
    title: "ERS Basket",
    desc: "Transparent, flat-fee pricing with no hidden charges or performance-based fees.",
  },
  "Real-Time Tracking": {
    title: "ERS Basket",
    desc: "Live portfolio tracking with real-time P&L, allocation breakdowns, and alerts.",
  },
};

const tradContent: Record<string, string> = {
  "Risk Management": "Highest risk due to dependency on single manager in stock BASKET",
  Onboarding: "Manual paperwork-heavy process taking days to complete.",
  "Tax Efficiency": "No built-in tax optimization, handled manually by investors.",
  Fees: "Complex fee structures with hidden charges and high expense ratios.",
  "Real-Time Tracking": "Delayed reporting with monthly or quarterly updates only.",
};

const DifferentiatorSection = () => {
  const [active, setActive] = useState("Risk Management");

  return (
    <section className="bg-[hsl(var(--page-bg))] py-16 px-6">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-10">
          Why is <span className="text-primary">Stockbazaari</span> different from other Wealth<br />Managers?
        </h2>

        <div className="grid md:grid-cols-[1fr_1fr] gap-8 items-start">
          {/* Left - Clickable items */}
          <div className="space-y-0">
            {items.map(({ icon: Icon, label }) => (
              <button
                key={label}
                onClick={() => setActive(label)}
                className={`w-full flex items-center justify-between px-5 py-4 border-b border-border/40 text-left transition-colors ${
                  active === label ? "bg-muted/50" : "hover:bg-muted/30"
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium text-foreground">{label}</span>
                </div>
                <ChevronRight className="w-4 h-4 text-muted-foreground" />
              </button>
            ))}
          </div>

          {/* Right - Comparison card */}
          <div className="bg-gradient-to-br from-primary to-[#1d3fd8] rounded-2xl p-6 text-white min-h-[320px] flex flex-col justify-between">
            {/* ERS */}
            <div className="mb-6">
              <h3 className="text-lg font-bold mb-2">
                Stockbazaari <span className="text-white/80">{ersContent[active]?.title}</span>
              </h3>
              <p className="text-white/80 text-sm leading-relaxed">
                {ersContent[active]?.desc}
              </p>
            </div>

            {/* VS badge */}
            <div className="flex justify-center my-2">
              <div className="w-10 h-10 rounded-full bg-white/20 border border-white/30 flex items-center justify-center text-xs font-bold">
                VS
              </div>
            </div>

            {/* Traditional */}
            <div className="mt-4">
              <h4 className="font-bold text-sm mb-2">Traditional Basket</h4>
              <p className="text-white/70 text-sm leading-relaxed">
                {tradContent[active]}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DifferentiatorSection;
