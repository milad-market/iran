import React from 'react';
import { Language, Theme } from '../types';
import { Sparkles, Compass, BookOpen, Layers, Landmark, Film, Bot } from 'lucide-react';
import { motion } from 'motion/react';

interface HeroSectionProps {
  language: Language;
  onExploreTimeline: () => void;
  onExploreMap: () => void;
  onExploreDynasties: () => void;
  onOpenCharter?: () => void;
  onOpenEncyclopedia?: () => void;
  onOpenAi?: () => void;
  onOpenTheater?: () => void;
  theme?: Theme;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  language,
  onExploreTimeline,
  onExploreMap,
  onExploreDynasties,
  onOpenCharter,
  onOpenEncyclopedia,
  onOpenAi,
  onOpenTheater,
  theme = 'dark',
}) => {
  const isFa = language === 'fa';
  const isLight = theme === 'light';

  const metrics = [
    {
      valueEn: '539 BCE',
      valueFa: '۵۳۹ ق.م',
      labelEn: 'Cyrus Human Rights Charter',
      labelFa: 'منشور حقوق بشر کوروش بزرگ',
    },
    {
      valueEn: '44+',
      valueFa: '۴۴+',
      labelEn: 'Sovereign Dynasties & Eras',
      labelFa: 'دودمان‌ها و ادوار تاریخی فلات ایران',
    },
    {
      valueEn: '28',
      valueFa: '۲۸',
      labelEn: 'UNESCO World Heritage Sites',
      labelFa: 'اثر جهانی ثبت شده در یونسکو',
    },
    {
      valueEn: '8M+ km²',
      valueFa: '۸+ م.ک.م²',
      labelEn: 'Peak Imperial Territory',
      labelFa: 'گستره جغرافیایی شاهنشاهی در اوج قدرت',
    },
  ];

  return (
    <section
      className={`relative overflow-hidden pt-8 pb-14 border-b transition-colors duration-300 ${
        isLight
          ? 'bg-[#faf9f5] border-[#e4ddcf] text-[#09090b]'
          : 'bg-[#09090d] border-[#262632] text-[#f4f4f6]'
      }`}
    >
      {/* Background Decorative Radial Gradient */}
      <div 
        className={`absolute inset-0 pointer-events-none ${isLight ? 'opacity-40' : 'opacity-25'}`}
        style={{
          backgroundImage: isLight
            ? `radial-gradient(circle at 50% 20%, rgba(197, 160, 89, 0.22) 0%, transparent 60%),
               radial-gradient(circle at 10% 80%, rgba(220, 200, 160, 0.35) 0%, transparent 50%),
               radial-gradient(circle at 90% 80%, rgba(200, 160, 100, 0.2) 0%, transparent 50%)`
            : `radial-gradient(circle at 50% 25%, rgba(233, 193, 118, 0.2) 0%, transparent 60%),
               radial-gradient(circle at 10% 80%, rgba(197, 160, 89, 0.12) 0%, transparent 50%),
               radial-gradient(circle at 90% 80%, rgba(240, 190, 100, 0.15) 0%, transparent 50%)`
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Animated Cyrus Charter Prominent Alert Pill */}
        <motion.div 
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="flex items-center justify-center gap-3 mb-6"
        >
          <div className="h-[1px] w-12 sm:w-24 bg-gradient-to-r from-transparent to-[#c5a059]/60" />
          <button
            onClick={onOpenCharter}
            className={`flex items-center gap-2 px-4 py-1.5 rounded-full border text-xs font-semibold tracking-wide transition-all cursor-pointer shadow-sm ${
              isLight
                ? 'bg-white/95 border-[#c5a059] text-[#875e18] hover:bg-[#faf6ee]'
                : 'bg-[#14141d]/90 border-[#c5a059]/50 text-[#e9c176] shadow-[0_0_20px_rgba(197,160,89,0.25)] hover:border-[#c5a059]'
            }`}
          >
            <Landmark className="w-4 h-4 text-[#c5a059]" />
            <span>
              {isFa
                ? '✦ منشور زرین حقوق بشر کوروش بزرگ (متن، ترجمه و نمایه سه‌بعدی)'
                : '✦ The Cyrus Cylinder: World’s First Human Rights Charter'}
            </span>
            <span className="px-1.5 py-0.2 rounded text-[10px] bg-[#c5a059] text-black font-bold">
              {isFa ? 'مشاهده' : 'Explore'}
            </span>
          </button>
          <div className="h-[1px] w-12 sm:w-24 bg-gradient-to-l from-transparent to-[#c5a059]/60" />
        </motion.div>

        {/* Hero Title and Subtitle */}
        <div className="text-center max-w-4xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.96, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className={`font-serif-title text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight ${
              isLight ? 'text-[#09090b]' : 'text-[#f4f4f6]'
            }`}
          >
            {isFa ? (
              <>
                شکوه جاودان{' '}
                <span
                  className={
                    isLight
                      ? 'text-transparent bg-clip-text bg-gradient-to-r from-[#875e18] via-[#b8860b] to-[#c5a059]'
                      : 'text-[#e9c176] relative inline-block drop-shadow-[0_0_25px_rgba(233,193,118,0.4)]'
                  }
                >
                  تمدن ایران
                </span>{' '}
                و مشرق‌زمین
              </>
            ) : (
              <>
                The Eternal Majesty of{' '}
                <span
                  className={
                    isLight
                      ? 'text-transparent bg-clip-text bg-gradient-to-r from-[#875e18] via-[#b8860b] to-[#c5a059]'
                      : 'text-[#e9c176] relative inline-block drop-shadow-[0_0_25px_rgba(233,193,118,0.4)]'
                  }
                >
                  Persian Civilization
                </span>
              </>
            )}
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
            className={`mt-5 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto font-normal ${
              isLight ? 'text-stone-700' : 'text-stone-300'
            }`}
          >
            {isFa
              ? 'سفری در امتداد هزاره‌ها؛ از تمدن کهن عیلام و شکوه هخامنشیان با نخستین منشور حقوق بشر، تا نبوغ شاهنشاهی اشکانیان و ساسانیان، عصر زرین علم و ادب، و شاهکارهای فیروزه‌ای صفویان و یادمان‌های تاریخی نوین.'
              : 'An illuminated journey across millennia: from ancient Elam and Achaemenid origins of universal human dignity, through Parthian & Sasanian realms, the Golden Age of scientific enlightenment, to the turquoise domes of Safavid Isfahan.'}
          </motion.p>

          {/* Action CTAs */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: 'easeOut' }}
            className="mt-8 flex flex-wrap items-center justify-center gap-3"
          >
            {/* Primary Cyrus Charter 3D Experience Button */}
            {onOpenCharter && (
              <motion.button
                whileHover={{ scale: 1.04, boxShadow: '0 0 30px rgba(197,160,89,0.5)' }}
                whileTap={{ scale: 0.97 }}
                onClick={onOpenCharter}
                id="hero-explore-charter-btn"
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#c5a059] via-[#ffd68a] to-[#c5a059] text-black font-black text-sm tracking-wide shadow-lg shadow-[#c5a059]/30 transition-all flex items-center gap-2.5 cursor-pointer"
              >
                <Landmark className="w-5 h-5 fill-black" />
                <span>{isFa ? '✦ منشور کوروش با گرافیک سه‌بعدی و متون معلق' : '✦ Cyrus Cylinder 3D Experience & Floating Decrees'}</span>
              </motion.button>
            )}

            {/* Encyclopedia Button */}
            {onOpenEncyclopedia && (
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                onClick={onOpenEncyclopedia}
                className={`px-5 py-3 rounded-xl border font-bold text-sm tracking-wide transition-all flex items-center gap-2 cursor-pointer ${
                  isLight
                    ? 'bg-white border-[#c5a059] text-[#875e18] hover:bg-[#faf6ee]'
                    : 'bg-[#14141d] border-[#c5a059]/50 text-[#ffd68a] hover:bg-[#1a1a26]'
                }`}
              >
                <BookOpen className="w-4 h-4 text-[#c5a059]" />
                <span>{isFa ? 'دانشنامه و مقالات جامع' : 'Encyclopedia & Articles'}</span>
              </motion.button>
            )}

            {/* Cinematic Animated Video Button */}
            {onOpenTheater && (
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                onClick={onOpenTheater}
                className={`px-5 py-3 rounded-xl border font-semibold text-sm tracking-wide transition-all flex items-center gap-2 cursor-pointer ${
                  isLight
                    ? 'bg-white border-[#d8d0c4] text-stone-800 hover:border-[#c5a059]'
                    : 'bg-[#14141d] border-[#2a2a38] text-stone-300 hover:border-[#c5a059]'
                }`}
              >
                <Film className="w-4 h-4 text-[#c5a059]" />
                <span>{isFa ? 'سینما و انیمیشن تاریخ' : 'Animated Video Theater'}</span>
              </motion.button>
            )}

            {/* AI Historian Button */}
            {onOpenAi && (
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                onClick={onOpenAi}
                className={`px-5 py-3 rounded-xl border font-bold text-sm tracking-wide transition-all flex items-center gap-2 cursor-pointer ${
                  isLight
                    ? 'bg-white border-[#d8d0c4] text-stone-800 hover:border-[#c5a059]'
                    : 'bg-[#14141d] border-[#2a2a38] text-stone-200 hover:border-[#c5a059]'
                }`}
              >
                <Bot className="w-4 h-4 text-[#c5a059]" />
                <span>{isFa ? 'هوش مصنوعی دانا' : 'AI Scholar Dana'}</span>
              </motion.button>
            )}

            {/* Dynasties */}
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              onClick={onExploreDynasties}
              id="hero-explore-dynasties-btn"
              className={`px-5 py-3 rounded-xl border font-semibold text-sm transition-all flex items-center gap-2 cursor-pointer ${
                isLight
                  ? 'bg-white border-[#d8d0c4] text-stone-800 hover:border-[#c5a059]'
                  : 'bg-[#14141d] border-[#2a2a38] text-stone-300 hover:border-[#c5a059]'
              }`}
            >
              <Layers className="w-4 h-4 text-[#c5a059]" />
              <span>{isFa ? 'سلسله‌های پادشاهی' : 'Dynasties'}</span>
            </motion.button>

            {/* Chronology Timeline */}
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              onClick={onExploreTimeline}
              id="hero-explore-timeline-btn"
              className={`px-5 py-3 rounded-xl border font-semibold text-sm transition-all flex items-center gap-2 cursor-pointer ${
                isLight
                  ? 'bg-transparent border-[#c5a059]/50 text-stone-700 hover:border-black'
                  : 'bg-transparent border-[#c5a059]/30 text-stone-400 hover:text-white hover:border-white'
              }`}
            >
              <BookOpen className="w-4 h-4 text-[#c5a059]" />
              <span>{isFa ? 'گاه‌شمار' : 'Chronology'}</span>
            </motion.button>

            {/* Map */}
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              onClick={onExploreMap}
              id="hero-explore-map-btn"
              className={`px-5 py-3 rounded-xl border font-semibold text-sm transition-all flex items-center gap-2 cursor-pointer ${
                isLight
                  ? 'bg-transparent border-[#c5a059]/50 text-stone-700 hover:border-black'
                  : 'bg-transparent border-[#c5a059]/30 text-stone-400 hover:text-white hover:border-white'
              }`}
            >
              <Compass className="w-4 h-4 text-[#c5a059]" />
              <span>{isFa ? 'نقشه یادمان‌ها' : 'Heritage Map'}</span>
            </motion.button>
          </motion.div>
        </div>

        {/* Statistical Pillar Metrics */}
        <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4">
          {metrics.map((metric, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + idx * 0.08 }}
              whileHover={{ y: -4, borderColor: 'rgba(197, 160, 89, 0.7)' }}
              className={`border rounded-2xl p-4 sm:p-5 text-center transition-all group ${
                isLight
                  ? 'bg-white/95 border-[#e4ddcf] shadow-md shadow-stone-200/50'
                  : 'bg-[#121218]/90 border-[#262632] shadow-lg shadow-black/80'
              }`}
            >
              <div
                className={`text-2xl sm:text-3xl font-bold font-serif-title transition-transform group-hover:scale-105 ${
                  isLight ? 'text-[#875e18]' : 'text-[#e9c176]'
                }`}
              >
                {isFa ? metric.valueFa : metric.valueEn}
              </div>
              <div
                className={`text-xs mt-1.5 font-medium transition-colors ${
                  isLight ? 'text-stone-600' : 'text-stone-400'
                }`}
              >
                {isFa ? metric.labelFa : metric.labelEn}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
