import { Tag } from "lucide-react";

const BottomSection = () => {
  return (
    <section className="bg-background py-8 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Today's Spotlight Button */}
        <button className="flex items-center gap-2 bg-primary text-primary-foreground px-5 py-3 rounded-xl font-medium text-sm hover:bg-primary-dark transition-colors shadow-button">
          <Tag className="w-4 h-4" />
          Today's Spotlight
        </button>

        {/* Stats */}
        <div className="text-right">
          <p className="text-5xl md:text-6xl font-bold text-muted-foreground/30">
            93.84<span className="text-3xl">%</span>
          </p>
          <p className="text-sm text-muted-foreground">Instant transfer Stockbazaari</p>
        </div>
      </div>
    </section>
  );
};

export default BottomSection;
