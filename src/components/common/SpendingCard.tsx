import { Star, ArrowDown, ArrowUp, Asterisk } from "lucide-react";

const SpendingCard = () => {
  return (
    <div className="w-[280px] bg-white rounded-2xl px-4 py-3 shadow-xl flex-shrink-0">
      
      {/* Title */}
      <h3 className="text-sm font-semibold text-gray-800 mb-2">
        Spending Summary
      </h3>

      {/* Stats Row */}
      <div className="flex justify-between mb-3">
        
        {/* Spend */}
        <div>
          <p className="text-[11px] text-gray-400 mb-1">Spend</p>
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-gray-100 flex items-center justify-center">
              <ArrowDown className="w-3.5 h-3.5 text-gray-500" />
            </div>
            <p className="font-semibold text-gray-800 text-sm">
              $2,879.00
            </p>
          </div>
        </div>

        {/* Received */}
        <div>
          <p className="text-[11px] text-gray-400 mb-1">Received</p>
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-blue-600 flex items-center justify-center">
              <ArrowUp className="w-3.5 h-3.5 text-white" />
            </div>
            <p className="font-semibold text-gray-800 text-sm">
              $3,980.65
            </p>
          </div>
        </div>
        <div>
          <p className="text-[11px] text-gray-400 mb-1">Add</p>
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-gray-100 flex items-center justify-center">
              <Asterisk className="w-3.5 h-3.5 text-gray-500" />
            </div>
          </div>
        </div>
      </div>

      {/* Review Section */}
      <div className="relative h-[105px] bg-blue-600 small-curve-card ">
      
        {/* Review Content */}
        <div className="absolute inset-0 py-4 px-2 text-white flex flex-col justify-between">
          
          {/* Top Row */}
          <div className="flex items-center">
            <div className="flex ml-auto gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-3 h-3 fill-yellow-300 text-yellow-300"
                />
              ))}
            </div>
          </div>

          {/* User Info */}
          <div className="flex items-start gap-2">
            <div className="w-5 h-5 rounded-full bg-white/20 backdrop-blur-md flex-shrink-0"></div>

            <div>
              <p className="text-xs font-semibold">
                William L., Entrepreneur
              </p>
              <p className="text-[10px] text-white/90 my-1 leading-relaxed">
                “It's not just a digital wallet — it's like having a personal
                financial assistant in my pocket.”
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default SpendingCard;