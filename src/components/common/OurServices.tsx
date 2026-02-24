import { useState } from "react";
import { TrendingUp, BarChart3, Heart, Flame, IndianRupee, LogOut } from "lucide-react";

const OurServices = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const services = [
    {
      letter: "B",
      title: "Market\nDirection",
      icon: TrendingUp,
      description: "We align your investments with the market's direction, not against it.",
      bullets: [
        { bold: "In a rising market,", text: "we actively scan for high-growth stocks and release fresh recommendations backed by both fundamentals and momentum." },
        { bold: "In a weak or falling market,", text: "we reduce the number of new ideas, focus on capital protection, and guide you with hold/sell alerts wherever needed." },
      ],
      footer: "You won't receive random stock ideas. Every recommendation is aligned with the broader market conditions — helping you grow when the time is right, and stay protected when it's not."
    },
    {
      letter: "R",
      title: "Industry\nRanking",
      icon: BarChart3,
      description: "We identify the strongest industries — so you invest where growth is happening.",
      bullets: [
        { bold: "We continuously track and rank industries", text: "based on earnings acceleration, market leadership, and institutional interest." },
        { bold: "We focus our research only on the top-performing sectors", text: "— and ignore underperforming or declining industries, no matter how popular the stocks may be." },
      ],
      footer: "Every stock recommendation you receive is backed not just by company research, but also by strong industry tailwinds — increasing the probability of long-term success."
    },
    {
      letter: "A",
      title: "Leading\nStock",
      icon: Heart,
      description: "We identify the leaders in each industry — the stocks with the highest potential.",
      bullets: [
        { bold: "Not all stocks are created equal.", text: "We focus on companies showing earnings acceleration, strong sales growth, and relative price strength." },
        { bold: "We avoid laggards", text: "— no matter how cheap they look — and concentrate on proven market leaders with institutional backing." },
      ],
      footer: "Our goal is to help you invest in quality stocks early — before they become widely popular."
    },
    {
      letter: "I",
      title: "Acceleration\nin Earnings",
      icon: Flame,
      description: "We focus on companies where profits are growing faster — because earnings drive stock prices.",
      bullets: [
        { bold: "We track quarterly earnings trends across thousands of companies", text: "to spot those showing consistent improvement in sales, margins, and net profits." },
        { bold: "We prioritize companies with rising earnings momentum,", text: "because it often signals strong business execution and future price strength." },
      ],
      footer: "You receive recommendations of companies that are not just growing — but growing faster than before."
    },
    {
      letter: "N",
      title: "Relative price\nstrength",
      icon: IndianRupee,
      description: "Price action tells you what the market thinks about a stock.",
      bullets: [
        { bold: "We analyze relative price strength", text: "to identify stocks outperforming the broader market." },
        { bold: "Strong price momentum", text: "often precedes further gains as institutions accumulate shares." },
      ],
      footer: "We focus on stocks showing positive momentum — not those fighting against market trends."
    },
  ];

  return (
    <section className="bg-[hsl(var(--page-bg))] py-6">
      <div className="max-w-full">
        <div className="bg-card rounded-[24px] px-4 md:px-6 py-3">
          {/* Header */}
          <div className="mb-2">
            <div className="mb-4">
              <SpotlightButton/>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-card-foreground">
              A successful investment approach
            </h2>
            <p className="text-muted-foreground text-sm mt-1 max-w-2xl">
              Built with enterprise-level security and designed for ease of use to empower individuals and businesses to transact freely.
            </p>
          </div>

          {/* MILARS Interactive Section */}
          <div
            className="bg-[hsl(var(--page-bg))] rounded-[20px] border border-border overflow-hidden"
            onMouseLeave={() => setActiveIndex(null)}
          >
            <div className="flex" style={{ height: 380 }}>
              {services.map((service, index) => {
                const isActive = activeIndex === index;
                const hasActive = activeIndex !== null;
                const Icon = service.icon;

                // Calculate widths: active gets ~60%, others share remainder equally
                const totalItems = services.length;
                let widthPercent: number;
                if (hasActive) {
                  widthPercent = isActive ? 58 : (100 - 58) / (totalItems - 1);
                } else {
                  widthPercent = 100 / totalItems;
                }

                return (
                  <div
                    key={index}
                    className="relative overflow-hidden border-r border-border last:border-r-0"
                    style={{
                      width: `${widthPercent}%`,
                      transition: "width 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                      flexShrink: 0,
                    }}
                    onMouseEnter={() => setActiveIndex(index)}
                  >
                    {/* Collapsed view */}
                    <div
                      className="flex flex-col items-center justify-between h-full py-8 px-2"
                      style={{
                        opacity: isActive ? 0 : 1,
                        transition: "opacity 0.25s ease",
                        pointerEvents: isActive ? "none" : "auto",
                      }}
                    >
                      <div className="flex-1 flex items-center justify-center">
                        <span className="text-5xl md:text-6xl font-bold text-card-foreground tracking-tight select-none">
                          {service.letter}
                        </span>
                      </div>
                      <div className="text-center mt-4 mb-6">
                        {service.title.split("\n").map((line, i) => (
                          <p key={i} className="text-xs font-medium text-card-foreground leading-tight whitespace-nowrap">
                            {line}
                          </p>
                        ))}
                      </div>
                      <Icon className="w-5 h-5 text-muted-foreground" />
                    </div>

                    {/* Expanded view */}
                    <div
                      className="absolute inset-0 flex flex-col h-full"
                      style={{
                        opacity: isActive ? 1 : 0,
                        transition: "opacity 0.3s ease 0.1s",
                        pointerEvents: isActive ? "auto" : "none",
                      }}
                    >
                      <div className="p-6 flex-1 overflow-y-auto">
                        {/* Title row */}
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                            <span className="text-sm font-bold text-primary-foreground">{service.letter}</span>
                          </div>
                          <h3 className="text-lg font-bold text-card-foreground whitespace-nowrap">{service.title.replace("\n", " ")}</h3>
                        </div>

                        {/* Description */}
                        <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                          {service.description}
                        </p>

                        {/* Bullets */}
                        <ul className="space-y-3 mb-4">
                          {service.bullets.map((bullet, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm leading-relaxed">
                              <span className="text-card-foreground mt-0.5 leading-none">•</span>
                              <span>
                                <strong className="text-card-foreground">{bullet.bold}</strong>{" "}
                                <span className="text-muted-foreground">{bullet.text}</span>
                              </span>
                            </li>
                          ))}
                        </ul>

                        {/* Footer */}
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {service.footer}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
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

const SpotlightButton = () => {
  return (
    <button className="flex items-center gap-2 bg-primary text-primary-foreground px-5 py-3 rounded-full font-medium text-sm hover:bg-primary-dark transition-colors button-shadow">
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A2 2 0 013 12V7a4 4 0 014-4z" />
      </svg>
      Our Services
    </button>
  );
};

export default OurServices;
