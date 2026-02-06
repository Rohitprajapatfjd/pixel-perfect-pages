const OurIllustration = () => {
  const data = [
    { company: "GPPL", entry: "RS.220.04 Jul", performance: "+4.68%", change: "Closed in 3d" },
    { company: "PAR DRUGS", entry: "RS.220.04 Jul", performance: "+4.60%", change: "Closed in 5d" },
    { company: "GMDC", entry: "RS.220.04 Jul", performance: "+4.30%", change: "Closed in 2d" },
    { company: "INFY", entry: "RS.220.04 Jul", performance: "+4.56%", change: "Closed in 3d" },
    { company: "UPL", entry: "RS.220.04 Jul", performance: "+4.88%", change: "Closed in 6d" },
  ];

  return (
    <section className="bg-muted/30 py-16 px-6 md:px-12 lg:px-20">
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

        {/* Table */}
        <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr>
                  <th className="bg-primary/10 text-primary text-left py-4 px-6 text-base font-bold first:rounded-tl-xl">
                    Company
                  </th>
                  <th className="bg-emerald-500 text-white text-left py-4 px-6 text-base font-bold">
                    Entry Details
                  </th>
                  <th className="bg-primary/10 text-primary text-left py-4 px-6 text-base font-bold">
                    Performance
                  </th>
                  <th className="bg-emerald-500 text-white text-left py-4 px-6 text-base font-bold last:rounded-tr-xl">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.map((row, index) => (
                  <tr key={index} className="border-b border-muted last:border-0">
                    <td className="py-4 px-6">
                      <span className="bg-muted/50 text-foreground font-medium px-4 py-2 rounded-lg inline-block">
                        {row.company}
                      </span>
                    </td>
                    <td className="py-4 px-6">
                      <span className="bg-primary/10 text-primary font-medium px-4 py-2 rounded-lg inline-block">
                        {row.entry}
                      </span>
                    </td>
                    <td className="py-4 px-6">
                      <span className="text-emerald-600 font-semibold text-lg">
                        {row.performance}
                      </span>
                    </td>
                    <td className="py-4 px-6">
                      <span className="bg-emerald-100 text-emerald-700 font-medium px-4 py-2 rounded-lg inline-block">
                        {row.change}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurIllustration;
