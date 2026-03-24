import './App.css'
import LanguageSelector from './components/LanguageSelector'
import Hero from './components/Hero'
import { AboutFrankie } from './components/AboutFrankie'
import WhatCanDo from './components/WhatCanDo'
import HowItWorks from './components/HowItWorks'
import { AILayer } from './components/AILayer'
import { Gallery } from './components/Gallery'
import { ChallengesLearnings } from './components/ChallengesLearnings'
import { LanguageProvider } from './context/LanguageContext'

function App() {
  return (
    <LanguageProvider>
      <LanguageSelector />
      <Hero />
      <AboutFrankie />
      <WhatCanDo />
      <Gallery />
      <ChallengesLearnings />
      <HowItWorks />
      <AILayer />
   </LanguageProvider> 
  )
}

export default App