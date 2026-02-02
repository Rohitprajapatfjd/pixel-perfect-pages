const HeroBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Curved lines SVG */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1440 900"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="lineGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(255,255,255,0)" />
            <stop offset="50%" stopColor="rgba(255,255,255,0.15)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0)" />
          </linearGradient>
          <linearGradient id="lineGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(255,255,255,0)" />
            <stop offset="50%" stopColor="rgba(255,255,255,0.1)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0)" />
          </linearGradient>
        </defs>

        {/* Wave lines */}
        <path
          d="M-100 300 Q 200 200, 400 350 T 800 300 T 1200 400 T 1600 300"
          stroke="url(#lineGradient1)"
          strokeWidth="1.5"
          fill="none"
        />
        <path
          d="M-100 350 Q 200 250, 400 400 T 800 350 T 1200 450 T 1600 350"
          stroke="url(#lineGradient2)"
          strokeWidth="1"
          fill="none"
        />
        <path
          d="M-100 400 Q 200 300, 400 450 T 800 400 T 1200 500 T 1600 400"
          stroke="url(#lineGradient1)"
          strokeWidth="1.5"
          fill="none"
        />
        <path
          d="M-100 450 Q 200 350, 400 500 T 800 450 T 1200 550 T 1600 450"
          stroke="url(#lineGradient2)"
          strokeWidth="1"
          fill="none"
        />
        <path
          d="M-100 500 Q 200 400, 400 550 T 800 500 T 1200 600 T 1600 500"
          stroke="url(#lineGradient1)"
          strokeWidth="1.5"
          fill="none"
        />
        <path
          d="M-100 550 Q 200 450, 400 600 T 800 550 T 1200 650 T 1600 550"
          stroke="url(#lineGradient2)"
          strokeWidth="1"
          fill="none"
        />
        <path
          d="M-100 600 Q 200 500, 400 650 T 800 600 T 1200 700 T 1600 600"
          stroke="url(#lineGradient1)"
          strokeWidth="1.5"
          fill="none"
        />
      </svg>

      {/* Subtle radial glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-foreground/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary-foreground/3 rounded-full blur-3xl"></div>
    </div>
  );
};

export default HeroBackground;
