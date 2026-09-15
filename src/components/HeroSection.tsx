import React from 'react';
import { Language } from '../types';
import { Sparkles, Compass, BookOpen, Layers } from 'lucide-react';
import { motion } from 'motion/react';

interface HeroSectionProps {
  language: Language;
  onExploreTimeline: () => void;
  onExploreMap: () => void;
  onExploreOdyssey: () => void;
  onExploreDynasties: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  language,
  onExploreTimeline,
  onExploreMap,
  onExploreOdyssey,
  onExploreDynasties,
}) => {
  const isFa = language === 'fa';

  const metrics = [
    {
      valueEn: '550 BCE',
      valueFa: '۵۵۰ ق.م',
      labelEn: 'Founding by Cyrus the Great',
      labelFa: 'آغاز شاهنشاهی کوروش بزرگ',
    },
    {
      valueEn: '44+',
      valueFa: '۴۴+',
      labelEn: 'Sovereign Dynasties & Eras',
      labelFa: 'دودمان‌ها و ادوار تاریخی',
    },
    {
      valueEn: '27',
      valueFa: '۲۷',
      labelEn: 'UNESCO World Heritage Sites',
      labelFa: 'اثر ثبت شده در یونسکو',
    },
    {
      valueEn: '8M+ km²',
      valueFa: '۸+ م.ک.م²',
      labelEn: 'Peak Imperial Territory',
      labelFa: 'گستره جغرافیایی در اوج قدرت',
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#04132b] pt-8 pb-14 border-b border-[#1c2a43]">
      {/* Background Decorative Radial Gradient */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-25"
        style={{
          backgroundImage: `radial-gradient(circle at 50% 30%, rgba(233, 193, 118, 0.18) 0%, transparent 60%),
            radial-gradient(circle at 10% 80%, rgba(27, 59, 111, 0.45) 0%, transparent 50%),
            radial-gradient(circle at 90% 80%, rgba(200, 90, 50, 0.25) 0%, transparent 50%)`
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Animated badge ornament */}
        <motion.div 
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="flex items-center justify-center gap-3 mb-6"
        >
          <div className="h-[1px] w-16 sm:w-28 bg-gradient-to-r from-transparent to-[#c5a059]/60" />
          <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-[#c5a059]/40 bg-[#0c1b33]/90 text-[#e9c176] text-xs font-semibold tracking-widest uppercase shadow-[0_0_15px_rgba(197,160,89,0.2)]">
            <Sparkles className="w-3.5 h-3.5 text-[#ffd68a] animate-pulse" />
            <span>{isFa ? 'روایت ۲۵۰۰ سال تمدن، هنر و حکمت' : '2,500+ Years of Civilization & Wisdom'}</span>
          </div>
          <div className="h-[1px] w-16 sm:w-28 bg-gradient-to-l from-transparent to-[#c5a059]/60" />
        </motion.div>

        {/* Hero Title and Subtitle with fluid animation */}
        <div className="text-center max-w-4xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.96, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif-title text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#d7e3ff] tracking-tight leading-tight"
          >
            {isFa ? (
              <>
                شکوه جاودان <span className="text-[#e9c176] relative inline-block drop-shadow-[0_0_20px_rgba(233,193,118,0.3)]">تمدن ایران</span> و مشرق‌زمین
              </>
            ) : (
              <>
                The Eternal Majesty of <span className="text-[#e9c176] relative inline-block drop-shadow-[0_0_20px_rgba(233,193,118,0.3)]">Persian Civilization</span>
              </>
            )}
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
            className="mt-5 text-base sm:text-lg text-[#d1c5b4] leading-relaxed max-w-3xl mx-auto font-normal"
          >
            {isFa
              ? 'سفری در امتداد هزاره‌ها؛ از شکوه هخامنشیان و نخستین منشور حقوق بشر، تا نبوغ مهندسی ساسانیان، دوران زرین علم و حکمت ابن‌سینا و خیام، و شاهکارهای فیروزه‌ای صفویان در اصفهان نصف جهان.'
              : 'An illuminated journey across millennia: from the Achaemenid origins of universal human dignity, through Sasanian grand architecture, the Golden Age of scientific enlightenment, to the turquoise domes of Safavid Isfahan.'}
          </motion.p>

          {/* Action CTAs with smooth spring hover */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: 'easeOut' }}
            className="mt-8 flex flex-wrap items-center justify-center gap-3"
          >
            <motion.button
              whileHover={{ scale: 1.04, boxShadow: '0 0 30px rgba(233,193,118,0.55)' }}
              whileTap={{ scale: 0.97 }}
              onClick={onExploreOdyssey}
              id="hero-explore-odyssey-btn"
              className="px-6 py-3 rounded-lg bg-gradient-to-r from-[#c5a059] via-[#e9c176] to-[#c5a059] text-[#04132b] font-black text-sm tracking-wide shadow-[0_0_20px_rgba(233,193,118,0.4)] transition-all flex items-center gap-2 cursor-pointer"
            >
              <Sparkles className="w-4 h-4 fill-current" />
              <span>{isFa ? '✦ کاوش شگفت‌انگیز با اسکرول' : '✦ Launch Scroll Odyssey'}</span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.04, backgroundColor: 'rgba(27, 59, 111, 0.7)' }}
              whileTap={{ scale: 0.97 }}
              onClick={onExploreDynasties}
              id="hero-explore-dynasties-btn"
              className="px-5 py-3 rounded-lg bg-[#112038] border border-[#c5a059]/40 text-[#ffd68a] font-bold text-sm tracking-wide transition-all flex items-center gap-2 cursor-pointer"
            >
              <Layers className="w-4 h-4 text-[#e9c176]" />
              <span>{isFa ? 'دودمان‌های پادشاهی' : 'Dynasties'}</span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.04, backgroundColor: 'rgba(27, 59, 111, 0.5)' }}
              whileTap={{ scale: 0.97 }}
              onClick={onExploreTimeline}
              id="hero-explore-timeline-btn"
              className="px-5 py-3 rounded-lg bg-[#0c1b33] border border-[#4e4639] text-[#d7e3ff] font-semibold text-sm hover:border-[#e9c176] transition-all flex items-center gap-2 cursor-pointer"
            >
              <BookOpen className="w-4 h-4 text-[#e9c176]" />
              <span>{isFa ? 'گاه‌شمار تاریخی' : 'Chronology'}</span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.04, backgroundColor: 'rgba(27, 59, 111, 0.4)' }}
              whileTap={{ scale: 0.97 }}
              onClick={onExploreMap}
              id="hero-explore-map-btn"
              className="px-5 py-3 rounded-lg bg-transparent border border-[#c5a059]/30 text-[#d1c5b4] font-semibold text-sm hover:text-white hover:border-[#e9c176] transition-all flex items-center gap-2 cursor-pointer"
            >
              <Compass className="w-4 h-4 text-[#e9c176]" />
              <span>{isFa ? 'نقشه آثار' : 'Heritage Map'}</span>
            </motion.button>
          </motion.div>
        </div>

        {/* Statistical Pillar Metrics with smooth staggered entrance and hover */}
        <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4">
          {metrics.map((metric, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + idx * 0.08 }}
              whileHover={{ y: -4, borderColor: 'rgba(197, 160, 89, 0.5)' }}
              className="bg-[#112038]/80 border border-[#c5a059]/20 rounded-xl p-4 text-center transition-colors shadow-lg shadow-[#000e25]/50 group"
            >
              <div className="text-2xl sm:text-3xl font-bold font-serif-title text-[#e9c176] group-hover:scale-105 transition-transform">
                {isFa ? metric.valueFa : metric.valueEn}
              </div>
              <div className="text-xs text-[#d1c5b4] mt-1.5 font-medium">
                {isFa ? metric.labelFa : metric.labelEn}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
