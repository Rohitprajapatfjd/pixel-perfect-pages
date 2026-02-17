const OurIllustration = () => {
  const data = [
    { company: "GPPL", entry: "RS.220.04 Jul", performance: "+4.68%", change: "Closed in 3d" },
    { company: "PAR DRUGS", entry: "RS.220.04 Jul", performance: "+4.60%", change: "Closed in 5d" },
    { company: "GMDC", entry: "RS.220.04 Jul", performance: "+4.30%", change: "Closed in 2d" },
    { company: "INFY", entry: "RS.220.04 Jul", performance: "+4.56%", change: "Closed in 3d" },
    { company: "UPL", entry: "RS.220.04 Jul", performance: "+4.88%", change: "Closed in 6d" },
  ];

  return (
    <section className="bg-muted/30 py-8 px-6 md:px-12 lg:px-20 w-full">
      <div className="max-w-7xl mx-auto">
        {/* Header Badge */}
        <div className="mb-8">
          <span className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-semibold">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
            Our illustration
          </span>
        </div>
          <div className="max-w-6xl mx-auto relative">

            {/* Main Card */}
            <div className="border-2 border-blue-600 rounded-2xl p-6 bg-[#ECF3FA]">
              <div className="grid grid-cols-4 gap-6 text-center text-[#0C1892] font-medium">

                {/* Company */}
                <div className="bg-white rounded-xl">
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
                <div className="bg-white rounded-xl">
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
                <div className="bg-white rounded-xl">
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
                <div className="bg-white rounded-xl">
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

            {/* Bottom Curve */}
            <div className="absolute left-1/2 -bottom-[0.9rem] transform -translate-x-1/2
                  w-[35rem] h-[1rem] bg-[#ECF3FA]
                  border-2 border-blue-600
                  border-t-0
                  rounded-b-[40px]">
            </div>

          </div>
      </div>
    </section>
  );
};

export default OurIllustration;
