import { Play } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah D.",
      role: "Customer Service",
      question: "Why is diversity important to you?",
      duration: "0:37",
      quote: "I think diversity is important to a company because it builds a culture of...",
      avatar: "S",
    },
    {
      name: "Robert F.",
      role: "Product Marketing",
      question: "What is the culture at iCIMS like?",
      duration: "0:23",
      quote: "The culture here is exciting. We have so many innovative people.",
      avatar: "R",
    },
    {
      name: "Matthew S.",
      role: "Sales Representative",
      question: "What is a core iCIMS value?",
      duration: "0:19",
      quote: "A core value at the company is drive. We want to achieve...",
      avatar: "M",
    },
  ];

  return (
    <section className="bg-background py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-star text-lg">★</span>
              <span className="text-primary font-semibold text-sm">Our Testimonials</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-card-foreground mb-2">
              Trusted by Our Growing<br />
              Community
            </h2>
            <h3 className="text-xl text-muted-foreground">
              Users Trust StockBazaari
            </h3>
          </div>
          <div className="hidden lg:block text-right">
            <p className="text-muted-foreground text-sm max-w-xs">
              Built with enterprise-level security and designed for ease of use to empower individuals and businesses to transact.
            </p>
          </div>
        </div>

        {/* Testimonial Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-card rounded-2xl overflow-hidden card-shadow">
              {/* Video Thumbnail */}
              <div className="relative aspect-video bg-gradient-to-br from-primary to-primary-dark">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-primary-foreground font-medium text-sm mb-2">{testimonial.question}</p>
                    <div className="w-12 h-12 mx-auto rounded-full bg-primary-foreground/20 flex items-center justify-center">
                      <Play className="w-6 h-6 text-primary-foreground fill-current" />
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-3 right-3 bg-black/50 text-white text-xs px-2 py-1 rounded">
                  {testimonial.duration}
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {testimonial.quote}
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                    <span className="text-primary-foreground font-bold">{testimonial.avatar}</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-card-foreground">{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
