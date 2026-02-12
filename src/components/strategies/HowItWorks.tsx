import { Settings, Wrench, BarChart3 } from "lucide-react";

const steps = [
  {
    num: "01",
    icon: Settings,
    title: "Configure Strategy",
    description: "Select your preferred trading strategy and customize parameters like risk tolerance, capital allocation, and trading frequency.",
  },
  {
    num: "02",
    icon: Wrench,
    title: "Deploy Algorithm",
    description: "Our AI deploys your configured strategy in real-time markets with continuous monitoring and automatic position management.",
  },
  {
    num: "03",
    icon: BarChart3,
    title: "Track Performance",
    description: "Monitor your strategy's performance with detailed analytics, P&L reports, and real-time trade notifications.",
  },
];

const HowItWorks = () => {
  return (
    <section className="bg-card py-16 px-6">
      <div className="max-w-[1200px] mx-auto">
        {/* Badge */}
        <div className="flex justify-center mb-3">
          <span className="bg-primary/10 text-primary text-sm font-semibold px-5 py-2 rounded-full">
            Process
          </span>
        </div>

        {/* Wrench Icon */}
        <div className="flex justify-center mb-4">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
            <Wrench className="w-6 h-6 text-primary" />
          </div>
        </div>

        <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
          How Algo Trading Works
        </h2>

        {/* Step Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div key={step.num} className="relative bg-[hsl(var(--page-bg))] rounded-2xl p-8 pt-10 card-shadow">
              {/* Number Badge */}
              <div className="absolute -top-4 -left-2 bg-primary text-primary-foreground w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold shadow-md">
                {step.num}
              </div>

              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                <step.icon className="w-6 h-6 text-primary" />
              </div>

              <h3 className="text-lg font-bold text-foreground mb-3">{step.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
