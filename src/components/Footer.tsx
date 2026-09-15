import React from 'react';
import { Language, Theme } from '../types';
import { ImperialLogo } from './ImperialLogo';
import { ShieldCheck, ExternalLink } from 'lucide-react';

interface FooterProps {
  language: Language;
  theme?: Theme;
}

export const Footer: React.FC<FooterProps> = ({ language, theme = 'dark' }) => {
  const isFa = language === 'fa';
  const isLight = theme === 'light';

  return (
    <footer
      className={`border-t py-12 transition-colors duration-300 ${
        isLight
          ? 'bg-[#f4efe5] border-[#c5a059]/35 text-[#57534e]'
          : 'bg-[#060608] border-[#262632] text-[#9a8f80]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Universal verse by Saadi Shirazi (Inscribed at the UN Headquarters) */}
        <div
          className={`max-w-2xl mx-auto mb-8 p-6 rounded-xl border transition-all ${
            isLight
              ? 'bg-white border-[#c5a059]/40 shadow-md text-[#09090b]'
              : 'bg-[#121218] border-[#c5a059]/30 shadow-lg text-[#f4f4f6]'
          }`}
        >
          <p
            className={`font-serif-title text-base sm:text-lg font-semibold leading-relaxed ${
              isLight ? 'text-[#875e18]' : 'text-[#e9c176]'
            }`}
          >
            {isFa
              ? '«بنی‌آدم اعضای یک پیکرند / که در آفرینش ز یک گوهرند»'
              : '“Human beings are members of a whole, In creation of one essence and soul.”'}
          </p>
          <span
            className={`text-xs block mt-2 font-medium ${
              isLight ? 'text-[#78716c]' : 'text-[#d1c5b4]'
            }`}
          >
            {isFa
              ? '— سعدی شیرازی، گلستان (ثبت‌شده در سردر سازمان ملل متحد)'
              : '— Saadi Shirazi, The Gulistan (Inscribed at the United Nations, New York)'}
          </span>
        </div>

        {/* Imperial Logo */}
        <div className="flex justify-center mb-4">
          <ImperialLogo className="w-12 h-12" theme={theme} />
        </div>

        <p
          className={`font-serif-title text-base font-bold tracking-wide ${
            isLight ? 'text-[#09090b]' : 'text-[#f4f4f6]'
          }`}
        >
          {isFa ? 'میراث امپراتوری ایران — آرشیو دیجیتال تمدن و فرهنگ' : 'IMPERIAL HERITAGE OF PERSIA'}
        </p>

        <p className={`text-xs mt-2 max-w-xl mx-auto ${isLight ? 'text-[#78716c]' : 'text-[#9a8f80]'}`}>
          {isFa
            ? 'طراحی‌شده با رعایت اصول زیبایی‌شناسی دست‌نوشته‌های زرین (تذهیب) و داده‌های باستان‌شناسی موزه ملی ایران و یونسکو'
            : 'Curated with the aesthetic discipline of illuminated manuscripts (Tazhib) and UNESCO World Heritage documentation.'}
        </p>

        {/* GitHub, Vercel & Security Badges */}
        <div
          className={`mt-8 pt-6 border-t flex flex-wrap items-center justify-center gap-4 text-xs ${
            isLight ? 'border-[#e2dacb]' : 'border-[#262632]'
          }`}
        >
          {/* GitHub Link */}
          <a
            href="https://github.com/milad-market/iran"
            target="_blank"
            rel="noopener noreferrer"
            id="footer-github-link"
            className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg border text-xs font-semibold transition-all shadow-sm ${
              isLight
                ? 'bg-white border-[#c5a059]/40 text-[#09090b] hover:text-[#875e18] hover:border-[#875e18]'
                : 'bg-[#14141d] border-[#262632] text-[#f4f4f6] hover:text-[#e9c176] hover:border-[#e9c176]'
            }`}
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
            </svg>
            <span>github.com/milad-market/iran</span>
            <ExternalLink className="w-3 h-3 opacity-60" />
          </a>

          {/* Vercel Deploy Link */}
          <a
            href="https://vercel.com/new/clone?repository-url=https://github.com/milad-market/iran"
            target="_blank"
            rel="noopener noreferrer"
            id="footer-vercel-link"
            className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg border text-xs font-semibold transition-all shadow-sm ${
              isLight
                ? 'bg-[#09090b] border-[#09090b] text-white hover:bg-black'
                : 'bg-[#14141d] border-white/20 text-[#f4f4f6] hover:text-white hover:border-white'
            }`}
          >
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
              <path d="M24 22.525H0L12 1.475L24 22.525Z" />
            </svg>
            <span>Deploy to Vercel</span>
            <ExternalLink className="w-3 h-3 opacity-60" />
          </a>

          {/* Security Hardened Certificate */}
          <div
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg border ${
              isLight
                ? 'bg-white border-[#10b981]/40 text-[#059669]'
                : 'bg-[#14141d] border-[#10b981]/30 text-[#10b981]'
            }`}
          >
            <ShieldCheck className="w-4 h-4" />
            <span className="font-mono text-[11px]">
              {isFa ? 'امنیت سخت‌گیرانه: CSP + TLS' : 'Strict Security: CSP + TLS'}
            </span>
          </div>

        </div>
      </div>
    </footer>
  );
};
