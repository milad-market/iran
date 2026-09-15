import React, { useState } from 'react';
import { Language } from '../types';
import { Sparkles, Palette, RotateCw, Copy, Check, Download } from 'lucide-react';

interface TessellationGeneratorProps {
  language: Language;
}

export const TessellationGenerator: React.FC<TessellationGeneratorProps> = ({ language }) => {
  const isFa = language === 'fa';
  const [folds, setFolds] = useState<number>(8);
  const [layers, setLayers] = useState<number>(3);
  const [colorTheme, setColorTheme] = useState<'lapis' | 'turquoise' | 'terracotta' | 'emerald'>('lapis');
  const [copied, setCopied] = useState<boolean>(false);

  // Themes
  const themes = {
    lapis: {
      nameEn: 'Lapis & Antique Gold',
      nameFa: 'لاجورد و زرین کهن',
      primary: '#c5a059',
      secondary: '#1b3b6f',
      accent: '#e9c176',
      bg: '#04132b',
    },
    turquoise: {
      nameEn: 'Isfahan Turquoise',
      nameFa: 'فیروزه اصفهان',
      primary: '#38bdf8',
      secondary: '#0369a1',
      accent: '#bae6fd',
      bg: '#082f49',
    },
    terracotta: {
      nameEn: 'Kashan Terracotta & Amber',
      nameFa: 'خاک کاشان و کهربا',
      primary: '#c85a32',
      secondary: '#7c2d12',
      accent: '#ffb59c',
      bg: '#271008',
    },
    emerald: {
      nameEn: 'Imperial Emerald',
      nameFa: 'زمرد شاهانه',
      primary: '#10b981',
      secondary: '#064e3b',
      accent: '#6ee7b7',
      bg: '#022c22',
    },
  };

  const currentTheme = themes[colorTheme];

  // Mathematical generation of Shamseh / Girih star points
  const renderGeometry = () => {
    const size = 320;
    const center = size / 2;
    const elements: React.ReactNode[] = [];

    // Outer concentric rings
    elements.push(
      <circle
        key="outer-ring"
        cx={center}
        cy={center}
        r={center - 12}
        stroke={currentTheme.primary}
        strokeWidth="1.5"
        strokeDasharray="4 3"
        fill="none"
        opacity="0.8"
      />,
      <circle
        key="inner-ring"
        cx={center}
        cy={center}
        r={center - 24}
        stroke={currentTheme.primary}
        strokeWidth="1"
        fill="none"
        opacity="0.6"
      />
    );

    // Multi-layer Star Polygons (Girih & Shamseh)
    for (let layer = 1; layer <= layers; layer++) {
      const radius = (center - 36) * (layer / layers);
      const innerRadius = radius * 0.58;
      const points: string[] = [];

      const totalVertices = folds * 2;
      for (let i = 0; i < totalVertices; i++) {
        const angle = (i * Math.PI) / folds - Math.PI / 2;
        const r = i % 2 === 0 ? radius : innerRadius;
        const x = center + r * Math.cos(angle);
        const y = center + r * Math.sin(angle);
        points.push(`${x},${y}`);
      }

      elements.push(
        <polygon
          key={`star-poly-${layer}`}
          points={points.join(' ')}
          stroke={layer === layers ? currentTheme.primary : currentTheme.accent}
          strokeWidth="1.5"
          fill={layer === 1 ? currentTheme.secondary : 'none'}
          fillOpacity="0.4"
          className="transition-all duration-500"
        />
      );

      // Connecting intersection cords
      for (let j = 0; j < folds; j++) {
        const a1 = (j * 2 * Math.PI) / folds - Math.PI / 2;
        const x1 = center + radius * Math.cos(a1);
        const y1 = center + radius * Math.sin(a1);

        const a2 = ((j + Math.floor(folds / 2)) * 2 * Math.PI) / folds - Math.PI / 2;
        const x2 = center + radius * Math.cos(a2);
        const y2 = center + radius * Math.sin(a2);

        elements.push(
          <line
            key={`cord-${layer}-${j}`}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke={currentTheme.primary}
            strokeWidth="0.75"
            opacity="0.35"
          />
        );
      }
    }

    // Center focal rosette
    elements.push(
      <circle
        key="center-sun"
        cx={center}
        cy={center}
        r={14}
        fill={currentTheme.primary}
        stroke={currentTheme.accent}
        strokeWidth="2"
      />
    );

    return elements;
  };

  const copySvg = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="geometry-section">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
        <div>
          <div className="flex items-center gap-2 text-[#e9c176] text-xs font-semibold tracking-wider uppercase mb-1">
            <Sparkles className="w-4 h-4" />
            <span>{isFa ? 'استودیوی ریاضیات و هندسه نقوش اسلامی' : 'Sacred Geometry & Girih Studio'}</span>
          </div>
          <h2 className="font-serif-title text-2xl sm:text-3xl font-bold text-[#d7e3ff]">
            {isFa ? 'کارگاه شمسه و گره‌چینی ایرانی' : 'The Persian Shamseh & Girih Tiling Studio'}
          </h2>
        </div>
        <p className="text-sm text-[#d1c5b4] max-w-md">
          {isFa
            ? 'الگوهای شمسه (خورشید نمادین) و تقارن‌های گره‌چینی که توسط ریاضی‌دانان ایرانی سده‌ها پیش از بلورشناسی غرب خلق شدند.'
            : 'Interactive generator based on the mathematical Girih tile discoveries of medieval Persian geometers.'}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#112038] border border-[#c5a059]/40 rounded-xl p-6 sm:p-8 shadow-2xl">
        
        {/* Geometry Canvas Preview (6 cols) */}
        <div className="lg:col-span-6 flex flex-col items-center justify-center p-6 rounded-lg bg-[#04132b] border border-[#1c2a43] relative overflow-hidden">
          <div className="w-[320px] h-[320px] flex items-center justify-center relative">
            <svg
              viewBox="0 0 320 320"
              className="w-full h-full filter drop-shadow-[0_0_15px_rgba(197,160,89,0.3)] transition-all duration-700"
            >
              {renderGeometry()}
            </svg>
          </div>

          <div className="mt-4 text-xs text-[#acc7ff] flex items-center gap-2 font-mono">
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
              <label className="text-xs font-bold uppercase tracking-wider text-[#e9c176]">
                {isFa ? 'تعداد پرهای شمسه (مرتبه تقارن)' : 'Star Symmetry (Folds / Rays)'}
              </label>
              <span className="text-sm font-mono font-bold text-[#d7e3ff]">{folds}-fold</span>
            </div>
            <div className="grid grid-cols-4 gap-2">
              {[6, 8, 10, 12].map((f) => (
                <button
                  key={f}
                  onClick={() => setFolds(f)}
                  className={`py-2 text-xs font-bold rounded border transition-colors ${
                    folds === f
                      ? 'bg-[#c5a059] text-[#04132b] border-[#ffd68a]'
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
              <label className="text-xs font-bold uppercase tracking-wider text-[#e9c176]">
                {isFa ? 'لایه‌های تودرتوی گره‌چینی' : 'Concentric Girih Tiers'}
              </label>
              <span className="text-sm font-mono font-bold text-[#d7e3ff]">{layers}</span>
            </div>
            <input
              type="range"
              min="1"
              max="5"
              step="1"
              value={layers}
              onChange={(e) => setLayers(Number(e.target.value))}
              className="w-full accent-[#c5a059] bg-[#0c1b33] h-2 rounded cursor-pointer"
            />
          </div>

          {/* Palette Themes */}
          <div>
            <label className="text-xs font-bold uppercase tracking-wider text-[#e9c176] block mb-2">
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
                    className={`p-2.5 rounded border text-left rtl:text-right text-xs transition-colors flex items-center gap-2 ${
                      isSelected
                        ? 'bg-[#1c2a43] border-[#e9c176] text-[#e9c176] font-bold'
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
          <div className="p-3.5 rounded-lg bg-[#0c1b33] border border-[#1c2a43] text-xs text-[#d1c5b4] leading-relaxed">
            <span className="font-bold text-[#e9c176] block mb-1">
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
