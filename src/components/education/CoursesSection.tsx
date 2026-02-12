import { Sparkles } from "lucide-react";
import CourseCard from "./CourseCard";
import SpecialOfferSidebar from "./SpecialOfferSidebar";

const courses = [
  {
    title: "Technical Analysis Masterclasses",
    description: "learn advanced chart patterns and tracing from sebi registreerd agents",
    price: 2999,
    originalPrice: 4999,
    discount: "40% off",
    urgency: "offer left for one day",
  },
  {
    title: "Technical Analysis Masterclasses",
    description: "learn advanced chart patterns and tracing from sebi registreerd agents",
    price: 2999,
    originalPrice: 4999,
    discount: "40% off",
    urgency: "offer left for one day",
  },
  {
    title: "Technical Analysis Masterclasses",
    description: "learn advanced chart patterns and tracing from sebi registreerd agents",
    price: 2999,
    originalPrice: 4999,
    discount: "40% off",
    urgency: "offer left for one day",
    isFeatured: true,
  },
  {
    title: "Technical Analysis Masterclasses",
    description: "learn advanced chart patterns and tracing from sebi registreerd agents",
    price: 2999,
    originalPrice: 4999,
    discount: "40% off",
    urgency: "offer left for one day",
  },
  {
    title: "Technical Analysis Masterclasses",
    description: "learn advanced chart patterns and tracing from sebi registreerd agents",
    price: 2999,
    originalPrice: 4999,
    discount: "40% off",
    urgency: "offer left for one day",
  },
  {
    title: "Technical Analysis Masterclasses",
    description: "learn advanced chart patterns and tracing from sebi registreerd agents",
    price: 2999,
    originalPrice: 4999,
    discount: "40% off",
    urgency: "offer left for one day",
    isFeatured: true,
  },
];

const CoursesSection = () => {
  return (
    <section className="py-12 px-6 md:px-12 lg:px-20 bg-[hsl(var(--page-bg))]">
      <div className="max-w-7xl mx-auto">
        {/* Section Badge */}
        <div className="mb-8">
          <span className="inline-flex items-center gap-2 bg-blue-600 text-white text-sm font-medium px-5 py-2.5 rounded-lg">
            <Sparkles className="w-4 h-4" />
            Limited Time Offer
          </span>
        </div>

        {/* Grid: Cards + Sidebar */}
        <div className="flex gap-6">
          {/* Course Cards Grid */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {courses.map((course, index) => (
              <CourseCard key={index} {...course} />
            ))}
          </div>

          {/* Right Sidebar */}
          <div className="hidden lg:block w-[280px] flex-shrink-0">
            <SpecialOfferSidebar />
          </div>
        </div>

        {/* Process Badge */}
        <div className="mt-10">
          <span className="inline-flex items-center gap-2 bg-blue-600 text-white text-sm font-medium px-5 py-2.5 rounded-lg">
            <Sparkles className="w-4 h-4" />
            Process
          </span>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
