import React from 'react';
import { Theme } from '../types';

interface ImperialLogoProps {
  className?: string;
  size?: number;
  theme?: Theme;
  showRays?: boolean;
}

export const ImperialLogo: React.FC<ImperialLogoProps> = ({
  className = 'w-12 h-12',
  theme = 'dark',
  showRays = true,
}) => {
  const isLight = theme === 'light';

  return (
    <div className={`relative flex items-center justify-center group ${className}`}>
      {/* Dynamic ambient halo */}
      <div
        className={`absolute inset-0 rounded-full blur-md transition-all duration-500 ${
          isLight
            ? 'bg-[#c5a059]/25 group-hover:bg-[#c5a059]/45'
            : 'bg-[#e9c176]/20 group-hover:bg-[#e9c176]/45'
        }`}
      />

      {/* Main SVG Medallion */}
      <svg
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full relative z-10 filter drop-shadow-[0_2px_8px_rgba(197,160,89,0.4)] group-hover:scale-105 transition-transform duration-300"
      >
        <defs>
          {/* 24K Royal Gold Gradient */}
          <linearGradient id="imperialGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fff7d6" />
            <stop offset="25%" stopColor="#e9c176" />
            <stop offset="70%" stopColor="#c5a059" />
            <stop offset="100%" stopColor="#875e18" />
          </linearGradient>

          {/* Core Enamel Gradient - Adapts to Light or Dark */}
          <radialGradient id="imperialCoreGrad" cx="50%" cy="50%" r="50%">
            {isLight ? (
              <>
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="65%" stopColor="#f5efe6" />
                <stop offset="100%" stopColor="#e8dfce" />
              </>
            ) : (
              <>
                <stop offset="0%" stopColor="#252530" />
                <stop offset="70%" stopColor="#121218" />
                <stop offset="100%" stopColor="#050507" />
              </>
            )}
          </radialGradient>

          {/* Subtle Glow Filter */}
          <filter id="royalGlowFilter" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="1.5" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Outer 16-point Celestial Shamseh Star Rays */}
        {showRays && (
          <g stroke="url(#imperialGoldGrad)" strokeWidth="1.2" opacity="0.85">
            <circle cx="60" cy="60" r="56" strokeDasharray="3 3" strokeWidth="1" />
            <circle cx="60" cy="60" r="52" strokeWidth="1.5" />
            {[0, 22.5, 45, 67.5, 90, 112.5, 135, 157.5, 180, 202.5, 225, 247.5, 270, 292.5, 315, 337.5].map((angle, idx) => {
              const rad = (angle * Math.PI) / 180;
              const x1 = 60 + 52 * Math.cos(rad);
              const y1 = 60 + 52 * Math.sin(rad);
              const x2 = 60 + 57 * Math.cos(rad);
              const y2 = 60 + 57 * Math.sin(rad);
              return <line key={idx} x1={x1} y1={y1} x2={x2} y2={y2} />;
            })}
          </g>
        )}

        {/* Lapis Lazuli Core Background */}
        <circle
          cx="60"
          cy="60"
          r="46"
          fill="url(#imperialCoreGrad)"
          stroke="url(#imperialGoldGrad)"
          strokeWidth="2"
        />

        {/* Inner Filigree Bead Ring */}
        <circle
          cx="60"
          cy="60"
          r="42"
          stroke="url(#imperialGoldGrad)"
          strokeWidth="1"
          strokeDasharray="2 4"
          opacity="0.9"
        />

        {/* Top Solar Diadem / Crown Rays */}
        <path
          d="M60 21 L63 31 L72 29 L65 36 L70 45 L60 40 L50 45 L55 36 L48 29 L57 31 Z"
          fill="url(#imperialGoldGrad)"
        />

        {/* Grand Sweeping Feathered Faravahar Wings */}
        <path
          d="M18 55 Q38 45 60 54 Q82 45 102 55 Q88 65 60 60 Q32 65 18 55 Z"
          fill="none"
          stroke="url(#imperialGoldGrad)"
          strokeWidth="2.6"
          filter="url(#royalGlowFilter)"
        />

        {/* Tiered Wing Feathers (Good Thoughts, Good Words, Good Deeds) */}
        <path
          d="M26 57 Q40 51 55 57 M24 63 Q38 57 52 62 M28 69 Q40 63 50 67"
          stroke="url(#imperialGoldGrad)"
          strokeWidth="1.3"
          fill="none"
        />
        <path
          d="M94 57 Q80 51 65 57 M96 63 Q82 57 68 62 M92 69 Q80 63 70 67"
          stroke="url(#imperialGoldGrad)"
          strokeWidth="1.3"
          fill="none"
        />

        {/* Center Ring of Covenant & Sovereignty */}
        <circle
          cx="60"
          cy="71"
          r="7.5"
          stroke="url(#imperialGoldGrad)"
          strokeWidth="2.2"
          fill={isLight ? '#faf8f5' : '#050507'}
        />
        <circle cx="60" cy="71" r="3.2" fill="url(#imperialGoldGrad)" />

        {/* Bottom Lotus Ribbons (Purity and Balance) */}
        <path
          d="M54 77 Q46 87 40 85 Q36 83 42 77"
          stroke="url(#imperialGoldGrad)"
          strokeWidth="1.7"
          fill="none"
        />
        <path
          d="M66 77 Q74 87 80 85 Q84 83 78 77"
          stroke="url(#imperialGoldGrad)"
          strokeWidth="1.7"
          fill="none"
        />

        {/* Center Tail Feather Plume */}
        <path
          d="M56 79 L60 91 L64 79"
          stroke="url(#imperialGoldGrad)"
          strokeWidth="1.6"
          fill="none"
        />
      </svg>
    </div>
  );
};
