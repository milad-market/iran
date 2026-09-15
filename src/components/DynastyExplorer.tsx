import React, { useState, useMemo } from 'react';
import { Dynasty, Language, Theme, EraCategory } from '../types';
import { DYNASTIES } from '../data/heritageData';
import { Crown, MapPin, Award, Users, Filter } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface DynastyExplorerProps {
  language: Language;
  onSelectEraForTimeline?: (eraId: string) => void;
  selectedDynastyId?: string;
  theme?: Theme;
}

export const DynastyExplorer: React.FC<DynastyExplorerProps> = ({
  language,
  onSelectEraForTimeline,
  theme = 'dark',
}) => {
  const isFa = language === 'fa';
  const isLight = theme === 'light';

  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedId, setSelectedId] = useState<string>(DYNASTIES[0].id);

  const categories = [
    { id: 'all', labelFa: 'تمام ادوار (۱۷ دوره)', labelEn: 'All Eras (17)' },
    { id: 'pre-islamic', labelFa: 'ایران باستان (عیلام تا ساسانی)', labelEn: 'Ancient Persia (Pre-Islamic)' },
    { id: 'islamic-golden', labelFa: 'عصر زرین و رنسانس ایرانی', labelEn: 'Islamic Golden Age' },
    { id: 'medieval', labelFa: 'قرون میانه و دوره ایلخانی-تیموری', labelEn: 'Medieval & Timurid' },
    { id: 'modern', labelFa: 'دوران صفویه تا معاصر', labelEn: 'Safavid to Contemporary' },
  ];

  const filteredDynasties = useMemo(() => {
    if (selectedCategory === 'all') return DYNASTIES;
    return DYNASTIES.filter((d) => (d.eraCategory || d.category) === selectedCategory);
  }, [selectedCategory]);

  // Ensure selected dynasty is within filtered list or fallback
  const selectedDynasty = useMemo(() => {
    const found = filteredDynasties.find((d) => d.id === selectedId);
    return found || filteredDynasties[0] || DYNASTIES[0];
  }, [filteredDynasties, selectedId]);

  return (
    <section className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="dynasties-section">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
        <div>
          <div
            className={`flex items-center gap-2 text-xs font-semibold tracking-wider uppercase mb-1 ${
              isLight ? 'text-[#875e18]' : 'text-[#e9c176]'
            }`}
          >
            <Crown className="w-4 h-4" />
            <span>{isFa ? 'گاه‌نگاری پادشاهی‌ها و حکومت‌ها' : 'Dynastic Chronicles'}</span>
          </div>
          <h2
            className={`font-serif-title text-2xl sm:text-3xl font-bold transition-colors ${
              isLight ? 'text-[#152033]' : 'text-[#d7e3ff]'
            }`}
          >
            {isFa ? 'سلسله‌های بزرگ و تحول تمدنی ایران‌زمین' : 'The Sovereign Dynasties of Persia'}
          </h2>
        </div>
        <p className={`text-sm max-w-md ${isLight ? 'text-[#57534e]' : 'text-[#d1c5b4]'}`}>
          {isFa
            ? 'سلسله‌ها را انتخاب کنید تا دستاوردهای مهندسی، فرمانروایان اثرگذار و گستره جغرافیایی آنان را بررسی نمایید.'
            : 'Select an era to explore foundational rulers, architectural breakthroughs, and imperial expanse.'}
        </p>
      </div>

      {/* Category Filter Chips */}
      <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-6 no-scrollbar">
        <Filter className={`w-3.5 h-3.5 shrink-0 ${isLight ? 'text-[#875e18]' : 'text-[#e9c176]'}`} />
        {categories.map((cat) => {
          const isActive = selectedCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => {
                setSelectedCategory(cat.id);
                // Also update selected dynasty if needed
                const match = cat.id === 'all' ? DYNASTIES[0] : DYNASTIES.find((d) => (d.eraCategory || d.category) === cat.id);
                if (match) setSelectedId(match.id);
              }}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                isActive
                  ? isLight
                    ? 'bg-[#c5a059] text-white shadow-sm font-bold'
                    : 'bg-[#c5a059] text-[#04132b] shadow-[0_0_12px_rgba(197,160,89,0.4)] font-bold'
                  : isLight
                  ? 'bg-white border border-[#d8d0c4] text-[#57534e] hover:border-[#b8860b] hover:text-[#152033]'
                  : 'bg-[#0c1b33] border border-[#1c2a43] text-[#d1c5b4] hover:border-[#c5a059]/40 hover:text-[#d7e3ff]'
              }`}
            >
              {isFa ? cat.labelFa : cat.labelEn}
            </button>
          );
        })}
      </div>

      {/* Grid of Dynasty Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 mb-8">
        {filteredDynasties.map((dynasty, idx) => {
          const isSelected = dynasty.id === selectedDynasty.id;
          return (
            <motion.button
              key={dynasty.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: idx * 0.03 }}
              whileHover={{ y: -3, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setSelectedId(dynasty.id)}
              id={`dynasty-pill-${dynasty.id}`}
              className={`p-3.5 rounded-xl border text-left rtl:text-right transition-all relative overflow-hidden group cursor-pointer ${
                isSelected
                  ? isLight
                    ? 'bg-white border-[#b8860b] shadow-md ring-2 ring-[#c5a059]/30'
                    : 'bg-[#1b3256] border-[#e9c176] shadow-[0_0_20px_rgba(197,160,89,0.3)]'
                  : isLight
                  ? 'bg-white/80 border-[#e4ddcf] hover:border-[#c5a059]/50 hover:bg-white shadow-sm'
                  : 'bg-[#112038] border-[#c5a059]/20 hover:border-[#c5a059]/50 hover:bg-[#142542]'
              }`}
            >
              <div className="text-2xl mb-1.5 group-hover:scale-110 transition-transform duration-300">
                {dynasty.emblem}
              </div>
              <div
                className={`font-serif-title text-sm font-bold truncate transition-colors ${
                  isLight
                    ? isSelected
                      ? 'text-[#875e18]'
                      : 'text-[#152033] group-hover:text-[#875e18]'
                    : 'text-[#d7e3ff] group-hover:text-[#e9c176]'
                }`}
              >
                {isFa ? dynasty.nameFa : dynasty.nameEn}
              </div>
              <div
                className={`text-[11px] mt-0.5 font-medium ${
                  isLight ? 'text-[#875e18]' : 'text-[#e9c176]'
                }`}
              >
                {isFa ? dynasty.periodFa : dynasty.periodEn}
              </div>
              {isSelected && (
                <motion.div 
                  layoutId="activeDynastyCorner"
                  className="absolute top-0 right-0 rtl:right-auto rtl:left-0 w-3 h-3 bg-[#c5a059] rounded-bl-md rtl:rounded-bl-none rtl:rounded-br-md" 
                />
              )}
            </motion.button>
          );
        })}
      </div>

      {/* Featured Detailed View of Selected Dynasty */}
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedDynasty.id}
          initial={{ opacity: 0, y: 12, scale: 0.99 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -12, scale: 0.99 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          className={`border rounded-2xl p-6 sm:p-8 shadow-2xl relative overflow-hidden transition-colors ${
            isLight
              ? 'bg-white/95 border-[#c5a059]/40 shadow-[#c5a059]/10'
              : 'bg-[#112038]/90 backdrop-blur-sm border-[#c5a059]/30 shadow-[#000e25]/60'
          }`}
        >
          {/* Subtle Watermark emblem */}
          <div className="absolute -bottom-10 -right-10 rtl:-right-auto rtl:-left-10 text-9xl opacity-5 pointer-events-none select-none">
            {selectedDynasty.emblem}
          </div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Main Info Column */}
            <div className="lg:col-span-7">
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-bold shadow-sm border ${
                    isLight
                      ? 'bg-[#c5a059]/15 text-[#875e18] border-[#c5a059]/40'
                      : 'bg-[#c5a059]/20 text-[#e9c176] border-[#c5a059]/40'
                  }`}
                >
                  {isFa ? selectedDynasty.periodFa : selectedDynasty.periodEn}
                </span>
                <span className={`text-xs flex items-center gap-1.5 ${isLight ? 'text-[#57534e]' : 'text-[#d1c5b4]'}`}>
                  <MapPin className={`w-3.5 h-3.5 ${isLight ? 'text-[#875e18]' : 'text-[#e9c176]'}`} />
                  <span>
                    {isFa ? 'پایتخت‌ها: ' : 'Capitals: '}
                    {isFa ? selectedDynasty.capitalFa : selectedDynasty.capitalEn}
                  </span>
                </span>
              </div>

              <h3
                className={`font-serif-title text-2xl sm:text-3xl font-bold mb-3 ${
                  isLight ? 'text-[#875e18]' : 'text-[#e9c176]'
                }`}
              >
                {isFa ? selectedDynasty.nameFa : selectedDynasty.nameEn}
              </h3>

              <p className={`text-sm sm:text-base leading-relaxed mb-6 ${isLight ? 'text-[#334155]' : 'text-[#d7e3ff]'}`}>
                {isFa ? selectedDynasty.descriptionFa : selectedDynasty.descriptionEn}
              </p>

              {/* Key Achievements Checklist */}
              <div className="mb-6">
                <h4
                  className={`text-xs font-bold uppercase tracking-wider mb-3 flex items-center gap-1.5 ${
                    isLight ? 'text-[#875e18]' : 'text-[#e9c176]'
                  }`}
                >
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
                      className={`text-xs sm:text-sm flex items-start gap-2.5 ${
                        isLight ? 'text-[#475569]' : 'text-[#d1c5b4]'
                      }`}
                    >
                      <span className={`mt-1 text-xs ${isLight ? 'text-[#b8860b]' : 'text-[#e9c176]'}`}>◆</span>
                      <span>{ach}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Cultural Legacy */}
              <div
                className={`p-4 rounded-xl border text-xs sm:text-sm ${
                  isLight
                    ? 'bg-[#fcfbf7] border-[#e4ddcf] text-[#334155]'
                    : 'bg-[#0c1b33] border-[#1c2a43] text-[#acc7ff]'
                }`}
              >
                <span className={`font-bold mr-1 rtl:mr-0 rtl:ml-1 ${isLight ? 'text-[#875e18]' : 'text-[#e9c176]'}`}>
                  {isFa ? 'میراث ماندگار جهانی: ' : 'Enduring Global Legacy: '}
                </span>
                {isFa ? selectedDynasty.culturalLegacyFa : selectedDynasty.culturalLegacyEn}
              </div>
            </div>

            {/* Prominent Rulers and Figures */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
              <div>
                <h4
                  className={`text-xs font-bold uppercase tracking-wider mb-3 flex items-center gap-1.5 ${
                    isLight ? 'text-[#875e18]' : 'text-[#e9c176]'
                  }`}
                >
                  <Users className="w-4 h-4" />
                  <span>{isFa ? 'شخصیت‌ها و فرمانروایان برجسته' : 'Prominent Rulers & Figures'}</span>
                </h4>

                <div className="space-y-3">
                  {selectedDynasty.rulers.map((ruler, idx) => (
                    <motion.div
                      key={idx}
                      whileHover={{ scale: 1.01 }}
                      className={`p-4 rounded-xl border transition-all shadow-sm ${
                        isLight
                          ? 'bg-white border-[#e4ddcf] hover:border-[#c5a059]'
                          : 'bg-[#0c1b33]/90 border-[#c5a059]/20 hover:border-[#c5a059]/40'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span
                          className={`font-serif-title text-base font-bold ${
                            isLight ? 'text-[#152033]' : 'text-[#d7e3ff]'
                          }`}
                        >
                          {isFa ? ruler.nameFa : ruler.nameEn}
                        </span>
                        <span
                          className={`text-[11px] px-2.5 py-0.5 rounded-full font-mono border ${
                            isLight
                              ? 'bg-[#f8f6f0] text-[#875e18] border-[#c5a059]/30'
                              : 'text-[#e9c176] bg-[#1c2a43] border-[#c5a059]/20'
                          }`}
                        >
                          {isFa ? ruler.reignFa : ruler.reignEn}
                        </span>
                      </div>
                      <div className={`text-xs font-medium mt-0.5 ${isLight ? 'text-[#875e18]' : 'text-[#acc7ff]'}`}>
                        {isFa ? ruler.titleFa : ruler.titleEn}
                      </div>
                      <p className={`text-xs mt-2 leading-relaxed ${isLight ? 'text-[#57534e]' : 'text-[#d1c5b4]'}`}>
                        {isFa ? ruler.achievementFa : ruler.achievementEn}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Expanse metric */}
              <div
                className={`p-3.5 rounded-xl border text-xs flex items-center justify-between ${
                  isLight
                    ? 'bg-[#fcfbf7] border-[#e4ddcf] text-[#57534e]'
                    : 'bg-[#1c2a43]/50 border-[#4e4639] text-[#d1c5b4]'
                }`}
              >
                <span>{isFa ? 'بیشینه گستره قلمرو' : 'Maximum Expanse'}</span>
                <span
                  className={`font-bold font-mono text-sm ${isLight ? 'text-[#875e18]' : 'text-[#e9c176]'}`}
                >
                  {selectedDynasty.territorySqKm}
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
};
