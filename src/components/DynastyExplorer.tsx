import React, { useState } from 'react';
import { Dynasty, Language } from '../types';
import { DYNASTIES } from '../data/heritageData';
import { Crown, MapPin, Award, ChevronRight, Users, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface DynastyExplorerProps {
  language: Language;
  onSelectEraForTimeline?: (eraId: string) => void;
  selectedDynastyId?: string;
}

export const DynastyExplorer: React.FC<DynastyExplorerProps> = ({
  language,
  onSelectEraForTimeline,
}) => {
  const isFa = language === 'fa';
  const [selectedId, setSelectedId] = useState<string>(DYNASTIES[0].id);

  const selectedDynasty = DYNASTIES.find((d) => d.id === selectedId) || DYNASTIES[0];

  return (
    <section className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="dynasties-section">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
        <div>
          <div className="flex items-center gap-2 text-[#e9c176] text-xs font-semibold tracking-wider uppercase mb-1">
            <Crown className="w-4 h-4" />
            <span>{isFa ? 'گاه‌نگاری پادشاهی‌ها و حکومت‌ها' : 'Dynastic Chronicles'}</span>
          </div>
          <h2 className="font-serif-title text-2xl sm:text-3xl font-bold text-[#d7e3ff]">
            {isFa ? 'سلسله‌های بزرگ و تحول تمدنی' : 'The Great Dynasties of Persia'}
          </h2>
        </div>
        <p className="text-sm text-[#d1c5b4] max-w-md">
          {isFa
            ? 'سلسله‌ها را انتخاب کنید تا دستاوردهای مهندسی، فرمانروایان اثرگذار و گستره جغرافیایی آنان را بررسی نمایید.'
            : 'Select an era to explore foundational rulers, architectural breakthroughs, and imperial expanse.'}
        </p>
      </div>

      {/* Grid of Dynasty Cards with animated spring interaction */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-8">
        {DYNASTIES.map((dynasty, idx) => {
          const isSelected = dynasty.id === selectedId;
          return (
            <motion.button
              key={dynasty.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              whileHover={{ y: -4, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setSelectedId(dynasty.id)}
              id={`dynasty-pill-${dynasty.id}`}
              className={`p-3.5 rounded-xl border text-left rtl:text-right transition-all relative overflow-hidden group cursor-pointer ${
                isSelected
                  ? 'bg-[#1b3256] border-[#e9c176] shadow-[0_0_20px_rgba(197,160,89,0.3)]'
                  : 'bg-[#112038] border-[#c5a059]/20 hover:border-[#c5a059]/50 hover:bg-[#142542]'
              }`}
            >
              <div className="text-2xl mb-1.5 group-hover:scale-110 transition-transform duration-300">
                {dynasty.emblem}
              </div>
              <div className="font-serif-title text-sm font-bold text-[#d7e3ff] truncate group-hover:text-[#e9c176] transition-colors">
                {isFa ? dynasty.nameFa : dynasty.nameEn}
              </div>
              <div className="text-[11px] text-[#e9c176] mt-0.5 font-medium">
                {isFa ? dynasty.periodFa : dynasty.periodEn}
              </div>
              {isSelected && (
                <motion.div 
                  layoutId="activeDynastyCorner"
                  className="absolute top-0 right-0 rtl:right-auto rtl:left-0 w-3 h-3 bg-[#e9c176] rounded-bl-md rtl:rounded-bl-none rtl:rounded-br-md" 
                />
              )}
            </motion.button>
          );
        })}
      </div>

      {/* Featured Detailed View of Selected Dynasty with smooth animated presence */}
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedDynasty.id}
          initial={{ opacity: 0, y: 12, scale: 0.99 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -12, scale: 0.99 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          className="bg-[#112038]/90 backdrop-blur-sm border border-[#c5a059]/30 rounded-2xl p-6 sm:p-8 shadow-2xl relative overflow-hidden"
        >
          {/* Subtle Watermark emblem */}
          <div className="absolute -bottom-10 -right-10 rtl:-right-auto rtl:-left-10 text-9xl opacity-5 pointer-events-none select-none">
            {selectedDynasty.emblem}
          </div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Main Info Column */}
            <div className="lg:col-span-7">
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <span className="px-3 py-1 rounded-full bg-[#c5a059]/20 text-[#e9c176] border border-[#c5a059]/40 text-xs font-bold shadow-sm">
                  {isFa ? selectedDynasty.periodFa : selectedDynasty.periodEn}
                </span>
                <span className="text-xs text-[#d1c5b4] flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#e9c176]" />
                  <span>
                    {isFa ? 'پایتخت‌ها: ' : 'Capitals: '}
                    {isFa ? selectedDynasty.capitalFa : selectedDynasty.capitalEn}
                  </span>
                </span>
              </div>

              <h3 className="font-serif-title text-2xl sm:text-3xl font-bold text-[#e9c176] mb-3">
                {isFa ? selectedDynasty.nameFa : selectedDynasty.nameEn}
              </h3>

              <p className="text-sm sm:text-base text-[#d7e3ff] leading-relaxed mb-6">
                {isFa ? selectedDynasty.descriptionFa : selectedDynasty.descriptionEn}
              </p>

              {/* Key Achievements Checklist */}
              <div className="mb-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#e9c176] mb-3 flex items-center gap-1.5">
                  <Award className="w-4 h-4" />
                  <span>{isFa ? 'دستاوردهای شاخص تمدنی و مهندسی' : 'Key Civilizational Achievements'}</span>
                </h4>
                <ul className="space-y-2.5">
                  {(isFa ? selectedDynasty.achievementsFa : selectedDynasty.achievementsEn).map((ach, idx) => (
                    <motion.li 
                      key={idx}
                      initial={{ opacity: 0, x: isFa ? 8 : -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: idx * 0.08 }}
                      className="text-xs sm:text-sm text-[#d1c5b4] flex items-start gap-2.5"
                    >
                      <span className="text-[#e9c176] mt-1 text-xs">◆</span>
                      <span>{ach}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Cultural Legacy */}
              <div className="p-4 rounded-xl bg-[#0c1b33] border border-[#1c2a43] text-xs sm:text-sm text-[#acc7ff]">
                <span className="font-bold text-[#e9c176] mr-1 rtl:mr-0 rtl:ml-1">
                  {isFa ? 'میراث ماندگار جهانی: ' : 'Enduring Global Legacy: '}
                </span>
                {isFa ? selectedDynasty.culturalLegacyFa : selectedDynasty.culturalLegacyEn}
              </div>
            </div>

            {/* Prominent Rulers and Figures */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#e9c176] mb-3 flex items-center gap-1.5">
                  <Users className="w-4 h-4" />
                  <span>{isFa ? 'شخصیت‌ها و فرمانروایان برجسته' : 'Prominent Rulers & Figures'}</span>
                </h4>

                <div className="space-y-3">
                  {selectedDynasty.rulers.map((ruler, idx) => (
                    <motion.div
                      key={idx}
                      whileHover={{ scale: 1.01, borderColor: 'rgba(233, 193, 118, 0.4)' }}
                      className="p-4 rounded-xl bg-[#0c1b33]/90 border border-[#c5a059]/20 hover:border-[#c5a059]/40 transition-all shadow-md"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-serif-title text-base font-bold text-[#d7e3ff]">
                          {isFa ? ruler.nameFa : ruler.nameEn}
                        </span>
                        <span className="text-[11px] text-[#e9c176] bg-[#1c2a43] px-2.5 py-0.5 rounded-full font-mono">
                          {isFa ? ruler.reignFa : ruler.reignEn}
                        </span>
                      </div>
                      <div className="text-xs text-[#acc7ff] font-medium mt-0.5">
                        {isFa ? ruler.titleFa : ruler.titleEn}
                      </div>
                      <p className="text-xs text-[#d1c5b4] mt-2 leading-relaxed">
                        {isFa ? ruler.achievementFa : ruler.achievementEn}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Expanse metric */}
              <div className="p-3.5 bg-[#1c2a43]/50 border border-[#4e4639] rounded-xl text-xs text-[#d1c5b4] flex items-center justify-between">
                <span>{isFa ? 'بیشینه گستره قلمرو' : 'Maximum Expanse'}</span>
                <span className="font-bold text-[#e9c176] font-mono text-sm">{selectedDynasty.territorySqKm}</span>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
};
