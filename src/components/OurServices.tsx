const OurServices = () => {
  const services = [
    {
      letter: "B",
      title: "Basket Investment",
      subtitle: "Research Calls",
    },
    {
      letter: "R",
      title: "Algo Trading",
      subtitle: "",
    },
    {
      letter: "A",
      title: "Investor Education",
      subtitle: "",
    },
    {
      letter: "I",
      title: "Navigator On-Line",
      subtitle: "Consultation",
    },
    {
      letter: "N",
      title: "",
      subtitle: "",
    },
  ];

  return (
    <section className="bg-background py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-primary"></div>
              <span className="text-primary font-semibold text-sm">Our Services</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-card-foreground">
              Why Thousands of
            </h2>
            <h3 className="text-2xl md:text-3xl text-muted-foreground mt-2">
              Users Trust StockBazaari
            </h3>
            <p className="text-muted-foreground text-sm mt-4 max-w-lg">
              Built with enterprise-level security and designed for ease of use to empower individuals and businesses to transact freely.
            </p>
          </div>
          <div className="hidden lg:block">
            <p className="text-7xl font-bold text-muted-foreground/20">93.84%</p>
          </div>
        </div>

        {/* BRAIN Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {services.slice(0, 4).map((service, index) => (
            <div key={index} className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-primary flex items-center justify-center">
                <span className="text-4xl font-bold text-primary-foreground">{service.letter}</span>
              </div>
              <p className="text-sm font-medium text-card-foreground">{service.title}</p>
              {service.subtitle && (
                <p className="text-xs text-muted-foreground">{service.subtitle}</p>
              )}
            </div>
          ))}
          <div className="text-center hidden lg:block">
            <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-primary flex items-center justify-center">
              <span className="text-4xl font-bold text-primary-foreground">N</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
