import { Smartphone } from "lucide-react";

const DownloadCard = () => {
  return (
    <div className="feature-card w-full max-w-[220px] animate-float" style={{ animationDelay: "0.5s" }}>
      {/* Header */}
      <div className="flex items-center gap-2 mb-4">
        <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
          <Smartphone className="w-4 h-4 text-primary" />
        </div>
        <span className="text-sm font-semibold text-card-foreground">Download App</span>
      </div>

      {/* Balance Card */}
      <div className="bg-accent rounded-xl p-4 text-accent-foreground mb-4">
        <div className="flex items-center justify-between mb-1">
          <span className="text-xs opacity-90">Your Balance NeoPay</span>
          <div className="w-6 h-4 bg-accent-foreground/20 rounded"></div>
        </div>
        <p className="text-[10px] opacity-75 mb-2">Total Your Balance</p>
        <p className="text-2xl font-bold">$8,420.00</p>
      </div>

      {/* Progress Bar */}
      <div className="mb-3">
        <div className="flex justify-between text-[10px] text-muted-foreground mb-1">
          <span>0%</span>
          <span>Total Balance for the last 30 days</span>
        </div>
        <div className="h-1.5 bg-muted rounded-full overflow-hidden">
          <div className="h-full w-3/5 bg-primary rounded-full"></div>
        </div>
      </div>

      {/* Legend */}
      <div className="flex items-center gap-4 text-[10px]">
        <div className="flex items-center gap-1">
          <span className="w-2 h-2 rounded-full bg-primary"></span>
          <span className="text-muted-foreground">Total Balance</span>
        </div>
        <div className="flex items-center gap-1">
          <span className="w-2 h-2 rounded-full bg-accent"></span>
          <span className="text-muted-foreground">Total Expense</span>
        </div>
      </div>
    </div>
  );
};

export default DownloadCard;
