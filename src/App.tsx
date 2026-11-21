import React, { useState, useEffect } from 'react';
import { Masthead } from './components/layout/Masthead';
import { Navigation } from './components/layout/Navigation';
import { NationalBulletinHero } from './components/sections/NationalBulletinHero';
import { NationalTreasury } from './components/sections/NationalTreasury';
import { NationalIntelligence } from './components/sections/NationalIntelligence';
import { NationalIntelligenceArchive } from './components/pages/NationalIntelligenceArchive';
import { Footer } from './components/layout/Footer';

export const App: React.FC = () => {
  const [currentRoute, setCurrentRoute] = useState<'home' | 'intelligence'>(() => {
    const hash = window.location.hash;
    return hash.startsWith('#/intelligence') || hash.startsWith('#intelligence-archive')
      ? 'intelligence'
      : 'home';
  });

  const [intelligenceFocus, setIntelligenceFocus] = useState<'directives' | 'news'>('directives');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#/intelligence') || hash.startsWith('#intelligence-archive')) {
        setCurrentRoute('intelligence');
        if (hash.includes('focus=news') || hash.includes('view=news')) {
          setIntelligenceFocus('news');
        } else if (hash.includes('focus=directives') || hash.includes('view=directives')) {
          setIntelligenceFocus('directives');
        }
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        setCurrentRoute('home');
        if (hash && hash !== '#/' && !hash.startsWith('#/')) {
          const targetId = hash.replace('#', '');
          const element = document.getElementById(targetId);
          if (element) setTimeout(() => element.scrollIntoView({ behavior: 'smooth' }), 60);
        }
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleReturnToPortal = () => {
    window.location.hash = '#hero';
    setCurrentRoute('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-archival-grid text-ink-primary flex flex-col antialiased selection:bg-official-red selection:text-paper-raised">
      <Masthead />
      <Navigation currentRoute={currentRoute} />
      <main className="flex-1 w-full">
        {currentRoute === 'home' ? (
          <>
            <NationalBulletinHero />
            <NationalTreasury />
            <NationalIntelligence />
          </>
        ) : (
          <NationalIntelligenceArchive
            initialFocus={intelligenceFocus}
            onReturnToPortal={handleReturnToPortal}
          />
        )}
      </main>
      <Footer />
    </div>
  );
};

export default App;
