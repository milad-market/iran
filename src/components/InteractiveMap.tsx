import React, { useState } from 'react';
import { HeritageSite, Language, Theme } from '../types';
import { HERITAGE_SITES } from '../data/heritageData';
import { MapPin, Award, Compass, Layers, Info } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface InteractiveMapProps {
  language: Language;
  theme?: Theme;
}

export const InteractiveMap: React.FC<InteractiveMapProps> = ({ language, theme = 'dark' }) => {
  const isFa = language === 'fa';
  const isLight = theme === 'light';

  const [selectedSiteId, setSelectedSiteId] = useState<string>(HERITAGE_SITES[0].id);
  const [filterType, setFilterType] = useState<string>('all');

  const selectedSite = HERITAGE_SITES.find((s) => s.id === selectedSiteId) || HERITAGE_SITES[0];

  const filteredSites = HERITAGE_SITES.filter((site) => {
    if (filterType === 'all') return true;
    return site.type === filterType;
  });

  return (
    <section className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="map-section">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
        <div>
          <div
            className={`flex items-center gap-2 text-xs font-semibold tracking-wider uppercase mb-1 ${
              isLight ? 'text-[#875e18]' : 'text-[#e9c176]'
            }`}
          >
            <Compass className="w-4 h-4" />
            <span>{isFa ? 'اطلس جغرافیای تاریخی و باستان‌شناسی' : 'Cartographic Heritage Atlas'}</span>
          </div>
          <h2
            className={`font-serif-title text-2xl sm:text-3xl font-bold ${
              isLight ? 'text-[#152033]' : 'text-[#d7e3ff]'
            }`}
          >
            {isFa ? 'محوطه‌ها و شاهکارهای ثبت جهانی یونسکو' : 'Iranian UNESCO World Heritage Sites'}
          </h2>
        </div>
        <p className={`text-sm max-w-md ${isLight ? 'text-[#57534e]' : 'text-[#d1c5b4]'}`}>
          {isFa
            ? 'بر روی نشانگرهای نقشه کلیک کنید تا اطلاعات معماری و تاریخی هر بنا را در این اطلس کهن مشاهده فرمایید.'
            : 'Select pins on the plateau cartography to examine structural preservation, era origins, and UNESCO citations.'}
        </p>
      </div>

      {/* Main Map + Inspection Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Cartographic Canvas Window (7 cols) */}
        <div
          className={`border rounded-2xl p-5 relative overflow-hidden shadow-2xl flex flex-col justify-between min-h-[440px] transition-colors ${
            isLight
              ? 'bg-[#faf7f0] border-[#c5a059]/40 shadow-[#c5a059]/10'
              : 'bg-[#0c1b33] border-[#c5a059]/40 shadow-[#000e25]/60'
          }`}
        >
          {/* Top HUD overlay */}
          <div className="flex items-center justify-between z-20 mb-3">
            <div
              className={`flex items-center gap-2 backdrop-blur-md px-3.5 py-1.5 rounded-lg border text-xs font-semibold ${
                isLight
                  ? 'bg-white/90 border-[#d8d0c4] text-[#875e18]'
                  : 'bg-[#04132b]/90 border-[#c5a059]/30 text-[#e9c176]'
              }`}
            >
              <Layers className={`w-3.5 h-3.5 ${isLight ? 'text-[#b8860b]' : 'text-[#ffd68a]'}`} />
              <span>{isFa ? 'فلات ایران و مسیرهای کهن ابریشم' : 'Iranian Plateau & Silk Routes'}</span>
            </div>

            {/* Filter Pills */}
            <div
              className={`flex items-center gap-1 backdrop-blur-md p-1 rounded-lg border text-xs ${
                isLight ? 'bg-white/90 border-[#d8d0c4]' : 'bg-[#04132b]/90 border-[#1c2a43]'
              }`}
            >
              <button
                onClick={() => setFilterType('all')}
                className={`px-2.5 py-1 rounded-md text-[11px] font-semibold transition-all cursor-pointer ${
                  filterType === 'all'
                    ? 'bg-[#c5a059] text-white shadow-sm font-bold'
                    : isLight
                    ? 'text-[#57534e] hover:text-[#152033]'
                    : 'text-[#d1c5b4] hover:text-white'
                }`}
              >
                {isFa ? 'همه آثار' : 'All Sites'}
              </button>
              <button
                onClick={() => setFilterType('monument')}
                className={`px-2.5 py-1 rounded-md text-[11px] font-semibold transition-all cursor-pointer ${
                  filterType === 'monument'
                    ? 'bg-[#c5a059] text-white shadow-sm font-bold'
                    : isLight
                    ? 'text-[#57534e] hover:text-[#152033]'
                    : 'text-[#d1c5b4] hover:text-white'
                }`}
              >
                {isFa ? 'کاخ و بنا' : 'Palaces'}
              </button>
              <button
                onClick={() => setFilterType('hydraulic')}
                className={`px-2.5 py-1 rounded-md text-[11px] font-semibold transition-all cursor-pointer ${
                  filterType === 'hydraulic'
                    ? 'bg-[#c5a059] text-white shadow-sm font-bold'
                    : isLight
                    ? 'text-[#57534e] hover:text-[#152033]'
                    : 'text-[#d1c5b4] hover:text-white'
                }`}
              >
                {isFa ? 'سازه آب' : 'Hydraulics'}
              </button>
            </div>
          </div>

          {/* Stylized SVG Map Representation of Iranian Plateau */}
          <div
            className={`relative w-full aspect-[4/3] rounded-xl border overflow-hidden flex items-center justify-center transition-colors ${
              isLight ? 'bg-[#efe9dc] border-[#d8d0c4]' : 'bg-[#04132b] border-[#1c2a43]'
            }`}
          >
            {/* Caspian Sea (North) Water Body */}
            <div
              className={`absolute top-2 left-[35%] w-32 h-14 rounded-full blur-sm border pointer-events-none ${
                isLight ? 'bg-[#9cc1e6]/40 border-[#81aedc]' : 'bg-[#1b3b6f]/30 border-[#1b3b6f]/40'
              }`}
            />
            <div
              className={`absolute top-4 left-[38%] text-[10px] font-serif-title uppercase tracking-widest pointer-events-none ${
                isLight ? 'text-[#356598] font-bold' : 'text-[#acc7ff]/60'
              }`}
            >
              {isFa ? 'دریای کاسپین' : 'Caspian Sea'}
            </div>

            {/* Persian Gulf (South) Water Body */}
            <div
              className={`absolute bottom-2 left-[25%] w-48 h-16 rounded-full blur-sm border pointer-events-none ${
                isLight ? 'bg-[#9cc1e6]/40 border-[#81aedc]' : 'bg-[#1b3b6f]/30 border-[#1b3b6f]/40'
              }`}
            />
            <div
              className={`absolute bottom-4 left-[30%] text-[10px] font-serif-title uppercase tracking-widest pointer-events-none ${
                isLight ? 'text-[#356598] font-bold' : 'text-[#acc7ff]/60'
              }`}
            >
              {isFa ? 'خلیج همیشه فارس' : 'Persian Gulf'}
            </div>

            {/* Ancient Silk Road trade trajectory indicator */}
            <svg
              className={`absolute inset-0 w-full h-full pointer-events-none ${
                isLight ? 'stroke-[#875e18]/30' : 'stroke-[#c5a059]/20'
              }`}
              fill="none"
            >
              <path d="M 50 200 Q 200 180 350 160 T 550 140" strokeWidth="1.5" strokeDasharray="4 4" />
              <path d="M 180 180 L 260 270 L 330 310" strokeWidth="1" strokeDasharray="3 3" />
            </svg>

            {/* Plateau Region Label in center */}
            <div className="absolute top-[48%] left-[44%] text-center pointer-events-none select-none opacity-25">
              <div
                className={`font-serif-title text-3xl font-bold tracking-widest ${
                  isLight ? 'text-[#875e18]' : 'text-[#e9c176]'
                }`}
              >
                IRAN
              </div>
              <div className={`text-xs tracking-wider ${isLight ? 'text-[#57534e]' : 'text-[#d7e3ff]'}`}>
                {isFa ? 'فلات ایران' : 'Persian Plateau'}
              </div>
            </div>

            {/* Interactive Pins */}
            {filteredSites.map((site) => {
              const isSelected = site.id === selectedSiteId;
              return (
                <button
                  key={site.id}
                  id={`map-pin-${site.id}`}
                  onClick={() => setSelectedSiteId(site.id)}
                  style={{
                    left: `${site.coordinates.x}%`,
                    top: `${site.coordinates.y}%`,
                    transform: 'translate(-50%, -50%)',
                  }}
                  className="absolute z-30 group/pin focus:outline-none transition-transform cursor-pointer"
                >
                  <motion.div
                    animate={isSelected ? { scale: [1, 1.2, 1.1] } : { scale: 1 }}
                    transition={{ duration: 0.3 }}
                    className="relative flex items-center justify-center"
                  >
                    {/* Glowing outer aura for selected pin */}
                    {isSelected && (
                      <span
                        className={`absolute w-9 h-9 rounded-full animate-ping ${
                          isLight ? 'bg-[#b8860b]/40' : 'bg-[#e9c176]/35'
                        }`}
                      />
                    )}
                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center border shadow-lg transition-all ${
                        isSelected
                          ? 'bg-[#c5a059] border-[#ffd68a] text-white shadow-md'
                          : isLight
                          ? 'bg-white border-[#b8860b] text-[#875e18] hover:bg-[#faf6ee]'
                          : 'bg-[#142542] border-[#c5a059] text-[#e9c176] hover:bg-[#1b3256]'
                      }`}
                    >
                      <MapPin className="w-3.5 h-3.5 fill-current" />
                    </div>

                    {/* Tooltip on pin */}
                    <div
                      className={`absolute bottom-full mb-1.5 hidden group-hover/pin:block whitespace-nowrap border px-2.5 py-1 rounded-md text-[10px] font-semibold z-40 shadow-xl backdrop-blur-sm ${
                        isLight
                          ? 'bg-white border-[#b8860b] text-[#152033]'
                          : 'bg-[#04132b] border-[#c5a059] text-[#e9c176]'
                      }`}
                    >
                      {isFa ? site.nameFa : site.nameEn}
                    </div>
                  </motion.div>
                </button>
              );
            })}
          </div>

          {/* Bottom HUD bar */}
          <div className={`mt-3 flex items-center justify-between text-xs ${isLight ? 'text-[#78716c]' : 'text-[#9a8f80]'}`}>
            <span className="flex items-center gap-1.5">
              <span className={`w-2 h-2 rounded-full ${isLight ? 'bg-[#b8860b]' : 'bg-[#e9c176]'}`} />
              <span>{isFa ? 'محوطه میراث جهانی' : 'UNESCO Registered'}</span>
            </span>
            <span>{isFa ? 'مختصات ثبت‌شده تاریخی' : 'Historical Archaeological Coordinates'}</span>
          </div>
        </div>

        {/* Inspection Panel (5 cols) with smooth motion */}
        <div
          className={`border rounded-2xl p-6 shadow-xl flex flex-col justify-between transition-colors ${
            isLight
              ? 'bg-white/95 border-[#c5a059]/30 shadow-[#c5a059]/10'
              : 'bg-[#112038]/90 backdrop-blur-sm border-[#c5a059]/30 shadow-[#000e25]/50'
          }`}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedSite.id}
              initial={{ opacity: 0, x: isFa ? -10 : 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: isFa ? 10 : -10 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
            >
              {/* Top metadata tags */}
              <div className="flex items-center justify-between gap-2 mb-3">
                <span
                  className={`px-2.5 py-0.5 rounded-full text-xs font-bold border flex items-center gap-1 ${
                    isLight
                      ? 'bg-[#c5a059]/15 text-[#875e18] border-[#c5a059]/40'
                      : 'bg-[#c5a059]/20 text-[#e9c176] border-[#c5a059]/40'
                  }`}
                >
                  <Award className="w-3.5 h-3.5" />
                  <span>UNESCO {selectedSite.unescoYear}</span>
                </span>
                <span className={`text-xs font-medium ${isLight ? 'text-[#57534e]' : 'text-[#d1c5b4]'}`}>
                  {isFa ? `استان ${selectedSite.provinceFa}` : `${selectedSite.provinceEn} Province`}
                </span>
              </div>

              {/* Site Title & Era */}
              <h3
                className={`font-serif-title text-2xl font-bold mb-1 ${
                  isLight ? 'text-[#152033]' : 'text-[#d7e3ff]'
                }`}
              >
                {isFa ? selectedSite.nameFa : selectedSite.nameEn}
              </h3>
              <div className={`text-xs font-semibold mb-4 ${isLight ? 'text-[#875e18]' : 'text-[#e9c176]'}`}>
                {isFa ? `دوران: ${selectedSite.eraFa}` : `Origin: ${selectedSite.eraEn}`}
              </div>

              {/* Site Imagery */}
              <div
                className={`w-full h-44 rounded-xl overflow-hidden border mb-4 relative shadow-md ${
                  isLight ? 'border-[#e4ddcf]' : 'border-[#1c2a43]'
                }`}
              >
                <img
                  src={selectedSite.imageUrl}
                  alt={selectedSite.nameEn}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t via-transparent to-transparent pointer-events-none ${
                    isLight ? 'from-black/50' : 'from-[#04132b]/80'
                  }`}
                />
              </div>

              {/* Summary */}
              <p className={`text-xs sm:text-sm leading-relaxed mb-4 ${isLight ? 'text-[#334155]' : 'text-[#d7e3ff]'}`}>
                {isFa ? selectedSite.summaryFa : selectedSite.summaryEn}
              </p>

              {/* Architectural Highlights list */}
              <div>
                <h4
                  className={`text-xs font-bold uppercase tracking-wider mb-2 flex items-center gap-1 ${
                    isLight ? 'text-[#875e18]' : 'text-[#e9c176]'
                  }`}
                >
                  <Info className="w-3.5 h-3.5" />
                  <span>{isFa ? 'ویژگی‌های شاخص معماری و مهندسی' : 'Architectural & Engineering Highlights'}</span>
                </h4>
                <ul className="space-y-1.5">
                  {(isFa ? selectedSite.highlightsFa : selectedSite.highlightsEn).map((hl, idx) => (
                    <li key={idx} className={`text-xs flex items-start gap-2 ${isLight ? 'text-[#475569]' : 'text-[#d1c5b4]'}`}>
                      <span className={`mt-0.5 text-[10px] ${isLight ? 'text-[#b8860b]' : 'text-[#e9c176]'}`}>■</span>
                      <span>{hl}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Bottom Quick-Select site pill tabs */}
          <div
            className={`mt-6 pt-4 border-t flex items-center gap-2 overflow-x-auto no-scrollbar ${
              isLight ? 'border-[#e4ddcf]' : 'border-[#1c2a43]'
            }`}
          >
            {HERITAGE_SITES.map((site) => (
              <button
                key={site.id}
                onClick={() => setSelectedSiteId(site.id)}
                className={`px-3 py-1 text-[11px] font-semibold rounded-lg whitespace-nowrap transition-all cursor-pointer ${
                  site.id === selectedSiteId
                    ? 'bg-[#c5a059] text-white font-bold shadow-md'
                    : isLight
                    ? 'bg-[#f4efe5] text-[#57534e] hover:text-[#152033]'
                    : 'bg-[#0c1b33] text-[#d1c5b4] hover:text-[#d7e3ff]'
                }`}
              >
                {isFa ? site.nameFa.split(' ')[0] : site.nameEn.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
