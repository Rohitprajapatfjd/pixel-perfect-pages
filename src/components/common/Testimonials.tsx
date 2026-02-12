import { Play } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
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
     {
      name: "Matthew S.",
      role: "Sales Representative",
      question: "What is a core iCIMS value?",
      duration: "0:19",
      quote: "A core value at the company is drive. We want to achieve...",
      avatar: "M",
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
        <div className="max-w-7xl mx-auto px-4">

        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          loop={true}
          navigation
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          breakpoints={{
            0: {
              slidesPerView: 2.2,
              spaceBetween: 15,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }}
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-xl border-2 shadow-md p-5 h-[420px] flex flex-col justify-between">

                {/* Heading */}
                <div className="flex items-start gap-3">
                  <div className="w-1 h-10 bg-green-500 rounded"></div>
                  <h3 className="text-gray-800 font-medium">
                    {item.question}
                  </h3>
                </div>

                {/* Content */}
                <div className="bg-gray-200 rounded-lg h-56 flex items-end p-4">
                  <p className="text-gray-700 text-sm">
                    {item.quote}
                  </p>
                </div>

                {/* Name */}
                <div className="text-center">
                  <p className="font-semibold text-gray-900">
                    {item.name}
                  </p>
                  <p className="font-semibold text-gray-900">
                    {item.role}
                  </p>
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
      </div>
    </section>
  );
};

export default Testimonials;
