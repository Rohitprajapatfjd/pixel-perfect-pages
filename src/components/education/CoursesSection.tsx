import { Sparkles } from "lucide-react";
import { useState } from "react";
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
  const [activeCard, setActiveCard] = useState(0);

  const nextCard = () => {
    setActiveCard((current) => (current + 1) % courses.length);
  };

  const prevCard = () => {
    setActiveCard((current) => (current - 1 + courses.length) % courses.length);
  };

  return (
    <section className="py-10 px-4 sm:px-6 md:px-12 lg:px-20 bg-[hsl(var(--page-bg))]">
      <div className="max-w-7xl mx-auto bg-white/60 rounded-[30px] p-4 sm:p-6 md:p-8 relative overflow-hidden">
        <div className="absolute -top-20 -left-20 w-52 h-52 rounded-full bg-blue-500/10" />
        <div className="absolute -bottom-20 -right-20 w-52 h-52 rounded-full bg-cyan-500/10" />

        {/* Section Badge */}
        <div className="mb-6 relative z-10">
          <span className="inline-flex items-center gap-2 bg-blue-600 text-white text-sm font-medium px-5 py-2.5 rounded-xl">
            <Sparkles className="w-4 h-4" />
            Limited Time Offer
          </span>
        </div>

        {/* Grid: Cards + Sidebar */}
        <div className="flex flex-col lg:flex-row gap-6 relative z-10">
          {/* Mobile slider */}
          <div className="lg:hidden">
            <div className="flex items-center justify-between mb-3">
              <button onClick={prevCard} className="text-xs font-semibold text-blue-700 bg-blue-100 px-3 py-1.5 rounded-full">
                Prev
              </button>
              <button onClick={nextCard} className="text-xs font-semibold text-blue-700 bg-blue-100 px-3 py-1.5 rounded-full">
                Next
              </button>
            </div>

            <CourseCard {...courses[activeCard]} />

            <div className="flex items-center justify-center gap-2 mt-4">
              {courses.map((_, index) => (
                <button
                  key={index}
                  aria-label={`Go to slide ${index + 1}`}
                  onClick={() => setActiveCard(index)}
                  className={`h-2 rounded-full transition-all ${activeCard === index ? "w-4 bg-blue-600" : "w-2 bg-blue-300"}`}
                />
              ))}
            </div>
          </div>

          {/* Course Cards Grid */}
          <div className="hidden lg:grid flex-1 grid-cols-2 xl:grid-cols-3 gap-5">
            {courses.map((course, index) => (
              <CourseCard key={index} {...course} />
            ))}
          </div>

          {/* Right Sidebar */}
          <div className="w-full lg:w-[280px] flex-shrink-0">
            <SpecialOfferSidebar />
          </div>
        </div>

        {/* Process Badge */}
        <div className="mt-10 relative z-10">
          <span className="inline-flex items-center gap-2 bg-blue-600 text-white text-sm font-medium px-5 py-2.5 rounded-xl">
            <Sparkles className="w-4 h-4" />
            Process
          </span>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
