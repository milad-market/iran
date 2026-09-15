import React, { useState, useMemo } from 'react';
import { Language, Theme } from '../types';
import { DYNASTIES, TIMELINE_EVENTS, HERITAGE_SITES, CULTURAL_ARTIFACTS } from '../data/heritageData';
import { Search, X, Sparkles, Crown, Landmark, BookOpen, Clock, ArrowRight, ArrowLeft, Bot, Filter } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface HistoricalSearchEngineProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
  theme: Theme;
  onSelectTab: (tab: string) => void;
  onAskAi: (query: string) => void;
}

export const HistoricalSearchEngine: React.FC<HistoricalSearchEngineProps> = ({
  isOpen,
  onClose,
  language,
  theme,
  onSelectTab,
  onAskAi,
}) => {
  const isFa = language === 'fa';
  const isLight = theme === 'light';

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'dynasty' | 'ruler' | 'site' | 'artifact' | 'event'>('all');

  // Unified index of all historical items
  const indexedData = useMemo(() => {
    const list: Array<{
      id: string;
      type: 'dynasty' | 'ruler' | 'site' | 'artifact' | 'event';
      titleEn: string;
      titleFa: string;
      subEn: string;
      subFa: string;
      descEn: string;
      descFa: string;
      targetTab: string;
      meta?: string;
    }> = [];

    // Dynasties
    DYNASTIES.forEach((d) => {
      list.push({
        id: `dynasty-${d.id}`,
        type: 'dynasty',
        titleEn: d.nameEn,
        titleFa: d.nameFa,
        subEn: `${d.periodEn} • ${d.capitalEn}`,
        subFa: `${d.periodFa} • پایتخت: ${d.capitalFa}`,
        descEn: d.descriptionEn,
        descFa: d.descriptionFa,
        targetTab: 'dynasties',
        meta: d.achievementsFa.join(' '),
      });

      // Rulers inside dynasty
      d.rulers.forEach((r, rIdx) => {
        list.push({
          id: `ruler-${d.id}-${rIdx}`,
          type: 'ruler',
          titleEn: `${r.nameEn} (${r.titleEn})`,
          titleFa: `${r.nameFa} (${r.titleFa})`,
          subEn: `${d.nameEn} • ${r.reignEn}`,
          subFa: `${d.nameFa} • دوره فرمانروایی: ${r.reignFa}`,
          descEn: r.achievementEn,
          descFa: r.achievementFa,
          targetTab: 'dynasties',
        });
      });
    });

    // Heritage Sites
    HERITAGE_SITES.forEach((s) => {
      list.push({
        id: `site-${s.id}`,
        type: 'site',
        titleEn: s.nameEn,
        titleFa: s.nameFa,
        subEn: `${s.provinceEn} • ${s.eraEn}`,
        subFa: `${s.provinceFa} • دوره: ${s.eraFa}`,
        descEn: s.summaryEn,
        descFa: s.summaryFa,
        targetTab: 'map',
      });
    });

    // Cultural Artifacts
    CULTURAL_ARTIFACTS.forEach((a) => {
      list.push({
        id: `artifact-${a.id}`,
        type: 'artifact',
        titleEn: a.titleEn,
        titleFa: a.titleFa,
        subEn: `${a.eraEn} • ${a.currentHoldingEn}`,
        subFa: `${a.eraFa} • محل نگهداری: ${a.currentHoldingFa}`,
        descEn: a.significanceEn,
        descFa: a.significanceFa,
        targetTab: 'artifacts',
      });
    });

    // Timeline Events
    TIMELINE_EVENTS.forEach((e) => {
      list.push({
        id: `event-${e.id}`,
        type: 'event',
        titleEn: e.titleEn,
        titleFa: e.titleFa,
        subEn: `${e.dateDisplayEn} • ${e.locationEn}`,
        subFa: `${e.dateDisplayFa} • مکان: ${e.locationFa}`,
        descEn: e.summaryEn,
        descFa: e.summaryFa,
        targetTab: 'timeline',
      });
    });

    return list;
  }, []);

  // Filtered search results
  const results = useMemo(() => {
    const q = searchTerm.trim().toLowerCase();
    if (!q) {
      // Return top highlights when query is empty
      return indexedData.slice(0, 10);
    }

    return indexedData.filter((item) => {
      if (selectedFilter !== 'all' && item.type !== selectedFilter) return false;

      const fullString = `${item.titleEn} ${item.titleFa} ${item.subEn} ${item.subFa} ${item.descEn} ${item.descFa} ${item.meta || ''}`.toLowerCase();
      return fullString.includes(q);
    });
  }, [searchTerm, selectedFilter, indexedData]);

  if (!isOpen) return null;

  const filters: Array<{ id: 'all' | 'dynasty' | 'ruler' | 'site' | 'artifact' | 'event'; labelFa: string; labelEn: string; icon: any }> = [
    { id: 'all', labelFa: 'همه موارد', labelEn: 'All', icon: Search },
    { id: 'dynasty', labelFa: 'سلسله‌ها', labelEn: 'Dynasties', icon: Crown },
    { id: 'ruler', labelFa: 'فرمانروایان', labelEn: 'Rulers', icon: Sparkles },
    { id: 'site', labelFa: 'بناها و مکان‌ها', labelEn: 'Monuments', icon: Landmark },
    { id: 'artifact', labelFa: 'شاهکارها و منشورها', labelEn: 'Artifacts', icon: BookOpen },
    { id: 'event', labelFa: 'وقایع و نبردها', labelEn: 'Events', icon: Clock },
  ];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-start justify-center p-3 sm:p-6 md:p-10 backdrop-blur-xl bg-black/80 overflow-y-auto"
      >
        <motion.div
          initial={{ scale: 0.96, y: 20 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.96, y: 20 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className={`relative w-full max-w-4xl rounded-3xl border shadow-2xl overflow-hidden flex flex-col my-auto max-h-[88vh] ${
            isLight
              ? 'bg-white border-[#e4ddcf] text-[#09090b] shadow-2xl'
              : 'bg-[#09090d] border-[#262632] text-[#f4f4f6] shadow-[0_0_80px_rgba(0,0,0,0.9)]'
          }`}
        >
          {/* Search Input Bar */}
          <div
            className={`p-4 sm:p-5 border-b flex items-center gap-3 ${
              isLight ? 'bg-[#faf9f5] border-[#e4ddcf]' : 'bg-[#0c0c12] border-[#262632]'
            }`}
          >
            <Search className="w-5 h-5 text-[#c5a059] shrink-0" />
            <input
              type="text"
              autoFocus
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder={
                isFa
                  ? 'جستجو در میان پادشاهان، جنگ‌ها، منشورها، بناها، شهرها و دوره‌های تاریخی...'
                  : 'Search dynasties, rulers, battles, charters, monuments, cities, or eras...'
              }
              className={`w-full bg-transparent text-sm sm:text-base outline-none font-medium ${
                isLight ? 'text-black placeholder-stone-400' : 'text-white placeholder-stone-500'
              }`}
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="p-1.5 rounded-lg hover:bg-black/10 dark:hover:bg-white/10 text-stone-400 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            )}
            <button
              onClick={onClose}
              className={`p-2 rounded-xl border transition-all cursor-pointer ${
                isLight
                  ? 'bg-white border-[#e4ddcf] text-stone-600 hover:text-black hover:border-black'
                  : 'bg-[#14141d] border-[#2a2a38] text-stone-400 hover:text-white hover:border-white'
              }`}
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Filter Chips */}
          <div
            className={`px-4 py-3 border-b flex items-center gap-2 overflow-x-auto no-scrollbar ${
              isLight ? 'bg-[#faf9f5] border-[#e4ddcf]' : 'bg-[#0c0c12] border-[#262632]'
            }`}
          >
            <Filter className="w-3.5 h-3.5 text-[#c5a059] shrink-0" />
            {filters.map((f) => {
              const Icon = f.icon;
              const isActive = selectedFilter === f.id;
              return (
                <button
                  key={f.id}
                  onClick={() => setSelectedFilter(f.id)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 cursor-pointer ${
                    isActive
                      ? 'bg-[#c5a059] text-black shadow-md font-bold'
                      : isLight
                      ? 'bg-white border border-[#e4ddcf] text-stone-600 hover:text-black'
                      : 'bg-[#14141d] border border-[#2a2a38] text-stone-400 hover:text-white'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{isFa ? f.labelFa : f.labelEn}</span>
                </button>
              );
            })}
          </div>

          {/* Search Results Count & AI Hint */}
          <div
            className={`px-6 py-2.5 text-xs flex items-center justify-between border-b ${
              isLight ? 'bg-amber-50/40 border-[#e4ddcf] text-stone-600' : 'bg-[#111118] border-[#262632] text-stone-400'
            }`}
          >
            <span>
              {isFa ? `${results.length} نتیجه تاریخی یافت شد` : `${results.length} historical records found`}
            </span>
            {searchTerm.trim() && (
              <button
                onClick={() => {
                  onAskAi(searchTerm);
                  onClose();
                }}
                className="text-[#c5a059] hover:underline font-bold flex items-center gap-1 cursor-pointer"
              >
                <Bot className="w-3.5 h-3.5" />
                <span>{isFa ? `از هوش مصنوعی دانا بپرسید: «${searchTerm}»` : `Ask AI Scholar about "${searchTerm}"`}</span>
              </button>
            )}
          </div>

          {/* Results List */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-3">
            {results.length === 0 ? (
              <div className="text-center py-12 space-y-3">
                <Search className="w-10 h-10 mx-auto text-stone-400 opacity-40" />
                <p className="text-sm font-semibold opacity-75">
                  {isFa ? 'نتیجه‌ای برای این جستجو یافت نشد.' : 'No direct matches found.'}
                </p>
                <button
                  onClick={() => {
                    onAskAi(searchTerm);
                    onClose();
                  }}
                  className="px-4 py-2 rounded-xl bg-[#c5a059] text-black font-bold text-xs inline-flex items-center gap-2 cursor-pointer shadow-md"
                >
                  <Bot className="w-4 h-4" />
                  <span>{isFa ? 'تحلیل و پاسخ این موضوع توسط هوش مصنوعی' : 'Ask AI Historian to Analyze This'}</span>
                </button>
              </div>
            ) : (
              results.map((item) => {
                const getBadge = () => {
                  switch (item.type) {
                    case 'dynasty':
                      return { text: isFa ? 'سلسله شاهنشاهی' : 'Dynasty', color: 'text-amber-500 bg-amber-500/10 border-amber-500/20' };
                    case 'ruler':
                      return { text: isFa ? 'فرمانروا / سردار' : 'Ruler', color: 'text-yellow-500 bg-yellow-500/10 border-yellow-500/20' };
                    case 'site':
                      return { text: isFa ? 'یادمان و بنای تاریخی' : 'Monument', color: 'text-emerald-500 bg-emerald-500/10 border-emerald-500/20' };
                    case 'artifact':
                      return { text: isFa ? 'منشور و شاهکار' : 'Charter/Artifact', color: 'text-purple-500 bg-purple-500/10 border-purple-500/20' };
                    case 'event':
                      return { text: isFa ? 'واقعه و نبرد' : 'Historic Event', color: 'text-sky-500 bg-sky-500/10 border-sky-500/20' };
                  }
                };

                const badge = getBadge();

                return (
                  <div
                    key={item.id}
                    className={`p-4 rounded-2xl border transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 ${
                      isLight
                        ? 'bg-[#faf9f5] border-[#e4ddcf] hover:border-[#c5a059] hover:bg-white'
                        : 'bg-[#121218] border-[#262632] hover:border-[#c5a059]/50 hover:bg-[#161622]'
                    }`}
                  >
                    <div className="flex-1 space-y-1">
                      <div className="flex items-center gap-2">
                        <span className={`px-2 py-0.5 rounded-md text-[10px] font-bold border ${badge.color}`}>
                          {badge.text}
                        </span>
                        <span className="text-xs opacity-60 font-mono">
                          {isFa ? item.subFa : item.subEn}
                        </span>
                      </div>
                      <h3 className="text-base font-bold font-serif-title">
                        {isFa ? item.titleFa : item.titleEn}
                      </h3>
                      <p className="text-xs opacity-80 line-clamp-2 leading-relaxed">
                        {isFa ? item.descFa : item.descEn}
                      </p>
                    </div>

                    <div className="flex items-center gap-2 self-end sm:self-center shrink-0">
                      <button
                        onClick={() => {
                          onAskAi(isFa ? item.titleFa : item.titleEn);
                          onClose();
                        }}
                        title={isFa ? 'پرسش از هوش مصنوعی درباره این موضوع' : 'Ask AI Historian about this'}
                        className={`p-2 rounded-xl border transition-all cursor-pointer ${
                          isLight
                            ? 'bg-white border-[#e4ddcf] text-stone-600 hover:text-[#c5a059]'
                            : 'bg-[#181822] border-[#2e2e3e] text-stone-300 hover:text-[#c5a059]'
                        }`}
                      >
                        <Bot className="w-4 h-4" />
                      </button>

                      <button
                        onClick={() => {
                          onSelectTab(item.targetTab);
                          onClose();
                        }}
                        className="px-3 py-1.5 rounded-xl bg-[#c5a059] text-black font-bold text-xs flex items-center gap-1 shadow-sm hover:brightness-110 active:scale-95 transition-all cursor-pointer"
                      >
                        <span>{isFa ? 'مشاهده در تالار' : 'View Section'}</span>
                        {isFa ? <ArrowLeft className="w-3.5 h-3.5" /> : <ArrowRight className="w-3.5 h-3.5" />}
                      </button>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
