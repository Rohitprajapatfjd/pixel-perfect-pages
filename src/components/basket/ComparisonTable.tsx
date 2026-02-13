import { ArrowRight } from "lucide-react";

const features = [
  "Research Quality",
  "Research Management",
  "Strategy Types",
  "Transparency",
  "Cost Structure",
  "Platform",
];

const stockbazaariValues = [
  "Data-backed & actionable",
  "Defined risk on every trade",
  "Algo, Basket & Manual",
  "Clear logic & performance",
  "Simple & value-driven",
  "App+ Web ecosystem",
];

const othersValues = [
  "Generic tips",
  "Often unclear",
  "Limited",
  "Partial",
  "High & hidden fees",
  "Mostly Telegram/Calls",
];

const ComparisonTable = () => {
  return (
    <section className="bg-[hsl(var(--page-bg))] py-16 px-6">
      <div className="max-w-[1200px] mx-auto grid md:grid-cols-[1fr_2fr] gap-10 items-start">
        {/* Left - Why investors */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground leading-snug mb-4">
            Why investors<br />choose Stockbazaari<br />Basket?
          </h2>
          <p className="text-muted-foreground text-sm leading-relaxed mb-6 max-w-xs">
            Our research combines data, analysis, and market expertise to help you invest with clarity and confidence.
          </p>
          <button className="flex items-center gap-2 border border-foreground/20 px-5 py-2.5 rounded-full font-medium text-sm hover:bg-muted transition-colors">
            Schedule an expert call
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Right - Comparison Table */}
        <div className="bg-card rounded-2xl overflow-hidden shadow-sm border">
          {/* Header */}
          <div className="grid grid-cols-3 text-sm font-semibold">
            <div className="px-6 py-4 text-muted-foreground">Feature</div>
            <div className="px-6 py-4 bg-primary text-primary-foreground">Stockbazaari</div>
            <div className="px-6 py-4 text-muted-foreground">Others</div>
          </div>

          {/* Rows */}
          {features.map((feature, i) => (
            <div key={i} className="grid grid-cols-3 text-sm border-t border-border/50">
              <div className="px-6 py-3.5 text-muted-foreground">{feature}</div>
              <div className="px-6 py-3.5 bg-primary/5 text-foreground font-medium">{stockbazaariValues[i]}</div>
              <div className="px-6 py-3.5 text-muted-foreground">{othersValues[i]}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;
