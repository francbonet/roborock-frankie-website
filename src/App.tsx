import './App.css'
import LanguageSelector from './components/LanguageSelector'
import Hero from './components/Hero'
import { AboutFrankie } from './components/AboutFrankie'
import WhatCanDo from './components/WhatCanDo'
import HowItWorks from './components/HowItWorks'
import { AILayer } from './components/AILayer'
import { Gallery } from './components/Gallery'
import { ChallengesLearnings } from './components/ChallengesLearnings'
import FinalCTA from './components/FinalCTA'
import { LanguageProvider } from './context/LanguageContext'

function App() {
  return (
    <LanguageProvider>
      <div style={{ position: 'relative' }}>
        <LanguageSelector />
        <Hero />
      </div>
      <AboutFrankie />
      <WhatCanDo />
      <Gallery />
      <ChallengesLearnings />
      <HowItWorks />
      <AILayer />
      <FinalCTA />
   </LanguageProvider> 
  )
}

export default App