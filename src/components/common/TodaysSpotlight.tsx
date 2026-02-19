import { Play, Target, OctagonX, Youtube } from "lucide-react";
import { useEffect, useState } from "react";

const TodaysSpotlight = () => {
  return (
    <section className="bg-muted/30 h-screen flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        <div className="bg-[#ECF3FA] rounded-[28px] px-5 py-3 shadow-sm curve-box h-[92vh] flex flex-col">

          {/* Top Header */}
          <div className="flex items-center justify-between px-3 mb-2">
            <SpotlightButton />

            <div className="text-right hidden sm:block">
              <p className="text-2xl font-bold text-primary">
                93.84<span className="text-lg">%</span>
              </p>
              <p className="text-xs text-muted-foreground">
                Instant transfer Stockbazaari
              </p>
            </div>
          </div>

          {/* Main Grid */}
          <div className="grid lg:grid-cols-2 gap-0 flex-1 overflow-hidden">

            {/* LEFT SIDE */}
            <div className="bg-primary rounded-2xl p-3 text-white h-full flex flex-col justify-between">

              {/* Header */}
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center gap-2">
                  <span className="text-lg">🔥</span>
                  <span className="font-semibold text-lg">
                    Hot Pick Of The Day
                  </span>
                </div>
              </div>

              {/* Stock Card */}
              <div className="spotlight-stock-card px-4 py-2 mb-5">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-lg md:text-xl leading-none font-extrabold tracking-wide">RELIANCE</h3>
                    <p className="text-sm text-white/90 mt-2">NSE RELIANCE</p>
                  </div>

                  <span className="bg-[#33D35B] px-6 py-1 rounded-lg text-lg md:text-xl font-bold leading-none">
                    +3.45%
                  </span>
                </div>

                <div className="spotlight-price-strip mt-2 px-4 py-2 flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xl md:text-2xl leading-none font-bold text-[#FFD33D]">₹2,847.50</p>
                    <p className="text-sm md:text-base text-white/90 mt-2">Current Market Price</p>
                  </div>

                  <div className="rounded-2xl bg-[#DDE8DE] text-black px-5 min-w-[110px] md:min-w-[110px]">
                    <p className="text-base md:text-lg leading-none">Entry</p>
                    <p className="text-base md:text-base leading-none font-semibold">₹ 2820</p>
                  </div>
                </div>
              </div>

              {/* Target/Stop/Buy */}
              <div className="flex gap-3 mb-2">
                <div className="spotlight-action-card bg-white rounded-xl px-3 py-2 flex-1 text-center relative">
                  <span className="spotlight-action-badge">🎯</span>
                  <p className="text-sm md:text-lg mt-2 text-black">Target</p>
                  <p className="text-sm md:text-base text-primary font-semibold">₹ 3,050</p>
                </div>

                <div className="spotlight-action-card bg-[#EAF7E9] rounded-xl p-3 flex-1 text-center relative">
                  <span className="spotlight-action-badge">🛑</span>
                  <p className="text-sm md:text-lg mt-2 text-black">Stop</p>
                  <p className="text-sm md:text-base text-[#4A49E3] font-semibold">₹2,780</p>
                </div>

                <div className="spotlight-action-card bg-[#F4ECEC] rounded-xl p-3 flex-1 flex items-center justify-center gap-4 relative">
                  <button className="spotlight-trade-btn bg-[#40CC3E]">
                    BUY
                  </button>
                  <button className="spotlight-trade-btn bg-[#DA2222]">
                    SELL
                  </button>
                </div>
              </div>

              {/* Expert Analysis */}
              <StockMiniSlider/>

              {/* Confidence */}
              <div className="bg-primary-dark/30 rounded-lg p-3">
                <div className="flex justify-between text-xs mb-1">
                  <span>Confidence Level</span>
                  <span className="font-bold">85%</span>
                </div>
                <div className="h-1.5 bg-white/20 rounded-full">
                  <div className="h-full w-[85%] bg-white rounded-full"></div>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="px-3 py-2 bg-[#F7F0F0] h-full flex flex-col">

              {/* Header */}
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-bold text-sm">Stockbaazzari</h3>
                <button className="flex items-center gap-1 bg-red-600 text-white px-2 py-1 rounded text-xs">
                  <Youtube size={14} />
                  SUBSCRIBE
                </button>
              </div>

              <h3 className="text-base font-bold text-primary mb-2">
                Today's Market Insight
              </h3>

              {/* Video */}
              <div className="bg-slate-800 rounded-xl overflow-hidden aspect-[5/2] relative mb-2">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                    <Play className="text-white fill-white" size={18} />
                  </div>
                </div>
              </div>

              {/* Skeleton */}
              <div className="space-y-2">
                <div className="flex gap-2">
                  <div className="h-12 bg-gray-300 rounded-lg flex-1"></div>
                  <div className="flex-1 space-y-1">
                    <div className="h-2 bg-gray-300 rounded w-full"></div>
                    <div className="h-2 bg-gray-300 rounded w-3/4"></div>
                  </div>
                </div>

                <div className="flex gap-2">
                  <div className="h-12 bg-gray-300 rounded-lg flex-1"></div>
                  <div className="flex-1 space-y-1">
                    <div className="h-2 bg-gray-300 rounded w-full"></div>
                    <div className="h-2 bg-gray-300 rounded w-1/2"></div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const SpotlightButton = () => {
  return (
    <button className="flex items-center gap-2 bg-primary text-primary-foreground px-5 py-3 rounded-full font-medium text-sm hover:bg-primary-dark transition-colors button-shadow">
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A2 2 0 013 12V7a4 4 0 014-4z" />
      </svg>
      Today's Spotlight
    </button>
  );
};

const StockMiniSlider = () => {
  const stocks = [
    { name: "RELIANCE", price: "₹2,847.50", change: "+2.1%" },
    { name: "TCS", price: "₹3,921.20", change: "+1.4%" },
    { name: "HDFCBANK", price: "₹1,621.10", change: "-0.6%" },
    { name: "INFY", price: "₹1,502.60", change: "+3.2%" },
    { name: "ITC", price: "₹421.30", change: "+0.9%" },
    { name: "SBIN", price: "₹742.15", change: "+1.8%" },
  ];

  const [start, setStart] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStart((prev) => (prev + 1) % stocks.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const visibleStocks = [
    stocks[start % stocks.length],
    stocks[(start + 1) % stocks.length],
    stocks[(start + 2) % stocks.length],
    stocks[(start + 3) % stocks.length],
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-2">
      {visibleStocks.map((stock, i) => (
        <div
          key={i}
          className="rounded-lg bg-white/80 backdrop-blur border border-white/40 p-2 shadow-sm transition-all duration-300 hover:shadow-md"
        >
          <p className="text-[10px] text-gray-950">
            {new Date().toLocaleDateString("en-GB", {
              day: "2-digit",
              month: "short",
            })}
          </p>
          <div className="text-center">
             <p className="text-xs text-[#FFC828] font-semibold mt-1">
              {stock.name}
            </p>

            <p className="text-sm font-bold text-primary">
              {stock.price}
            </p>
          </div>

          <p
            className={`text-[10px] font-semibold mt-1 ${
              stock.change.startsWith("+")
                ? "text-emerald-500"
                : "text-red-500"
            }`}
          >
            {stock.change}
          </p>
        </div>
      ))}
    </div>
  );
};


export default TodaysSpotlight;
