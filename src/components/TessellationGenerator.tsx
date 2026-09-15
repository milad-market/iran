import React, { useState } from 'react';
import { Language, Theme } from '../types';
import { Sparkles } from 'lucide-react';

interface TessellationGeneratorProps {
  language: Language;
  theme?: Theme;
}

export const TessellationGenerator: React.FC<TessellationGeneratorProps> = ({ language, theme = 'dark' }) => {
  const isFa = language === 'fa';
  const isLight = theme === 'light';

  const [folds, setFolds] = useState<number>(8);
  const [layers, setLayers] = useState<number>(3);
  const [colorTheme, setColorTheme] = useState<'lapis' | 'turquoise' | 'terracotta' | 'emerald'>('lapis');

  // Themes
  const themes = {
    lapis: {
      nameEn: 'Lapis & Antique Gold',
      nameFa: 'لاجورد و زرین کهن',
      primary: '#c5a059',
      secondary: '#1b3b6f',
      accent: '#e9c176',
      bg: isLight ? '#f4efe5' : '#04132b',
    },
    turquoise: {
      nameEn: 'Isfahan Turquoise',
      nameFa: 'فیروزه اصفهان',
      primary: '#0284c7',
      secondary: '#0369a1',
      accent: '#38bdf8',
      bg: isLight ? '#e0f2fe' : '#082f49',
    },
    terracotta: {
      nameEn: 'Kashan Terracotta & Amber',
      nameFa: 'خاک کاشان و کهربا',
      primary: '#c85a32',
      secondary: '#7c2d12',
      accent: '#ffb59c',
      bg: isLight ? '#fef3c7' : '#271008',
    },
    emerald: {
      nameEn: 'Imperial Emerald',
      nameFa: 'زمرد شاهانه',
      primary: '#059669',
      secondary: '#064e3b',
      accent: '#34d399',
      bg: isLight ? '#d1fae5' : '#022c22',
    },
  };

  const currentTheme = themes[colorTheme];

  // Mathematical generation of Shamseh / Girih star points
  const renderGeometry = () => {
    const size = 320;
    const center = size / 2;
    const elements: React.ReactNode[] = [];

    // Outer concentric rings
    for (let l = 1; l <= layers; l++) {
      const radius = (size * 0.42 * l) / layers;
      elements.push(
        <circle
          key={`ring-${l}`}
          cx={center}
          cy={center}
          r={radius}
          fill="none"
          stroke={l % 2 === 0 ? currentTheme.secondary : currentTheme.primary}
          strokeWidth="1.2"
          opacity={0.8}
          strokeDasharray={l === layers ? '3 3' : undefined}
        />
      );

      // Star Polygon Rays
      const points: string[] = [];
      const innerRadius = radius * 0.58;
      const angleStep = (Math.PI * 2) / (folds * 2);

      for (let i = 0; i < folds * 2; i++) {
        const r = i % 2 === 0 ? radius : innerRadius;
        const a = i * angleStep - Math.PI / 2;
        const x = center + Math.cos(a) * r;
        const y = center + Math.sin(a) * r;
        points.push(`${x},${y}`);
      }

      elements.push(
        <polygon
          key={`star-${l}`}
          points={points.join(' ')}
          fill="none"
          stroke={l % 2 === 0 ? currentTheme.primary : currentTheme.accent}
          strokeWidth="1.6"
          opacity={0.9}
        />
      );

      // Radial connective lines
      for (let f = 0; f < folds; f++) {
        const a = (f * Math.PI * 2) / folds;
        const x2 = center + Math.cos(a) * radius;
        const y2 = center + Math.sin(a) * radius;
        elements.push(
          <line
            key={`spoke-${l}-${f}`}
            x1={center}
            y1={center}
            x2={x2}
            y2={y2}
            stroke={currentTheme.primary}
            strokeWidth="0.8"
            opacity={0.4}
          />
        );
      }
    }

    // Core star rosette medallion
    elements.push(
      <circle
        key="core"
        cx={center}
        cy={center}
        r={18}
        fill={currentTheme.primary}
        stroke={currentTheme.accent}
        strokeWidth="2"
      />
    );
    elements.push(
      <circle
        key="core-inner"
        cx={center}
        cy={center}
        r={7}
        fill={currentTheme.bg}
      />
    );

    return elements;
  };

  return (
    <section className="py-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8" id="geometry-section">
      {/* Header */}
      <div className="text-center mb-8">
        <div
          className={`inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase mb-1 ${
            isLight ? 'text-[#875e18]' : 'text-[#e9c176]'
          }`}
        >
          <Sparkles className="w-4 h-4" />
          <span>{isFa ? 'کارگاه هندسه مقدس و گره‌چینی ایرانی' : 'Sacred Geometry & Girih Studio'}</span>
        </div>
        <h2
          className={`font-serif-title text-2xl sm:text-3xl font-bold mb-2 ${
            isLight ? 'text-[#152033]' : 'text-[#d7e3ff]'
          }`}
        >
          {isFa ? 'طراحی زنده شمسه‌ها و تقارن ریاضی کاشی‌کاری' : 'Live Interactive Girih Tiling Engine'}
        </h2>
        <p className={`text-sm max-w-xl mx-auto ${isLight ? 'text-[#57534e]' : 'text-[#d1c5b4]'}`}>
          {isFa
            ? 'با تغییر متغیرهای تقارن، لایه‌ها و لعاب‌های سنتی، نظم ریاضی شگفت‌انگیز معماری اصفهان، یزد و مراغه را خلق کنید.'
            : 'Manipulate rotational symmetry, fold order, and mineral glaze palettes inspired by Isfahan and Maragheh.'}
        </p>
      </div>

      {/* Main Studio Card */}
      <div
        className={`border rounded-2xl p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 shadow-2xl transition-colors ${
          isLight
            ? 'bg-white/95 border-[#c5a059]/40 shadow-[#c5a059]/10'
            : 'bg-[#112038]/90 backdrop-blur-sm border-[#c5a059]/30 shadow-[#000e25]/60'
        }`}
      >
        {/* Geometry Canvas Preview (6 cols) */}
        <div
          className={`lg:col-span-6 flex flex-col items-center justify-center p-6 rounded-xl border relative overflow-hidden transition-colors ${
            isLight ? 'bg-[#faf8f2] border-[#e4ddcf]' : 'bg-[#04132b] border-[#1c2a43]'
          }`}
        >
          <div className="w-[320px] h-[320px] flex items-center justify-center relative">
            <svg
              viewBox="0 0 320 320"
              className="w-full h-full filter drop-shadow-[0_0_15px_rgba(197,160,89,0.3)] transition-all duration-700"
            >
              {renderGeometry()}
            </svg>
          </div>

          <div
            className={`mt-4 text-xs flex items-center gap-2 font-mono ${
              isLight ? 'text-[#57534e]' : 'text-[#acc7ff]'
            }`}
          >
            <span>{folds}-Point Star</span>
            <span>•</span>
            <span>{layers} Nested Tiers</span>
            <span>•</span>
            <span>{currentTheme.nameEn}</span>
          </div>
        </div>

        {/* Controls Panel (6 cols) */}
        <div className="lg:col-span-6 space-y-6">
          
          {/* Fold Symmetry control */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className={`text-xs font-bold uppercase tracking-wider ${isLight ? 'text-[#875e18]' : 'text-[#e9c176]'}`}>
                {isFa ? 'تعداد پرهای شمسه (مرتبه تقارن)' : 'Star Symmetry (Folds / Rays)'}
              </label>
              <span className={`text-sm font-mono font-bold ${isLight ? 'text-[#152033]' : 'text-[#d7e3ff]'}`}>
                {folds}-fold
              </span>
            </div>
            <div className="grid grid-cols-4 gap-2">
              {[6, 8, 10, 12].map((f) => (
                <button
                  key={f}
                  onClick={() => setFolds(f)}
                  className={`py-2 text-xs font-bold rounded-lg border transition-all cursor-pointer ${
                    folds === f
                      ? 'bg-[#c5a059] text-white border-[#b8860b] shadow-sm'
                      : isLight
                      ? 'bg-white text-[#57534e] border-[#d8d0c4] hover:border-[#b8860b]'
                      : 'bg-[#0c1b33] text-[#d1c5b4] border-[#1c2a43] hover:border-[#c5a059]'
                  }`}
                >
                  {f} {isFa ? 'پر' : 'Rays'}
                </button>
              ))}
            </div>
          </div>

          {/* Concentric Layers control */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className={`text-xs font-bold uppercase tracking-wider ${isLight ? 'text-[#875e18]' : 'text-[#e9c176]'}`}>
                {isFa ? 'لایه‌های تودرتوی گره‌چینی' : 'Concentric Girih Tiers'}
              </label>
              <span className={`text-sm font-mono font-bold ${isLight ? 'text-[#152033]' : 'text-[#d7e3ff]'}`}>
                {layers}
              </span>
            </div>
            <input
              type="range"
              min="1"
              max="5"
              step="1"
              value={layers}
              onChange={(e) => setLayers(Number(e.target.value))}
              className="w-full accent-[#c5a059] h-2 rounded cursor-pointer"
            />
          </div>

          {/* Palette Themes */}
          <div>
            <label className={`text-xs font-bold uppercase tracking-wider block mb-2 ${isLight ? 'text-[#875e18]' : 'text-[#e9c176]'}`}>
              {isFa ? 'پالت رنگ سنتی ایرانی' : 'Traditional Architectural Glaze Palette'}
            </label>
            <div className="grid grid-cols-2 gap-2">
              {(Object.keys(themes) as (keyof typeof themes)[]).map((tKey) => {
                const t = themes[tKey];
                const isSelected = colorTheme === tKey;
                return (
                  <button
                    key={tKey}
                    onClick={() => setColorTheme(tKey)}
                    className={`p-2.5 rounded-lg border text-left rtl:text-right text-xs transition-all flex items-center gap-2 cursor-pointer ${
                      isSelected
                        ? isLight
                          ? 'bg-[#fdfbf7] border-[#b8860b] text-[#875e18] font-bold shadow-sm'
                          : 'bg-[#1c2a43] border-[#e9c176] text-[#e9c176] font-bold'
                        : isLight
                        ? 'bg-white border-[#e4ddcf] text-[#57534e] hover:border-[#c5a059]'
                        : 'bg-[#0c1b33] border-[#1c2a43] text-[#d1c5b4] hover:border-[#c5a059]/40'
                    }`}
                  >
                    <span
                      className="w-3.5 h-3.5 rounded-full border border-white/20 shrink-0"
                      style={{ backgroundColor: t.primary }}
                    />
                    <span className="truncate">{isFa ? t.nameFa : t.nameEn}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Historical Fact box */}
          <div
            className={`p-3.5 rounded-xl border text-xs leading-relaxed ${
              isLight
                ? 'bg-[#faf8f2] border-[#e4ddcf] text-[#475569]'
                : 'bg-[#0c1b33] border-[#1c2a43] text-[#d1c5b4]'
            }`}
          >
            <span className={`font-bold block mb-1 ${isLight ? 'text-[#875e18]' : 'text-[#e9c176]'}`}>
              {isFa ? 'راز ریاضی گره‌چینی: ' : 'The Girih Discovery: '}
            </span>
            {isFa
              ? 'پژوهش‌های دانشگاه هاروارد در سال ۲۰۰۷ نشان داد که معماران مساجد اصفهان و گنبد مراغه در سده پانزدهم میلادی، ۵۰۰ سال قبل از راجر پنروز در غرب، ساختارهای بلوری شبه‌دوره‌ای (Quasi-crystalline) را در نقوش گره‌چینی به کار گرفته بودند.'
              : 'In 2007, Harvard researchers proved that medieval Persian architects applied quasi-crystalline mathematical tilings on domes in Isfahan and Maragheh 500 years before modern Western mathematician Roger Penrose formulated them.'}
          </div>

        </div>

      </div>
    </section>
  );
};
