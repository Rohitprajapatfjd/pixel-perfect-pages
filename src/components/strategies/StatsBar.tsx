const stats = [
  { value: "₹150Cr+", label: "Capital Deployed", highlight: true },
  { value: "₹3500+", label: "Algo Trading", highlight: true },
  { value: "38.5%", label: "Strategies Deployed", highlight: true },
  { value: "24/7", label: "Capital Deployed", highlight: false },
];

const StatsBar = () => {
  return (
    <section className="bg-card py-10 px-6">
      <div className="max-w-[1200px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, i) => (
          <div key={i} className="text-center">
            <p className={`text-3xl md:text-4xl font-bold mb-1 ${stat.highlight ? "text-[hsl(var(--accent))]" : "text-foreground"}`}>
              {stat.value}
            </p>
            <p className="text-muted-foreground text-sm">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsBar;
