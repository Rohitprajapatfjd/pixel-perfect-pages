import { Star } from "lucide-react";

const SpendingCard = () => {
  return (
    <div className="bg-white rounded-2xl p-4 shadow-card w-[260px] flex-shrink-0">
      {/* Header */}
      <div className="mb-4">
        <h3 className="text-sm font-semibold text-foreground mb-3">Spending Summary</h3>
        
        {/* Stats Row */}
        <div className="flex items-center gap-4 text-xs">
          <div className="flex items-center gap-2">
            <span className="text-muted-foreground">Spend</span>
            <div className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-destructive"></span>
              <span className="font-semibold text-foreground">$2,879.00</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-muted-foreground">Received</span>
            <div className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-primary"></span>
              <span className="font-semibold text-foreground">$3,980.65</span>
            </div>
          </div>
          <span className="text-muted-foreground">Add</span>
        </div>
      </div>

      {/* Top Rated Badge */}
      <div className="bg-primary/10 rounded-xl p-3 mb-3">
        <div className="flex items-center gap-1 mb-2">
          <span className="text-xs font-medium text-primary">⭐ Top-Rated</span>
          <div className="flex ml-auto">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
            ))}
          </div>
        </div>
        
        {/* Avatar and Quote */}
        <div className="flex items-start gap-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-primary-dark flex-shrink-0"></div>
          <div>
            <p className="text-xs font-medium text-foreground">William L., Entrepreneur</p>
            <p className="text-[10px] text-muted-foreground mt-1 leading-relaxed">
              "It's not just a digital wallet – it's like having a personal financial assistant in my pocket."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpendingCard;
