import './App.css'
import LanguageSelector from './components/LanguageSelector'
import Hero from './components/Hero'
import { AboutFrankie } from './components/AboutFrankie'
import WhatCanDo from './components/WhatCanDo'
import { LanguageProvider } from './context/LanguageContext'

function App() {
  return (
    <LanguageProvider>
      <LanguageSelector />
      <Hero />
      <AboutFrankie />
      <WhatCanDo />
   </LanguageProvider> 
  )
}

export default App