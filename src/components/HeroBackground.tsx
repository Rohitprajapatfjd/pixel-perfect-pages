const HeroBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Grid lines SVG - both horizontal and vertical curves */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1200 700"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="lineGradientH" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(255,255,255,0)" />
            <stop offset="30%" stopColor="rgba(255,255,255,0.12)" />
            <stop offset="70%" stopColor="rgba(255,255,255,0.12)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0)" />
          </linearGradient>
          <linearGradient id="lineGradientV" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(255,255,255,0)" />
            <stop offset="30%" stopColor="rgba(255,255,255,0.12)" />
            <stop offset="70%" stopColor="rgba(255,255,255,0.12)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0)" />
          </linearGradient>
        </defs>

        {/* Horizontal curved lines */}
        <path
          d="M-50 100 Q 150 80, 300 120 T 600 100 T 900 130 T 1250 90"
          stroke="url(#lineGradientH)"
          strokeWidth="1"
          fill="none"
        />
        <path
          d="M-50 180 Q 150 160, 300 200 T 600 170 T 900 210 T 1250 170"
          stroke="url(#lineGradientH)"
          strokeWidth="1"
          fill="none"
        />
        <path
          d="M-50 260 Q 150 240, 300 280 T 600 250 T 900 290 T 1250 250"
          stroke="url(#lineGradientH)"
          strokeWidth="1"
          fill="none"
        />
        <path
          d="M-50 340 Q 150 320, 300 360 T 600 330 T 900 370 T 1250 330"
          stroke="url(#lineGradientH)"
          strokeWidth="1"
          fill="none"
        />
        <path
          d="M-50 420 Q 150 400, 300 440 T 600 410 T 900 450 T 1250 410"
          stroke="url(#lineGradientH)"
          strokeWidth="1"
          fill="none"
        />
        <path
          d="M-50 500 Q 150 480, 300 520 T 600 490 T 900 530 T 1250 490"
          stroke="url(#lineGradientH)"
          strokeWidth="1"
          fill="none"
        />
        <path
          d="M-50 580 Q 150 560, 300 600 T 600 570 T 900 610 T 1250 570"
          stroke="url(#lineGradientH)"
          strokeWidth="1"
          fill="none"
        />
        <path
          d="M-50 660 Q 150 640, 300 680 T 600 650 T 900 690 T 1250 650"
          stroke="url(#lineGradientH)"
          strokeWidth="1"
          fill="none"
        />

        {/* Vertical curved lines */}
        <path
          d="M100 -50 Q 80 150, 120 300 T 90 500 T 130 750"
          stroke="url(#lineGradientV)"
          strokeWidth="1"
          fill="none"
        />
        <path
          d="M200 -50 Q 180 150, 220 300 T 190 500 T 230 750"
          stroke="url(#lineGradientV)"
          strokeWidth="1"
          fill="none"
        />
        <path
          d="M300 -50 Q 280 150, 320 300 T 290 500 T 330 750"
          stroke="url(#lineGradientV)"
          strokeWidth="1"
          fill="none"
        />
        <path
          d="M400 -50 Q 380 150, 420 300 T 390 500 T 430 750"
          stroke="url(#lineGradientV)"
          strokeWidth="1"
          fill="none"
        />
        <path
          d="M500 -50 Q 480 150, 520 300 T 490 500 T 530 750"
          stroke="url(#lineGradientV)"
          strokeWidth="1"
          fill="none"
        />
        <path
          d="M600 -50 Q 580 150, 620 300 T 590 500 T 630 750"
          stroke="url(#lineGradientV)"
          strokeWidth="1"
          fill="none"
        />
        <path
          d="M700 -50 Q 680 150, 720 300 T 690 500 T 730 750"
          stroke="url(#lineGradientV)"
          strokeWidth="1"
          fill="none"
        />
        <path
          d="M800 -50 Q 780 150, 820 300 T 790 500 T 830 750"
          stroke="url(#lineGradientV)"
          strokeWidth="1"
          fill="none"
        />
        <path
          d="M900 -50 Q 880 150, 920 300 T 890 500 T 930 750"
          stroke="url(#lineGradientV)"
          strokeWidth="1"
          fill="none"
        />
        <path
          d="M1000 -50 Q 980 150, 1020 300 T 990 500 T 1030 750"
          stroke="url(#lineGradientV)"
          strokeWidth="1"
          fill="none"
        />
        <path
          d="M1100 -50 Q 1080 150, 1120 300 T 1090 500 T 1130 750"
          stroke="url(#lineGradientV)"
          strokeWidth="1"
          fill="none"
        />

        {/* Intersection dots/shapes where lines cross */}
        {/* Row 1 intersections */}
        <circle cx="120" cy="105" r="3" fill="rgba(255,255,255,0.15)" />
        <circle cx="220" cy="95" r="3" fill="rgba(255,255,255,0.15)" />
        <circle cx="320" cy="115" r="3" fill="rgba(255,255,255,0.15)" />
        <circle cx="420" cy="100" r="3" fill="rgba(255,255,255,0.15)" />
        <circle cx="520" cy="95" r="3" fill="rgba(255,255,255,0.15)" />
        <circle cx="620" cy="105" r="3" fill="rgba(255,255,255,0.15)" />
        <circle cx="720" cy="100" r="3" fill="rgba(255,255,255,0.15)" />
        <circle cx="820" cy="110" r="3" fill="rgba(255,255,255,0.15)" />
        <circle cx="920" cy="125" r="3" fill="rgba(255,255,255,0.15)" />
        <circle cx="1020" cy="100" r="3" fill="rgba(255,255,255,0.15)" />

        {/* Row 2 intersections */}
        <circle cx="120" cy="185" r="3" fill="rgba(255,255,255,0.15)" />
        <circle cx="220" cy="175" r="3" fill="rgba(255,255,255,0.15)" />
        <circle cx="320" cy="195" r="3" fill="rgba(255,255,255,0.15)" />
        <circle cx="420" cy="180" r="3" fill="rgba(255,255,255,0.15)" />
        <circle cx="520" cy="170" r="3" fill="rgba(255,255,255,0.15)" />
        <circle cx="620" cy="175" r="3" fill="rgba(255,255,255,0.15)" />
        <circle cx="720" cy="185" r="3" fill="rgba(255,255,255,0.15)" />
        <circle cx="820" cy="195" r="3" fill="rgba(255,255,255,0.15)" />
        <circle cx="920" cy="205" r="3" fill="rgba(255,255,255,0.15)" />
        <circle cx="1020" cy="180" r="3" fill="rgba(255,255,255,0.15)" />

        {/* Row 3 intersections */}
        <circle cx="120" cy="265" r="3" fill="rgba(255,255,255,0.15)" />
        <circle cx="220" cy="255" r="3" fill="rgba(255,255,255,0.15)" />
        <circle cx="320" cy="275" r="3" fill="rgba(255,255,255,0.15)" />
        <circle cx="420" cy="260" r="3" fill="rgba(255,255,255,0.15)" />
        <circle cx="520" cy="250" r="3" fill="rgba(255,255,255,0.15)" />
        <circle cx="620" cy="255" r="3" fill="rgba(255,255,255,0.15)" />
        <circle cx="720" cy="265" r="3" fill="rgba(255,255,255,0.15)" />
        <circle cx="820" cy="280" r="3" fill="rgba(255,255,255,0.15)" />
        <circle cx="920" cy="285" r="3" fill="rgba(255,255,255,0.15)" />
        <circle cx="1020" cy="260" r="3" fill="rgba(255,255,255,0.15)" />

        {/* Row 4 intersections */}
        <circle cx="120" cy="345" r="3" fill="rgba(255,255,255,0.15)" />
        <circle cx="220" cy="335" r="3" fill="rgba(255,255,255,0.15)" />
        <circle cx="320" cy="355" r="3" fill="rgba(255,255,255,0.15)" />
        <circle cx="420" cy="340" r="3" fill="rgba(255,255,255,0.15)" />
        <circle cx="520" cy="330" r="3" fill="rgba(255,255,255,0.15)" />
        <circle cx="620" cy="335" r="3" fill="rgba(255,255,255,0.15)" />
        <circle cx="720" cy="345" r="3" fill="rgba(255,255,255,0.15)" />
        <circle cx="820" cy="360" r="3" fill="rgba(255,255,255,0.15)" />
        <circle cx="920" cy="365" r="3" fill="rgba(255,255,255,0.15)" />
        <circle cx="1020" cy="340" r="3" fill="rgba(255,255,255,0.15)" />

        {/* Row 5 intersections */}
        <circle cx="120" cy="425" r="3" fill="rgba(255,255,255,0.15)" />
        <circle cx="220" cy="415" r="3" fill="rgba(255,255,255,0.15)" />
        <circle cx="320" cy="435" r="3" fill="rgba(255,255,255,0.15)" />
        <circle cx="420" cy="420" r="3" fill="rgba(255,255,255,0.15)" />
        <circle cx="520" cy="410" r="3" fill="rgba(255,255,255,0.15)" />
        <circle cx="620" cy="415" r="3" fill="rgba(255,255,255,0.15)" />
        <circle cx="720" cy="425" r="3" fill="rgba(255,255,255,0.15)" />
        <circle cx="820" cy="440" r="3" fill="rgba(255,255,255,0.15)" />
        <circle cx="920" cy="445" r="3" fill="rgba(255,255,255,0.15)" />
        <circle cx="1020" cy="420" r="3" fill="rgba(255,255,255,0.15)" />

        {/* Row 6 intersections */}
        <circle cx="120" cy="505" r="3" fill="rgba(255,255,255,0.15)" />
        <circle cx="220" cy="495" r="3" fill="rgba(255,255,255,0.15)" />
        <circle cx="320" cy="515" r="3" fill="rgba(255,255,255,0.15)" />
        <circle cx="420" cy="500" r="3" fill="rgba(255,255,255,0.15)" />
        <circle cx="520" cy="490" r="3" fill="rgba(255,255,255,0.15)" />
        <circle cx="620" cy="495" r="3" fill="rgba(255,255,255,0.15)" />
        <circle cx="720" cy="505" r="3" fill="rgba(255,255,255,0.15)" />
        <circle cx="820" cy="520" r="3" fill="rgba(255,255,255,0.15)" />
        <circle cx="920" cy="525" r="3" fill="rgba(255,255,255,0.15)" />
        <circle cx="1020" cy="500" r="3" fill="rgba(255,255,255,0.15)" />

        {/* Row 7 intersections */}
        <circle cx="120" cy="585" r="3" fill="rgba(255,255,255,0.15)" />
        <circle cx="220" cy="575" r="3" fill="rgba(255,255,255,0.15)" />
        <circle cx="320" cy="595" r="3" fill="rgba(255,255,255,0.15)" />
        <circle cx="420" cy="580" r="3" fill="rgba(255,255,255,0.15)" />
        <circle cx="520" cy="570" r="3" fill="rgba(255,255,255,0.15)" />
        <circle cx="620" cy="575" r="3" fill="rgba(255,255,255,0.15)" />
        <circle cx="720" cy="585" r="3" fill="rgba(255,255,255,0.15)" />
        <circle cx="820" cy="600" r="3" fill="rgba(255,255,255,0.15)" />
        <circle cx="920" cy="605" r="3" fill="rgba(255,255,255,0.15)" />
        <circle cx="1020" cy="580" r="3" fill="rgba(255,255,255,0.15)" />
      </svg>

      {/* Subtle radial glow effects */}
      <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-white/3 rounded-full blur-3xl"></div>
    </div>
  );
};

export default HeroBackground;
