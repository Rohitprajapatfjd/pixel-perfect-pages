const HeroBottomNotches = () => {
  return (
    <div
      className="absolute bottom-0 left-0 right-0 z-[2] pointer-events-none"
      aria-hidden="true"
    >
      <div className="flex justify-center items-end h-[39px] bg-white px-8 md:px-12 gap-3">
        {/* Left tabs */}      
        <div className="w-[550px] h-[39px] bg-card rounded-b-[16px] bg-[linear-gradient(135deg,#2f5bff_0%,#1d3fd8_100%)]" />
      </div>
    </div>
  );
};

export default HeroBottomNotches;
