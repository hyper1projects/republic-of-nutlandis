import React from 'react';
import { Masthead } from './components/layout/Masthead';
import { NationalTreasury } from './components/sections/NationalTreasury';
import { Footer } from './components/layout/Footer';

export const App: React.FC = () => (
  <div className="min-h-screen bg-archival-grid text-ink-primary flex flex-col antialiased selection:bg-official-red selection:text-paper-raised">
    <Masthead />
    <NationalTreasury />
    <Footer />
  </div>
);

export default App;
