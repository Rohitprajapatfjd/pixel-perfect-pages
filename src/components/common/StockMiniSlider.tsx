import { useEffect, useRef } from "react";

const StockMiniSlider = () => {
  const sliderRef = useRef<HTMLDivElement>(null);

  const stocks = [
    { name: "RELIANCE", price: "₹2,847.50", change: "+2.1%" },
    { name: "TCS", price: "₹3,921.20", change: "+1.4%" },
    { name: "HDFCBANK", price: "₹1,621.10", change: "-0.6%" },
    { name: "INFY", price: "₹1,502.60", change: "+3.2%" },
    { name: "ITC", price: "₹421.30", change: "+0.9%" },
    { name: "SBIN", price: "₹742.15", change: "+1.8%" },
  ];

  // Duplicate stocks for seamless infinite scroll
  const extendedStocks = [...stocks, ...stocks];

  useEffect(() => {
    let animationFrame: number;
    let position = 0;

    const animate = () => {
      if (sliderRef.current) {
        position -= 0.5; // 🔥 speed control (lower = slower)
        if (Math.abs(position) >= sliderRef.current.scrollWidth / 2) {
          position = 0;
        }
        sliderRef.current.style.transform = `translateX(${position}px)`;
      }
      animationFrame = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <div className="overflow-hidden w-full py-2">
      <div
        ref={sliderRef}
        className="flex gap-4 whitespace-nowrap"
      >
        {extendedStocks.map((stock, i) => (
          <div
            key={i}
            className="min-w-[160px] 
            rounded-xl 
            bg-white/10 
            backdrop-blur-xl 
            border border-white/20 
            shadow-lg
            px-4 py-1
            text-center"
          >
            <div className="flex items-center justify-between">
                <p className="text-[10px] text-gray-300">
                    {new Date().toLocaleDateString("en-GB", {
                        day: "2-digit",
                        month: "short",
                    })}
                </p>
                <p className={`text-xs font-semibold mt-1 ${
                        stock.change.startsWith("+")
                        ? "text-emerald-400"
                        : "text-red-400"
                    }`}>
                    {stock.change}
                </p>
            </div>
           
            <div className="flex flex-col items-center justify-center">
                <p className="text-[11px] text-[#FFC828] font-semibold">
                    {stock.name}
                </p>

                <p className="text-[9px] font-bold text-white">
                    {stock.price}
                </p>

                <p className="text-[10px] mb-1">
                    Target
                </p>
                <p className="border px-1 text-[7px]"> 10 | 5</p>
            </div>
           
          </div>
        ))}
      </div>
    </div>
  );
};

export default StockMiniSlider;