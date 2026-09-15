import React, { useState, useEffect, useRef } from 'react';
import { Language, Theme } from '../types';
import { audioSynth } from '../utils/soundEffects';
import { Sparkles, Volume2, VolumeX, Zap, Compass, Eye, ChevronDown } from 'lucide-react';

interface ScrollOdysseyProps {
  language: Language;
  theme?: Theme;
}

interface Anomaly {
  id: number;
  titleEn: string;
  titleFa: string;
  eraEn: string;
  eraFa: string;
  bizarreEventEn: string;
  bizarreEventFa: string;
  visualEffect: 'ziggurat-light' | 'gate-fire' | 'anti-gravity' | 'astrolabe-vortex' | 'simurgh-ascent' | 'kaleidoscope' | 'modern-spire';
  borderColor: string;
}

export const ScrollOdyssey: React.FC<ScrollOdysseyProps> = ({ language, theme = 'dark' }) => {
  const isFa = language === 'fa';
  const isLight = theme === 'light';
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [activeStage, setActiveStage] = useState<number>(0);
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [isSoundOn, setIsSoundOn] = useState<boolean>(false);
  const [gravityReversed, setGravityReversed] = useState<boolean>(false);
  const [anomalyTriggeredCount, setAnomalyTriggeredCount] = useState<number>(0);

  const stages: Anomaly[] = [
    {
      id: 0,
      titleEn: 'Elamite Dawn: The Chogha Zanbil Ziggurat of Light',
      titleFa: 'طلوع عیلام: تابش نور کیهانی از زیگورات چغازنبیل',
      eraEn: '1250 BCE — Susa & Khuzestan Plateau',
      eraFa: '۱۲۵۰ پیش از میلاد — شوش و فلات خوزستان',
      bizarreEventEn: 'The concentric baked-brick terraces of Untash-Napirisha resonate with deep vibrational harmonics. Luminescent cuneiform inscriptions lift into the air as golden glyphs orbiting the sacred apex.',
      bizarreEventFa: 'طبقات آجری زیگورات چغازنبیل با ارتعاشات ماورایی به طنین درمی‌آیند؛ خطوط میخی عیلامی به صورت نشانه‌های نورانی زرین از بدنه آجرها جدا شده و مانند حلقه‌های کیهانی بر فراز معبد شناور می‌شوند.',
      visualEffect: 'ziggurat-light',
      borderColor: '#c5a059',
    },
    {
      id: 1,
      titleEn: 'Gate of All Nations: Awakening of the Lamassu',
      titleFa: 'دروازه ملل: بیداری چشمان گاو بالدار سنگی هخامنشی',
      eraEn: '518 BCE — Persepolis Threshold',
      eraFa: '۵۱۸ پیش از میلاد — آستانه تخت جمشید',
      bizarreEventEn: 'The colossal 2,500-year-old stone guardians open their glowing electric-gold eyes. Cuneiform inscriptions detach from the bedrock and float upward as burning embers in the twilight sky.',
      bizarreEventFa: 'تندیس‌های غول‌پیکر سنگ خارا چشمان درخشان لاجوردی و طلایی خود را می‌گشایند؛ کتیبه‌های میخی از صخره‌ها جدا شده و مانند اخگرهای زرین و شناور در هوا به رقص درمی‌آیند.',
      visualEffect: 'gate-fire',
      borderColor: '#c5a059',
    },
    {
      id: 2,
      titleEn: 'Surena’s Chronostasis: Anti-Gravity Desert',
      titleFa: 'نبرد حران و انجماد زمان: جاذبه معکوس شن‌های روان',
      eraEn: '53 BCE — Parthian Expanse',
      eraFa: '۵۳ پیش از میلاد — دشت‌های پارتی',
      bizarreEventEn: 'Time abruptly freezes in mid-air. Roman spears hover suspended in space, and millions of golden sand grains begin falling UPWARD toward a dimensional aurora where phantom horse archers gallop across the clouds.',
      bizarreEventFa: 'زمان ناگهان منجمد می‌شود! نیزه‌های معلق در هوا بی‌حرکت می‌مانند، شن‌های کویر برخلاف جاذبه به سمت آسمان اوج می‌گیرند و سواران شبح‌گون پارتی در میان شفق‌های زرین می‌تازند.',
      visualEffect: 'anti-gravity',
      borderColor: '#c85a32',
    },
    {
      id: 3,
      titleEn: 'Khayyam’s Cosmic Astrolabe Vortex',
      titleFa: 'گرداب کیهانی اسطرلاب و هندسه افلاک خیام',
      eraEn: '1079 CE — Celestial Observatory',
      eraFa: '۱۰۷۹ میلادی — رصدخانه اصفهان',
      bizarreEventEn: 'A gigantic brass astrolabe unfolds into a 4D gyroscopic sphere. The 12 Persian zodiac constellations lock into laser alignment, raining down glowing algebraic equations and solar time coordinates like cosmic code.',
      bizarreEventFa: 'اسطرلاب غول‌آسای برنجی به یک کره چهاربُعدی چرخنده تبدیل می‌شود؛ دوازده صورت فلکی زودیاک در یک مدار لیزری همگام شده و بارانی از معادلات جبری و دقایق سال خورشیدی به زمین می‌بارد.',
      visualEffect: 'astrolabe-vortex',
      borderColor: '#acc7ff',
    },
    {
      id: 4,
      titleEn: 'The Simurgh’s Volcanic Ascent over Damavand',
      titleFa: 'پرواز سیمرغ آتشین و شفق‌های اساطیری بر فراز دماوند',
      eraEn: 'Ancient Mythos & Ferdowsi Era',
      eraFa: 'عصر اساطیر شاهنامه و البرز',
      bizarreEventEn: 'Mount Damavand awakens, erupting not with ash, but with incandescent turquoise and crimson auroras. The mythical Simurgh emerges, showering celestial feathers that transform into living golden fireflies.',
      bizarreEventFa: 'قله سرفراز دماوند به غرش درمی‌آید؛ به جای گدازه، شفق‌های فیروزه‌ای و یاقوتی فوران می‌کنند و سیمرغ افسانه‌ای با بال‌هایی از پرتوهای رنگین برخاسته و پری از نور زرین به ارمغان می‌آورد.',
      visualEffect: 'simurgh-ascent',
      borderColor: '#e9c176',
    },
    {
      id: 5,
      titleEn: 'The Infinite Sacred Peacock Kaleidoscope',
      titleFa: 'کلیدوسکوپ بی‌نهایت و طاووس نور مسجد شیخ لطف‌الله',
      eraEn: '1619 CE — Safavid Light Geometry',
      eraFa: '۱۶۱۹ میلادی — هندسه نور صفوی',
      bizarreEventEn: 'The intricate arabesque ceramic dome dissolves into an infinite quantum fractal kaleidoscope. Sunlight rays morph into a peacock of pure geometry that sings harmonic resonance frequencies.',
      bizarreEventFa: 'کاشی‌کاری‌های معرق گنبد ناگهان به کلیدوسکوپ بی‌نهایت تبدیل شده و در ابعاد هندسی تکثیر می‌شوند؛ پرتوهای نور به شکل طاووسی از نور خالص درمی‌آیند که نوای هارمونیک کیهان را می‌نوازد.',
      visualEffect: 'kaleidoscope',
      borderColor: '#38bdf8',
    },
    {
      id: 6,
      titleEn: 'Modern Spire of Freedom: Cyber-Calligraphy Gateway',
      titleFa: 'دروازه نوین آزادی: تلاقی هندسه کهن و خطاطی نورانی',
      eraEn: '1971 CE — Contemporary Monument',
      eraFa: '۱۳۵۰ خورشیدی — شاهکار معماری پیوند سنت و مدرنیته',
      bizarreEventEn: 'The 25,000 pristine Isfahan white marble blocks illuminate with flowing holographic Nastaliq calligraphy, linking ancient Persepolis arches with future horizons.',
      bizarreEventFa: '۲۵ هزار قطعه سنگ مرمر سفید اصفهان با خطوط نستعلیق هولوگرافیک و زرین روشن می‌شوند و قوسی پیوسته از تبار هخامنشی و ساسانی تا افق‌های نوین آینده می‌گسترانند.',
      visualEffect: 'modern-spire',
      borderColor: '#ffd68a',
    },
  ];

  // Throttled RAF Scroll listener for butter smoothness
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          if (!containerRef.current) {
            ticking = false;
            return;
          }
          const rect = containerRef.current.getBoundingClientRect();
          const windowHeight = window.innerHeight;
          const totalHeight = containerRef.current.offsetHeight - windowHeight;
          const currentScroll = Math.max(0, -rect.top);
          const progress = Math.min(1, Math.max(0, currentScroll / (totalHeight || 1)));

          setScrollProgress(progress);
          const stageIndex = Math.min(stages.length - 1, Math.floor(progress * stages.length));
          
          if (stageIndex !== activeStage) {
            setActiveStage(stageIndex);
            if (isSoundOn) {
              audioSynth.playChime(300 + stageIndex * 100);
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeStage, stages.length, isSoundOn]);

  // Audio Toggle
  const toggleSound = () => {
    const next = !isSoundOn;
    setIsSoundOn(next);
    if (next) {
      audioSynth.playChime(520);
    }
  };

  // Instant Anomaly trigger
  const triggerInstantAnomaly = () => {
    setAnomalyTriggeredCount((prev) => prev + 1);
    setGravityReversed((prev) => !prev);
    if (isSoundOn) {
      audioSynth.playWarp();
    }
  };

  // Jump to stage
  const jumpToStage = (index: number) => {
    setActiveStage(index);
    if (isSoundOn) {
      audioSynth.playChime(350 + index * 90);
    }
  };

  // Particle Engine
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 800);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 500);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener('resize', handleResize);

    interface Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
      alpha: number;
      rot: number;
      vRot: number;
    }

    const particles: Particle[] = [];
    const count = 75;
    const colors = isLight
      ? ['#b8860b', '#c5a059', '#0284c7', '#c85a32', '#d4af37']
      : ['#e9c176', '#ffd68a', '#38bdf8', '#ff7a45', '#ffffff'];

    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 1.5,
        vy: (Math.random() - 0.5) * 1.5,
        size: Math.random() * 3 + 1.2,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: Math.random() * 0.7 + 0.3,
        rot: Math.random() * Math.PI * 2,
        vRot: (Math.random() - 0.5) * 0.04,
      });
    }

    let frame = 0;

    const render = () => {
      frame++;
      ctx.clearRect(0, 0, width, height);

      const stage = stages[activeStage];
      const gravFactor = gravityReversed ? -1 : 1;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.rot += p.vRot;

        if (stage.visualEffect === 'anti-gravity') {
          p.y -= 2 * gravFactor;
          p.x += Math.sin(frame * 0.05 + i) * 0.5;
        } else if (stage.visualEffect === 'astrolabe-vortex') {
          const cx = width / 2;
          const cy = height / 2;
          const dx = p.x - cx;
          const dy = p.y - cy;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const angle = Math.atan2(dy, dx) + 0.02;
          p.x = cx + Math.cos(angle) * dist;
          p.y = cy + Math.sin(angle) * dist;
        } else {
          p.x += p.vx;
          p.y += p.vy * gravFactor;
        }

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.save();
        ctx.globalAlpha = p.alpha;
        ctx.fillStyle = p.color;
        if (!isLight) {
          ctx.shadowColor = p.color;
          ctx.shadowBlur = 8;
        }
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
    };
  }, [activeStage, gravityReversed, isLight]);

  const currentStage = stages[activeStage];

  return (
    <div ref={containerRef} className="relative min-h-[480vh] w-full" id="scroll-odyssey-container">
      {/* Sticky Cinematic Viewport Canvas */}
      <div className="sticky top-20 h-[calc(100vh-5rem)] w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-between py-3 overflow-hidden">
        
        {/* Top Control HUD Bar */}
        <div
          className={`z-30 flex flex-wrap items-center justify-between gap-3 p-3.5 rounded-xl border backdrop-blur-md shadow-lg transition-colors ${
            isLight
              ? 'bg-white/95 border-[#c5a059]/40 text-[#152033]'
              : 'bg-[#04132b]/95 border-[#c5a059]/40 text-[#d7e3ff]'
          }`}
        >
          <div className="flex items-center gap-2.5">
            <div
              className={`p-2 rounded-lg border ${
                isLight ? 'bg-[#f8f6f0] border-[#c5a059]/40 text-[#875e18]' : 'bg-[#0c1b33] border-[#c5a059]/40 text-[#e9c176]'
              }`}
            >
              <Sparkles className="w-4 h-4 animate-spin" style={{ animationDuration: '8s' }} />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span
                  className={`text-xs font-bold uppercase tracking-wider ${
                    isLight ? 'text-[#875e18]' : 'text-[#e9c176]'
                  }`}
                >
                  {isFa ? 'سفر انیمیشنی در گذرگاه زمان' : 'Interactive Scroll Odyssey'}
                </span>
                <span className="animate-ping w-1.5 h-1.5 rounded-full bg-[#10b981]" />
              </div>
              <p className={`text-[11px] font-mono hidden sm:block ${isLight ? 'text-[#57534e]' : 'text-[#9a8f80]'}`}>
                {isFa ? 'برای ورق زدن ادوار تاریخ ایران اسکرول کنید' : 'Scroll down to travel across Iranian eras'}
              </p>
            </div>
            <span
              className={`hidden sm:inline-block px-2.5 py-0.5 rounded text-[11px] font-mono border ${
                isLight
                  ? 'bg-[#f4efe5] text-[#875e18] border-[#c5a059]/40'
                  : 'bg-[#1b3b6f]/60 text-[#acc7ff] border-[#acc7ff]/30'
              }`}
            >
              {isFa ? `فصل ${activeStage + 1} از ${stages.length}` : `Chapter ${activeStage + 1} of ${stages.length}`}
            </span>
          </div>

          {/* Interactive Action Controls */}
          <div className="flex items-center gap-2">
            {/* Audio Toggle */}
            <button
              onClick={toggleSound}
              id="audio-synth-toggle-btn"
              className={`px-3 py-1.5 rounded-md text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
                isSoundOn
                  ? 'bg-[#c5a059] text-white font-bold shadow-md'
                  : isLight
                  ? 'bg-[#f4efe5] text-[#57534e] border border-[#d8d0c4] hover:border-[#b8860b]'
                  : 'bg-[#112038] text-[#d1c5b4] border border-[#4e4639] hover:border-[#c5a059]'
              }`}
            >
              {isSoundOn ? <Volume2 className="w-3.5 h-3.5" /> : <VolumeX className="w-3.5 h-3.5" />}
              <span>{isSoundOn ? (isFa ? 'صدا روشن' : 'Audio ON') : (isFa ? 'فعال‌سازی نغمه' : 'Muted')}</span>
            </button>

            {/* Instant Anomaly Trigger Button */}
            <button
              onClick={triggerInstantAnomaly}
              id="instant-anomaly-btn"
              className="px-3.5 py-1.5 rounded-md bg-gradient-to-r from-[#c85a32] to-[#c5a059] text-white text-xs font-bold flex items-center gap-1.5 shadow-md hover:brightness-110 active:scale-95 transition-all cursor-pointer"
            >
              <Zap className="w-3.5 h-3.5 fill-current" />
              <span>{isFa ? 'رخداد عجیب آنی!' : 'Trigger Anomaly!'}</span>
            </button>
          </div>
        </div>

        {/* Central Stage Visual Box (Canvas + Animated Holographic Artifacts) */}
        <div
          className={`relative flex-1 my-3 rounded-2xl overflow-hidden border shadow-2xl flex items-center justify-center transition-colors ${
            isLight
              ? 'bg-[#faf7f0] border-[#c5a059]/40 shadow-[#c5a059]/15'
              : 'bg-[#04132b] border-[#c5a059]/40 shadow-[0_0_40px_rgba(4,19,43,0.9)]'
          }`}
        >
          {/* Particle Animation Canvas */}
          <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none z-0" />

          {/* Central Animated Visual depending on stage */}
          <div className="relative z-10 text-center max-w-2xl px-6 py-8 backdrop-blur-[2px]">
            
            {/* Stage Era Tag */}
            <div
              className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-bold mb-3 shadow-md ${
                isLight
                  ? 'bg-white/95 border-[#c5a059]/50 text-[#875e18]'
                  : 'bg-[#0c1b33]/90 border-[#c5a059]/40 text-[#e9c176]'
              }`}
            >
              <Compass className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: '10s' }} />
              <span>{isFa ? currentStage.eraFa : currentStage.eraEn}</span>
            </div>

            {/* Main Stage Headline */}
            <h2
              className={`font-serif-title text-2xl sm:text-4xl font-extrabold tracking-tight leading-tight mb-3 transition-colors ${
                isLight ? 'text-[#152033]' : 'text-[#d7e3ff]'
              }`}
            >
              {isFa ? currentStage.titleFa : currentStage.titleEn}
            </h2>

            {/* The Bizarre Event Narrative Box */}
            <div
              className={`p-4 sm:p-5 rounded-xl border text-left rtl:text-right shadow-inner relative ${
                isLight
                  ? 'bg-white/95 border-[#c5a059]/40 text-[#152033]'
                  : 'bg-[#0c1b33]/90 border-[#c5a059]/30 text-[#d7e3ff]'
              }`}
            >
              <div className="flex items-start gap-3">
                <div
                  className={`w-8 h-8 rounded-full border flex items-center justify-center shrink-0 ${
                    isLight
                      ? 'bg-[#f4efe5] border-[#c5a059] text-[#875e18]'
                      : 'bg-[#c5a059]/20 border-[#c5a059]/50 text-[#e9c176]'
                  }`}
                >
                  <Eye className="w-4 h-4 animate-pulse" />
                </div>
                <div>
                  <span
                    className={`text-[11px] font-bold uppercase tracking-wider block mb-1 ${
                      isLight ? 'text-[#875e18]' : 'text-[#e9c176]'
                    }`}
                  >
                    {isFa ? 'رخداد شگفت‌انگیز در این اسکرول:' : 'Anomaly Unfolding Upon Scroll:'}
                  </span>
                  <p className={`text-xs sm:text-sm leading-relaxed ${isLight ? 'text-[#334155]' : 'text-[#d7e3ff]'}`}>
                    {isFa ? currentStage.bizarreEventFa : currentStage.bizarreEventEn}
                  </p>
                </div>
              </div>
            </div>

            {/* Dynamic Stage Badge Indicator */}
            <div
              className={`mt-4 flex items-center justify-center gap-4 text-xs font-mono ${
                isLight ? 'text-[#57534e]' : 'text-[#acc7ff]'
              }`}
            >
              <span>
                {isFa ? 'ضریب جاذبه: ' : 'Gravity: '}
                {gravityReversed ? '-1.0G (معکوس)' : '1.0G (طبیعی)'}
              </span>
              <span>•</span>
              <span>
                {isFa ? 'ناهنجاری‌های فعال: ' : 'Anomalies: '}
                {anomalyTriggeredCount + 1}
              </span>
            </div>
          </div>

          {/* Scroll Down Prompt Indicator */}
          <div
            className={`absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center pointer-events-none text-xs font-medium animate-bounce ${
              isLight ? 'text-[#875e18]' : 'text-[#e9c176]'
            }`}
          >
            <span>{isFa ? 'برای رخداد بعدی به پایین اسکرول کنید' : 'Scroll Down for Next Anomaly'}</span>
            <ChevronDown className="w-4 h-4 mt-0.5" />
          </div>
        </div>

        {/* Bottom Stage Progress Timeline Scrub Bar */}
        <div
          className={`z-30 p-3 rounded-xl border shadow-lg backdrop-blur-md transition-colors ${
            isLight ? 'bg-white/95 border-[#e4ddcf]' : 'bg-[#04132b]/90 border-[#1c2a43]'
          }`}
        >
          <div className="flex items-center justify-between gap-1 sm:gap-2">
            {stages.map((stage, idx) => {
              const isActive = activeStage === idx;
              return (
                <button
                  key={stage.id}
                  onClick={() => jumpToStage(idx)}
                  className={`flex-1 py-2 px-1 sm:px-2 rounded-lg text-center transition-all cursor-pointer ${
                    isActive
                      ? isLight
                        ? 'bg-[#c5a059] text-white shadow-sm font-bold'
                        : 'bg-[#1b3256] border border-[#e9c176] text-[#e9c176] shadow-[0_0_12px_rgba(197,160,89,0.3)] font-bold'
                      : isLight
                      ? 'bg-[#f4efe5] text-[#57534e] hover:text-[#152033]'
                      : 'bg-[#0c1b33] text-[#9a8f80] hover:text-[#d7e3ff]'
                  }`}
                >
                  <div className="text-[10px] font-mono uppercase">
                    {isFa ? `گام ${idx + 1}` : `Stage ${idx + 1}`}
                  </div>
                  <div className="text-xs truncate hidden lg:block">
                    {isFa ? stage.titleFa.split(':')[0] : stage.titleEn.split(':')[0]}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Linear Progress Bar */}
          <div className={`w-full h-1.5 rounded-full overflow-hidden mt-2.5 ${isLight ? 'bg-[#e4ddcf]' : 'bg-[#112038]'}`}>
            <div
              className="h-full bg-gradient-to-r from-[#c85a32] via-[#c5a059] to-[#38bdf8] transition-all duration-300"
              style={{ width: `${Math.round(scrollProgress * 100)}%` }}
            />
          </div>
        </div>

      </div>
    </div>
  );
};
