import React, { useState } from 'react';
import { Language, Theme } from '../types';
import { COMPREHENSIVE_ARTICLES, ComprehensiveArticle } from '../data/encyclopediaData';
import { BookOpen, Sparkles, Clock, CheckCircle2, ChevronRight, ChevronLeft, Search, Filter } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface EncyclopediaSectionProps {
  language: Language;
  theme: Theme;
}

export const EncyclopediaSection: React.FC<EncyclopediaSectionProps> = ({ language, theme }) => {
  const isFa = language === 'fa';
  const isLight = theme === 'light';

  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeArticle, setActiveArticle] = useState<ComprehensiveArticle | null>(COMPREHENSIVE_ARTICLES[0]);

  const categories = [
    { id: 'all', labelFa: 'همه مباحث', labelEn: 'All Topics' },
    { id: 'military', labelFa: 'نظامی و استراتژی', labelEn: 'Military & Strategy' },
    { id: 'tech', labelFa: 'فناوری و مهندسی', labelEn: 'Tech & Engineering' },
    { id: 'science', labelFa: 'دانشمندان و علوم', labelEn: 'Science & Polymaths' },
  ];

  const filteredArticles = COMPREHENSIVE_ARTICLES.filter((art) => {
    const q = searchQuery.toLowerCase();
    const matchesSearch = 
      art.titleFa.toLowerCase().includes(q) ||
      art.titleEn.toLowerCase().includes(q) ||
      art.summaryFa.toLowerCase().includes(q) ||
      art.summaryEn.toLowerCase().includes(q);
    
    if (selectedCategory === 'all') return matchesSearch;
    if (selectedCategory === 'military') return matchesSearch && art.categoryFa.includes('نظامی');
    if (selectedCategory === 'tech') return matchesSearch && (art.categoryFa.includes('فناوری') || art.categoryFa.includes('معماری'));
    if (selectedCategory === 'science') return matchesSearch && art.categoryFa.includes('علوم');
    return matchesSearch;
  });

  return (
    <div
      className={`py-12 transition-colors duration-300 ${
        isLight ? 'bg-[#faf9f5] text-[#09090b]' : 'bg-[#09090d] text-[#f4f4f6]'
      }`}
      dir={isFa ? 'rtl' : 'ltr'}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b pb-6 border-[#c5a059]/25">
          <div className="text-right">
            <div className="flex items-center gap-2 mb-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#c5a059]" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#c5a059]">
                {isFa ? 'دانشنامه جامع و مقالات تحلیلی فلات ایران' : 'Imperial Encyclopedia & Research Papers'}
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-serif-title">
              {isFa ? 'گنجینه دانش، فناوری و دستاوردهای تمدن' : 'Scholarly Archive of Persian Innovations'}
            </h2>
            <p className="text-xs sm:text-sm text-stone-400 mt-1 max-w-2xl">
              {isFa
                ? 'پژوهش‌های تاریخی موثق پیرامون سپاه جاویدان، شبکه چاپارخانه، مهندسی کاریز، نبردهای سرنوشت‌ساز و نوابغ عصر زرین دانش.'
                : 'Authoritative studies on the Immortals legion, Royal Post, hydraulic qanats, decisive campaigns, and polymaths.'}
            </p>
          </div>

          {/* Search & Category Filter */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={isFa ? 'جستجو در مقالات...' : 'Search articles...'}
                className={`px-3.5 py-2 pl-8 text-xs rounded-xl border transition-all ${
                  isLight
                    ? 'bg-white border-stone-300 text-stone-900 focus:border-[#c5a059]'
                    : 'bg-[#121218] border-stone-800 text-white focus:border-[#c5a059]'
                }`}
              />
              <Search className="w-3.5 h-3.5 text-stone-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
            </div>

            <div className={`flex items-center p-1 rounded-xl border text-xs ${
              isLight ? 'bg-white border-stone-300' : 'bg-[#121218] border-stone-800'
            }`}>
              {categories.map((c) => (
                <button
                  key={c.id}
                  onClick={() => setSelectedCategory(c.id)}
                  className={`px-2.5 py-1 rounded-lg transition-all font-medium cursor-pointer ${
                    selectedCategory === c.id
                      ? 'bg-[#c5a059] text-black font-bold'
                      : 'text-stone-400 hover:text-white'
                  }`}
                >
                  {isFa ? c.labelFa : c.labelEn}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Master-Detail Split Grid */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Article Selector List (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <span className="text-xs font-bold text-stone-400 block mb-2">
              {isFa ? `فهرست مقالات (${filteredArticles.length} عنوان)` : `Articles (${filteredArticles.length})`}
            </span>

            {filteredArticles.map((art) => (
              <div
                key={art.id}
                onClick={() => setActiveArticle(art)}
                className={`p-4 rounded-2xl border transition-all cursor-pointer group text-right ${
                  activeArticle?.id === art.id
                    ? isLight
                      ? 'bg-[#faf3e3] border-[#c5a059] shadow-md'
                      : 'bg-[#181824] border-[#c5a059] shadow-lg shadow-[#c5a059]/10'
                    : isLight
                    ? 'bg-white border-stone-200 hover:border-[#c5a059]/50'
                    : 'bg-[#121218] border-stone-800 hover:border-stone-700'
                }`}
              >
                <div className="flex items-center justify-between gap-2 mb-1.5">
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-[#c5a059]/15 text-[#c5a059]">
                    {isFa ? art.categoryFa : art.categoryEn}
                  </span>
                  <div className="flex items-center gap-1 text-[10px] text-stone-400 font-mono">
                    <Clock className="w-3 h-3" />
                    <span>{isFa ? art.readTimeFa : art.readTimeEn}</span>
                  </div>
                </div>

                <h3 className={`font-bold text-sm leading-snug transition-colors ${
                  activeArticle?.id === art.id ? 'text-[#c5a059]' : 'group-hover:text-[#c5a059]'
                }`}>
                  {isFa ? art.titleFa : art.titleEn}
                </h3>

                <p className="text-xs text-stone-400 mt-1 line-clamp-2">
                  {isFa ? art.summaryFa : art.summaryEn}
                </p>
              </div>
            ))}
          </div>

          {/* Active Article Full Reader (8 cols) */}
          <div className="lg:col-span-8">
            {activeArticle ? (
              <motion.div
                key={activeArticle.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className={`rounded-3xl border p-6 sm:p-8 md:p-10 shadow-xl ${
                  isLight
                    ? 'bg-white border-[#e4ddcf] text-[#09090b]'
                    : 'bg-[#121218] border-[#262632] text-[#f4f4f6]'
                }`}
              >
                {/* Meta Badge */}
                <div className="flex flex-wrap items-center justify-between gap-2 border-b pb-4 mb-6 border-stone-700/40">
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#c5a059]/20 text-[#e9c176] border border-[#c5a059]/30">
                      {isFa ? activeArticle.categoryFa : activeArticle.categoryEn}
                    </span>
                    <span className="text-xs text-stone-400">
                      {isFa ? activeArticle.eraFa : activeArticle.eraEn}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-stone-400 font-mono">
                    <Clock className="w-4 h-4 text-[#c5a059]" />
                    <span>{isFa ? activeArticle.readTimeFa : activeArticle.readTimeEn}</span>
                  </div>
                </div>

                {/* Title */}
                <h1 className="text-2xl sm:text-3xl font-bold font-serif-title text-[#c5a059] leading-tight">
                  {isFa ? activeArticle.titleFa : activeArticle.titleEn}
                </h1>

                {/* Summary Lead */}
                <p className={`mt-4 text-sm sm:text-base leading-relaxed p-4 rounded-xl border ${
                  isLight ? 'bg-stone-50 border-stone-200 text-stone-700' : 'bg-[#161622] border-stone-800 text-stone-300'
                }`}>
                  {isFa ? activeArticle.summaryFa : activeArticle.summaryEn}
                </p>

                {/* Article Sections */}
                <div className="mt-8 space-y-6">
                  {activeArticle.sections.map((sec, idx) => (
                    <div key={idx} className="space-y-2">
                      <h3 className="text-base sm:text-lg font-bold font-serif-title flex items-center gap-2 text-stone-200">
                        <span className="w-2 h-2 rounded-full bg-[#c5a059]" />
                        {isFa ? sec.headingFa : sec.headingEn}
                      </h3>
                      <p className="text-xs sm:text-sm sm:leading-relaxed text-stone-300 font-normal">
                        {isFa ? sec.bodyFa : sec.bodyEn}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Key Takeaways Box */}
                <div className={`mt-8 p-5 rounded-2xl border ${
                  isLight ? 'bg-[#faf6ee] border-[#c5a059]/40' : 'bg-[#181824] border-[#c5a059]/30'
                }`}>
                  <h4 className="font-bold text-xs uppercase tracking-wider text-[#c5a059] mb-3 flex items-center gap-2">
                    <Sparkles className="w-4 h-4" />
                    <span>{isFa ? 'نکات کلیدی و درس‌های تاریخی' : 'Key Historical Takeaways'}</span>
                  </h4>
                  <ul className="space-y-2">
                    {(isFa ? activeArticle.keyTakeawaysFa : activeArticle.keyTakeawaysEn).map((point, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </motion.div>
            ) : (
              <div className="text-center py-20 text-stone-400">
                {isFa ? 'لطفاً مقاله‌ای را برای مطالعه انتخاب کنید' : 'Please select an article to read'}
              </div>
            )}
          </div>

        </div>

      </div>
    </div>
  );
};
