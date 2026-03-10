import { Download, Minus } from "lucide-react";

const DownloadCard = () => {
  return (
    <div className="w-[220px] rounded-[26px] flex-shrink-0">
      
      {/* Header */}
      <div className="flex items-center gap-3 mb-2">
        <div className="w-8 h-8 rounded-xl bg-white shadow-md flex items-center justify-center">
          <Download className="w-4 h-4 text-blue-600" />
        </div>
        <h3 className="text-[15px] font-semibold text-white">
          Download App
        </h3>
      </div>

      {/* Inner Balance Card */}
      <div className="bg-[#f6f7fb] rounded-[16px] px-3 py-5">
        
        {/* Blue Pill */}
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-700 to-blue-500 text-white text-[9px] px-3 py-2 rounded-full mb-3 shadow-md">
          <span className="w-2 h-2 bg-white/70 rounded-full"></span>
          Your Balance NeoPay
        </div>

        {/* Balance Row */}
        <div className="flex items-start justify-between mb-3">
          <div>
            <p className="text-[9px] text-gray-400 mb-1">
              Total Your Balance
            </p>
            <p className="text-[18px] font-bold text-gray-900 leading-none tracking-tight">
              $8,420.00
            </p>
          </div>

          <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
            <Minus className="w-4 h-4 text-blue-600" />
          </div>
        </div>

        {/* Progress */}
        <div className="mb-2">
          <div className="h-[3px] bg-gray-200 rounded-full overflow-hidden">
            <div className="h-full w-[65%] bg-gradient-to-r from-blue-700 to-blue-500 rounded-full"></div>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="flex items-center justify-between text-[8px]">
          <span className="bg-green-100 text-green-600 px-3 py-1 rounded-md font-medium">
            +15.8%
          </span>
           <div className="flex items-center gap-1">
            <span className="w-3 h-3 bg-blue-700 rounded-sm"></span>
            Total Income
          </div>
         
        </div>

        {/* Legend */}
        <div className="flex items-center justify-between gap-2 mt-2 text-[8px] text-gray-500">
          <span className="text-gray-400">
            Total Balance for the last 30 days
          </span>

          <div className="flex items-center gap-1">
            <span className="w-3 h-3 bg-gray-300 rounded-sm"></span>
            Total Expense
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadCard;