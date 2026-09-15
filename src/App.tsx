import React, { useState, useEffect } from 'react';
import { Language } from './types';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { CinematicVideoCanvas } from './components/CinematicVideoCanvas';
import { ScrollOdyssey } from './components/ScrollOdyssey';
import { DynastyExplorer } from './components/DynastyExplorer';
import { TimelineView } from './components/TimelineView';
import { InteractiveMap } from './components/InteractiveMap';
import { ArtifactGallery } from './components/ArtifactGallery';
import { TessellationGenerator } from './components/TessellationGenerator';
import { Footer } from './components/Footer';
import { AnimatePresence, motion } from 'motion/react';

export const App: React.FC = () => {
  const [language, setLanguage] = useState<Language>('fa'); // Persian default
  const [activeTab, setActiveTab] = useState<string>('odyssey'); // Default to the interactive animated scroll odyssey
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Update HTML document direction and lang when language changes
  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'fa' ? 'rtl' : 'ltr';
  }, [language]);

  // When search query is entered, if user is not in timeline or dynasties, jump to timeline for results
  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
    if (query.trim() && activeTab !== 'timeline' && activeTab !== 'dynasties') {
      setActiveTab('timeline');
    }
  };

  return (
    <div className="relative min-h-screen bg-[#04132b] text-[#d7e3ff] flex flex-col font-sans selection:bg-[#c5a059] selection:text-[#04132b] overflow-x-hidden">
      
      {/* Subtle Ambient Cosmic Canvas (Floating embers and starfield behind whole site) */}
      <CinematicVideoCanvas ambientTheme="lapis" isPlaying={true} />

      {/* App Shell Content (Above the canvas) */}
      <div className="relative z-10 flex flex-col min-h-screen">
        
        {/* Header */}
        <Header
          language={language}
          onLanguageChange={setLanguage}
          activeTab={activeTab}
          onTabChange={setActiveTab}
          searchQuery={searchQuery}
          onSearchChange={handleSearchChange}
        />

        {/* Hero Banner with animated triggers */}
        <HeroSection
          language={language}
          onExploreOdyssey={() => setActiveTab('odyssey')}
          onExploreDynasties={() => setActiveTab('dynasties')}
          onExploreTimeline={() => setActiveTab('timeline')}
          onExploreMap={() => setActiveTab('map')}
        />

        {/* Main Dynamic View Area with smooth animated transitions */}
        <main className="flex-1">
          <AnimatePresence mode="wait">
            {/* Animated Scroll Odyssey with Bizarre Events */}
            {activeTab === 'odyssey' && (
              <motion.div
                key="odyssey"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="gpu-accelerated"
              >
                <ScrollOdyssey language={language} />
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
                <InteractiveMap language={language} />
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
                <ArtifactGallery language={language} />
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
                <TessellationGenerator language={language} />
              </motion.div>
            )}
          </AnimatePresence>
        </main>

        {/* Footer */}
        <Footer language={language} />
      </div>
    </div>
  );
};

export default App;
