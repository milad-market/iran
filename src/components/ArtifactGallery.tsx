import React, { useState } from 'react';
import { CulturalArtifact, Language } from '../types';
import { CULTURAL_ARTIFACTS } from '../data/heritageData';
import { BookMarked, Landmark, Quote, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ArtifactGalleryProps {
  language: Language;
}

export const ArtifactGallery: React.FC<ArtifactGalleryProps> = ({ language }) => {
  const isFa = language === 'fa';
  const [selectedArtifactId, setSelectedArtifactId] = useState<string>(CULTURAL_ARTIFACTS[0].id);

  const selectedArtifact =
    CULTURAL_ARTIFACTS.find((a) => a.id === selectedArtifactId) || CULTURAL_ARTIFACTS[0];

  return (
    <section className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="artifacts-section">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
        <div>
          <div className="flex items-center gap-2 text-[#e9c176] text-xs font-semibold tracking-wider uppercase mb-1">
            <BookMarked className="w-4 h-4" />
            <span>{isFa ? 'گنجینه منشورها و شاهکارهای تمدن' : 'Treasures & Universal Declarations'}</span>
          </div>
          <h2 className="font-serif-title text-2xl sm:text-3xl font-bold text-[#d7e3ff]">
            {isFa ? 'منشور کوروش، شاهنامه و میراث جاودان' : 'Artifacts of Liberty, Science & Poetry'}
          </h2>
        </div>
        <p className="text-sm text-[#d1c5b4] max-w-md">
          {isFa
            ? 'متون دست‌اول، اسناد ثبت‌شده و شاهکارهایی که پیام‌آور دادگری، آزادگی و شگفتی هنر در سراسر جهان بوده‌اند.'
            : 'Primary charters, epic verses, and scientific breakthroughs preserved in global museums.'}
        </p>
      </div>

      {/* Artifact selector pills with motion */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
        {CULTURAL_ARTIFACTS.map((artifact, idx) => {
          const isSelected = artifact.id === selectedArtifactId;
          return (
            <motion.button
              key={artifact.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.06 }}
              whileHover={{ y: -3, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setSelectedArtifactId(artifact.id)}
              id={`artifact-btn-${artifact.id}`}
              className={`p-4 rounded-xl border text-left rtl:text-right transition-all flex flex-col justify-between cursor-pointer ${
                isSelected
                  ? 'bg-[#1b3256] border-[#e9c176] shadow-[0_0_20px_rgba(197,160,89,0.3)]'
                  : 'bg-[#112038] border-[#c5a059]/20 hover:border-[#c5a059]/40 hover:bg-[#142542]'
              }`}
            >
              <div>
                <span className="text-[11px] font-semibold text-[#e9c176] uppercase tracking-wider block mb-1">
                  {isFa ? artifact.categoryFa : artifact.categoryEn}
                </span>
                <h3 className="font-serif-title text-base font-bold text-[#d7e3ff] mb-1">
                  {isFa ? artifact.titleFa : artifact.titleEn}
                </h3>
              </div>
              <span className="text-xs text-[#9a8f80] mt-3 block font-mono">
                {isFa ? artifact.eraFa : artifact.eraEn}
              </span>
            </motion.button>
          );
        })}
      </div>

      {/* Illuminated Showcase Display Card with animated presence */}
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedArtifact.id}
          initial={{ opacity: 0, scale: 0.98, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.98, y: -10 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          className="bg-[#112038]/90 backdrop-blur-sm border border-[#c5a059]/40 rounded-2xl p-6 sm:p-10 shadow-2xl relative overflow-hidden"
        >
          {/* Subtle illuminated manuscript frame border trick */}
          <div className="absolute inset-2 border border-[#c5a059]/15 rounded-xl pointer-events-none" />

          <div className="relative z-10 max-w-4xl mx-auto">
            {/* Top category & Holding Museum */}
            <div className="flex flex-wrap items-center justify-between gap-2 mb-4 pb-4 border-b border-[#1c2a43]">
              <span className="px-3 py-1 rounded-full bg-[#c5a059]/15 text-[#e9c176] text-xs font-bold border border-[#c5a059]/30">
                {isFa ? selectedArtifact.eraFa : selectedArtifact.eraEn}
              </span>
              <span className="text-xs text-[#d1c5b4] flex items-center gap-1.5">
                <Landmark className="w-3.5 h-3.5 text-[#e9c176]" />
                <span>{isFa ? 'محل نگهداری: ' : 'Repository: '}</span>
                <strong className="text-[#d7e3ff]">
                  {isFa ? selectedArtifact.currentHoldingFa : selectedArtifact.currentHoldingEn}
                </strong>
              </span>
            </div>

            {/* Artifact Title */}
            <h3 className="font-serif-title text-2xl sm:text-3xl font-bold text-[#e9c176] mb-4">
              {isFa ? selectedArtifact.titleFa : selectedArtifact.titleEn}
            </h3>

            {/* Inscription Quote Box if present */}
            {(selectedArtifact.quoteEn || selectedArtifact.quoteFa) && (
              <motion.div 
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="my-6 p-5 rounded-xl bg-[#0c1b33] border border-[#c5a059]/40 shadow-inner"
              >
                <div className="flex items-start gap-3">
                  <Quote className="w-6 h-6 text-[#e9c176] shrink-0 mt-1" />
                  <div>
                    <p className="font-serif-title text-base sm:text-lg text-[#f4eedd] italic leading-relaxed">
                      "{isFa ? selectedArtifact.quoteFa : selectedArtifact.quoteEn}"
                    </p>
                    <span className="text-xs text-[#e9c176] font-semibold block mt-2">
                      {isFa ? 'ترجمه فراز ثبت‌شده در سند اصلی' : 'Authentic Excerpt from Primary Inscription / Verse'}
                    </span>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Description & Significance Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div className="p-4 rounded-xl bg-[#0c1b33]/80 border border-[#1c2a43]">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#e9c176] mb-2">
                  {isFa ? 'توصیف ساختار و پیشینه' : 'Physical & Historical Context'}
                </h4>
                <p className="text-xs sm:text-sm text-[#d1c5b4] leading-relaxed">
                  {isFa ? selectedArtifact.descriptionFa : selectedArtifact.descriptionEn}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#0c1b33]/80 border border-[#1c2a43]">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#e9c176] mb-2">
                  {isFa ? 'اهمیت در حقوق و اخلاق جهانی' : 'Universal Significance & Impact'}
                </h4>
                <p className="text-xs sm:text-sm text-[#d1c5b4] leading-relaxed">
                  {isFa ? selectedArtifact.significanceFa : selectedArtifact.significanceEn}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
};
