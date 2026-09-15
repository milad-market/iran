import React, { useState, useEffect, useRef } from 'react';
import { Language, Theme } from '../types';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Volume2, VolumeX, X, ArrowLeft, ArrowRight, ShieldCheck, HeartHandshake, Eye, BookOpen } from 'lucide-react';

interface CyrusCharterModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
  theme: Theme;
}

export const CyrusCharterModal: React.FC<CyrusCharterModalProps> = ({
  isOpen,
  onClose,
  language,
  theme,
}) => {
  const isFa = language === 'fa';
  const isLight = theme === 'light';

  const [mousePos, setMousePos] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [activeTab, setActiveTab] = useState<'overview' | 'full_text' | 'impact'>('overview');
  const [audioPlaying, setAudioPlaying] = useState<boolean>(false);
  const audioCtxRef = useRef<AudioContext | null>(null);

  // Track mouse for 3D cylinder tilt & background parallax
  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const y = ((e.clientY - rect.top) / rect.height) * 2 - 1;
    setMousePos({ x, y });
  };

  // Subtle web audio drone chime generator
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
      const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
      const ctx = new AudioContextClass();
      audioCtxRef.current = ctx;

      // Ambient drone oscillators (deep resonant frequency 108Hz & 216Hz for sacred Persian ambiance)
      const osc1 = ctx.createOscillator();
      const osc2 = ctx.createOscillator();
      const gainNode = ctx.createGain();

      osc1.type = 'sine';
      osc1.frequency.setValueAtTime(108, ctx.currentTime);

      osc2.type = 'triangle';
      osc2.frequency.setValueAtTime(162, ctx.currentTime);

      gainNode.gain.setValueAtTime(0.001, ctx.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.04, ctx.currentTime + 2);

      osc1.connect(gainNode);
      osc2.connect(gainNode);
      gainNode.connect(ctx.destination);

      osc1.start();
      osc2.start();

      setAudioPlaying(true);
    } catch (e) {
      console.warn('Web Audio not supported or blocked:', e);
    }
  };

  useEffect(() => {
    return () => {
      if (audioCtxRef.current) {
        audioCtxRef.current.close();
      }
    };
  }, []);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 overflow-y-auto backdrop-blur-xl bg-black/80"
        onMouseMove={handleMouseMove}
      >
        {/* Deep background animated cuneiform symbols floating BEHIND everything */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30 select-none">
          <div
            className="absolute -top-10 -left-10 text-[180px] font-mono text-[#c5a059]/20 transition-transform duration-300 ease-out"
            style={{ transform: `translate(${mousePos.x * -25}px, ${mousePos.y * -25}px)` }}
          >
            𒀭 𒈗 𒈨
          </div>
          <div
            className="absolute bottom-10 right-10 text-[160px] font-mono text-[#c5a059]/15 transition-transform duration-500 ease-out"
            style={{ transform: `translate(${mousePos.x * 35}px, ${mousePos.y * 35}px)` }}
          >
            𒃲 𒆠 𒂗
          </div>
          <div
            className="absolute top-1/3 right-1/4 text-[120px] font-mono text-[#c5a059]/10 transition-transform duration-700 ease-out"
            style={{ transform: `translate(${mousePos.x * -40}px, ${mousePos.y * 30}px)` }}
          >
            𒂍 𒆳 𒀭
          </div>

          {/* Flowing golden dust and stars */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(197,160,89,0.12)_0%,transparent_70%)]" />
        </div>

        {/* Modal Container */}
        <motion.div
          initial={{ scale: 0.95, y: 20 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.95, y: 20 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className={`relative w-full max-w-5xl rounded-3xl border shadow-2xl overflow-hidden my-auto max-h-[94vh] flex flex-col ${
            isLight
              ? 'bg-white/95 border-[#c5a059]/50 shadow-[#000000]/20 text-[#09090b]'
              : 'bg-[#09090d]/95 border-[#c5a059]/40 shadow-[0_0_80px_rgba(0,0,0,0.9)] text-[#f4f4f6]'
          }`}
        >
          {/* Top Header Bar */}
          <div
            className={`px-6 py-4 flex items-center justify-between border-b relative z-20 ${
              isLight ? 'border-[#e4ddcf] bg-[#faf9f5]' : 'border-[#262632] bg-[#0c0c12]'
            }`}
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-[#c5a059] to-[#ecd399] flex items-center justify-center text-black shadow-md">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#c5a059]">
                  {isFa ? 'نخستین منشور حقوق بشر گیتی (۵۳۹ پیش از میلاد)' : 'World’s First Declaration of Human Rights (539 BCE)'}
                </span>
                <h2 className="text-base sm:text-lg font-bold font-serif-title">
                  {isFa ? 'استوانه زرین و جاودان کوروش بزرگ' : 'The Cyrus Cylinder of Babylon'}
                </h2>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={toggleSound}
                title={audioPlaying ? 'قطع نوای باستانی' : 'پخش نوای باستانی'}
                className={`p-2 rounded-xl border transition-all cursor-pointer ${
                  audioPlaying
                    ? 'bg-[#c5a059] text-black border-[#c5a059]'
                    : isLight
                    ? 'bg-white border-[#e4ddcf] text-stone-600 hover:text-black'
                    : 'bg-[#14141d] border-[#2a2a38] text-stone-300 hover:text-white'
                }`}
              >
                {audioPlaying ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
              </button>

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
          </div>

          {/* Central Showcase Area */}
          <div className="relative p-6 sm:p-8 md:p-10 overflow-y-auto flex-1 flex flex-col items-center">
            
            {/* FLOATING TEXT LAYER BEHIND THE CYLINDER */}
            <div
              className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0 px-4 overflow-hidden"
              style={{
                transform: `translate(${mousePos.x * 20}px, ${mousePos.y * 15}px)`,
                transition: 'transform 0.15s ease-out',
              }}
            >
              <div className="max-w-3xl text-center space-y-4 opacity-25">
                <p className="font-serif-title text-xl sm:text-2xl md:text-3xl text-[#c5a059] leading-relaxed font-bold">
                  «منم کوروش، شاه جهان، شاه بزرگ، شاه نیرومند، شاه بابل، شاه سومر و اکد، شاه چهارگوشه گیتی...»
                </p>
                <p className="text-xs sm:text-sm font-mono tracking-widest text-[#c5a059]">
                  KURUSH SHAR KISHSHATI SHAR BABILI SHAR MAT SHUMERI U AKKADI
                </p>
                <p className="text-xs sm:text-sm italic font-serif opacity-80">
                  "I am Cyrus, King of the World, Great King, Mighty King, King of Babylon, King of Sumer and Akkad..."
                </p>
              </div>
            </div>

            {/* INTERACTIVE 3D CYLINDER CENTERPIECE (Foreground) */}
            <div className="relative z-10 my-4 py-4 flex flex-col items-center">
              <motion.div
                className="relative cursor-grab active:cursor-grabbing group"
                style={{
                  transform: `perspective(1000px) rotateY(${mousePos.x * 18}deg) rotateX(${-mousePos.y * 12}deg)`,
                  transition: 'transform 0.1s ease-out',
                }}
                whileHover={{ scale: 1.03 }}
              >
                {/* Cylinder Glow Backlight */}
                <div className="absolute -inset-6 bg-gradient-to-r from-[#c5a059]/30 via-[#ffd68a]/40 to-[#c5a059]/30 rounded-full blur-2xl opacity-75 group-hover:opacity-100 transition-opacity" />

                {/* SVG/Canvas Rendered Realistic Cyrus Cylinder */}
                <svg
                  viewBox="0 0 540 240"
                  className="w-72 sm:w-96 md:w-[460px] h-auto drop-shadow-[0_20px_35px_rgba(0,0,0,0.8)] relative z-10"
                >
                  <defs>
                    <linearGradient id="cylinderBody" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#cda56b" />
                      <stop offset="25%" stopColor="#ecd399" />
                      <stop offset="50%" stopColor="#aa7c40" />
                      <stop offset="75%" stopColor="#694b23" />
                      <stop offset="100%" stopColor="#3d2810" />
                    </linearGradient>
                    <linearGradient id="cylinderCap" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#8d6430" />
                      <stop offset="50%" stopColor="#cda56b" />
                      <stop offset="100%" stopColor="#694b23" />
                    </linearGradient>
                    <radialGradient id="cylinderHighlight" cx="40%" cy="30%" r="60%">
                      <stop offset="0%" stopColor="#fff3d6" stopOpacity="0.8" />
                      <stop offset="50%" stopColor="#c5a059" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="#4a3114" stopOpacity="0" />
                    </radialGradient>
                  </defs>

                  {/* Barrel Shaped Cylinder Body */}
                  <path
                    d="M 60 50 Q 270 25 480 50 L 480 190 Q 270 215 60 190 Z"
                    fill="url(#cylinderBody)"
                    stroke="#d4af37"
                    strokeWidth="1.5"
                  />

                  {/* Left Cap */}
                  <ellipse cx="60" cy="120" rx="35" ry="70" fill="url(#cylinderCap)" stroke="#b8860b" strokeWidth="1" />
                  {/* Right Cap highlight */}
                  <ellipse cx="480" cy="120" rx="20" ry="70" fill="#755022" stroke="#b8860b" strokeWidth="1" opacity="0.6" />

                  {/* Highlight sheen */}
                  <path
                    d="M 60 50 Q 270 25 480 50 L 480 90 Q 270 65 60 90 Z"
                    fill="url(#cylinderHighlight)"
                    opacity="0.6"
                  />

                  {/* Concentric Cuneiform Inscription Grooves (45 horizontal lines) */}
                  {[...Array(18)].map((_, i) => {
                    const y = 65 + i * 7;
                    return (
                      <g key={i} opacity={0.65}>
                        <path
                          d={`M 90 ${y} Q 270 ${y - 12} 450 ${y}`}
                          stroke="#2b1a09"
                          strokeWidth="1.2"
                          strokeDasharray="4 2 8 3 3 1"
                          fill="none"
                        />
                        <path
                          d={`M 90 ${y + 0.8} Q 270 ${y - 11.2} 450 ${y + 0.8}`}
                          stroke="#ffe7aa"
                          strokeWidth="0.6"
                          strokeDasharray="4 2 8 3 3 1"
                          fill="none"
                          opacity="0.7"
                        />
                      </g>
                    );
                  })}

                  {/* Decorative cuneiform wedges glyphs */}
                  <text x="120" y="100" fill="#2b1a09" fontSize="9" fontFamily="monospace" opacity="0.8">
                    𒀭 𒈗 𒃲 𒆍𒀭𒊏𒆠 𒈗 𒆳 𒀸𒋩
                  </text>
                  <text x="140" y="125" fill="#2b1a09" fontSize="9" fontFamily="monospace" opacity="0.8">
                    𒂍 𒆳 𒊏 𒀭 𒀫𒌓 𒃲 𒀭 𒂗 𒆤
                  </text>
                  <text x="110" y="150" fill="#2b1a09" fontSize="9" fontFamily="monospace" opacity="0.8">
                    𒈨 𒋼 𒂗 𒍣 𒅎 𒋾 𒅀 𒊏 𒄠 𒋙
                  </text>
                </svg>

                {/* Subtitle tag */}
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-black/70 backdrop-blur-md border border-[#c5a059]/40 text-[11px] text-[#f4d89e] whitespace-nowrap shadow-lg flex items-center gap-1.5 font-sans">
                  <Eye className="w-3.5 h-3.5 text-[#c5a059]" />
                  <span>{isFa ? 'برای چرخش سه‌بعدی ماوس را حرکت دهید' : 'Move cursor to rotate 3D cylinder'}</span>
                </div>
              </motion.div>
            </div>

            {/* Declarations & Universal Principles Cards */}
            <div className="w-full max-w-4xl relative z-10 mt-6 grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4">
              <div
                className={`p-4 sm:p-5 rounded-2xl border transition-all ${
                  isLight
                    ? 'bg-[#faf9f5] border-[#e2d8c3] text-[#09090b]'
                    : 'bg-[#121218] border-[#2a2a38] text-[#f4f4f6]'
                }`}
              >
                <div className="w-8 h-8 rounded-xl bg-[#c5a059]/20 text-[#c5a059] flex items-center justify-center mb-3">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <h3 className="font-bold text-sm mb-1.5 text-[#c5a059]">
                  {isFa ? '۱. لغو برده‌داری و منع ستم' : '1. Abolition of Slavery'}
                </h3>
                <p className="text-xs leading-relaxed opacity-85">
                  {isFa
                    ? 'کوروش پس از ورود به بابل، بیگاری و کار اجباری را ممنوع کرد و به همه اسیران و بردگان حق رهایی و زندگی در کرامت بخشید.'
                    : 'Abolished forced labor and chattel slavery, ensuring equal human dignity and peaceful coexistence.'}
                </p>
              </div>

              <div
                className={`p-4 sm:p-5 rounded-2xl border transition-all ${
                  isLight
                    ? 'bg-[#faf9f5] border-[#e2d8c3] text-[#09090b]'
                    : 'bg-[#121218] border-[#2a2a38] text-[#f4f4f6]'
                }`}
              >
                <div className="w-8 h-8 rounded-xl bg-[#c5a059]/20 text-[#c5a059] flex items-center justify-center mb-3">
                  <HeartHandshake className="w-4 h-4" />
                </div>
                <h3 className="font-bold text-sm mb-1.5 text-[#c5a059]">
                  {isFa ? '۲. آزادی مذهب، آیین و زبان' : '2. Freedom of Faith & Culture'}
                </h3>
                <p className="text-xs leading-relaxed opacity-85">
                  {isFa
                    ? 'هیچ قومی وادار به ترک باورها و رسوم نیاکانی خود نشد؛ او دستور مرمت معابد همه ملل را بدون هیچ تبعیضی صادر نمود.'
                    : 'Recognized freedom of religious worship, speech, and restored destroyed sanctuaries across Mesopotamia.'}
                </p>
              </div>

              <div
                className={`p-4 sm:p-5 rounded-2xl border transition-all ${
                  isLight
                    ? 'bg-[#faf9f5] border-[#e2d8c3] text-[#09090b]'
                    : 'bg-[#121218] border-[#2a2a38] text-[#f4f4f6]'
                }`}
              >
                <div className="w-8 h-8 rounded-xl bg-[#c5a059]/20 text-[#c5a059] flex items-center justify-center mb-3">
                  <BookOpen className="w-4 h-4" />
                </div>
                <h3 className="font-bold text-sm mb-1.5 text-[#c5a059]">
                  {isFa ? '۳. بازگشت تبعیدیان و حقوق اموال' : '3. Restitution of Exiles & Land'}
                </h3>
                <p className="text-xs leading-relaxed opacity-85">
                  {isFa
                    ? 'دستور بازگشت یهودیان و ملل تبعیدشده به سرزمین‌های پدری و بازسازی معبد اورشلیم با تامین مالی خزانه سلطنتی ایران.'
                    : 'Facilitated the return of exiled communities to their ancestral lands and funded sacred reconstructions.'}
                </p>
              </div>
            </div>

            {/* Primary Quote from Line 20-36 */}
            <div
              className={`w-full max-w-4xl mt-5 p-5 rounded-2xl border text-center relative z-10 ${
                isLight ? 'bg-white border-[#c5a059]/30' : 'bg-[#101017] border-[#c5a059]/30'
              }`}
            >
              <p className="text-sm sm:text-base font-serif italic text-[#c5a059] leading-relaxed">
                {isFa
                  ? '«آنگاه که با صلح و دوستی به بابل درآمدم، گام‌هایم لرزه‌ای بر اندام کسی نینداخت. من نگذاشتم سپاهیانم خاکی را ویران سازند یا مردمی را به هراس افکنند. من خانه‌های ویران را آباد کردم و یوغ اسارت را از دوش ستمدیدگان برداشتم.»'
                  : '"When I entered Babylon in peaceful manner, I established my sovereign seat in the palace amidst jubilation and rejoicing. My numerous troops strolled about Babylon in peace; I did not allow anyone to terrorize any people."'}
              </p>
              <span className="block mt-2 text-xs opacity-75 font-mono">
                {isFa ? '— گزیده‌ای از سطور ۲۴ تا ۳۲ منشور حقوق بشر کوروش بزرگ (موزه بریتانیا، تالار ۵۲)' : '— Lines 24–32, The Cyrus Cylinder (British Museum, Room 52)'}
              </span>
            </div>
          </div>

          {/* Bottom Action Footer */}
          <div
            className={`px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-3 border-t relative z-20 ${
              isLight ? 'border-[#e4ddcf] bg-[#faf9f5]' : 'border-[#262632] bg-[#0c0c12]'
            }`}
          >
            <div className="text-xs opacity-75 text-center sm:text-left rtl:sm:text-right">
              {isFa
                ? 'کپی رسمی منشور کوروش به عنوان نماد حقوق بشر در مقر سازمان ملل متحد در نیویورک قرار دارد.'
                : 'An official replica of the Cyrus Cylinder is held at the United Nations Headquarters in New York.'}
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={onClose}
                className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#c5a059] to-[#dfbb6c] text-black font-bold text-sm shadow-[0_0_20px_rgba(197,160,89,0.4)] hover:brightness-110 active:scale-95 transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>{isFa ? 'ورود به کاوشگری و تالار تاریخ ایران' : 'Enter Imperial Heritage Archives'}</span>
                {isFa ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
