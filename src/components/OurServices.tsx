import { useState } from "react";
import { TrendingUp, Heart, IndianRupee, LogOut } from "lucide-react";

const OurServices = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const services = [
    {
      letter: "M",
      title: "Market Direction",
      icon: TrendingUp,
      description: "We align your investments with the market's direction, not against it.",
      bullets: [
        { bold: "In a rising market,", text: "we actively scan for high-growth stocks and release fresh recommendations backed by both fundamentals and momentum." },
        { bold: "In a weak or falling market,", text: "we reduce the number of new ideas, focus on capital protection, and guide you with hold/sell alerts wherever needed." },
      ],
      footer: "You won't receive random stock ideas. Every recommendation is aligned with the broader market conditions — helping you grow when the time is right, and stay protected when it's not."
    },
    {
      letter: "I",
      title: "Industry Ranking",
      icon: TrendingUp,
      description: "We identify the strongest industries — so you invest where growth is happening.",
      bullets: [
        { bold: "We continuously track and rank industries", text: "based on earnings acceleration, market leadership, and institutional interest." },
        { bold: "We focus our research only on the top-performing sectors", text: "— and ignore underperforming or declining industries, no matter how popular the stocks may be." },
      ],
      footer: "Every stock recommendation you receive is backed not just by company research, but also by strong industry tailwinds — increasing the probability of long-term success."
    },
    {
      letter: "L",
      title: "Leading Stock",
      icon: Heart,
      description: "We identify the leaders in each industry — the stocks with the highest potential.",
      bullets: [
        { bold: "Not all stocks are created equal.", text: "We focus on companies showing earnings acceleration, strong sales growth, and relative price strength." },
        { bold: "We avoid laggards", text: "— no matter how cheap they look — and concentrate on proven market leaders with institutional backing." },
      ],
      footer: "Our goal is to help you invest in quality stocks early — before they become widely popular."
    },
    {
      letter: "A",
      title: "Acceleration in Earnings",
      icon: Heart,
      description: "Earnings growth is the engine of stock price performance.",
      bullets: [
        { bold: "We track quarterly and annual earnings growth", text: "to identify companies with accelerating profits." },
        { bold: "We prioritize stocks with consistent earnings surprises", text: "— companies that beat analyst expectations quarter after quarter." },
      ],
      footer: "Sustainable earnings growth leads to sustainable stock price appreciation."
    },
    {
      letter: "R",
      title: "Relative price strength",
      icon: IndianRupee,
      description: "Price action tells you what the market thinks about a stock.",
      bullets: [
        { bold: "We analyze relative price strength", text: "to identify stocks outperforming the broader market." },
        { bold: "Strong price momentum", text: "often precedes further gains as institutions accumulate shares." },
      ],
      footer: "We focus on stocks showing positive momentum — not those fighting against market trends."
    },
    {
      letter: "S",
      title: "Selling rules",
      icon: LogOut,
      description: "Knowing when to sell is just as important as knowing when to buy.",
      bullets: [
        { bold: "We provide clear sell signals", text: "based on technical breakdowns, earnings disappointments, or sector rotation." },
        { bold: "Our sell rules protect your capital", text: "by cutting losses short and locking in gains at the right time." },
      ],
      footer: "Discipline in selling separates successful investors from the rest."
    },
  ];

  return (
    <section className="bg-[hsl(var(--page-bg))] py-16 px-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="bg-white rounded-[24px] p-8 md:p-12">
          {/* Header */}
          <div className="mb-10">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-primary"></div>
              <span className="text-primary font-semibold text-sm">Our Services</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-card-foreground">
              Why Thousands of Users Trust StockBazaari
            </h2>
            <p className="text-muted-foreground text-sm mt-3 max-w-2xl">
              Built with enterprise-level security and designed for ease of use to empower individuals and businesses to transact freely.
            </p>
          </div>

          {/* MILARS Interactive Section */}
          <div className="bg-[hsl(var(--page-bg))] rounded-[20px] p-6 md:p-8">
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Left - Expanded Content Area */}
              <div className="lg:w-[55%] bg-white rounded-[16px] p-6 border border-border min-h-[320px]">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                    <span className="text-sm font-bold text-white">{services[activeIndex].letter}</span>
                  </div>
                  <h3 className="text-xl font-bold text-card-foreground">{services[activeIndex].title}</h3>
                </div>
                
                <p className="text-muted-foreground text-sm mb-4">
                  {services[activeIndex].description}
                </p>

                <ul className="space-y-3 mb-4">
                  {services[activeIndex].bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm">
                      <span className="text-primary mt-1">•</span>
                      <span>
                        <strong className="text-card-foreground">{bullet.bold}</strong>{" "}
                        <span className="text-muted-foreground">{bullet.text}</span>
                      </span>
                    </li>
                  ))}
                </ul>

                <p className="text-muted-foreground text-sm italic">
                  {services[activeIndex].footer}
                </p>
              </div>

              {/* Right - Letter Cards */}
              <div className="lg:w-[45%] flex gap-2">
                {services.map((service, index) => {
                  const isActive = activeIndex === index;
                  const Icon = service.icon;
                  
                  return (
                    <div
                      key={index}
                      className={`relative flex flex-col items-center justify-between py-6 px-2 rounded-[12px] border transition-all duration-300 cursor-pointer ${
                        isActive 
                          ? "bg-[hsl(var(--page-bg))] border-border flex-1" 
                          : "bg-white border-border hover:bg-muted/50 w-[60px]"
                      }`}
                      onMouseEnter={() => setActiveIndex(index)}
                    >
                      {/* Letter */}
                      <div className="flex-1 flex items-center justify-center">
                        <span className={`font-bold transition-all duration-300 ${
                          isActive ? "text-5xl text-card-foreground" : "text-3xl text-card-foreground"
                        }`}>
                          {service.letter}
                        </span>
                      </div>

                      {/* Title - only show when active */}
                      <div className={`text-center transition-all duration-300 ${isActive ? "opacity-100" : "opacity-0 h-0"}`}>
                        <p className="text-xs font-medium text-muted-foreground whitespace-nowrap">
                          {service.title.split(' ').slice(0, 2).join(' ')}
                        </p>
                        {service.title.split(' ').length > 2 && (
                          <p className="text-xs font-medium text-muted-foreground whitespace-nowrap">
                            {service.title.split(' ').slice(2).join(' ')}
                          </p>
                        )}
                      </div>

                      {/* Icon at bottom */}
                      <div className="mt-4">
                        <Icon className={`transition-all duration-300 ${
                          isActive ? "w-6 h-6 text-primary" : "w-5 h-5 text-muted-foreground"
                        }`} />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Contact Sales Button */}
          <div className="flex justify-end mt-6">
            <button className="flex items-center gap-2 bg-accent text-accent-foreground px-5 py-2.5 rounded-full font-medium text-sm hover:bg-accent/90 transition-colors">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
