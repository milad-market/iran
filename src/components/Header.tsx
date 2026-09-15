import React from 'react';
import { Language } from '../types';
import { ImperialLogo } from './ImperialLogo';
import { Search, Sparkles, ShieldCheck, Compass, ExternalLink } from 'lucide-react';

interface HeaderProps {
  language: Language;
  onLanguageChange: (lang: Language) => void;
  activeTab: string;
  onTabChange: (tab: string) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  language,
  onLanguageChange,
  activeTab,
  onTabChange,
  searchQuery,
  onSearchChange,
}) => {
  const isFa = language === 'fa';

  const navItems = [
    { id: 'odyssey', labelEn: 'Scroll Odyssey ✦', labelFa: 'سفر شگفت‌انگیز ✦', isSpecial: true },
    { id: 'dynasties', labelEn: 'Dynasties', labelFa: 'دودمان‌ها' },
    { id: 'timeline', labelEn: 'Chronology', labelFa: 'گاه‌شمار' },
    { id: 'map', labelEn: 'Heritage Map', labelFa: 'نقشه آثار' },
    { id: 'artifacts', labelEn: 'Wisdom & Artifacts', labelFa: 'گنجینه و منشور' },
    { id: 'geometry', labelEn: 'Sacred Geometry', labelFa: 'هندسه کاشی' },
  ];

  // Sanitized search input change
  const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Basic sanitization to strip malicious script tags
    const clean = e.target.value.replace(/<[^>]*>?/gm, '');
    onSearchChange(clean);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#04132b]/95 backdrop-blur-md border-b border-[#c5a059]/30 shadow-2xl shadow-[#000e25]/60 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-3">
          
          {/* Enhanced Royal Logo */}
          <button
            onClick={() => onTabChange('dynasties')}
            className="flex items-center gap-3 text-left rtl:text-right group focus:outline-none"
            id="header-brand-button"
            title={isFa ? 'صفحه نخست آرشیو' : 'Home Archive'}
          >
            <ImperialLogo className="w-12 h-12" />
            <div>
              <div className="flex items-center gap-2">
                <span className="font-serif-title text-xl sm:text-2xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#ffe49e] via-[#e9c176] to-[#c5a059] group-hover:from-white group-hover:to-[#ffd68a] transition-all">
                  {isFa ? 'شاهنشاهی ایران' : 'IMPERIAL IRAN'}
                </span>
                <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] uppercase font-bold tracking-wider bg-[#c5a059]/20 text-[#e9c176] border border-[#c5a059]/40 shadow-sm">
                  {isFa ? 'نسخه زرین' : 'Archive'}
                </span>
              </div>
              <p className="text-[11px] text-[#d1c5b4] hidden sm:block tracking-wide">
                {isFa ? 'آرشیو دیجیتال تمدن، هنر و منشورهای پارسی' : 'Chronicles of Persian Civilization & Wisdom'}
              </p>
            </div>
          </button>

          {/* Search bar with sanitization */}
          <div className="relative flex-1 max-w-xs hidden lg:block">
            <div className="absolute inset-y-0 left-0 rtl:left-auto rtl:right-0 pl-3 rtl:pl-0 rtl:pr-3 flex items-center pointer-events-none text-[#9a8f80]">
              <Search className="w-4 h-4" />
            </div>
            <input
              type="text"
              id="main-search-input"
              value={searchQuery}
              onChange={handleSearchInput}
              placeholder={isFa ? 'جستجو در آثار، پادشاهان و رویدادها...' : 'Search eras, monuments, events...'}
              className="w-full pl-9 rtl:pl-3 rtl:pr-9 pr-3 py-1.5 text-xs sm:text-sm bg-[#0c1b33] border border-[#4e4639] rounded-lg text-[#d7e3ff] placeholder-[#9a8f80] focus:outline-none focus:border-[#e9c176] focus:ring-1 focus:ring-[#e9c176]/40 transition-colors shadow-inner"
            />
            {searchQuery && (
              <button
                onClick={() => onSearchChange('')}
                className="absolute inset-y-0 right-0 rtl:right-auto rtl:left-0 pr-2.5 rtl:pr-0 rtl:pl-2.5 flex items-center text-xs text-[#9a8f80] hover:text-[#d7e3ff]"
              >
                ✕
              </button>
            )}
          </div>

          {/* Right controls: GitHub, Vercel, Security Shield, Language Toggle */}
          <div className="flex items-center gap-2 sm:gap-3">
            
            {/* Security Verification Badge */}
            <div
              className="hidden md:flex items-center gap-1 px-2.5 py-1 rounded-md bg-[#0c1b33] border border-[#1c2a43] text-[11px] text-[#acc7ff] font-medium"
              title={isFa ? 'امنیت تقویت‌شده با CSP و پروتکل رمزنگاری' : 'Secured with strict Content-Security-Policy'}
            >
              <ShieldCheck className="w-3.5 h-3.5 text-[#10b981]" />
              <span className="hidden xl:inline">{isFa ? 'امنیت تاییدشده' : 'CSP Secure'}</span>
            </div>

            {/* GitHub Repo Link */}
            <a
              href="https://github.com/milad-market/iran"
              target="_blank"
              rel="noopener noreferrer"
              id="github-repo-link"
              className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#0c1b33] border border-[#c5a059]/30 text-[#d7e3ff] hover:text-[#e9c176] hover:border-[#e9c176] text-xs font-semibold transition-all shadow-sm group"
              title="GitHub Repository: milad-market/iran"
            >
              {/* GitHub SVG Icon */}
              <svg className="w-4 h-4 fill-current group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
              <span className="hidden sm:inline">GitHub</span>
            </a>

            {/* Vercel Deploy Link */}
            <a
              href="https://vercel.com/new/clone?repository-url=https://github.com/milad-market/iran"
              target="_blank"
              rel="noopener noreferrer"
              id="vercel-deploy-link"
              className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#000e25] border border-white/20 text-[#d7e3ff] hover:text-white hover:border-white text-xs font-semibold transition-all shadow-sm group"
              title="Deploy to Vercel"
            >
              {/* Vercel SVG Icon */}
              <svg className="w-3.5 h-3.5 fill-current group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
                <path d="M24 22.525H0L12 1.475L24 22.525Z" />
              </svg>
              <span className="hidden sm:inline">Vercel</span>
            </a>

            {/* Language Toggle */}
            <div className="flex items-center bg-[#0c1b33] border border-[#4e4639] p-0.5 rounded-lg">
              <button
                onClick={() => onLanguageChange('en')}
                id="lang-en-btn"
                className={`px-2.5 py-1 text-xs font-semibold rounded-md transition-all ${
                  language === 'en'
                    ? 'bg-[#c5a059] text-[#04132b] shadow-sm font-bold'
                    : 'text-[#d1c5b4] hover:text-white'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => onLanguageChange('fa')}
                id="lang-fa-btn"
                className={`px-2.5 py-1 text-xs font-semibold rounded-md transition-all font-sans ${
                  language === 'fa'
                    ? 'bg-[#c5a059] text-[#04132b] shadow-sm font-bold'
                    : 'text-[#d1c5b4] hover:text-white'
                }`}
              >
                فا
              </button>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <nav className="flex items-center space-x-1 rtl:space-x-reverse overflow-x-auto py-2 border-t border-[#1c2a43] no-scrollbar">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                id={`nav-tab-${item.id}`}
                onClick={() => onTabChange(item.id)}
                className={`px-3.5 py-1.5 rounded-md text-xs sm:text-sm font-medium whitespace-nowrap transition-all flex items-center gap-1.5 ${
                  isActive
                    ? 'bg-[#1c2a43] text-[#e9c176] border border-[#c5a059]/40 shadow-[0_0_12px_rgba(197,160,89,0.2)]'
                    : item.isSpecial
                    ? 'text-[#e9c176] bg-[#0c1b33] border border-[#c5a059]/30 hover:bg-[#142542]'
                    : 'text-[#d1c5b4] hover:text-[#d7e3ff] hover:bg-[#112038]'
                }`}
              >
                {item.id === 'odyssey' && <Sparkles className="w-3.5 h-3.5 text-[#e9c176] animate-spin" style={{ animationDuration: '6s' }} />}
                {isFa ? item.labelFa : item.labelEn}
              </button>
            );
          })}
        </nav>
      </div>
    </header>
  );
};
