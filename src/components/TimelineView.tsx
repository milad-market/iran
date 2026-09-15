import React, { useState } from 'react';
import { TimelineEvent, Language, Theme } from '../types';
import { TIMELINE_EVENTS } from '../data/heritageData';
import { Clock, MapPin, Quote, ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface TimelineViewProps {
  language: Language;
  searchQuery?: string;
  theme?: Theme;
}

export const TimelineView: React.FC<TimelineViewProps> = ({
  language,
  searchQuery = '',
  theme = 'dark',
}) => {
  const isFa = language === 'fa';
  const isLight = theme === 'light';

  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [expandedEventId, setExpandedEventId] = useState<string | null>(null);

  const categories = [
    { id: 'all', labelEn: 'All Eras', labelFa: 'همه رویدادها' },
    { id: 'statecraft', labelEn: 'Statecraft & Peace', labelFa: 'کشورداری و صلح' },
    { id: 'architectural', labelEn: 'Monumental Architecture', labelFa: 'معماری و سازه‌ها' },
    { id: 'philosophy', labelEn: 'Philosophy & Science', labelFa: 'دانش و فلسفه' },
    { id: 'literary', labelEn: 'Literature & Epics', labelFa: 'ادبیات و حماسه' },
  ];

  // Filtering
  const filteredEvents = TIMELINE_EVENTS.filter((evt) => {
    if (selectedCategory !== 'all' && evt.category !== selectedCategory) {
      return false;
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchEn =
        evt.titleEn.toLowerCase().includes(q) ||
        evt.summaryEn.toLowerCase().includes(q) ||
        evt.dateDisplayEn.toLowerCase().includes(q) ||
        evt.locationEn.toLowerCase().includes(q);
      const matchFa =
        evt.titleFa.includes(q) ||
        evt.summaryFa.includes(q) ||
        evt.dateDisplayFa.includes(q) ||
        evt.locationFa.includes(q);
      return matchEn || matchFa;
    }
    return true;
  });

  const toggleExpand = (id: string) => {
    setExpandedEventId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="py-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8" id="timeline-section">
      {/* Header */}
      <div className="text-center mb-8">
        <div
          className={`inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase mb-1 ${
            isLight ? 'text-[#875e18]' : 'text-[#e9c176]'
          }`}
        >
          <Clock className="w-4 h-4" />
          <span>{isFa ? 'گاه‌شمار موزه تمدن پارسی' : 'Museum-Grade Chronology'}</span>
        </div>
        <h2
          className={`font-serif-title text-2xl sm:text-3xl font-bold mb-3 ${
            isLight ? 'text-[#152033]' : 'text-[#d7e3ff]'
          }`}
        >
          {isFa ? 'توالی نقاط عطف تاریخی ۲۵۰۰ ساله' : '2,500-Year Historical Milestones'}
        </h2>
        <p className={`text-sm max-w-xl mx-auto ${isLight ? 'text-[#57534e]' : 'text-[#d1c5b4]'}`}>
          {isFa
            ? 'رویدادهای کلیدی از طلوع کوروش بزرگ و منشور آزادی تا شاهکارهای ادبی فردوسی و دانایی خیام.'
            : 'Key inflection points shaping world statecraft, geometry, literature, and astronomy.'}
        </p>

        {/* Filter Pills */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  isActive
                    ? isLight
                      ? 'bg-[#c5a059] text-white font-bold shadow-sm'
                      : 'bg-[#c5a059] text-[#04132b] font-bold shadow-[0_0_15px_rgba(197,160,89,0.35)]'
                    : isLight
                    ? 'bg-white text-[#57534e] border border-[#d8d0c4] hover:border-[#c5a059] hover:text-[#152033]'
                    : 'bg-[#112038] text-[#d1c5b4] border border-[#1c2a43] hover:border-[#c5a059]/40 hover:text-[#d7e3ff]'
                }`}
              >
                {isFa ? cat.labelFa : cat.labelEn}
              </button>
            );
          })}
        </div>
      </div>

      {/* Timeline Tree with motion */}
      <div
        className={`relative border-l-2 rtl:border-l-0 rtl:border-r-2 ml-4 rtl:ml-0 rtl:mr-4 pl-6 rtl:pl-0 rtl:pr-6 space-y-8 ${
          isLight ? 'border-[#c5a059]/40' : 'border-[#c5a059]/30'
        }`}
      >
        {filteredEvents.length === 0 ? (
          <div
            className={`p-8 text-center rounded-xl border ${
              isLight
                ? 'bg-white border-[#e4ddcf] text-[#57534e]'
                : 'bg-[#112038] border-[#4e4639] text-[#d1c5b4]'
            }`}
          >
            {isFa ? 'هیچ رویدادی مطابق با این جستجو یافت نشد.' : 'No historical events match this query.'}
          </div>
        ) : (
          filteredEvents.map((evt, idx) => {
            const isExpanded = expandedEventId === evt.id;

            return (
              <motion.div
                key={evt.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="relative group"
              >
                {/* Node on the spine */}
                <div
                  className={`absolute -left-[31px] rtl:-left-auto rtl:-right-[31px] top-1.5 w-3.5 h-3.5 rounded-full border-2 group-hover:scale-125 transition-transform ${
                    isLight
                      ? 'bg-white border-[#b8860b] shadow-[0_0_8px_rgba(184,134,11,0.4)]'
                      : 'bg-[#04132b] border-[#e9c176] shadow-[0_0_8px_rgba(233,193,118,0.6)]'
                  }`}
                />

                {/* Timeline Card */}
                <div
                  className={`border rounded-xl p-5 transition-all ${
                    isLight
                      ? 'bg-white/95 border-[#e4ddcf] shadow-md hover:border-[#c5a059] hover:shadow-lg'
                      : 'bg-[#142542]/90 backdrop-blur-sm border-[#c5a059]/25 hover:border-[#c5a059]/60 hover:shadow-[0_4px_25px_rgba(4,19,43,0.7)]'
                  }`}
                >
                  {/* Top Bar: Date & Location */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span
                      className={`px-2.5 py-0.5 rounded-full text-xs font-bold border ${
                        isLight
                          ? 'bg-[#c85a32]/10 text-[#c85a32] border-[#c85a32]/30'
                          : 'bg-[#c85a32]/20 text-[#ffb59c] border-[#c85a32]/40'
                      }`}
                    >
                      {isFa ? evt.dateDisplayFa : evt.dateDisplayEn}
                    </span>
                    <span className={`text-xs flex items-center gap-1 ${isLight ? 'text-[#78716c]' : 'text-[#9a8f80]'}`}>
                      <MapPin className={`w-3.5 h-3.5 ${isLight ? 'text-[#875e18]' : 'text-[#e9c176]'}`} />
                      <span>{isFa ? evt.locationFa : evt.locationEn}</span>
                    </span>
                  </div>

                  {/* Title */}
                  <h3
                    className={`font-serif-title text-xl font-bold mb-2 transition-colors ${
                      isLight
                        ? 'text-[#152033] group-hover:text-[#875e18]'
                        : 'text-[#e9c176] group-hover:text-[#ffd68a]'
                    }`}
                  >
                    {isFa ? evt.titleFa : evt.titleEn}
                  </h3>

                  {/* Summary */}
                  <p className={`text-sm leading-relaxed mb-3 ${isLight ? 'text-[#334155]' : 'text-[#d7e3ff]'}`}>
                    {isFa ? evt.summaryFa : evt.summaryEn}
                  </p>

                  {/* Historical Inscription / Quote if available */}
                  {(evt.quoteEn || evt.quoteFa) && (
                    <div
                      className={`my-3 p-3 rounded-lg border-l-2 rtl:border-l-0 rtl:border-r-2 text-xs italic flex items-start gap-2 ${
                        isLight
                          ? 'bg-[#fcfbf7] border-[#b8860b] text-[#57534e]'
                          : 'bg-[#0c1b33] border-[#c5a059] text-[#d1c5b4]'
                      }`}
                    >
                      <Quote className={`w-4 h-4 shrink-0 mt-0.5 ${isLight ? 'text-[#875e18]' : 'text-[#e9c176]'}`} />
                      <div>
                        <div>"{isFa ? evt.quoteFa : evt.quoteEn}"</div>
                        {(evt.quoteAuthorEn || evt.quoteAuthorFa) && (
                          <div
                            className={`text-[11px] not-italic font-semibold mt-1 ${
                              isLight ? 'text-[#875e18]' : 'text-[#e9c176]'
                            }`}
                          >
                            — {isFa ? evt.quoteAuthorFa : evt.quoteAuthorEn}
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Expansion Details */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className={`mt-4 pt-4 border-t space-y-3 overflow-hidden text-xs ${
                          isLight ? 'border-[#e4ddcf] text-[#334155]' : 'border-[#1c2a43] text-[#acc7ff]'
                        }`}
                      >
                        <div>
                          <strong className={`block mb-1 ${isLight ? 'text-[#875e18]' : 'text-[#e9c176]'}`}>
                            {isFa ? 'میراث تاریخی و تمدنی:' : 'Civilizational Impact:'}
                          </strong>
                          <p className={`leading-relaxed ${isLight ? 'text-[#57534e]' : 'text-[#d1c5b4]'}`}>
                            {isFa ? evt.fullDescriptionFa : evt.fullDescriptionEn}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Toggle button */}
                  <button
                    onClick={() => toggleExpand(evt.id)}
                    className={`mt-3 text-xs font-semibold flex items-center gap-1 transition-colors cursor-pointer ${
                      isLight ? 'text-[#875e18] hover:text-[#b8860b]' : 'text-[#e9c176] hover:text-[#ffd68a]'
                    }`}
                  >
                    <span>{isExpanded ? (isFa ? 'بستن جزئیات' : 'Show Less') : (isFa ? 'مطالعه جزئیات بیشتر' : 'Read Deep Dive')}</span>
                    {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                  </button>

                </div>
              </motion.div>
            );
          })
        )}
      </div>
    </section>
  );
};
