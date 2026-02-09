const HeroBottomNotches = () => {
  return (
    <div
      className="absolute bottom-0 left-0 right-0 z-[2] pointer-events-none"
      aria-hidden="true"
    >
      <div className="flex justify-center items-end h-[84px] px-8 md:px-12 gap-3">
        {/* Left tabs */}
        <div className="w-[180px] h-[56px] bg-card rounded-t-[16px]" />
        <div className="w-[180px] h-[56px] bg-card rounded-t-[16px]" />

        {/* Center curved dip */}
        <svg
          className="block w-[280px] h-[84px]"
          viewBox="0 0 280 84"
          fill="none"
          preserveAspectRatio="none"
        >
          <path
            d="M0 84V18Q0 0 18 0H70C96 0 112 24 140 24C168 24 184 0 210 0H262Q280 0 280 18V84Z"
            fill="hsl(var(--card))"
          />
        </svg>

        {/* Right tabs */}
        <div className="w-[180px] h-[56px] bg-card rounded-t-[16px]" />
        <div className="w-[180px] h-[56px] bg-card rounded-t-[16px]" />
      </div>
    </div>
  );
};

export default HeroBottomNotches;
