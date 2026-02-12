import { User, Download, Phone } from "lucide-react";

const EducationCTA = () => {
  return (
    <section className="bg-gradient-to-r from-blue-700 via-blue-600 to-blue-800 py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl lg:text-[42px] font-bold text-yellow-300 mb-3 leading-tight">
          Still Confused? Talk to Our Instructors!
        </h2>
        <p className="text-white/80 text-sm md:text-base mb-8 max-w-xl mx-auto">
          Get personalized guidance from industry experts. Book a free 15-minute consultation call.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <button className="flex items-center gap-2 bg-white text-blue-700 px-6 py-3 rounded-lg text-sm font-semibold hover:bg-gray-50 transition-colors">
            <User className="w-4 h-4" />
            Talk to Instructor
          </button>
          <button className="flex items-center gap-2 bg-blue-900 text-white px-6 py-3 rounded-lg text-sm font-semibold hover:bg-blue-950 transition-colors">
            <Download className="w-4 h-4" />
            Download All Brochures
          </button>
          <button className="flex items-center gap-2 bg-green-500 text-white px-6 py-3 rounded-lg text-sm font-semibold hover:bg-green-600 transition-colors">
            <Phone className="w-4 h-4" />
            WhatsApp Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default EducationCTA;
