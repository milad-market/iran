import React, { useState, useEffect } from 'react';
import { Language, Theme } from './types';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { CinematicVideoCanvas } from './components/CinematicVideoCanvas';
import { CinematicVideoTheater } from './components/CinematicVideoTheater';
import { CyrusCharterModal } from './components/CyrusCharterModal';
import { AiHistorianModal } from './components/AiHistorianModal';
import { HistoricalSearchEngine } from './components/HistoricalSearchEngine';
import { ScrollOdyssey } from './components/ScrollOdyssey';
import { DynastyExplorer } from './components/DynastyExplorer';
import { TimelineView } from './components/TimelineView';
import { InteractiveMap } from './components/InteractiveMap';
import { ArtifactGallery } from './components/ArtifactGallery';
import { TessellationGenerator } from './components/TessellationGenerator';
import { Footer } from './components/Footer';
import { AnimatePresence, motion } from 'motion/react';
import { Bot, Search, Landmark, Film } from 'lucide-react';

export const App: React.FC = () => {
  const [language, setLanguage] = useState<Language>('fa'); // Persian default
  const [theme, setTheme] = useState<Theme>('dark'); // Dark mode default, toggleable to light
  const [activeTab, setActiveTab] = useState<string>('odyssey'); // Default to interactive animated scroll odyssey
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Modals requested by user:
  // "زمانی که کسی وارد سایت بشه با منشور حقوق بشر رو به رو بشه که متن ها پشت اون قرار داره"
  const [showCyrusCharter, setShowCyrusCharter] = useState<boolean>(true);
  const [showAiHistorian, setShowAiHistorian] = useState<boolean>(false);
  const [showSearchEngine, setShowSearchEngine] = useState<boolean>(false);

  // Update HTML document direction and lang when language changes
  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'fa' ? 'rtl' : 'ltr';
  }, [language]);

  // Synchronize theme class on HTML element
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'light') {
      root.classList.remove('dark');
      root.classList.add('light');
    } else {
      root.classList.remove('light');
      root.classList.add('dark');
    }
  }, [theme]);

  // When search query is entered, if user is not in timeline or dynasties, jump to timeline for results
  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
    if (query.trim() && activeTab !== 'timeline' && activeTab !== 'dynasties') {
      setActiveTab('timeline');
    }
  };

  const isLight = theme === 'light';
  const isFa = language === 'fa';

  const handleAskAiFromSearch = (query: string) => {
    setShowAiHistorian(true);
  };

  return (
    <div
      className={`relative min-h-screen flex flex-col font-sans selection:bg-[#c5a059] selection:text-black overflow-x-hidden transition-colors duration-300 ${
        isLight
          ? 'bg-[#faf9f5] text-[#09090b]'
          : 'bg-[#09090d] text-[#f4f4f6]'
      }`}
    >
      {/* Subtle Ambient Cosmic Canvas (Floating embers, golden stardust, dark obsidian background) */}
      <CinematicVideoCanvas ambientTheme="lapis" isPlaying={true} theme={theme} />

      {/* App Shell Content (Above the canvas) */}
      <div className="relative z-10 flex flex-col min-h-screen">
        
        {/* Header with Navigation and Quick Triggers */}
        <Header
          language={language}
          onLanguageChange={setLanguage}
          activeTab={activeTab}
          onTabChange={setActiveTab}
          searchQuery={searchQuery}
          onSearchChange={handleSearchChange}
          theme={theme}
          onThemeChange={setTheme}
          onOpenCharter={() => setShowCyrusCharter(true)}
          onOpenAi={() => setShowAiHistorian(true)}
          onOpenSearch={() => setShowSearchEngine(true)}
        />

        {/* Hero Banner with animated triggers */}
        <HeroSection
          language={language}
          onExploreOdyssey={() => setActiveTab('odyssey')}
          onExploreDynasties={() => setActiveTab('dynasties')}
          onExploreTimeline={() => setActiveTab('timeline')}
          onExploreMap={() => setActiveTab('map')}
          onOpenCharter={() => setShowCyrusCharter(true)}
          onOpenAi={() => setShowAiHistorian(true)}
          onOpenTheater={() => setActiveTab('theater')}
          theme={theme}
        />

        {/* Main Dynamic View Area with smooth animated transitions */}
        <main className="flex-1">
          <AnimatePresence mode="wait">
            {/* Animated Cinematic Video Theater */}
            {activeTab === 'theater' && (
              <motion.div
                key="theater"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="gpu-accelerated"
              >
                <CinematicVideoTheater language={language} theme={theme} />
              </motion.div>
            )}

            {/* Animated Scroll Odyssey with Bizarre Historical Events */}
            {activeTab === 'odyssey' && (
              <motion.div
                key="odyssey"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="gpu-accelerated"
              >
                <ScrollOdyssey language={language} theme={theme} />
              </motion.div>
            )}

            {/* Dynasties Chronicle */}
            {activeTab === 'dynasties' && (
              <motion.div
                key="dynasties"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="gpu-accelerated"
              >
                <DynastyExplorer
                  language={language}
                  theme={theme}
                  onSelectEraForTimeline={() => {
                    setActiveTab('timeline');
                  }}
                />
              </motion.div>
            )}

            {/* Chronological Timeline */}
            {activeTab === 'timeline' && (
              <motion.div
                key="timeline"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="gpu-accelerated"
              >
                <TimelineView
                  language={language}
                  searchQuery={searchQuery}
                  theme={theme}
                />
              </motion.div>
            )}

            {/* Cartographic Heritage Map */}
            {activeTab === 'map' && (
              <motion.div
                key="map"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="gpu-accelerated"
              >
                <InteractiveMap language={language} theme={theme} />
              </motion.div>
            )}

            {/* Artifacts & Wisdom */}
            {activeTab === 'artifacts' && (
              <motion.div
                key="artifacts"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="gpu-accelerated"
              >
                <ArtifactGallery language={language} theme={theme} />
              </motion.div>
            )}

            {/* Sacred Geometry / Tessellation Studio */}
            {activeTab === 'geometry' && (
              <motion.div
                key="geometry"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="gpu-accelerated"
              >
                <TessellationGenerator language={language} theme={theme} />
              </motion.div>
            )}
          </AnimatePresence>
        </main>

        {/* Footer */}
        <Footer language={language} theme={theme} />
      </div>

      {/* Floating Imperial Quick Action Dock (Fixed at bottom right) */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-2.5 items-end">
        {/* Cyrus Charter Quick Button */}
        <button
          onClick={() => setShowCyrusCharter(true)}
          className="p-3 rounded-full bg-gradient-to-tr from-[#c5a059] to-[#ecd399] text-black shadow-[0_4px_20px_rgba(197,160,89,0.5)] hover:scale-110 active:scale-95 transition-all cursor-pointer group flex items-center gap-2"
          title={isFa ? 'منشور حقوق بشر کوروش بزرگ' : 'Cyrus Cylinder Human Rights Charter'}
        >
          <Landmark className="w-5 h-5" />
          <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 whitespace-nowrap text-xs font-bold pl-1">
            {isFa ? 'منشور حقوق بشر کوروش' : 'Cyrus Charter'}
          </span>
        </button>

        {/* AI Scholar Dana Quick Button */}
        <button
          onClick={() => setShowAiHistorian(true)}
          className={`p-3 rounded-full border shadow-xl hover:scale-110 active:scale-95 transition-all cursor-pointer group flex items-center gap-2 ${
            isLight
              ? 'bg-white border-[#c5a059] text-[#875e18]'
              : 'bg-[#121218] border-[#c5a059]/60 text-[#ecd399]'
          }`}
          title={isFa ? 'هوش مصنوعی دانا: پژوهشگر تاریخ ایران' : 'Dana: AI Historian of Iran'}
        >
          <Bot className="w-5 h-5 text-[#c5a059]" />
          <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 whitespace-nowrap text-xs font-bold pl-1">
            {isFa ? 'هوش مصنوعی دانا' : 'AI Historian'}
          </span>
        </button>

        {/* Search Engine Quick Button */}
        <button
          onClick={() => setShowSearchEngine(true)}
          className={`p-3 rounded-full border shadow-xl hover:scale-110 active:scale-95 transition-all cursor-pointer group flex items-center gap-2 ${
            isLight
              ? 'bg-white border-[#dcd4c6] text-stone-700'
              : 'bg-[#121218] border-[#2a2a38] text-stone-300'
          }`}
          title={isFa ? 'موتور جستجوی تاریخ ایران' : 'Historical Search Engine'}
        >
          <Search className="w-5 h-5 text-[#c5a059]" />
          <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 whitespace-nowrap text-xs font-bold pl-1">
            {isFa ? 'موتور جستجو' : 'Search Engine'}
          </span>
        </button>
      </div>

      {/* Cyrus Charter Landing Modal */}
      <CyrusCharterModal
        isOpen={showCyrusCharter}
        onClose={() => setShowCyrusCharter(false)}
        language={language}
        theme={theme}
      />

      {/* AI Historian Modal */}
      <AiHistorianModal
        isOpen={showAiHistorian}
        onClose={() => setShowAiHistorian(false)}
        language={language}
        theme={theme}
      />

      {/* Historical Search Engine Modal */}
      <HistoricalSearchEngine
        isOpen={showSearchEngine}
        onClose={() => setShowSearchEngine(false)}
        language={language}
        theme={theme}
        onSelectTab={(tab) => setActiveTab(tab)}
        onAskAi={(q) => {
          setShowAiHistorian(true);
        }}
      />
    </div>
  );
};

export default App;
