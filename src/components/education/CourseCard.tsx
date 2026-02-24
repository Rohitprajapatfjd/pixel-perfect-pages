import { Star, Clock, Users, MessageCircle, FileText } from "lucide-react";

interface CourseCardProps {
  title: string;
  description: string;
  price: number;
  originalPrice: number;
  discount: string;
  urgency: string;
  isFeatured?: boolean;
}

const CourseCard = ({
  title,
  description,
  price,
  originalPrice,
  discount,
  urgency,
  isFeatured = false,
}: CourseCardProps) => {
  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow w-full max-w-[320px] md:max-w-none mx-auto">
      {/* Card Image Area */}
      <div className={`relative h-[160px] ${isFeatured ? "bg-gradient-to-br from-[#1f51af] via-[#1c49a0] to-[#163d87]" : "bg-gradient-to-br from-[#2454ad] via-[#1f4aa2] to-[#173d8a]"}`}>
        {/* Badges */}
        <div className="absolute top-3 left-3 flex gap-2">
          <span className="text-xs font-semibold px-3 py-1 rounded-md bg-[#EF4642] text-white">
            BESTSELLER
          </span>
          <span className="text-xs font-medium px-3 py-1 rounded-md bg-[#F4F6FB] text-[#1D3F8D]">
            Intermidiete
          </span>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-4">
        <h3 className="font-bold text-[15px] text-gray-900 mb-1">{title}</h3>
        <p className="text-xs text-gray-500 leading-relaxed mb-3">{description}</p>

        {/* Icons Row */}
        <div className="flex items-center gap-3 mb-3">
          <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
          <Clock className="w-4 h-4 text-gray-400" />
          <Users className="w-4 h-4 text-gray-400" />
        </div>

        {/* Pricing */}
        <div className="flex items-center gap-2 mb-1">
          <span className="text-xl font-bold text-gray-900">₹ {price.toLocaleString()}</span>
          <span className="text-sm text-gray-400 line-through">₹{originalPrice.toLocaleString()}</span>
          <span className="text-xs font-semibold text-green-600 bg-green-50 px-2 py-0.5 rounded">
            {discount}
          </span>
        </div>
        <p className="text-xs text-[#EF4642] mb-3">{urgency}</p>

        {/* Enroll Button */}
        <button className={`w-full py-2.5 rounded-lg text-sm font-semibold text-white transition-colors ${
          isFeatured
            ? "bg-cyan-500 hover:bg-cyan-600"
            : "bg-blue-600 hover:bg-blue-700"
        }`}>
          Enroll Now
        </button>

        {/* Bottom Links */}
        <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-100">
          <button className="flex items-center gap-1 text-xs text-gray-500 hover:text-gray-700">
            <MessageCircle className="w-3 h-3" />
            Talk now
          </button>
          <button className="flex items-center gap-1 text-xs text-gray-500 hover:text-gray-700">
            <FileText className="w-3 h-3" />
            Broucher
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
