import React from "react";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  variant?: "light" | "dark" | "full";
}

export default function Logo({ className = "", size = "md", variant = "full" }: LogoProps) {
  const sizeMap = {
    sm: { box: 36, textTitle: "text-base", textSubtitle: "text-[9px]" },
    md: { box: 48, textTitle: "text-lg", textSubtitle: "text-[10px]" },
    lg: { box: 64, textTitle: "text-2xl", textSubtitle: "text-xs" },
  };

  const currentSize = sizeMap[size] || sizeMap.md;

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Crest SVG */}
      <div className="relative flex-shrink-0 transition-transform duration-300 hover:scale-105">
        <svg
          width={currentSize.box}
          height={currentSize.box}
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="drop-shadow-md"
        >
          {/* Outer Shield with Gold Border */}
          <path
            d="M50 4L88 18V50C88 74 50 96 50 96C50 96 12 74 12 50V18L50 4Z"
            fill="url(#shield-grad)"
            stroke="#F59E0B"
            strokeWidth="3.5"
            strokeLinejoin="round"
          />

          {/* Inner Shield Accent */}
          <path
            d="M50 11L80 23V49C80 68 50 86 50 86C50 86 20 68 20 49V23L50 11Z"
            fill="#0F2B5C"
            stroke="#FBBF24"
            strokeWidth="1.2"
            strokeDasharray="2 2"
            opacity="0.8"
          />

          {/* Globe Lat/Long Curves in Background */}
          <ellipse cx="50" cy="48" rx="22" ry="22" stroke="#3B82F6" strokeWidth="1" strokeDasharray="3 3" opacity="0.4" />
          <path d="M28 48H72" stroke="#3B82F6" strokeWidth="1" opacity="0.4" />
          <path d="M50 26C42 34 42 62 50 70C58 62 58 34 50 26Z" stroke="#3B82F6" strokeWidth="1" opacity="0.4" />

          {/* Stylized Soccer Ball in Center */}
          <circle cx="50" cy="48" r="16" fill="#FFFFFF" stroke="#1E293B" strokeWidth="1.5" />
          {/* Soccer Pentagons & Seams */}
          <polygon points="50,42 55,46 53,52 47,52 45,46" fill="#0F2B5C" />
          <line x1="50" y1="42" x2="50" y2="34" stroke="#1E293B" strokeWidth="1.2" />
          <line x1="55" y1="46" x2="62" y2="43" stroke="#1E293B" strokeWidth="1.2" />
          <line x1="53" y1="52" x2="59" y2="58" stroke="#1E293B" strokeWidth="1.2" />
          <line x1="47" y1="52" x2="41" y2="58" stroke="#1E293B" strokeWidth="1.2" />
          <line x1="45" y1="46" x2="38" y2="43" stroke="#1E293B" strokeWidth="1.2" />

          {/* 3 Gold Stars above ball */}
          <g fill="#F59E0B">
            {/* Center Star */}
            <path d="M50 20L51.5 24H55.5L52.3 26.3L53.5 30.2L50 27.8L46.5 30.2L47.7 26.3L44.5 24H48.5L50 20Z" />
            {/* Left Star */}
            <path d="M37 23L38 26H41.2L38.6 27.8L39.6 31L37 29L34.4 31L35.4 27.8L32.8 26H36L37 23Z" />
            {/* Right Star */}
            <path d="M63 23L64 26H67.2L64.6 27.8L65.6 31L63 29L60.4 31L61.4 27.8L58.8 26H62L63 23Z" />
          </g>

          {/* Bottom Ribbon / Banner */}
          <path
            d="M26 73L50 68L74 73L70 81L50 76L30 81L26 73Z"
            fill="#F59E0B"
            stroke="#D97706"
            strokeWidth="0.8"
          />
          <text
            x="50"
            y="76.5"
            textAnchor="middle"
            fill="#0F2B5C"
            fontSize="6.5"
            fontWeight="900"
            fontFamily="Arial, sans-serif"
            letterSpacing="0.8"
          >
            W S A
          </text>

          {/* Gradients */}
          <defs>
            <linearGradient id="shield-grad" x1="50" y1="4" x2="50" y2="96" gradientUnits="userSpaceOnUse">
              <stop stopColor="#1E3A8A" />
              <stop offset="0.6" stopColor="#0F2B5C" />
              <stop offset="1" stopColor="#081838" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Brand Typography */}
      {variant !== "light" && (
        <div className="flex flex-col leading-tight">
          <div className="flex items-center gap-1.5">
            <span className={`font-black tracking-tight text-blue-950 dark:text-white uppercase ${currentSize.textTitle}`}>
              World Soccer
            </span>
            <span className="bg-amber-400 text-blue-950 font-extrabold text-[10px] px-1.5 py-0.5 rounded tracking-wider uppercase">
              Academy
            </span>
          </div>
          <span className={`font-semibold tracking-widest text-amber-600 dark:text-amber-400 uppercase ${currentSize.textSubtitle}`}>
            Youth Elite Training • Ages 6–12
          </span>
        </div>
      )}
    </div>
  );
}