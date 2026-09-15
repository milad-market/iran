import React, { useState, useEffect, useRef } from 'react';
import { Language } from '../types';
import { audioSynth } from '../utils/soundEffects';
import { Sparkles, Volume2, VolumeX, FastForward, RotateCcw, Zap, Compass, Eye, ShieldAlert, ChevronDown } from 'lucide-react';

interface ScrollOdysseyProps {
  language: Language;
}

interface Anomaly {
  id: number;
  titleEn: string;
  titleFa: string;
  eraEn: string;
  eraFa: string;
  bizarreEventEn: string;
  bizarreEventFa: string;
  visualEffect: 'gate-fire' | 'anti-gravity' | 'astrolabe-vortex' | 'simurgh-ascent' | 'kaleidoscope';
  bgGradient: string;
  borderColor: string;
}

export const ScrollOdyssey: React.FC<ScrollOdysseyProps> = ({ language }) => {
  const isFa = language === 'fa';
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [activeStage, setActiveStage] = useState<number>(0);
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [isSoundOn, setIsSoundOn] = useState<boolean>(false);
  const [gravityReversed, setGravityReversed] = useState<boolean>(false);
  const [anomalyTriggeredCount, setAnomalyTriggeredCount] = useState<number>(0);
  const [isWarping, setIsWarping] = useState<boolean>(false);

  const stages: Anomaly[] = [
    {
      id: 0,
      titleEn: 'Gate of All Nations: Awakening of the Lamassu',
      titleFa: 'دروازه ملل: بیداری چشمان گاو بالدار سنگی',
      eraEn: '518 BCE — Persepolis Threshold',
      eraFa: '۵۱۸ پیش از میلاد — آستانه تخت جمشید',
      bizarreEventEn: 'The colossal 2,500-year-old stone guardians open their glowing electric-gold eyes. Cuneiform inscriptions detach from the bedrock and float upward as burning embers in the twilight sky.',
      bizarreEventFa: 'تندیس‌های غول‌پیکر سنگ خارا چشمان درخشان لاجوردی و طلایی خود را می‌گشایند؛ کتیبه‌های میخی از صخره‌ها جدا شده و مانند اخگرهای زرین و شناور در هوا به رقص درمی‌آیند.',
      visualEffect: 'gate-fire',
      bgGradient: 'from-[#04132b] via-[#112038] to-[#1c2a43]',
      borderColor: '#c5a059',
    },
    {
      id: 1,
      titleEn: 'Surena’s Chronostasis: Anti-Gravity Desert',
      titleFa: 'نبرد حران و انجماد زمان: جاذبه معکوس شن‌های روان',
      eraEn: '53 BCE — Parthian Expanse',
      eraFa: '۵۳ پیش از میلاد — دشت‌های پارتی',
      bizarreEventEn: 'Time abruptly freezes in mid-air. Roman spears hover suspended in space, and millions of golden sand grains begin falling UPWARD toward a dimensional aurora where phantom horse archers gallop across the clouds.',
      bizarreEventFa: 'زمان ناگهان منجمد می‌شود! نیزه‌های معلق در هوا بی‌حرکت می‌مانند، شن‌های کویر برخلاف جاذبه به سمت آسمان اوج می‌گیرند و سواران شبح‌گون پارتی در میان شفق‌های زرین می‌تازند.',
      visualEffect: 'anti-gravity',
      bgGradient: 'from-[#1c1208] via-[#2d1b0c] to-[#0c1b33]',
      borderColor: '#c85a32',
    },
    {
      id: 2,
      titleEn: 'Khayyam’s Cosmic Astrolabe Vortex',
      titleFa: 'گرداب کیهانی اسطرلاب و هندسه افلاک خیام',
      eraEn: '1079 CE — Celestial Observatory',
      eraFa: '۱۰۷۹ میلادی — رصدخانه اصفهان',
      bizarreEventEn: 'A gigantic brass astrolabe unfolds into a 4D gyroscopic sphere. The 12 Persian zodiac constellations lock into laser alignment, raining down glowing algebraic equations and solar time coordinates like cosmic code.',
      bizarreEventFa: 'اسطرلاب غول‌آسای برنجی به یک کره چهاربُعدی چرخنده تبدیل می‌شود؛ دوازده صورت فلکی زودیاک در یک مدار لیزری همگام شده و بارانی از معادلات جبری و دقایق سال خورشیدی به زمین می‌بارد.',
      visualEffect: 'astrolabe-vortex',
      bgGradient: 'from-[#031d38] via-[#0b294f] to-[#04132b]',
      borderColor: '#acc7ff',
    },
    {
      id: 3,
      titleEn: 'The Simurgh’s Volcanic Ascent over Damavand',
      titleFa: 'پرواز سیمرغ آتشین و شفق‌های اساطیری بر فراز دماوند',
      eraEn: 'Ancient Mythos & Ferdowsi Era',
      eraFa: 'عصر اساطیر شاهنامه و البرز',
      bizarreEventEn: 'Mount Damavand awakens, erupting not with ash, but with incandescent turquoise and crimson auroras. The mythical Simurgh emerges, showering celestial feathers that transform into living golden fireflies.',
      bizarreEventFa: 'قله سرفراز دماوند به غرش درمی‌آید؛ به جای گدازه، شفق‌های فیروزه‌ای و یاقوتی فوران می‌کنند و سیمرغ افسانه‌ای با بال‌هایی از پرتوهای رنگین برخاسته و پری از نور زرین به ارمغان می‌آورد.',
      visualEffect: 'simurgh-ascent',
      bgGradient: 'from-[#1e072b] via-[#2f1042] to-[#04132b]',
      borderColor: '#e9c176',
    },
    {
      id: 4,
      titleEn: 'The Infinite Sacred Peacock Kaleidoscope',
      titleFa: 'کلیدوسکوپ بی‌نهایت و طاووس نور مسجد شیخ لطف‌الله',
      eraEn: '1619 CE — Safavid Light Geometry',
      eraFa: '۱۶۱۹ میلادی — هندسه نور صفوی',
      bizarreEventEn: 'The intricate arabesque ceramic dome dissolves into an infinite quantum fractal kaleidoscope. Sunlight rays morph into a peacock of pure geometry that sings harmonic resonance frequencies.',
      bizarreEventFa: 'کاشی‌کاری‌های معرق گنبد ناگهان به کلیدوسکوپ بی‌نهایت تبدیل شده و در ابعاد هندسی تکثیر می‌شوند؛ پرتوهای نور به شکل طاووسی از نور خالص درمی‌آیند که نوای هارمونیک کیهان را می‌نوازد.',
      visualEffect: 'kaleidoscope',
      bgGradient: 'from-[#042426] via-[#083b3d] to-[#04132b]',
      borderColor: '#38bdf8',
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
            audioSynth.playChime(300 + stageIndex * 150);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeStage, stages.length]);

  // Particle Canvas rendering bizarre visual effects
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 800);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 600);

    const onResize = () => {
      width = canvas.width = canvas.parentElement?.clientWidth || 800;
      height = canvas.height = canvas.parentElement?.clientHeight || 600;
    };
    window.addEventListener('resize', onResize);

    // Particle system
    interface Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
      alpha: number;
      symbol?: string;
    }

    const cuneiformGlyphs = ['𐎠', '𐎡', '𐎢', '𐎣', '𐎭', '𐎴', '𐎶', '𐎸', '𐎹', '𐎼', '𐏁'];
    const particles: Particle[] = [];
    const count = 75;

    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 1.5,
        vy: (Math.random() - 0.5) * 1.5,
        size: Math.random() * 3.5 + 1.5,
        color: ['#c5a059', '#e9c176', '#acc7ff', '#c85a32', '#38bdf8'][Math.floor(Math.random() * 5)],
        alpha: Math.random() * 0.8 + 0.2,
        symbol: cuneiformGlyphs[Math.floor(Math.random() * cuneiformGlyphs.length)],
      });
    }

    let frame = 0;
    const render = () => {
      frame++;
      ctx.clearRect(0, 0, width, height);

      // Background energy field
      const current = stages[activeStage];

      particles.forEach((p, idx) => {
        // Apply stage-specific physics!
        if (current.visualEffect === 'anti-gravity' || gravityReversed) {
          p.y -= Math.abs(p.vy) * 2.5 + 1; // Falling UPWARDS!
          if (p.y < 0) p.y = height;
        } else if (current.visualEffect === 'gate-fire') {
          p.y -= 1.2;
          p.x += Math.sin((frame + idx) * 0.05) * 1.2;
          if (p.y < 0) p.y = height;
        } else if (current.visualEffect === 'astrolabe-vortex') {
          // Orbital vortex motion around center
          const cx = width / 2;
          const cy = height / 2;
          const dx = p.x - cx;
          const dy = p.y - cy;
          const dist = Math.sqrt(dx * dx + dy * dy) || 1;
          const angle = Math.atan2(dy, dx) + 0.02;
          p.x = cx + Math.cos(angle) * (dist + Math.sin(frame * 0.02) * 10);
          p.y = cy + Math.sin(angle) * (dist + Math.sin(frame * 0.02) * 10);
        } else if (current.visualEffect === 'simurgh-ascent') {
          // Radiating wing waves
          p.y -= 2;
          p.x += Math.sin(frame * 0.08 + idx) * 2.5;
          if (p.y < 0) {
            p.y = height;
            p.x = width / 2 + (Math.random() - 0.5) * 80;
          }
        } else {
          // Kaleidoscope drift
          p.x += p.vx;
          p.y += p.vy;
          if (p.x < 0) p.x = width;
          if (p.x > width) p.x = 0;
          if (p.y < 0) p.y = height;
          if (p.y > height) p.y = 0;
        }

        // Draw particle or cuneiform glowing glyph
        ctx.save();
        ctx.globalAlpha = p.alpha;
        if (idx % 3 === 0 && p.symbol) {
          ctx.font = `${Math.floor(p.size * 5)}px serif`;
          ctx.fillStyle = p.color;
          ctx.shadowColor = p.color;
          ctx.shadowBlur = 10;
          ctx.fillText(p.symbol, p.x, p.y);
        } else {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fillStyle = p.color;
          ctx.shadowColor = p.color;
          ctx.shadowBlur = 12;
          ctx.fill();
        }
        ctx.restore();
      });

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', onResize);
    };
  }, [activeStage, gravityReversed, stages]);

  const triggerInstantAnomaly = () => {
    setIsWarping(true);
    audioSynth.playAnomalyWarp();
    setGravityReversed(!gravityReversed);
    setAnomalyTriggeredCount((prev) => prev + 1);
    setTimeout(() => setIsWarping(false), 1200);
  };

  const toggleSound = () => {
    const newState = audioSynth.toggleMute();
    setIsSoundOn(newState);
  };

  const jumpToStage = (index: number) => {
    setActiveStage(index);
    audioSynth.playChime(350 + index * 120);
    if (containerRef.current) {
      const targetY = (index / (stages.length - 1)) * (containerRef.current.offsetHeight - window.innerHeight);
      window.scrollTo({
        top: containerRef.current.offsetTop + targetY,
        behavior: 'smooth',
      });
    }
  };

  const currentStage = stages[activeStage];

  return (
    <div
      ref={containerRef}
      id="scroll-odyssey-container"
      className={`relative min-h-[380vh] transition-all duration-700 ${
        isWarping ? 'filter hue-rotate-180 invert' : ''
      }`}
    >
      {/* Sticky Cinematic Viewport Screen */}
      <div className="sticky top-20 h-[84vh] w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-between py-4">
        
        {/* Top Floating Telemetry & Anomaly HUD */}
        <div className="z-30 flex flex-wrap items-center justify-between gap-3 bg-[#04132b]/85 backdrop-blur-md p-3.5 rounded-xl border border-[#c5a059]/40 shadow-2xl">
          
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#e9c176] animate-pulse" />
              <span className="font-serif-title font-bold text-[#e9c176] text-sm sm:text-base">
                {isFa ? 'سفر حماسی ناهنجاری‌های تاریخ' : 'Chronicle of Historical Anomalies'}
              </span>
            </div>
            <span className="hidden sm:inline-block px-2 py-0.5 rounded text-[11px] bg-[#1b3b6f]/60 text-[#acc7ff] border border-[#acc7ff]/30 font-mono">
              {isFa ? `فصل ${activeStage + 1} از ۵` : `Chapter ${activeStage + 1} of 5`}
            </span>
          </div>

          {/* Interactive Action Controls */}
          <div className="flex items-center gap-2">
            {/* Audio Toggle */}
            <button
              onClick={toggleSound}
              id="audio-synth-toggle-btn"
              className={`px-3 py-1.5 rounded-md text-xs font-semibold flex items-center gap-1.5 transition-all ${
                isSoundOn
                  ? 'bg-[#c5a059] text-[#04132b] font-bold shadow-[0_0_12px_rgba(197,160,89,0.5)]'
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
              className="px-3.5 py-1.5 rounded-md bg-gradient-to-r from-[#c85a32] to-[#c5a059] text-[#04132b] text-xs font-bold flex items-center gap-1.5 shadow-[0_0_15px_rgba(200,90,50,0.4)] hover:brightness-110 active:scale-95 transition-all"
            >
              <Zap className="w-3.5 h-3.5 fill-current" />
              <span>{isFa ? 'رخداد عجیب آنی!' : 'Trigger Anomaly!'}</span>
            </button>
          </div>
        </div>

        {/* Central Stage Visual Box (Canvas + 3D Holographic Artifacts) */}
        <div className="relative flex-1 my-3 rounded-2xl overflow-hidden border border-[#c5a059]/40 bg-[#04132b] shadow-[0_0_40px_rgba(4,19,43,0.9)] flex items-center justify-center">
          
          {/* Particle Animation Canvas */}
          <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none z-0" />

          {/* Central Animated Visual depending on stage */}
          <div className="relative z-10 text-center max-w-2xl px-6 py-8 backdrop-blur-[2px]">
            
            {/* Stage Era Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0c1b33]/90 border border-[#c5a059]/40 text-xs text-[#e9c176] font-bold mb-3 shadow-md">
              <Compass className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: '10s' }} />
              <span>{isFa ? currentStage.eraFa : currentStage.eraEn}</span>
            </div>

            {/* Main Stage Headline */}
            <h2 className="font-serif-title text-2xl sm:text-4xl font-extrabold text-[#d7e3ff] tracking-tight leading-tight mb-3">
              {isFa ? currentStage.titleFa : currentStage.titleEn}
            </h2>

            {/* The Bizarre Event Narrative Box */}
            <div className="p-4 sm:p-5 rounded-xl bg-[#0c1b33]/90 border border-[#c5a059]/30 text-left rtl:text-right shadow-inner relative">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-[#c5a059]/20 border border-[#c5a059]/50 flex items-center justify-center shrink-0 text-[#e9c176]">
                  <Eye className="w-4 h-4 animate-pulse" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#e9c176] block mb-1">
                    {isFa ? 'رخداد شگفت‌انگیز در این اسکرول:' : 'Anomaly Unfolding Upon Scroll:'}
                  </span>
                  <p className="text-xs sm:text-sm text-[#d7e3ff] leading-relaxed">
                    {isFa ? currentStage.bizarreEventFa : currentStage.bizarreEventEn}
                  </p>
                </div>
              </div>
            </div>

            {/* Dynamic Stage Badge Indicator */}
            <div className="mt-4 flex items-center justify-center gap-4 text-xs font-mono text-[#acc7ff]">
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
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center pointer-events-none text-[#e9c176] text-xs font-medium animate-bounce">
            <span>{isFa ? 'برای رخداد بعدی به پایین اسکرول کنید' : 'Scroll Down for Next Anomaly'}</span>
            <ChevronDown className="w-4 h-4 mt-0.5" />
          </div>
        </div>

        {/* Bottom Stage Progress Timeline Scrub Bar */}
        <div className="z-30 bg-[#04132b]/90 backdrop-blur-md p-3 rounded-xl border border-[#1c2a43] shadow-lg">
          <div className="flex items-center justify-between gap-2">
            {stages.map((stage, idx) => {
              const isActive = activeStage === idx;
              return (
                <button
                  key={stage.id}
                  onClick={() => jumpToStage(idx)}
                  className={`flex-1 py-2 px-2 rounded-lg text-center transition-all ${
                    isActive
                      ? 'bg-[#1b3256] border border-[#e9c176] text-[#e9c176] shadow-[0_0_12px_rgba(197,160,89,0.3)] font-bold'
                      : 'bg-[#0c1b33] text-[#9a8f80] hover:text-[#d7e3ff] border border-transparent'
                  }`}
                >
                  <div className="text-[10px] font-mono uppercase">
                    {isFa ? `گام ${idx + 1}` : `Stage ${idx + 1}`}
                  </div>
                  <div className="text-xs truncate hidden md:block">
                    {isFa ? stage.titleFa.split(':')[0] : stage.titleEn.split(':')[0]}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Linear Progress Bar */}
          <div className="w-full bg-[#112038] h-1.5 rounded-full overflow-hidden mt-2.5">
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
