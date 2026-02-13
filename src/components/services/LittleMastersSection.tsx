import { Play } from "lucide-react";

const LittleMastersSection = () => {
  return (
    <section className="bg-[hsl(var(--page-bg))] py-16 px-6">
      <div className="max-w-[1200px] mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-card-foreground mb-10">
          Little Masters, Small Cap Gems
        </h2>

        {/* Video Card */}
        <div className="max-w-[600px] mx-auto">
          <div className="bg-gray-500 rounded-2xl p-8 md:p-12 relative overflow-hidden min-h-[300px] flex flex-col justify-center">
            {/* Background overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-600/90 to-gray-500/90" />
            
            <div className="relative z-10 text-left">
              <div className="flex items-center gap-2 mb-4">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <rect width="20" height="20" rx="3" fill="white" />
                  <path d="M5 7L10 4L15 7V13L10 16L5 13V7Z" fill="#3B82F6" />
                </svg>
                <span className="text-white/80 text-sm">stockaxis<sup>™</sup></span>
              </div>
              
              <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-2">
                StockAxis<br />Little<br />Masters
              </h3>
              <p className="text-white/70 text-sm">Reap the budding Jewels!</p>
            </div>

            {/* Play button */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
              <button className="w-16 h-16 rounded-full border-2 border-white/60 flex items-center justify-center hover:bg-white/10 transition-colors">
                <Play className="w-6 h-6 text-white ml-1" fill="white" />
              </button>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-8 right-16 z-10">
              <div className="w-3 h-3 rounded-full border border-white/30" />
            </div>
            <div className="absolute bottom-12 left-1/2 z-10">
              <div className="w-3 h-3 rounded-full border border-white/30" />
            </div>
            <div className="absolute right-12 top-1/2 z-10">
              <div className="w-10 h-10 rounded-full border border-orange-400/60 flex items-center justify-center">
                <Target className="w-4 h-4 text-orange-400" />
              </div>
            </div>

            {/* Magnifying glass decoration */}
            <div className="absolute right-20 bottom-16 z-10 opacity-40">
              <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
                <circle cx="11" cy="11" r="8" />
                <path d="M21 21l-4.35-4.35" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Target = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" />
  </svg>
);

export default LittleMastersSection;
