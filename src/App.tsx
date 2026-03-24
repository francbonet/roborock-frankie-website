import './App.css'
import LanguageSelector from './components/LanguageSelector'
import Hero from './components/Hero'
import { AboutFrankie } from './components/AboutFrankie'
import WhatCanDo from './components/WhatCanDo'
import HowItWorks from './components/HowItWorks'
import { AILayer } from './components/AILayer'
import Gallery from './components/Gallery'
import { LanguageProvider } from './context/LanguageContext'

function App() {
  return (
    <LanguageProvider>
      <LanguageSelector />
      <Hero />
      <AboutFrankie />
      <Gallery />
      <WhatCanDo />
      <HowItWorks />
      <AILayer />
   </LanguageProvider> 
  )
}

export default App