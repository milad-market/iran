import React from 'react';

interface ImperialLogoProps {
  className?: string;
  size?: number;
}

export const ImperialLogo: React.FC<ImperialLogoProps> = ({ className = 'w-12 h-12', size = 48 }) => {
  return (
    <div className={`relative flex items-center justify-center group ${className}`}>
      {/* Subtle outer amber glow */}
      <div className="absolute inset-0 rounded-full bg-[#e9c176]/20 blur-md group-hover:bg-[#e9c176]/40 transition-all duration-500" />

      {/* Main SVG Medallion */}
      <svg
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full relative z-10 filter drop-shadow-[0_0_10px_rgba(233,193,118,0.5)] group-hover:scale-105 transition-transform duration-300"
      >
        <defs>
          {/* 24K Gold Royal Gradient */}
          <linearGradient id="imperialGold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fff2c6" />
            <stop offset="30%" stopColor="#e9c176" />
            <stop offset="70%" stopColor="#c5a059" />
            <stop offset="100%" stopColor="#875e18" />
          </linearGradient>

          {/* Lapis Lazuli Core Gradient */}
          <radialGradient id="lapisCore" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#1b3b6f" />
            <stop offset="70%" stopColor="#0c1b33" />
            <stop offset="100%" stopColor="#04132b" />
          </radialGradient>

          {/* Glowing Aura Filter */}
          <filter id="royalGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Outer Faceted 16-point Sunburst / Shamseh Star Rays */}
        <g stroke="url(#imperialGold)" strokeWidth="1.2" opacity="0.85">
          <circle cx="60" cy="60" r="56" strokeDasharray="3 3" strokeWidth="1" />
          <circle cx="60" cy="60" r="52" strokeWidth="1.5" />
          {/* Ray ticks */}
          {[0, 22.5, 45, 67.5, 90, 112.5, 135, 157.5, 180, 202.5, 225, 247.5, 270, 292.5, 315, 337.5].map((angle, idx) => {
            const rad = (angle * Math.PI) / 180;
            const x1 = 60 + 52 * Math.cos(rad);
            const y1 = 60 + 52 * Math.sin(rad);
            const x2 = 60 + 57 * Math.cos(rad);
            const y2 = 60 + 57 * Math.sin(rad);
            return <line key={idx} x1={x1} y1={y1} x2={x2} y2={y2} />;
          })}
        </g>

        {/* Lapis Gemstone Core Background */}
        <circle cx="60" cy="60" r="46" fill="url(#lapisCore)" stroke="url(#imperialGold)" strokeWidth="1.8" />

        {/* Inner Filigree Bead Ring */}
        <circle cx="60" cy="60" r="42" stroke="url(#imperialGold)" strokeWidth="1" strokeDasharray="2 4" opacity="0.9" />

        {/* Stylized Faravahar Wings & Sun Disk */}
        {/* Top Solar Crown Rays */}
        <path
          d="M60 22 L63 32 L72 30 L65 37 L70 46 L60 41 L50 46 L55 37 L48 30 L57 32 Z"
          fill="url(#imperialGold)"
        />

        {/* Grand Sweeping Feathered Wings */}
        <path
          d="M18 56 Q38 46 60 55 Q82 46 102 56 Q88 66 60 61 Q32 66 18 56 Z"
          fill="none"
          stroke="url(#imperialGold)"
          strokeWidth="2.5"
          filter="url(#royalGlow)"
        />
        
        {/* Tiered Wing Feathers (Left and Right) */}
        <path
          d="M26 58 Q40 52 55 58 M24 64 Q38 58 52 63 M28 70 Q40 64 50 68"
          stroke="url(#imperialGold)"
          strokeWidth="1.2"
          fill="none"
        />
        <path
          d="M94 58 Q80 52 65 58 M96 64 Q82 58 68 63 M92 70 Q80 64 70 68"
          stroke="url(#imperialGold)"
          strokeWidth="1.2"
          fill="none"
        />

        {/* Center Ring of Sovereignty / Covenant */}
        <circle cx="60" cy="72" r="7" stroke="url(#imperialGold)" strokeWidth="2" fill="#04132b" />
        <circle cx="60" cy="72" r="3" fill="url(#imperialGold)" />

        {/* Bottom Lotus Ribbons / Loops */}
        <path
          d="M54 78 Q46 88 40 86 Q36 84 42 78"
          stroke="url(#imperialGold)"
          strokeWidth="1.6"
          fill="none"
        />
        <path
          d="M66 78 Q74 88 80 86 Q84 84 78 78"
          stroke="url(#imperialGold)"
          strokeWidth="1.6"
          fill="none"
        />
        
        {/* Center Tail Plume */}
        <path
          d="M56 80 L60 92 L64 80"
          stroke="url(#imperialGold)"
          strokeWidth="1.5"
          fill="none"
        />
      </svg>
    </div>
  );
};
