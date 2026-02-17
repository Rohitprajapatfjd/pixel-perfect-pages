import { TrendingUp, TrendingDown } from "lucide-react";
import { StaggerContainer, StaggerItem } from "@/components/animations/ScrollAnimations";

const CloudCompaniesReport = () => {
  const companies = [
    { name: "Cloud Company A", marketCap: "$100B", revenue: "$5B", growth: "+15%", risk: "Medium", investors: "500+", sentiment: "85%", recommendation: "Buy", isUp: true },
    { name: "Cloud Company B", marketCap: "$85B", revenue: "$4B", growth: "+12%", risk: "Low", investors: "450+", sentiment: "80%", recommendation: "Hold", isUp: true },
    { name: "Cloud Company C", marketCap: "$60B", revenue: "$3B", growth: "-5%", risk: "High", investors: "300+", sentiment: "60%", recommendation: "Sell", isUp: false },
    { name: "Cloud Company D", marketCap: "$45B", revenue: "$2.5B", growth: "+8%", risk: "Medium", investors: "350+", sentiment: "72%", recommendation: "Buy", isUp: true },
  ];

  return (
    <section className="bg-muted py-12 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Header Badge */}
        <div className="flex items-center gap-2 mb-8">
          <div className="w-3 h-3 rounded-full bg-primary"></div>
          <span className="text-primary font-semibold">Cloud Companies Report</span>
        </div>

        {/* Table */}
        <div className="bg-card rounded-2xl overflow-hidden card-shadow">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-primary text-primary-foreground text-sm">
                  <th className="text-left py-4 px-6 font-medium">Company Name</th>
                  <th className="text-left py-4 px-4 font-medium">Market Cap</th>
                  <th className="text-left py-4 px-4 font-medium">Revenue</th>
                  <th className="text-left py-4 px-4 font-medium">Growth</th>
                  <th className="text-left py-4 px-4 font-medium">Risk Assessment</th>
                  <th className="text-left py-4 px-4 font-medium">Investors</th>
                  <th className="text-left py-4 px-4 font-medium">Market Sentiment</th>
                  <th className="text-left py-4 px-4 font-medium">Recommendation</th>
                </tr>
              </thead>
              <StaggerContainer className="contents">
                {companies.map((company, index) => (
                  <StaggerItem key={index}>
                  <tr className="border-b border-border last:border-0 hover:bg-muted/50 transition-colors">
                    <td className="py-4 px-6 text-sm font-medium text-card-foreground">{company.name}</td>
                    <td className="py-4 px-4 text-sm text-muted-foreground">{company.marketCap}</td>
                    <td className="py-4 px-4 text-sm text-muted-foreground">{company.revenue}</td>
                    <td className="py-4 px-4">
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
                    <td className="py-4 px-4">
                      <span className={`text-xs px-2 py-1 rounded ${
                        company.risk === "Low" ? "bg-accent/20 text-accent" :
                        company.risk === "Medium" ? "bg-star/20 text-star" :
                        "bg-destructive/20 text-destructive"
                      }`}>
                        {company.risk}
                      </span>
                    </td>
                    <td className="py-4 px-4 text-sm text-muted-foreground">{company.investors}</td>
                    <td className="py-4 px-4 text-sm text-muted-foreground">{company.sentiment}</td>
                    <td className="py-4 px-4">
                      <span className={`text-xs font-medium px-3 py-1 rounded-full ${
                        company.recommendation === "Buy" ? "bg-accent text-accent-foreground" :
                        company.recommendation === "Hold" ? "bg-primary text-primary-foreground" :
                        "bg-destructive text-primary-foreground"
                      }`}>
                        {company.recommendation}
                      </span>
                    </td>
                  </tr>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CloudCompaniesReport;
