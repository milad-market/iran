import React, { useState, useEffect, useRef } from 'react';
import { Language, Theme } from '../types';
import { Play, Pause, SkipForward, SkipBack, Volume2, VolumeX, Maximize2, Sparkles, Film, Compass, ChevronRight, ChevronLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface CinematicVideoTheaterProps {
  language: Language;
  theme: Theme;
}

interface Scene {
  id: string;
  eraFa: string;
  eraEn: string;
  titleFa: string;
  titleEn: string;
  yearFa: string;
  yearEn: string;
  narrationFa: string;
  narrationEn: string;
  visualTheme: 'gold' | 'lapis' | 'turquoise' | 'amber' | 'bronze' | 'emerald';
  quoteFa: string;
  quoteEn: string;
  particles: 'dust' | 'stars' | 'sparks' | 'geometry';
}

const SCENES: Scene[] = [
  {
    id: 'cyrus-charter',
    eraFa: 'شاهنشاهی هخامنشی',
    eraEn: 'Achaemenid Empire',
    titleFa: 'صدور نخستین منشور حقوق بشر گیتی در بابل',
    titleEn: 'Proclamation of the First Human Rights Charter in Babylon',
    yearFa: '۵۳۹ پیش از میلاد',
    yearEn: '539 BCE',
    narrationFa: 'کوروش بزرگ بدون خونریزی وارد کهن‌شهر بابل شد؛ او فرمان داد که برده‌داری ملغی شود، معابد همه ملل بازسازی گردد و صلح و دادگری بر جهان حاکم شود. متنی که به خط میخی بر استوانه گلی حک شد، چراغ راه بشریت گشت.',
    narrationEn: 'Cyrus the Great peacefully entered Babylon, declaring the abolition of chattel slavery, the restoration of religious sanctuaries for all faiths, and universal human rights engraved in clay cuneiform.',
    visualTheme: 'gold',
    quoteFa: '«من برای همه مردمان جهان، صلح و آرامش به ارمغان آوردم...»',
    quoteEn: '"I brought peace and tranquility to all peoples of the earth..."',
    particles: 'dust',
  },
  {
    id: 'persepolis-stone',
    eraFa: 'عصر شکوه هخامنشی',
    eraEn: 'Achaemenid Zenith',
    titleFa: 'بنا نهادن تخت جمشید (پارسه)؛ پایتخت آیینی ملل',
    titleEn: 'Construction of Persepolis: The Ceremonial Heart of Nations',
    yearFa: '۵۱۸ پیش از میلاد',
    yearEn: '518 BCE',
    narrationFa: 'داریوش بزرگ بر فراز سکوی صخره‌ای مرودشت، تالار ستون‌دار آپادانا و پلکان ملل را پی افکند. نمایندگان ۲۸ ملت جهان با لباس‌های محلی و هدایای صلح‌آمیز برای جشن نوروز گرد هم می‌آمدند؛ بدون هرگونه تصویر از اسارت یا شکنجه.',
    narrationEn: 'Darius the Great founded the monumental terrace of Persepolis. Envoys from 28 satrapies congregated in dignity for Nowruz, marked by an absence of subjugation or cruelty in imperial bas-reliefs.',
    visualTheme: 'amber',
    quoteFa: '«خداوند این کشور را از دشمن، از خشکسالی و از دروغ محفوظ دارد.» — داریوش بزرگ',
    quoteEn: '"May Ahura Mazda protect this land from foe, from drought, from deceit." — Darius the Great',
    particles: 'sparks',
  },
  {
    id: 'gundeshapur-sasanian',
    eraFa: 'شاهنشاهی ساسانی',
    eraEn: 'Sasanian Empire',
    titleFa: 'طاق کسری و دانشگاه جندی‌شاپور؛ قطب حکمت و طب جهان',
    titleEn: 'Taq Kasra & Gundeshapur: Global Epicenter of Medicine & Wisdom',
    yearFa: 'سده ششم میلادی',
    yearEn: '6th Century CE',
    narrationFa: 'در عصر انوشیروان دادگر، بلندترین طاق خشتی گیتی در مدائن برپا بود و دانش‌پژوهان از روم، یونان و هند در جندی‌شاپور خوزستان به مناظره و ترجمه علوم پرداختند. کتب پزشکی و فلسفی جهان به پهلوی ساسانی ترجمه گردید.',
    narrationEn: 'Under Khosrow I Anushirvan, the grand unreinforced arch of Ctesiphon soared, while Gundeshapur served as the premier international university and teaching hospital of antiquity.',
    visualTheme: 'bronze',
    quoteFa: '«دانش بالاتر از زر است و دادگری مایه پایداری جهان.»',
    quoteEn: '"Wisdom transcends gold, and justice sustains the firmament of the world."',
    particles: 'stars',
  },
  {
    id: 'ferdowsi-renaissance',
    eraFa: 'عصر زرین و رنسانس ایرانی',
    eraEn: 'Persian Renaissance',
    titleFa: 'سرایش شاهنامه فردوسی؛ جاودانگی زبان پارسی و هویت ملی',
    titleEn: 'Ferdowsi Composes the Shahnameh: Immortality of the Persian Soul',
    yearFa: 'سده چهارم و پنجم هجری (۱۰۰۰ میلادی)',
    yearEn: 'c. 1000 CE',
    narrationFa: 'پس از قرن‌ها طوفان تاریخی، حکیم ابوالقاسم فردوسی توسی در دربار سامانیان دست به کار بزرگ خود شد: سی سال رنج کشید و شاهنامه، کاخ بلند نظم زبان پارسی را پی افکند تا حافظه اسطوره‌ای و تاریخی ایران هرگز فراموش نگردد.',
    narrationEn: 'Abul-Qasim Ferdowsi labored for thirty years to craft the epic Shahnameh, building an invulnerable poetic palace that forever preserved Persian identity, myth, and language.',
    visualTheme: 'turquoise',
    quoteFa: '«پی افکندم از نظم کاخی بلند / که از باد و باران نیابد گزند» — فردوسی',
    quoteEn: '"I have founded an edifice of verse so high / That wind and rain shall never cause it to die."',
    particles: 'geometry',
  },
  {
    id: 'safavid-isfahan',
    eraFa: 'رنسانس صفوی',
    eraEn: 'Safavid Golden Age',
    titleFa: 'مکتب اصفهان؛ میدان نقش جهان و پیوند هنر قدسی و شهری',
    titleEn: 'The Isfahan Renaissance: Naqsh-e Jahan & Celestial Geometry',
    yearFa: 'سده هفدهم میلادی (عهد شاه عباس کبیر)',
    yearEn: '17th Century CE',
    narrationFa: 'اصفهان پایتخت نصف جهان شد. میدان نقش جهان با کاخ عالی‌قاپو، مسجد شیخ لطف‌الله و بازار قیصریه نماد هماهنگی سیاست، معنویت، بازرگانی و هنر بود. کاشی‌های هفت‌رنگ فیروزه‌ای آسمان را به زمین پیوند می‌داد.',
    narrationEn: 'Isfahan emerged as "Half the World." Naqsh-e Jahan Square harmonized royal governance, mystic spirituality, and international commerce through soaring turquoise domes and gilded squinches.',
    visualTheme: 'lapis',
    quoteFa: '«اصفهان، نگین هنر و شکوه تمدن خاورزمین.»',
    quoteEn: '"Isfahan: The crown jewel of Eastern art, architecture, and civic majesty."',
    particles: 'geometry',
  },
  {
    id: 'modern-dawn',
    eraFa: 'دوران معاصر و مشروطه',
    eraEn: 'Modernity & Constitutionalism',
    titleFa: 'انقلاب مشروطیت، دارالفنون امیرکبیر و زایش ایران مدرن',
    titleEn: 'The Constitutional Revolution & The Rise of Modern Iran',
    yearFa: '۱۲۸۵ خورشیدی (۱۹۰۶ میلادی)',
    yearEn: '1906 CE',
    narrationFa: 'از تاسیس نخستین دانشگاه نوین (دارالفنون) توسط امیرکبیر تا خیزش مشروطه‌خواهان به رهبری ستارخان و باقرخان؛ مردم ایران خواهان قانون، مجلس و آزادی شدند تا سنت دادگری کهن را با مفاهیم دنیای نوین پیوند زنند.',
    narrationEn: 'From Amir Kabir’s pioneering polytechnic Dar al-Funun to the heroic Constitutional Revolution of 1906, Iranians spearheaded the first parliamentary democracy in West Asia.',
    visualTheme: 'emerald',
    quoteFa: '«قانون، ضامن استقلال و عدالت برای همگان است.»',
    quoteEn: '"The Rule of Law is the safeguard of freedom and universal justice."',
    particles: 'sparks',
  },
];

export const CinematicVideoTheater: React.FC<CinematicVideoTheaterProps> = ({
  language,
  theme,
}) => {
  const isFa = language === 'fa';
  const isLight = theme === 'light';

  const [currentSceneIdx, setCurrentSceneIdx] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [soundEnabled, setSoundEnabled] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);

  const scene = SCENES[currentSceneIdx];
  const audioCtxRef = useRef<AudioContext | null>(null);

  // Auto progression every 12 seconds when playing
  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          setCurrentSceneIdx((idx) => (idx + 1) % SCENES.length);
          return 0;
        }
        return p + 1.25; // 8 seconds per scene
      });
    }, 100);

    return () => clearInterval(interval);
  }, [isPlaying, currentSceneIdx]);

  // Handle ambient tone
  const toggleSound = () => {
    if (soundEnabled) {
      if (audioCtxRef.current) {
        audioCtxRef.current.close();
        audioCtxRef.current = null;
      }
      setSoundEnabled(false);
      return;
    }

    try {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      const ctx = new AudioCtx();
      audioCtxRef.current = ctx;

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(144, ctx.currentTime);

      gain.gain.setValueAtTime(0.001, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.03, ctx.currentTime + 1.5);

      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();

      setSoundEnabled(true);
    } catch (e) {
      console.warn(e);
    }
  };

  useEffect(() => {
    return () => {
      if (audioCtxRef.current) {
        audioCtxRef.current.close();
      }
    };
  }, []);

  const nextScene = () => {
    setCurrentSceneIdx((idx) => (idx + 1) % SCENES.length);
    setProgress(0);
  };

  const prevScene = () => {
    setCurrentSceneIdx((idx) => (idx - 1 + SCENES.length) % SCENES.length);
    setProgress(0);
  };

  return (
    <section className="py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="cinema-section">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#c5a059] mb-1">
            <Film className="w-4 h-4" />
            <span>{isFa ? 'سینمای انیمیشنی تاریخ ایران‌زمین' : 'Animated Cinematic Video Theater'}</span>
          </div>
          <h2
            className={`font-serif-title text-2xl sm:text-3xl font-bold ${
              isLight ? 'text-[#09090b]' : 'text-[#f4f4f6]'
            }`}
          >
            {isFa ? 'روایت زنده و متحرک فرازهای تاریخ کهن' : 'Animated Odyssey of Persia’s Greatest Milestones'}
          </h2>
        </div>
        <p className={`text-sm max-w-md ${isLight ? 'text-stone-600' : 'text-stone-400'}`}>
          {isFa
            ? 'سفری پویا در زمان با پرتوهای انیمیشن، بازنمایی رویدادهای سرنوشت‌ساز و نغمه‌های باستانی.'
            : 'A continuous cinematic playback of landmark epochs, philosophical proclamations, and imperial feats.'}
        </p>
      </div>

      {/* Main Theater Display Container */}
      <div
        className={`relative rounded-3xl border overflow-hidden shadow-2xl transition-all ${
          isLight
            ? 'bg-white border-[#e4ddcf] shadow-xl'
            : 'bg-[#09090d] border-[#262632] shadow-[0_0_80px_rgba(0,0,0,0.95)]'
        }`}
      >
        {/* Animated Background Canvas Layer representing the specific scene */}
        <div className="relative h-[420px] sm:h-[480px] md:h-[540px] w-full overflow-hidden flex flex-col justify-between p-6 sm:p-10 select-none">
          
          {/* Animated visual backdrop elements */}
          <div className="absolute inset-0 pointer-events-none">
            {/* Dynamic radial gradient aura based on scene theme */}
            <div
              className={`absolute inset-0 transition-opacity duration-1000 ${
                scene.visualTheme === 'gold'
                  ? 'bg-[radial-gradient(ellipse_at_top,_rgba(197,160,89,0.22)_0%,_transparent_70%)]'
                  : scene.visualTheme === 'turquoise'
                  ? 'bg-[radial-gradient(ellipse_at_top,_rgba(20,184,166,0.18)_0%,_transparent_70%)]'
                  : scene.visualTheme === 'lapis'
                  ? 'bg-[radial-gradient(ellipse_at_top,_rgba(99,102,241,0.18)_0%,_transparent_70%)]'
                  : scene.visualTheme === 'amber'
                  ? 'bg-[radial-gradient(ellipse_at_top,_rgba(217,119,6,0.2)_0%,_transparent_70%)]'
                  : 'bg-[radial-gradient(ellipse_at_top,_rgba(16,185,129,0.18)_0%,_transparent_70%)]'
              }`}
            />

            {/* Subtle animated geometric mandala or constellation in the center */}
            <motion.div
              key={scene.id}
              initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
              animate={{ opacity: 0.15, scale: 1, rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-[#c5a059] flex items-center justify-center"
            >
              <div className="w-[360px] h-[360px] rounded-full border border-dashed border-[#c5a059]" />
              <div className="w-[220px] h-[220px] rotate-45 border border-[#c5a059]" />
              <div className="w-[220px] h-[220px] border border-[#c5a059]" />
            </motion.div>

            {/* Glowing cuneiform / Persian typography drifting in background */}
            <div className="absolute inset-0 flex items-center justify-center opacity-10 text-[100px] sm:text-[140px] font-mono text-[#c5a059] select-none">
              {scene.id === 'cyrus-charter' ? '𒀭 𒈗 𒈨' : scene.id === 'ferdowsi-renaissance' ? 'شاهنامه' : 'پارسه'}
            </div>
          </div>

          {/* Top Info Bar inside player */}
          <div className="relative z-10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#c5a059]/20 text-[#c5a059] border border-[#c5a059]/30 backdrop-blur-md">
                {isFa ? scene.eraFa : scene.eraEn}
              </span>
              <span className="text-xs font-mono opacity-70">
                {isFa ? scene.yearFa : scene.yearEn}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={toggleSound}
                className={`p-2 rounded-xl backdrop-blur-md border transition-all cursor-pointer ${
                  soundEnabled
                    ? 'bg-[#c5a059] text-black border-[#c5a059]'
                    : isLight
                    ? 'bg-white/80 border-[#e4ddcf] text-stone-700'
                    : 'bg-black/60 border-[#262632] text-stone-300'
                }`}
              >
                {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
              </button>

              <div
                className={`px-3 py-1 rounded-xl backdrop-blur-md border text-xs font-mono font-bold ${
                  isLight ? 'bg-white/80 border-[#e4ddcf]' : 'bg-black/60 border-[#262632]'
                }`}
              >
                {currentSceneIdx + 1} / {SCENES.length}
              </div>
            </div>
          </div>

          {/* Central Narration & Cinematic Text with Smooth Transitions */}
          <div className="relative z-10 max-w-3xl my-auto py-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={scene.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="space-y-4"
              >
                <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold font-serif-title text-[#c5a059] leading-tight">
                  {isFa ? scene.titleFa : scene.titleEn}
                </h3>

                <p className="text-sm sm:text-base md:text-lg leading-relaxed opacity-90 font-sans">
                  {isFa ? scene.narrationFa : scene.narrationEn}
                </p>

                <div className="pt-2">
                  <span className="inline-block text-xs sm:text-sm font-serif italic text-[#dfbb6c] border-r-2 rtl:border-r-2 rtl:border-l-0 ltr:border-l-2 ltr:border-r-0 border-[#c5a059] px-3 py-1">
                    {isFa ? scene.quoteFa : scene.quoteEn}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Bottom Player Controls & Progress Bar */}
          <div className="relative z-10 space-y-3">
            {/* Timeline Progress Bar */}
            <div className="w-full h-1.5 rounded-full overflow-hidden bg-white/10">
              <div
                className="h-full bg-gradient-to-r from-[#c5a059] to-[#ffd68a] transition-all duration-100 ease-linear"
                style={{ width: `${progress}%` }}
              />
            </div>

            {/* Playback Controls & Scene Chips */}
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <button
                  onClick={prevScene}
                  title="صحنه پیشین"
                  className={`p-2 rounded-xl backdrop-blur-md border transition-all cursor-pointer ${
                    isLight ? 'bg-white/80 border-[#e4ddcf] hover:border-black' : 'bg-black/60 border-[#262632] hover:border-white'
                  }`}
                >
                  {isFa ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
                </button>

                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#c5a059] to-[#dfbb6c] text-black font-bold text-xs flex items-center gap-2 shadow-md hover:brightness-110 active:scale-95 transition-all cursor-pointer"
                >
                  {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 fill-black" />}
                  <span>{isPlaying ? (isFa ? 'توقف پخش' : 'Pause') : (isFa ? 'ادامه پخش' : 'Play')}</span>
                </button>

                <button
                  onClick={nextScene}
                  title="صحنه بعدی"
                  className={`p-2 rounded-xl backdrop-blur-md border transition-all cursor-pointer ${
                    isLight ? 'bg-white/80 border-[#e4ddcf] hover:border-black' : 'bg-black/60 border-[#262632] hover:border-white'
                  }`}
                >
                  {isFa ? <ChevronLeft className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
                </button>
              </div>

              {/* Scene Indicator Pills */}
              <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar">
                {SCENES.map((s, idx) => {
                  const isActive = idx === currentSceneIdx;
                  return (
                    <button
                      key={s.id}
                      onClick={() => {
                        setCurrentSceneIdx(idx);
                        setProgress(0);
                      }}
                      className={`px-2.5 py-1 rounded-lg text-[11px] font-semibold transition-all cursor-pointer whitespace-nowrap ${
                        isActive
                          ? 'bg-[#c5a059] text-black font-bold'
                          : isLight
                          ? 'bg-white/70 border border-[#e4ddcf] text-stone-600 hover:text-black'
                          : 'bg-black/50 border border-[#262632] text-stone-400 hover:text-white'
                      }`}
                    >
                      {idx + 1}. {isFa ? s.eraFa.split(' ')[0] : s.eraEn.split(' ')[0]}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
