import './App.css'
import LanguageSelector from './components/LanguageSelector'
import Hero from './components/Hero'
import { LanguageProvider } from './context/LanguageContext'

function App() {
  return (
    <LanguageProvider>
      <LanguageSelector />
      <Hero />
   </LanguageProvider> 
  )
}

export default App