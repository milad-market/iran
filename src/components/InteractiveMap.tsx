import React, { useState } from 'react';
import { HeritageSite, Language } from '../types';
import { HERITAGE_SITES } from '../data/heritageData';
import { MapPin, Award, Compass, Layers, Info } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface InteractiveMapProps {
  language: Language;
}

export const InteractiveMap: React.FC<InteractiveMapProps> = ({ language }) => {
  const isFa = language === 'fa';
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
          <div className="flex items-center gap-2 text-[#e9c176] text-xs font-semibold tracking-wider uppercase mb-1">
            <Compass className="w-4 h-4" />
            <span>{isFa ? 'اطلس جغرافیای تاریخی و باستان‌شناسی' : 'Cartographic Heritage Atlas'}</span>
          </div>
          <h2 className="font-serif-title text-2xl sm:text-3xl font-bold text-[#d7e3ff]">
            {isFa ? 'محوطه‌ها و شاهکارهای ثبت جهانی یونسکو' : 'Iranian UNESCO World Heritage Sites'}
          </h2>
        </div>
        <p className="text-sm text-[#d1c5b4] max-w-md">
          {isFa
            ? 'بر روی نشانگرهای نقشه کلیک کنید تا اطلاعات معماری و تاریخی هر بنا را در این اطلس کهن مشاهده فرمایید.'
            : 'Select pins on the plateau cartography to examine structural preservation, era origins, and UNESCO citations.'}
        </p>
      </div>

      {/* Main Map + Inspection Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Cartographic Canvas Window (7 cols) */}
        <div className="lg:col-span-7 bg-[#0c1b33] border border-[#c5a059]/40 rounded-2xl p-5 relative overflow-hidden shadow-2xl flex flex-col justify-between min-h-[440px]">
          
          {/* Top HUD overlay */}
          <div className="flex items-center justify-between z-20 mb-3">
            <div className="flex items-center gap-2 bg-[#04132b]/90 backdrop-blur-md px-3.5 py-1.5 rounded-lg border border-[#c5a059]/30 text-xs text-[#e9c176] font-semibold">
              <Layers className="w-3.5 h-3.5 text-[#ffd68a]" />
              <span>{isFa ? 'فلات ایران و مسیرهای کهن ابریشم' : 'Iranian Plateau & Silk Routes'}</span>
            </div>

            {/* Filter Pills */}
            <div className="flex items-center gap-1 bg-[#04132b]/90 backdrop-blur-md p-1 rounded-lg border border-[#1c2a43] text-xs">
              <button
                onClick={() => setFilterType('all')}
                className={`px-2.5 py-1 rounded-md text-[11px] font-semibold transition-all cursor-pointer ${
                  filterType === 'all' ? 'bg-[#c5a059] text-[#04132b] shadow-sm' : 'text-[#d1c5b4] hover:text-white'
                }`}
              >
                {isFa ? 'همه آثار' : 'All Sites'}
              </button>
              <button
                onClick={() => setFilterType('monument')}
                className={`px-2.5 py-1 rounded-md text-[11px] font-semibold transition-all cursor-pointer ${
                  filterType === 'monument' ? 'bg-[#c5a059] text-[#04132b] shadow-sm' : 'text-[#d1c5b4] hover:text-white'
                }`}
              >
                {isFa ? 'کاخ و بنا' : 'Palaces'}
              </button>
              <button
                onClick={() => setFilterType('hydraulic')}
                className={`px-2.5 py-1 rounded-md text-[11px] font-semibold transition-all cursor-pointer ${
                  filterType === 'hydraulic' ? 'bg-[#c5a059] text-[#04132b] shadow-sm' : 'text-[#d1c5b4] hover:text-white'
                }`}
              >
                {isFa ? 'سازه آب' : 'Hydraulics'}
              </button>
            </div>
          </div>

          {/* Stylized SVG Map Representation of Iranian Plateau */}
          <div className="relative w-full aspect-[4/3] rounded-xl bg-[#04132b] border border-[#1c2a43] overflow-hidden flex items-center justify-center">
            
            {/* Caspian Sea (North) Water Body */}
            <div className="absolute top-2 left-[35%] w-32 h-14 bg-[#1b3b6f]/30 rounded-full blur-sm border border-[#1b3b6f]/40 pointer-events-none" />
            <div className="absolute top-4 left-[38%] text-[10px] text-[#acc7ff]/60 font-serif-title uppercase tracking-widest pointer-events-none">
              {isFa ? 'دریای کاسپین' : 'Caspian Sea'}
            </div>

            {/* Persian Gulf (South) Water Body */}
            <div className="absolute bottom-2 left-[25%] w-48 h-16 bg-[#1b3b6f]/30 rounded-full blur-sm border border-[#1b3b6f]/40 pointer-events-none" />
            <div className="absolute bottom-4 left-[30%] text-[10px] text-[#acc7ff]/60 font-serif-title uppercase tracking-widest pointer-events-none">
              {isFa ? 'خلیج همیشه فارس' : 'Persian Gulf'}
            </div>

            {/* Ancient Silk Road trade trajectory indicator */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none stroke-[#c5a059]/20" fill="none">
              <path d="M 50 200 Q 200 180 350 160 T 550 140" strokeWidth="1.5" strokeDasharray="4 4" />
              <path d="M 180 180 L 260 270 L 330 310" strokeWidth="1" strokeDasharray="3 3" stroke="#acc7ff/20" />
            </svg>

            {/* Plateau Region Label in center */}
            <div className="absolute top-[48%] left-[44%] text-center pointer-events-none select-none opacity-20">
              <div className="font-serif-title text-3xl font-bold tracking-widest text-[#e9c176]">IRAN</div>
              <div className="text-xs text-[#d7e3ff] tracking-wider">{isFa ? 'فلات ایران' : 'Persian Plateau'}</div>
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
                      <span className="absolute w-9 h-9 rounded-full bg-[#e9c176]/35 animate-ping" />
                    )}
                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center border shadow-lg transition-all ${
                        isSelected
                          ? 'bg-[#c5a059] border-[#ffd68a] text-[#04132b] shadow-[0_0_15px_rgba(233,193,118,0.8)]'
                          : 'bg-[#142542] border-[#c5a059] text-[#e9c176] hover:bg-[#1b3256]'
                      }`}
                    >
                      <MapPin className="w-3.5 h-3.5 fill-current" />
                    </div>

                    {/* Tooltip on pin */}
                    <div className="absolute bottom-full mb-1.5 hidden group-hover/pin:block whitespace-nowrap bg-[#04132b] border border-[#c5a059] px-2.5 py-1 rounded-md text-[10px] text-[#e9c176] font-semibold z-40 shadow-xl backdrop-blur-sm">
                      {isFa ? site.nameFa : site.nameEn}
                    </div>
                  </motion.div>
                </button>
              );
            })}
          </div>

          {/* Bottom HUD bar */}
          <div className="mt-3 flex items-center justify-between text-xs text-[#9a8f80]">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#e9c176]" />
              <span>{isFa ? 'محوطه میراث جهانی' : 'UNESCO Registered'}</span>
            </span>
            <span>{isFa ? 'مختصات ثبت‌شده تاریخی' : 'Historical Archaeological Coordinates'}</span>
          </div>
        </div>

        {/* Inspection Panel (5 cols) with smooth motion */}
        <div className="lg:col-span-5 bg-[#112038]/90 backdrop-blur-sm border border-[#c5a059]/30 rounded-2xl p-6 shadow-xl flex flex-col justify-between">
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
                <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-[#c5a059]/20 text-[#e9c176] border border-[#c5a059]/40 flex items-center gap-1">
                  <Award className="w-3.5 h-3.5" />
                  <span>UNESCO {selectedSite.unescoYear}</span>
                </span>
                <span className="text-xs text-[#d1c5b4] font-medium">
                  {isFa ? `استان ${selectedSite.provinceFa}` : `${selectedSite.provinceEn} Province`}
                </span>
              </div>

              {/* Site Title & Era */}
              <h3 className="font-serif-title text-2xl font-bold text-[#d7e3ff] mb-1">
                {isFa ? selectedSite.nameFa : selectedSite.nameEn}
              </h3>
              <div className="text-xs text-[#e9c176] font-semibold mb-4">
                {isFa ? `دوران: ${selectedSite.eraFa}` : `Origin: ${selectedSite.eraEn}`}
              </div>

              {/* Site Imagery */}
              <div className="w-full h-44 rounded-xl overflow-hidden border border-[#1c2a43] mb-4 relative shadow-md">
                <img
                  src={selectedSite.imageUrl}
                  alt={selectedSite.nameEn}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#04132b]/80 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Summary */}
              <p className="text-xs sm:text-sm text-[#d7e3ff] leading-relaxed mb-4">
                {isFa ? selectedSite.summaryFa : selectedSite.summaryEn}
              </p>

              {/* Architectural Highlights list */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#e9c176] mb-2 flex items-center gap-1">
                  <Info className="w-3.5 h-3.5" />
                  <span>{isFa ? 'ویژگی‌های شاخص معماری و مهندسی' : 'Architectural & Engineering Highlights'}</span>
                </h4>
                <ul className="space-y-1.5">
                  {(isFa ? selectedSite.highlightsFa : selectedSite.highlightsEn).map((hl, idx) => (
                    <li key={idx} className="text-xs text-[#d1c5b4] flex items-start gap-2">
                      <span className="text-[#e9c176] mt-0.5 text-[10px]">■</span>
                      <span>{hl}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Bottom Quick-Select site pill tabs */}
          <div className="mt-6 pt-4 border-t border-[#1c2a43] flex items-center gap-2 overflow-x-auto no-scrollbar">
            {HERITAGE_SITES.map((site) => (
              <button
                key={site.id}
                onClick={() => setSelectedSiteId(site.id)}
                className={`px-3 py-1 text-[11px] font-semibold rounded-lg whitespace-nowrap transition-all cursor-pointer ${
                  site.id === selectedSiteId
                    ? 'bg-[#c5a059] text-[#04132b] font-bold shadow-md'
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
