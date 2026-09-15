import React from 'react';
import { Language, Theme } from '../types';
import { ImperialLogo } from './ImperialLogo';
import { Search, Sparkles, ShieldCheck, Sun, Moon, Bot, Landmark, Film } from 'lucide-react';

interface HeaderProps {
  language: Language;
  onLanguageChange: (lang: Language) => void;
  activeTab: string;
  onTabChange: (tab: string) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  theme: Theme;
  onThemeChange: (theme: Theme) => void;
  onOpenCharter?: () => void;
  onOpenAi?: () => void;
  onOpenSearch?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  language,
  onLanguageChange,
  activeTab,
  onTabChange,
  searchQuery,
  onSearchChange,
  theme,
  onThemeChange,
  onOpenCharter,
  onOpenAi,
  onOpenSearch,
}) => {
  const isFa = language === 'fa';
  const isLight = theme === 'light';

  const navItems = [
    { id: 'odyssey', labelEn: 'Scroll Odyssey ✦', labelFa: 'سفر شگفت‌انگیز ✦', isSpecial: true },
    { id: 'theater', labelEn: 'Animated Cinema 🎬', labelFa: 'سینمای انیمیشن 🎬' },
    { id: 'dynasties', labelEn: 'Dynasties', labelFa: 'سلسله‌ها و شاهان' },
    { id: 'timeline', labelEn: 'Chronology', labelFa: 'گاه‌شمار وقایع' },
    { id: 'map', labelEn: 'Heritage Map', labelFa: 'نقشه آثار' },
    { id: 'artifacts', labelEn: 'Wisdom & Artifacts', labelFa: 'گنجینه و منشورها' },
    { id: 'geometry', labelEn: 'Sacred Geometry', labelFa: 'هندسه کاشی' },
  ];

  // Sanitized search input change
  const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const clean = e.target.value.replace(/<[^>]*>?/gm, '');
    onSearchChange(clean);
  };

  const toggleTheme = () => {
    onThemeChange(isLight ? 'dark' : 'light');
  };

  return (
    <header
      className={`sticky top-0 z-40 backdrop-blur-md border-b transition-colors duration-300 ${
        isLight
          ? 'bg-[#fcfbf7]/95 border-[#c5a059]/40 shadow-lg shadow-[#d1c5b4]/25 text-[#09090b]'
          : 'bg-[#09090d]/95 border-[#262632] shadow-2xl shadow-black/80 text-[#f4f4f6]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-3">
          
          {/* Enhanced Royal Imperial Logo & Brand */}
          <button
            onClick={() => onTabChange('dynasties')}
            className="flex items-center gap-3 text-left rtl:text-right group focus:outline-none cursor-pointer"
            id="header-brand-button"
            title={isFa ? 'صفحه نخست تاریخ و دودمان‌ها' : 'Historical Dynasties Home'}
          >
            <ImperialLogo className="w-12 h-12" theme={theme} />
            <div>
              <div className="flex items-center gap-2">
                <span
                  className={`font-serif-title text-xl sm:text-2xl font-black tracking-tight transition-all ${
                    isLight
                      ? 'text-transparent bg-clip-text bg-gradient-to-r from-[#875e18] via-[#b8860b] to-[#c5a059] group-hover:to-[#875e18]'
                      : 'text-transparent bg-clip-text bg-gradient-to-r from-[#ffe49e] via-[#e9c176] to-[#c5a059] group-hover:from-white group-hover:to-[#ffd68a]'
                  }`}
                >
                  {isFa ? 'شاهنشاهی ایران' : 'IMPERIAL IRAN'}
                </span>
                <span
                  className={`inline-flex items-center px-2 py-0.5 rounded text-[10px] uppercase font-bold tracking-wider border shadow-sm ${
                    isLight
                      ? 'bg-[#c5a059]/15 text-[#875e18] border-[#c5a059]/50'
                      : 'bg-[#c5a059]/20 text-[#e9c176] border-[#c5a059]/40'
                  }`}
                >
                  {isFa ? 'آرشیو زرین' : 'Archive'}
                </span>
              </div>
              <p
                className={`text-[11px] hidden sm:block tracking-wide transition-colors ${
                  isLight ? 'text-[#685f54]' : 'text-[#a1a1aa]'
                }`}
              >
                {isFa ? 'آرشیو دیجیتال تاریخ، منشور حقوق بشر و هنر فلات ایران' : 'Chronicles of Persian Civilization, Charters & Wisdom'}
              </p>
            </div>
          </button>

          {/* Quick Search Engine Trigger Button */}
          <button
            onClick={onOpenSearch}
            className={`hidden md:flex items-center gap-2 px-3.5 py-1.5 rounded-xl border text-xs transition-all shadow-inner cursor-pointer max-w-xs flex-1 ${
              isLight
                ? 'bg-white border-[#d8d0c4] text-stone-500 hover:border-[#c5a059] hover:text-black'
                : 'bg-[#121218] border-[#2a2a38] text-stone-400 hover:border-[#c5a059] hover:text-white'
            }`}
          >
            <Search className="w-3.5 h-3.5 text-[#c5a059]" />
            <span className="flex-1 text-left rtl:text-right truncate">
              {searchQuery || (isFa ? 'موتور جستجوی تاریخ ایران...' : 'Search dynasties, events, monuments...')}
            </span>
            <kbd className="hidden lg:inline px-1.5 py-0.5 rounded text-[10px] bg-black/5 dark:bg-white/10 font-mono">
              /
            </kbd>
          </button>

          {/* Header Action Highlights: Cyrus Charter & AI Historian */}
          <div className="flex items-center gap-2">
            {/* Cyrus Charter Trigger Button */}
            {onOpenCharter && (
              <button
                onClick={onOpenCharter}
                className="px-3 py-1.5 rounded-xl border border-[#c5a059]/50 bg-gradient-to-r from-[#c5a059]/20 via-[#ecd399]/20 to-[#c5a059]/20 hover:from-[#c5a059]/30 hover:to-[#c5a059]/40 text-xs font-bold transition-all shadow-sm flex items-center gap-1.5 cursor-pointer text-[#dfbb6c] dark:text-[#f4d89e]"
                title={isFa ? 'مشاهده منشور حقوق بشر کوروش بزرگ' : 'View Cyrus Cylinder Human Rights Charter'}
              >
                <Landmark className="w-3.5 h-3.5 text-[#c5a059]" />
                <span className="hidden sm:inline">{isFa ? 'منشور کوروش' : 'Cyrus Charter'}</span>
              </button>
            )}

            {/* AI Historian Trigger Button */}
            {onOpenAi && (
              <button
                onClick={onOpenAi}
                className="px-3 py-1.5 rounded-xl bg-gradient-to-r from-[#c5a059] to-[#dfbb6c] text-black text-xs font-bold shadow-md hover:brightness-110 active:scale-95 transition-all flex items-center gap-1.5 cursor-pointer"
                title={isFa ? 'گفتگو با دانا؛ هوش مصنوعی تاریخ ایران' : 'Chat with Dana; AI Scholar of Iran'}
              >
                <Bot className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">{isFa ? 'هوش مصنوعی' : 'AI Historian'}</span>
              </button>
            )}

            {/* Dark / Light Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              id="theme-toggle-btn"
              className={`relative flex items-center justify-center p-2 rounded-xl border transition-all duration-300 focus:outline-none cursor-pointer ${
                isLight
                  ? 'bg-[#efebe1] border-[#c5a059]/40 text-[#875e18] hover:bg-[#e4ddcf]'
                  : 'bg-[#14141d] border-[#2a2a38] text-[#e9c176] hover:bg-[#1a1a26]'
              }`}
              title={
                isFa
                  ? isLight
                    ? 'تغییر به حالت شب (تاریک)'
                    : 'تغییر به حالت روز (روشن)'
                  : isLight
                  ? 'Switch to Dark Mode'
                  : 'Switch to Light Mode'
              }
              aria-label="Toggle Theme"
            >
              {isLight ? (
                <Moon className="w-4 h-4 transition-transform duration-300 rotate-0 hover:-rotate-12" />
              ) : (
                <Sun className="w-4 h-4 transition-transform duration-300 rotate-0 hover:rotate-45 text-[#ffd875]" />
              )}
            </button>

            {/* Language Toggle */}
            <div
              className={`flex items-center p-0.5 rounded-xl border ${
                isLight ? 'bg-[#ede8dc] border-[#d8d0c4]' : 'bg-[#14141d] border-[#2a2a38]'
              }`}
            >
              <button
                onClick={() => onLanguageChange('en')}
                id="lang-en-btn"
                className={`px-2 py-1 text-xs font-semibold rounded-lg transition-all ${
                  language === 'en'
                    ? 'bg-[#c5a059] text-black shadow-sm font-bold'
                    : isLight
                    ? 'text-stone-600 hover:text-black'
                    : 'text-stone-400 hover:text-white'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => onLanguageChange('fa')}
                id="lang-fa-btn"
                className={`px-2 py-1 text-xs font-semibold rounded-lg transition-all font-sans ${
                  language === 'fa'
                    ? 'bg-[#c5a059] text-black shadow-sm font-bold'
                    : isLight
                    ? 'text-stone-600 hover:text-black'
                    : 'text-stone-400 hover:text-white'
                }`}
              >
                فا
              </button>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <nav
          className={`flex items-center space-x-1 rtl:space-x-reverse overflow-x-auto py-2 border-t no-scrollbar ${
            isLight ? 'border-[#e4ddcf]' : 'border-[#262632]'
          }`}
        >
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                id={`nav-tab-${item.id}`}
                onClick={() => onTabChange(item.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-medium whitespace-nowrap transition-all flex items-center gap-1.5 cursor-pointer ${
                  isActive
                    ? isLight
                      ? 'bg-[#ebdcb9] text-[#78510f] border border-[#c5a059] shadow-sm font-bold'
                      : 'bg-[#1a1a24] text-[#e9c176] border border-[#c5a059]/40 shadow-[0_0_12px_rgba(197,160,89,0.2)] font-bold'
                    : item.isSpecial
                    ? isLight
                      ? 'text-[#875e18] bg-white border border-[#c5a059]/40 hover:bg-[#faf6ee]'
                      : 'text-[#e9c176] bg-[#14141d] border border-[#c5a059]/30 hover:bg-[#1c1c28]'
                    : isLight
                    ? 'text-stone-600 hover:text-black hover:bg-[#f3ede1]'
                    : 'text-stone-400 hover:text-white hover:bg-[#14141d]'
                }`}
              >
                {item.id === 'odyssey' && (
                  <Sparkles className="w-3.5 h-3.5 text-[#c5a059] animate-spin" style={{ animationDuration: '6s' }} />
                )}
                {isFa ? item.labelFa : item.labelEn}
              </button>
            );
          })}
        </nav>
      </div>
    </header>
  );
};
