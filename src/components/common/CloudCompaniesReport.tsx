import { TrendingUp, TrendingDown } from "lucide-react";

const CloudCompaniesReport = () => {
  const companies = [
    { name: "Cloud Company A", marketCap: "$100B", revenue: "$5B", growth: "+15%", risk: "Medium", investors: "500+", sentiment: "85%", recommendation: "Buy", isUp: true },
    { name: "Cloud Company B", marketCap: "$85B", revenue: "$4B", growth: "+12%", risk: "Low", investors: "450+", sentiment: "80%", recommendation: "Hold", isUp: true },
    { name: "Cloud Company C", marketCap: "$60B", revenue: "$3B", growth: "-5%", risk: "High", investors: "300+", sentiment: "60%", recommendation: "Sell", isUp: false },

  ];

  return (
    <section className="bg-muted py-4 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Header Badge */}
        <div className="my-2">
          <SpotlightButton/>
        </div>

        {/* Table */}
        <div className="bg-card rounded-2xl overflow-hidden card-shadow">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-primary text-primary-foreground text-sm">
                  <th className="text-left py-2 px-6 font-medium">Company Name</th>
                  <th className="text-left py-2 px-4 font-medium">Market Cap</th>
                  <th className="text-left py-2 px-4 font-medium">Revenue</th>
                  <th className="text-left py-2 px-4 font-medium">Growth</th>
                  <th className="text-left py-2 px-4 font-medium">Risk Assessment</th>
                  <th className="text-left py-2 px-4 font-medium">Investors</th>
                  <th className="text-left py-2 px-4 font-medium">Market Sentiment</th>
                  <th className="text-left py-2 px-4 font-medium">Recommendation</th>
                </tr>
              </thead>
              <tbody>
                {companies.map((company, index) => (
                  <tr key={index} className="border-b border-border last:border-0 hover:bg-muted/50 transition-colors">
                    <td className="py-1 px-6 text-sm font-medium text-card-foreground">{company.name}</td>
                    <td className="py-1 px-4 text-sm text-muted-foreground">{company.marketCap}</td>
                    <td className="py-1 px-4 text-sm text-muted-foreground">{company.revenue}</td>
                    <td className="py-1 px-4">
                      <div className="flex items-center gap-1">
                        {company.isUp ? (
                          <TrendingUp className="w-4 h-4 text-accent" />
                        ) : (
                          <TrendingDown className="w-4 h-4 text-destructive" />
                        )}
                        <span className={company.isUp ? "text-accent text-sm" : "text-destructive text-sm"}>
                          {company.growth}
                        </span>
                      </div>
                    </td>
                    <td className="py-1 px-4">
                      <span className={`text-xs px-2 py-1 rounded ${
                        company.risk === "Low" ? "bg-accent/20 text-accent" :
                        company.risk === "Medium" ? "bg-star/20 text-star" :
                        "bg-destructive/20 text-destructive"
                      }`}>
                        {company.risk}
                      </span>
                    </td>
                    <td className="py-1 px-4 text-sm text-muted-foreground">{company.investors}</td>
                    <td className="py-1 px-4 text-sm text-muted-foreground">{company.sentiment}</td>
                    <td className="py-1 px-4">
                      <span className={`text-xs font-medium px-3 py-1 rounded-full ${
                        company.recommendation === "Buy" ? "bg-accent text-accent-foreground" :
                        company.recommendation === "Hold" ? "bg-primary text-primary-foreground" :
                        "bg-destructive text-primary-foreground"
                      }`}>
                        {company.recommendation}
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

const SpotlightButton = () => {
  return (
    <button className="flex items-center gap-2 bg-primary text-primary-foreground px-5 py-3 rounded-full font-medium text-sm hover:bg-primary-dark transition-colors button-shadow">
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A2 2 0 013 12V7a4 4 0 014-4z" />
      </svg>
      Cloud Companies Report
    </button>
  );
};

export default CloudCompaniesReport;
