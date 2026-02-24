import { useEffect, useRef } from "react";

const OurIllustration = () => {
  const sliderRef = useRef(null);

  const data = [
    { company: "GPPL", entry: "RS.220.04 Jul", performance: "+4.68%", change: "Closed in 3d" },
    { company: "PAR DRUGS", entry: "RS.220.04 Jul", performance: "+4.60%", change: "Closed in 5d" },
    { company: "GMDC", entry: "RS.220.04 Jul", performance: "+4.30%", change: "Closed in 2d" },
    { company: "INFY", entry: "RS.220.04 Jul", performance: "+4.56%", change: "Closed in 3d" },
    { company: "UPL", entry: "RS.220.04 Jul", performance: "+4.88%", change: "Closed in 6d" },
  ];

  // ✅ Auto Slide (Only Mobile)
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    let index = 0;

    const interval = setInterval(() => {
      if (window.innerWidth >= 1024) return; // stop on desktop

      const cards = slider.children;
      index = (index + 1) % cards.length;

      slider.scrollTo({
        left: cards[index].offsetLeft,
        behavior: "smooth",
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-muted/30 py-16 px-4 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">

        {/* Header Badge */}
        <div className="mb-8">
          <span className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-semibold">
            Our illustration
          </span>
        </div>

        <div className="max-w-6xl mx-auto relative">

          {/* Main Card */}
          <div className="border-2 border-blue-600 rounded-2xl p-6 bg-[#ECF3FA]">

            {/* 🔥 Mobile Slider + Desktop Grid */}
            <div
              ref={sliderRef}
              className="
                flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth
                lg:grid lg:grid-cols-4 lg:overflow-visible
                text-center text-[#0C1892] font-medium
              "
            >

              {/* Company */}
              <div className="min-w-[85%] snap-center flex-shrink-0 lg:min-w-0 bg-white rounded-xl">
                <div className="bg-[#BEEBFC] py-2 rounded-lg font-semibold">
                  Company
                </div>
                <div className="p-3 space-y-3">
                  {data.map((item, index) => (
                    <div key={index} className="bg-[#ECF3FA] py-2 rounded-lg">
                      {item.company}
                    </div>
                  ))}
                </div>
              </div>

              {/* Entry Details */}
              <div className="min-w-[85%] snap-center flex-shrink-0 lg:min-w-0 bg-white rounded-xl">
                <div className="bg-[#BEEBFC] py-2 rounded-lg font-semibold">
                  Entry Details
                </div>
                <div className="p-3 space-y-3">
                  {data.map((item, index) => (
                    <div key={index} className="bg-[#ECF3FA] py-2 rounded-lg">
                      {item.entry}
                    </div>
                  ))}
                </div>
              </div>

              {/* Performance */}
              <div className="min-w-[85%] snap-center flex-shrink-0 lg:min-w-0 bg-white rounded-xl">
                <div className="bg-[#BEEBFC] py-2 rounded-lg font-semibold">
                  Performance
                </div>
                <div className="p-3 space-y-3">
                  {data.map((item, index) => (
                    <div key={index} className="bg-[#ECF3FA] py-2 rounded-lg">
                      {item.performance}
                    </div>
                  ))}
                </div>
              </div>

              {/* Status */}
              <div className="min-w-[85%] snap-center flex-shrink-0 lg:min-w-0 bg-white rounded-xl">
                <div className="bg-[#BEEBFC] py-2 rounded-lg font-semibold">
                  Status
                </div>
                <div className="p-3 space-y-3">
                  {data.map((item, index) => (
                    <div key={index} className="bg-[#ECF3FA] py-2 rounded-lg">
                      {item.change}
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* Responsive Bottom Curve */}
          <div
            className="
              absolute left-1/2 -bottom-[0.7rem] sm:-bottom-[0.8rem]  -translate-x-1/2
              w-4/5 sm:w-3/5 lg:w-[35rem]
              h-[0.8rem] md:h-[1rem]
              bg-[#ECF3FA]
              border-2 border-blue-600
              border-t-0
              rounded-b-[40px]
            "
          ></div>

        </div>
      </div>
    </section>
  );
};

export default OurIllustration;