import React, { useState, useEffect, useRef } from 'react';
import { Language, Theme } from '../types';
import { CYRUS_CHARTER_CLAUSES, CYRUS_ARTICLES, CharterClause, CharterArticle } from '../data/cyrusCharterData';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, 
  Volume2, 
  VolumeX, 
  ChevronRight, 
  ChevronLeft, 
  BookOpen, 
  ShieldCheck, 
  Maximize2, 
  RotateCw, 
  Sliders, 
  Layers, 
  Scale, 
  Globe2, 
  Search,
  CheckCircle2,
  FileText
} from 'lucide-react';

interface CyrusCylinderExperienceProps {
  language: Language;
  theme: Theme;
  onExploreDynasties?: () => void;
  onExploreTimeline?: () => void;
  onExploreMap?: () => void;
  onOpenAi?: () => void;
}

export const CyrusCylinderExperience: React.FC<CyrusCylinderExperienceProps> = ({
  language,
  theme,
  onExploreDynasties,
  onExploreTimeline,
  onExploreMap,
  onOpenAi,
}) => {
  const isFa = language === 'fa';
  const isLight = theme === 'light';

  // Active clause being read (from 0 to clauses.length - 1)
  const [currentClauseIndex, setCurrentClauseIndex] = useState<number>(0);
  // Manual 3D rotation angle
  const [rotationAngle, setRotationAngle] = useState<number>(0);
  const [isAutoRotating, setIsAutoRotating] = useState<boolean>(true);
  const [audioPlaying, setAudioPlaying] = useState<boolean>(false);
  const [activeArticle, setActiveArticle] = useState<CharterArticle | null>(null);
  const [selectedDisplayMode, setSelectedDisplayMode] = useState<'both' | 'persian' | 'cuneiform'>('both');
  const [mousePos, setMousePos] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [startX, setStartX] = useState<number>(0);

  const audioCtxRef = useRef<AudioContext | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const currentClause = CYRUS_CHARTER_CLAUSES[currentClauseIndex];

  // Continuous auto-rotation when enabled
  useEffect(() => {
    if (!isAutoRotating) return;
    const interval = setInterval(() => {
      setRotationAngle((prev) => (prev + 0.3) % 360);
    }, 30);
    return () => clearInterval(interval);
  }, [isAutoRotating]);

  // Wheel scroll handler to change clauses with mouse scroll!
  // "متن ها به صورت معلق پشت منشور باشه و با اسکرول کردن تغییر کنند"
  const handleWheel = (e: React.WheelEvent) => {
    // Only capture scroll when hovering the cylinder stage or explicitly scrolling
    if (Math.abs(e.deltaY) > 25) {
      if (scrollTimeoutRef.current) return;

      if (e.deltaY > 0) {
        // Scroll down: Next clause
        nextClause();
      } else {
        // Scroll up: Previous clause
        prevClause();
      }

      // Debounce scroll so it's smooth and controllable
      scrollTimeoutRef.current = setTimeout(() => {
        scrollTimeoutRef.current = null;
      }, 350);
    }
  };

  const nextClause = () => {
    setCurrentClauseIndex((prev) => (prev + 1) % CYRUS_CHARTER_CLAUSES.length);
    setRotationAngle((prev) => prev + 25);
  };

  const prevClause = () => {
    setCurrentClauseIndex((prev) => 
      prev === 0 ? CYRUS_CHARTER_CLAUSES.length - 1 : prev - 1
    );
    setRotationAngle((prev) => prev - 25);
  };

  // Mouse interaction for parallax and 3D angle
  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      const deltaX = e.clientX - startX;
      setRotationAngle((prev) => prev + deltaX * 0.4);
      setStartX(e.clientX);
    }
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const y = ((e.clientY - rect.top) / rect.height) * 2 - 1;
    setMousePos({ x, y });
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setIsAutoRotating(false);
    setStartX(e.clientX);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Web Audio ambient drone
  const toggleSound = () => {
    if (audioPlaying) {
      if (audioCtxRef.current) {
        audioCtxRef.current.close();
        audioCtxRef.current = null;
      }
      setAudioPlaying(false);
      return;
    }

    try {
      const AudioCtxClass = window.AudioContext || (window as any).webkitAudioContext;
      const ctx = new AudioCtxClass();
      audioCtxRef.current = ctx;

      const osc1 = ctx.createOscillator();
      const osc2 = ctx.createOscillator();
      const gain = ctx.createGain();

      osc1.type = 'sine';
      osc1.frequency.setValueAtTime(108, ctx.currentTime); // 108Hz ancient resonant drone
      osc2.type = 'triangle';
      osc2.frequency.setValueAtTime(162, ctx.currentTime);

      gain.gain.setValueAtTime(0.001, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.04, ctx.currentTime + 1.5);

      osc1.connect(gain);
      osc2.connect(gain);
      gain.connect(ctx.destination);

      osc1.start();
      osc2.start();
      setAudioPlaying(true);
    } catch (err) {
      console.warn('Audio not available:', err);
    }
  };

  useEffect(() => {
    return () => {
      if (audioCtxRef.current) {
        audioCtxRef.current.close();
      }
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      onWheel={handleWheel}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      className={`relative min-h-[92vh] flex flex-col overflow-hidden transition-colors duration-300 select-none ${
        isLight
          ? 'bg-[#fbf9f4] text-[#09090b]'
          : 'bg-[#060609] text-[#f4f4f6]'
      }`}
      dir={isFa ? 'rtl' : 'ltr'}
    >
      {/* Background Decorative Ambient Radials & Cuneiform Starfield */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className={`absolute inset-0 transition-opacity duration-700 ${
            isLight ? 'opacity-20' : 'opacity-30'
          }`}
          style={{
            backgroundImage: `radial-gradient(circle at 50% 35%, rgba(197, 160, 89, 0.25) 0%, transparent 65%),
                              radial-gradient(circle at 80% 20%, rgba(233, 193, 118, 0.15) 0%, transparent 45%),
                              radial-gradient(circle at 20% 80%, rgba(180, 130, 60, 0.12) 0%, transparent 50%)`,
          }}
        />

        {/* Deep Floating Akkadian Cuneiform Symbols Moving with Parallax */}
        <div 
          className="absolute inset-0 transition-transform duration-300 ease-out pointer-events-none opacity-20"
          style={{
            transform: `translate(${mousePos.x * -20}px, ${mousePos.y * -20}px)`,
          }}
        >
          <span className="absolute top-[8%] right-[10%] text-8xl md:text-9xl font-mono text-[#c5a059] opacity-40">
            𒀭 𒈗 𒃲
          </span>
          <span className="absolute top-[45%] left-[6%] text-8xl md:text-9xl font-mono text-[#c5a059] opacity-30">
            𒆍𒀭𒊏𒆠
          </span>
          <span className="absolute bottom-[10%] right-[18%] text-7xl md:text-8xl font-mono text-[#c5a059] opacity-35">
            𒂍 𒆳 𒀭 𒀫𒌓
          </span>
          <span className="absolute bottom-[18%] left-[20%] text-6xl md:text-7xl font-mono text-[#c5a059] opacity-25">
            𒈨 𒋼 𒂗 𒍣
          </span>
        </div>
      </div>

      {/* Top Experience Navigation & Action Bar */}
      <div className="relative z-30 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-6 pb-2">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b pb-4 border-[#c5a059]/20">
          
          {/* Header Title with Official UN & Archeological Badge */}
          <div className="text-right">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full bg-[#c5a059]/15 text-[#c5a059] text-[11px] font-bold border border-[#c5a059]/30">
                {isFa ? 'نخستین منشور حقوق بشر جهان — ۵۳۹ پیش از میلاد' : 'World’s First Human Rights Charter — 539 BCE'}
              </span>
              <span className="hidden sm:inline-block px-2 py-0.5 rounded text-[10px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                {isFa ? 'ثبت در سازمان ملل متحد' : 'UN Replica Record'}
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-serif-title mt-1.5 tracking-tight">
              {isFa ? (
                <>
                  منشور زرین <span className="text-[#c5a059]">کوروش بزرگ</span>
                </>
              ) : (
                <>
                  The Golden Cylinder of <span className="text-[#c5a059]">Cyrus the Great</span>
                </>
              )}
            </h1>
            <p className="text-xs sm:text-sm text-stone-400 mt-0.5">
              {isFa
                ? 'استوانه سفالین بابل با ۴۵ سطر خط میخی اکدی؛ با اسکرول ماوس متون شناور پشت منشور تغییر می‌کنند'
                : 'Babylonian clay cylinder with 45 lines of Akkadian cuneiform; scroll to advance floating decree texts'}
            </p>
          </div>

          {/* Interactive Controls & Sound */}
          <div className="flex items-center gap-2.5">
            {/* Display Mode Toggle */}
            <div className={`flex items-center p-1 rounded-xl border text-xs ${
              isLight ? 'bg-white border-stone-300' : 'bg-[#121218] border-stone-800'
            }`}>
              <button
                onClick={() => setSelectedDisplayMode('both')}
                className={`px-2.5 py-1 rounded-lg transition-all cursor-pointer font-medium ${
                  selectedDisplayMode === 'both'
                    ? 'bg-[#c5a059] text-black font-bold'
                    : 'text-stone-400 hover:text-white'
                }`}
              >
                {isFa ? 'ترجمه و میخی' : 'Both'}
              </button>
              <button
                onClick={() => setSelectedDisplayMode('persian')}
                className={`px-2.5 py-1 rounded-lg transition-all cursor-pointer font-medium ${
                  selectedDisplayMode === 'persian'
                    ? 'bg-[#c5a059] text-black font-bold'
                    : 'text-stone-400 hover:text-white'
                }`}
              >
                {isFa ? 'فقط ترجمه' : 'Translation'}
              </button>
              <button
                onClick={() => setSelectedDisplayMode('cuneiform')}
                className={`px-2.5 py-1 rounded-lg transition-all cursor-pointer font-medium ${
                  selectedDisplayMode === 'cuneiform'
                    ? 'bg-[#c5a059] text-black font-bold'
                    : 'text-stone-400 hover:text-white'
                }`}
              >
                {isFa ? 'خط میخی' : 'Cuneiform'}
              </button>
            </div>

            {/* Auto-rotation toggle */}
            <button
              onClick={() => setIsAutoRotating(!isAutoRotating)}
              className={`p-2.5 rounded-xl border transition-all cursor-pointer flex items-center gap-1.5 text-xs font-semibold ${
                isAutoRotating
                  ? 'bg-[#c5a059]/15 border-[#c5a059] text-[#e9c176]'
                  : isLight
                  ? 'bg-white border-stone-300 text-stone-700'
                  : 'bg-[#121218] border-stone-800 text-stone-300'
              }`}
              title={isFa ? 'تغییر چرخش خودکار سه‌بعدی' : 'Toggle 3D auto rotation'}
            >
              <RotateCw className={`w-4 h-4 ${isAutoRotating ? 'animate-spin' : ''}`} style={{ animationDuration: '8s' }} />
              <span className="hidden md:inline">{isFa ? (isAutoRotating ? 'چرخش ۳۶۰° فعال' : 'چرخش متوقف') : '360° Rotate'}</span>
            </button>

            {/* Ambient Sound Drone */}
            <button
              onClick={toggleSound}
              className={`p-2.5 rounded-xl border transition-all cursor-pointer ${
                audioPlaying
                  ? 'bg-[#c5a059] text-black border-[#c5a059]'
                  : isLight
                  ? 'bg-white border-stone-300 text-stone-700 hover:border-[#c5a059]'
                  : 'bg-[#121218] border-stone-800 text-stone-300 hover:border-[#c5a059]'
              }`}
              title={isFa ? (audioPlaying ? 'قطع نوای باستانی' : 'پخش طنین باستانی') : 'Toggle Ambient Audio'}
            >
              {audioPlaying ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Clause Jump Bar / Scroll Progress */}
        <div className="flex items-center justify-between gap-3 mt-3 py-1 overflow-x-auto no-scrollbar">
          <div className="flex items-center gap-1.5 flex-nowrap">
            {CYRUS_CHARTER_CLAUSES.map((clause, idx) => (
              <button
                key={clause.id}
                onClick={() => {
                  setCurrentClauseIndex(idx);
                  setRotationAngle((prev) => prev + 30);
                }}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
                  currentClauseIndex === idx
                    ? 'bg-gradient-to-r from-[#c5a059] to-[#e9c176] text-black shadow-md shadow-[#c5a059]/25 scale-105'
                    : isLight
                    ? 'bg-white border border-stone-200 text-stone-600 hover:border-[#c5a059]'
                    : 'bg-[#121218] border border-stone-800 text-stone-400 hover:border-[#c5a059] hover:text-white'
                }`}
              >
                <span>{isFa ? clause.linesFa : clause.lines}</span>
                {currentClauseIndex === idx && <CheckCircle2 className="w-3.5 h-3.5 fill-black text-white" />}
              </button>
            ))}
          </div>

          <div className="text-xs text-stone-400 font-mono hidden lg:block whitespace-nowrap">
            {isFa ? `بخش ${currentClauseIndex + 1} از ${CYRUS_CHARTER_CLAUSES.length}` : `Section ${currentClauseIndex + 1} of ${CYRUS_CHARTER_CLAUSES.length}`}
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* MASTER 3D STAGE: FLOATING TEXTS BEHIND + ULTRA-REALISTIC CYLINDER FOREGROUND */}
      {/* ========================================================================= */}
      <div className="relative flex-1 flex flex-col justify-center items-center py-6 px-4 md:px-8 min-h-[580px]">
        
        {/* ======================================================================= */}
        {/* 1. FLOATING BACKGROUND TEXT LAYER (معلق پشت منشور با افکت عمق سه بعدی) */}
        {/* ======================================================================= */}
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0 px-4 md:px-12 overflow-hidden"
          style={{
            transform: `translate(${mousePos.x * 25}px, ${mousePos.y * 18}px)`,
            transition: 'transform 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentClause.id}
              initial={{ opacity: 0, scale: 0.9, y: 30, filter: 'blur(8px)' }}
              animate={{ opacity: 1, scale: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, scale: 1.08, y: -30, filter: 'blur(10px)' }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-4xl text-center space-y-4 px-4 relative"
            >
              {/* Giant Watermark Glyphs in very subtle gold */}
              <div className="text-[#c5a059]/10 text-6xl sm:text-8xl md:text-9xl font-mono tracking-widest absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 whitespace-nowrap select-none">
                {currentClause.cuneiformBabylonian}
              </div>

              {/* Theme Subtitle Pill */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#c5a059]/10 border border-[#c5a059]/30 text-[#e9c176] text-xs font-bold tracking-wider">
                <ShieldCheck className="w-3.5 h-3.5 text-[#c5a059]" />
                <span>{isFa ? currentClause.themeTitleFa : currentClause.themeTitleEn}</span>
              </div>

              {/* Main Primary Floating Persian Inscription Text (Behind Cylinder) */}
              {(selectedDisplayMode === 'both' || selectedDisplayMode === 'persian') && (
                <p 
                  className={`font-serif-title text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black leading-relaxed sm:leading-loose drop-shadow-2xl floating-text-glow ${
                    isLight 
                      ? 'text-[#875e18] drop-shadow-[0_4px_12px_rgba(255,255,255,0.9)]' 
                      : 'text-[#ffd88f] drop-shadow-[0_0_35px_rgba(197,160,89,0.3)]'
                  }`}
                  style={{ textShadow: isLight ? '0 2px 20px rgba(197,160,89,0.4)' : '0 0 35px rgba(233,193,118,0.35)' }}
                >
                  {isFa ? currentClause.persianText : currentClause.englishText}
                </p>
              )}

              {/* Original Akkadian Transliteration */}
              {(selectedDisplayMode === 'both' || selectedDisplayMode === 'cuneiform') && (
                <p className="text-xs sm:text-sm font-mono tracking-widest text-[#c5a059] opacity-75 dir-ltr">
                  {currentClause.akkadianTransliteration}
                </p>
              )}

              {/* Secondary Translation Subtext */}
              {selectedDisplayMode === 'both' && (
                <p className={`text-xs sm:text-sm max-w-2xl mx-auto italic font-serif opacity-70 ${
                  isLight ? 'text-stone-700' : 'text-stone-300'
                }`}>
                  {isFa ? currentClause.englishText : currentClause.persianText}
                </p>
              )}

              {/* Core Principle Tagline */}
              <div className="pt-2">
                <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#c5a059] px-3 py-1 rounded-md bg-black/40 border border-[#c5a059]/20 backdrop-blur-md">
                  {isFa ? `اصل بنیادین: ${currentClause.corePrincipleFa}` : `Universal Principle: ${currentClause.corePrincipleEn}`}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ======================================================================= */}
        {/* 2. ULTRA-REALISTIC 3D CYLINDER FOREGROUND PIECE */}
        {/* ======================================================================= */}
        <div 
          className="relative z-10 my-auto py-2 flex flex-col items-center justify-center cursor-grab active:cursor-grabbing group"
          onMouseDown={handleMouseDown}
          title={isFa ? 'برای چرخاندن منشور با ماوس درگ کنید یا با اسکرول ماوس متن را ورق بزنید' : 'Drag to rotate 3D cylinder, scroll to change floating decree'}
        >
          {/* Radial Backlight / Golden Sheen Aura behind Cylinder */}
          <div 
            className="absolute -inset-10 bg-gradient-to-r from-[#c5a059]/20 via-[#ffd68a]/35 to-[#c5a059]/20 rounded-full blur-3xl opacity-70 group-hover:opacity-95 transition-opacity pointer-events-none"
            style={{
              transform: `scale(${1 + Math.sin(rotationAngle * 0.05) * 0.08})`,
            }}
          />

          {/* 3D Perspective Box containing the Clay Cylinder */}
          <div
            className="relative transition-transform duration-100 ease-out"
            style={{
              transform: `perspective(1200px) rotateY(${rotationAngle + mousePos.x * 15}deg) rotateX(${-mousePos.y * 12}deg) scale(1.02)`,
            }}
          >
            {/* SVG High-Fidelity Photorealistic Clay Cylinder Artifact */}
            <svg
              viewBox="0 0 680 300"
              className="w-72 sm:w-[420px] md:w-[560px] lg:w-[640px] h-auto drop-shadow-[0_30px_45px_rgba(0,0,0,0.9)] relative z-10 filter contrast-125"
            >
              <defs>
                {/* Authentic Baked Clay Terracotta Shader */}
                <linearGradient id="ultraClayBody" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#efd5a7" />
                  <stop offset="12%" stopColor="#dcaf6d" />
                  <stop offset="35%" stopColor="#ba8646" />
                  <stop offset="65%" stopColor="#8d5f2a" />
                  <stop offset="88%" stopColor="#5c3b14" />
                  <stop offset="100%" stopColor="#321e08" />
                </linearGradient>

                {/* Left Chipped Clay Barrel Cap */}
                <radialGradient id="leftClayCap" cx="40%" cy="45%" r="60%">
                  <stop offset="0%" stopColor="#ffd899" />
                  <stop offset="40%" stopColor="#ba8646" />
                  <stop offset="85%" stopColor="#633d13" />
                  <stop offset="100%" stopColor="#2e1905" />
                </radialGradient>

                {/* Right Clay Cap Shadow */}
                <radialGradient id="rightClayCap" cx="35%" cy="45%" r="65%">
                  <stop offset="0%" stopColor="#b48347" />
                  <stop offset="60%" stopColor="#5d3912" />
                  <stop offset="100%" stopColor="#251403" />
                </radialGradient>

                {/* Specular Light Reflection Sweep (Shifts with rotation!) */}
                <linearGradient 
                  id="specularSheen" 
                  x1={`${((rotationAngle % 360) / 360) * 100}%`} 
                  y1="0%" 
                  x2={`${(((rotationAngle % 360) / 360) * 100 + 40) % 100}%`} 
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
                  <stop offset="50%" stopColor="#fff8e7" stopOpacity="0.45" />
                  <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
                </linearGradient>

                {/* Ancient Weathered Clay Crack Texture Pattern */}
                <filter id="clayRoughness" x="0%" y="0%" width="100%" height="100%">
                  <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="4" result="noise" />
                  <feDiffuseLighting in="noise" lightingColor="#ffd38c" surfaceScale="1.8" result="light">
                    <feDistantLight azimuth="45" elevation="60" />
                  </feDiffuseLighting>
                  <feBlend mode="multiply" in="SourceGraphic" in2="light" />
                </filter>
              </defs>

              {/* Clay Barrel Silhouette with Organic Weathered Edge Curvature */}
              <path
                d="M 80 60 
                   Q 200 35 340 32 
                   Q 480 35 600 60 
                   Q 620 150 600 240 
                   Q 480 265 340 268 
                   Q 200 265 80 240 
                   Q 60 150 80 60 Z"
                fill="url(#ultraClayBody)"
                stroke="#633d13"
                strokeWidth="1.5"
              />

              {/* Specular Lighting Layer reacting to 360 rotation */}
              <path
                d="M 80 60 
                   Q 340 32 600 60 
                   L 600 130 
                   Q 340 102 80 130 Z"
                fill="url(#specularSheen)"
                opacity="0.8"
              />

              {/* Left End Barrel Cap with Authentic Fracture Notch */}
              <ellipse cx="80" cy="150" rx="38" ry="90" fill="url(#leftClayCap)" stroke="#3e240a" strokeWidth="1.5" />
              {/* Real British Museum chipped cavity at left edge */}
              <path
                d="M 68 110 Q 55 140 70 175 Q 85 150 68 110 Z"
                fill="#241303"
                opacity="0.85"
              />

              {/* Right End Barrel Cap */}
              <ellipse cx="600" cy="150" rx="28" ry="90" fill="url(#rightClayCap)" stroke="#3e240a" strokeWidth="1.5" />

              {/* 45 Detailed Incised Cuneiform Inscription Bands across the barrel */}
              {[...Array(24)].map((_, i) => {
                const yPos = 65 + i * 8.5;
                // Curvature of barrel perspective
                const arch = 16 * Math.sin((i / 24) * Math.PI);
                return (
                  <g key={i} opacity={0.8}>
                    {/* Deep incised groove shadow */}
                    <path
                      d={`M 105 ${yPos} Q 340 ${yPos - arch} 575 ${yPos}`}
                      stroke="#221203"
                      strokeWidth="1.4"
                      strokeDasharray="5 2 10 3 4 2 8 3"
                      fill="none"
                    />
                    {/* Highlight rim on groove bottom edge */}
                    <path
                      d={`M 105 ${yPos + 0.9} Q 340 ${yPos - arch + 0.9} 575 ${yPos + 0.9}`}
                      stroke="#ffe6b0"
                      strokeWidth="0.7"
                      strokeDasharray="5 2 10 3 4 2 8 3"
                      fill="none"
                      opacity="0.65"
                    />
                  </g>
                );
              })}

              {/* Authentic Akkadian Royal Cuneiform Wedges Inscribed into Clay */}
              <g fill="#241303" fontFamily="monospace" fontSize="9" opacity="0.85">
                <text x="140" y="98">𒀭 𒀫𒌓 𒃲 𒀭 𒂗 𒆤 𒈨 𒋼 𒂗 𒍣 𒅎 𒋾 𒅀 𒊏 𒄠 𒋙</text>
                <text x="155" y="124">𒁹𒆪𒊏𒀾 𒈗 𒃲 𒈗 𒁕 𒈝 𒈗 𒆍𒀭𒊏𒆠 𒈗 𒆳</text>
                <text x="135" y="150">𒌉 𒁹𒅗𒄠𒁍𒍣𒅀 𒈗 𒃲 𒈗 𒌷 𒀭𒊭𒀭 𒌉 𒌉</text>
                <text x="150" y="176">𒌦 𒈨𒌍 𒉌 𒋛 𒂊 𒋾 𒌒 𒁍 𒄴 𒋾 𒁍 𒄯 𒈠 𒀀 𒈾</text>
                <text x="145" y="202">𒁕 𒀭 𒉡 𒌅 𒆍𒀭𒊏𒆠 𒄿 𒈾 𒈨 𒋾 𒅀 𒌑 𒆗</text>
                <text x="160" y="228">𒂍 𒆳 𒊏 𒀭 𒀫𒌓 𒃲 𒀭 𒂗 𒆤 𒆠 𒂍 𒃲</text>
              </g>

              {/* Golden Reflection Highlight along the top ridge */}
              <path
                d="M 90 62 Q 340 36 590 62"
                stroke="#fff4d0"
                strokeWidth="2.5"
                fill="none"
                opacity="0.6"
              />
            </svg>
          </div>

          {/* Interactive Hint Underneath */}
          <div className="mt-4 flex items-center gap-3">
            <button
              onClick={prevClause}
              className={`p-2 rounded-full border transition-all cursor-pointer ${
                isLight ? 'bg-white border-stone-300 hover:bg-stone-100' : 'bg-[#14141d] border-stone-800 hover:border-[#c5a059]'
              }`}
              title={isFa ? 'بند قبلی (یا اسکرول به بالا)' : 'Previous clause (or scroll up)'}
            >
              <ChevronRight className="w-4 h-4" />
            </button>

            <span className="text-[11px] sm:text-xs font-semibold px-3 py-1 rounded-full bg-[#c5a059]/15 text-[#e9c176] border border-[#c5a059]/30 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#c5a059]" />
              <span>{isFa ? 'اسکرول ماوس برای ورق زدن متن‌ها • درگ برای چرخش سه‌بعدی' : 'Mouse scroll to change text • Drag to rotate 3D'}</span>
            </span>

            <button
              onClick={nextClause}
              className={`p-2 rounded-full border transition-all cursor-pointer ${
                isLight ? 'bg-white border-stone-300 hover:bg-stone-100' : 'bg-[#14141d] border-stone-800 hover:border-[#c5a059]'
              }`}
              title={isFa ? 'بند بعدی (یا اسکرول به پایین)' : 'Next clause (or scroll down)'}
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>

      {/* ========================================================================= */}
      {/* 3. SCHOLARLY ANALYSIS & HISTORICAL CONTEXT PANEL (مطالب بسیار جامع) */}
      {/* ========================================================================= */}
      <div className={`relative z-20 border-t transition-colors ${
        isLight ? 'bg-white border-[#e4ddcf]' : 'bg-[#0c0c12] border-[#262632]'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            
            {/* Column 1: Current Clause Deep Breakdown */}
            <div className={`rounded-2xl p-5 border ${
              isLight ? 'bg-[#faf8f4] border-stone-200' : 'bg-[#121218] border-stone-800'
            }`}>
              <div className="flex items-center gap-2 mb-3">
                <FileText className="w-4 h-4 text-[#c5a059]" />
                <h3 className="font-bold text-sm font-serif-title">
                  {isFa ? `تحلیل باستان‌شناختی و حقوقی ${currentClause.linesFa}` : `Scholarly Analysis: ${currentClause.lines}`}
                </h3>
              </div>
              <p className="text-xs sm:text-sm leading-relaxed text-stone-300">
                {isFa ? currentClause.historicalAnalysisFa : currentClause.historicalAnalysisEn}
              </p>
              
              <div className="mt-4 pt-3 border-t border-stone-700/50 flex flex-wrap gap-1.5">
                {currentClause.keywords.map((kw, i) => (
                  <span key={i} className="text-[10px] px-2 py-0.5 rounded bg-[#c5a059]/10 text-[#e9c176] border border-[#c5a059]/25">
                    #{kw}
                  </span>
                ))}
              </div>
            </div>

            {/* Column 2: In-Depth Articles & Scholarly Library */}
            <div className={`rounded-2xl p-5 border lg:col-span-2 ${
              isLight ? 'bg-[#faf8f4] border-stone-200' : 'bg-[#121218] border-stone-800'
            }`}>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-[#c5a059]" />
                  <h3 className="font-bold text-sm font-serif-title">
                    {isFa ? 'دانشنامه و مقالات پژوهشی پیرامون منشور کوروش' : 'Research Encyclopedia & Articles on Cyrus Cylinder'}
                  </h3>
                </div>
                <span className="text-[11px] text-[#c5a059] font-semibold">
                  {isFa ? `${CYRUS_ARTICLES.length} مقاله مرجع` : `${CYRUS_ARTICLES.length} Reference Articles`}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {CYRUS_ARTICLES.map((art) => (
                  <div
                    key={art.id}
                    onClick={() => setActiveArticle(art)}
                    className={`p-3.5 rounded-xl border transition-all cursor-pointer flex flex-col justify-between group ${
                      isLight
                        ? 'bg-white border-stone-200 hover:border-[#c5a059] hover:shadow-md'
                        : 'bg-[#161620] border-stone-800 hover:border-[#c5a059] hover:bg-[#1a1a28]'
                    }`}
                  >
                    <div>
                      <span className="text-[10px] text-[#c5a059] font-medium block mb-1">
                        {isFa ? art.categoryFa : art.categoryEn} • {isFa ? art.readTimeFa : art.readTimeEn}
                      </span>
                      <h4 className="font-bold text-xs sm:text-sm line-clamp-2 group-hover:text-[#c5a059] transition-colors">
                        {isFa ? art.titleFa : art.titleEn}
                      </h4>
                    </div>
                    <div className="mt-3 flex items-center justify-between text-[11px] text-stone-400">
                      <span>{isFa ? art.authorFa : art.authorEn}</span>
                      <span className="text-[#c5a059] font-bold">{isFa ? 'مطالعه ←' : 'Read →'}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Quick Bottom Portal Links to Dynasties, Map, and AI Historian */}
          <div className="mt-6 pt-6 border-t border-stone-800/60 flex flex-wrap items-center justify-between gap-4">
            <div className="text-xs text-stone-400">
              {isFa ? 'کاوش در سایر بخش‌های تمدن ایران:' : 'Continue exploring Persian civilization:'}
            </div>
            
            <div className="flex flex-wrap items-center gap-2.5">
              {onExploreDynasties && (
                <button
                  onClick={onExploreDynasties}
                  className={`px-4 py-2 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
                    isLight ? 'bg-white border-stone-300 hover:border-[#c5a059]' : 'bg-[#14141d] border-stone-800 hover:border-[#c5a059] text-stone-200'
                  }`}
                >
                  {isFa ? '👑 سلسله‌ها و شاهان ایران' : 'Dynasties of Iran'}
                </button>
              )}
              {onExploreTimeline && (
                <button
                  onClick={onExploreTimeline}
                  className={`px-4 py-2 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
                    isLight ? 'bg-white border-stone-300 hover:border-[#c5a059]' : 'bg-[#14141d] border-stone-800 hover:border-[#c5a059] text-stone-200'
                  }`}
                >
                  {isFa ? '📜 گاه‌شمار تفصیلی وقایع' : 'Detailed Chronology'}
                </button>
              )}
              {onExploreMap && (
                <button
                  onClick={onExploreMap}
                  className={`px-4 py-2 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
                    isLight ? 'bg-white border-stone-300 hover:border-[#c5a059]' : 'bg-[#14141d] border-stone-800 hover:border-[#c5a059] text-stone-200'
                  }`}
                >
                  {isFa ? '🗺️ نقشه آثار و پایگاه‌ها' : 'Heritage Map'}
                </button>
              )}
              {onOpenAi && (
                <button
                  onClick={onOpenAi}
                  className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#c5a059] to-[#e9c176] text-black text-xs font-black shadow-md cursor-pointer hover:scale-105 transition-all"
                >
                  {isFa ? '✦ گفت‌وگو با هوش مصنوعی دانا' : '✦ Ask AI Historian Dana'}
                </button>
              )}
            </div>
          </div>

        </div>
      </div>

      {/* Article Detail Reader Modal */}
      <AnimatePresence>
        {activeArticle && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto"
            onClick={() => setActiveArticle(null)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className={`max-w-2xl w-full rounded-2xl p-6 sm:p-8 border shadow-2xl my-8 relative ${
                isLight ? 'bg-white border-[#c5a059]/40 text-black' : 'bg-[#121218] border-[#c5a059]/40 text-white'
              }`}
              dir={isFa ? 'rtl' : 'ltr'}
            >
              <div className="flex items-center justify-between border-b pb-4 mb-4 border-stone-700/50">
                <div>
                  <span className="text-xs font-bold text-[#c5a059]">
                    {isFa ? activeArticle.categoryFa : activeArticle.categoryEn} • {isFa ? activeArticle.readTimeFa : activeArticle.readTimeEn}
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold font-serif-title mt-1">
                    {isFa ? activeArticle.titleFa : activeArticle.titleEn}
                  </h3>
                </div>
                <button
                  onClick={() => setActiveArticle(null)}
                  className="p-2 rounded-lg border border-stone-700 hover:border-white transition-colors cursor-pointer text-stone-400 hover:text-white"
                >
                  ✕
                </button>
              </div>

              <div className="space-y-4 text-sm sm:text-base leading-relaxed text-stone-300 font-normal">
                {(isFa ? activeArticle.contentFa : activeArticle.contentEn).map((paragraph, pIdx) => (
                  <p key={pIdx} className="leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-stone-700/50 flex justify-end">
                <button
                  onClick={() => setActiveArticle(null)}
                  className="px-5 py-2 rounded-xl bg-[#c5a059] text-black font-bold text-xs cursor-pointer hover:bg-[#e9c176] transition-colors"
                >
                  {isFa ? 'بستن مقاله' : 'Close Article'}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
