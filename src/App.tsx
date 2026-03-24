import './App.css'
import LanguageSelector from './components/LanguageSelector'
import Hero from './components/Hero'
import { AboutFrankie } from './components/AboutFrankie'
import WhatCanDo from './components/WhatCanDo'
import HowItWorks from './components/HowItWorks'
import { LanguageProvider } from './context/LanguageContext'

function App() {
  return (
    <LanguageProvider>
      <LanguageSelector />
      <Hero />
      <AboutFrankie />
      <WhatCanDo />
      <HowItWorks />
   </LanguageProvider> 
  )
}

export default App