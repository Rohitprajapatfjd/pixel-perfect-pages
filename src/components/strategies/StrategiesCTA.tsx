const StrategiesCTA = () => {
  return (
    <section className="bg-gradient-to-r from-[#2f5bff] to-[#1d3fd8] py-16 px-6">
      <div className="max-w-[800px] mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Ready to Automate Your Trading?
        </h2>
        <p className="text-white/80 text-base mb-8">
          Join 3,500+ traders who trust our AI algorithms
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <button className="bg-white text-primary px-8 py-3 rounded-lg text-sm font-semibold hover:bg-white/90 transition-colors">
            Start Free Trial →
          </button>
          <button className="border-2 border-white text-white px-8 py-3 rounded-lg text-sm font-semibold hover:bg-white/10 transition-colors">
            Schedule Demo
          </button>
        </div>
      </div>
    </section>
  );
};

export default StrategiesCTA;
