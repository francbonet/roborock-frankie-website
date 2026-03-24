import { useContext } from 'react'
import { LanguageContext } from '../contexts/LanguageContext'

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

export const t = (key: string, lang: string, translations: any): string => {
  const keys = key.split('.')
  let value = translations[lang]
  
  for (const k of keys) {
    if (value && typeof value === 'object') {
      value = value[k]
    } else {
      return key
    }
  }
  
  return typeof value === 'string' ? value : key
}