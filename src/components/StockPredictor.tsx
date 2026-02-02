import { TrendingUp, Calendar, ArrowUp } from "lucide-react";

const StockPredictor = () => {
  const events = [
    { title: "Q3 Results Declaration", date: "2024-02-10", type: "high" },
    { title: "Q4 Results Declaration", date: "2024-02-18", type: "low" },
  ];

  return (
    <section className="bg-background py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Header Badge */}
        <div className="flex items-center gap-2 mb-6">
          <span className="text-primary text-lg">▶</span>
          <span className="text-primary font-semibold text-sm">Stock Predictor</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left - Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-card-foreground mb-4">
              StockBazaari Shows Your<br />
              Effortless Prediction
            </h2>
            <h3 className="text-xl text-muted-foreground mb-8">
              Users Trust StockBazaari
            </h3>
            <p className="text-muted-foreground text-sm max-w-md">
              Built with enterprise-level security and designed for ease of use to empower individuals and businesses to transact.
            </p>
          </div>

          {/* Right - Stock Card */}
          <div className="space-y-6">
            {/* Main Stock Card */}
            <div className="bg-card rounded-2xl p-6 card-shadow">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h4 className="text-lg font-bold text-card-foreground">Reliance Industries Ltd</h4>
                  <span className="text-xs text-muted-foreground">Oil & Gas</span>
                </div>
              </div>

              <div className="flex items-end justify-between mb-6">
                <div>
                  <p className="text-4xl font-bold text-card-foreground">2745.87</p>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="bg-accent text-accent-foreground text-xs px-2 py-1 rounded font-medium">Buy</span>
                    <div className="flex items-center gap-1 text-accent text-sm">
                      <ArrowUp className="w-4 h-4" />
                      <span>+23.50 (1.2%)</span>
                    </div>
                  </div>
                </div>
                <div className="w-24 h-24 rounded-full border-4 border-primary flex items-center justify-center">
                  <div className="text-center">
                    <span className="text-2xl font-bold text-primary">20%</span>
                    <p className="text-[10px] text-muted-foreground">Buy<br />Hold</p>
                  </div>
                </div>
              </div>

              {/* Mini Stats */}
              <div className="grid grid-cols-4 gap-4 text-center text-xs">
                <div>
                  <p className="text-muted-foreground">P/E Ratio</p>
                  <p className="font-semibold text-card-foreground">24.5</p>
                </div>
                <div>
                  <p className="text-muted-foreground">P/E</p>
                  <p className="font-semibold text-card-foreground">24.5</p>
                </div>
                <div>
                  <p className="text-muted-foreground">P/B</p>
                  <p className="font-semibold text-card-foreground">2.8</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Div Yield</p>
                  <p className="font-semibold text-card-foreground">0.3%</p>
                </div>
              </div>

              {/* Progress Bars */}
              <div className="mt-6 space-y-3">
                <div className="flex items-center gap-3">
                  <span className="text-xs text-muted-foreground w-12">Buy</span>
                  <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full w-[80%] bg-accent rounded-full"></div>
                  </div>
                  <span className="text-xs text-muted-foreground">80%</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xs text-muted-foreground w-12">Hold</span>
                  <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full w-[50%] bg-primary rounded-full"></div>
                  </div>
                  <span className="text-xs text-muted-foreground">50%</span>
                </div>
              </div>
            </div>

            {/* Analysis Scores & Events */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-card rounded-2xl p-5 card-shadow">
                <h5 className="text-sm font-bold text-card-foreground mb-4">Analysis Scores</h5>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-xs text-muted-foreground">Fundamental Scores</span>
                    <span className="text-xs font-semibold text-primary">8.2/10</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-xs text-muted-foreground">Technical Scores</span>
                    <span className="text-xs font-semibold text-primary">7.0/10</span>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-2xl p-5 card-shadow">
                <h5 className="text-sm font-bold text-card-foreground mb-4">Upcoming Events</h5>
                <div className="space-y-3">
                  {events.map((event, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div>
                        <p className="text-xs font-medium text-card-foreground">{event.title}</p>
                        <p className="text-[10px] text-muted-foreground">{event.date}</p>
                      </div>
                      <span className={`text-[10px] px-2 py-1 rounded ${
                        event.type === "high" ? "bg-accent text-accent-foreground" : "bg-primary text-primary-foreground"
                      }`}>
                        {event.type === "high" ? "High Impact" : "Low Impact"}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StockPredictor;
