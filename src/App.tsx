import React from 'react';
import LanguageSelector from './components/LanguageSelector';
import Hero from './components/Hero';
import { LanguageProvider } from './contexts/LanguageContext';
import './App.css';

function App() {
  return (
    <LanguageProvider>
      <div className="App">
        <header className="app-header">
          <LanguageSelector />
        </header>
        <main>
          <Hero />
          <section id="demo" style={{ minHeight: '50vh', padding: '2rem', background: '#f5f5f5' }}>
            <h2>Demo Section (Coming Soon)</h2>
          </section>
          <section id="how-it-works" style={{ minHeight: '50vh', padding: '2rem', background: '#fff' }}>
            <h2>How It's Built Section (Coming Soon)</h2>
          </section>
        </main>
      </div>
    </LanguageProvider>
  );
}

export default App;