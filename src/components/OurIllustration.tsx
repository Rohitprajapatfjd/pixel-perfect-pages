const OurIllustration = () => {
  const data = [
    { company: "ONGC", entry: "RS.230.04 Jul", performance: "+6.95%", change: "Closed In 7M", status: "success" },
    { company: "FAIR DRUGS", entry: "RS.200.04 Jul", performance: "+4.60%", change: "Closed In 5d", status: "success" },
    { company: "GMDC", entry: "RS.220.04 Jul", performance: "+4.90%", change: "Closed In 3d", status: "success" },
    { company: "INFY", entry: "RS.205.04 Jul", performance: "+4.56%", change: "Closed In 3d", status: "success" },
    { company: "UPL", entry: "RS.220.04 Jul", performance: "+1.98%", change: "Closed In 6d", status: "warning" },
  ];

  return (
    <section className="bg-muted py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Header Badge */}
        <div className="flex items-center gap-2 mb-8">
          <span className="text-primary text-lg">●</span>
          <span className="text-primary font-semibold text-sm">Our Illustration</span>
        </div>

        {/* Table */}
        <div className="bg-card rounded-2xl overflow-hidden card-shadow">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-4 px-6 text-sm font-semibold text-primary">Company</th>
                  <th className="text-left py-4 px-6 text-sm font-semibold text-primary">Entry Details</th>
                  <th className="text-left py-4 px-6 text-sm font-semibold text-primary">Performance</th>
                  <th className="text-left py-4 px-6 text-sm font-semibold text-primary">Status</th>
                </tr>
              </thead>
              <tbody>
                {data.map((row, index) => (
                  <tr key={index} className="border-b border-border last:border-0 hover:bg-muted/50 transition-colors">
                    <td className="py-4 px-6 text-sm font-medium text-card-foreground">{row.company}</td>
                    <td className="py-4 px-6 text-sm text-muted-foreground">{row.entry}</td>
                    <td className="py-4 px-6">
                      <span className={`text-sm font-medium ${row.status === "warning" ? "text-star" : "text-accent"}`}>
                        {row.performance}
                      </span>
                    </td>
                    <td className="py-4 px-6">
                      <span className={`text-xs px-3 py-1 rounded-full ${
                        row.status === "warning" 
                          ? "bg-star/20 text-star" 
                          : "bg-accent/20 text-accent"
                      }`}>
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
