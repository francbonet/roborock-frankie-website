import { useState, useEffect } from 'react'
import { translations } from '../content/translations'

type Language = 'ca' | 'es' | 'en'
type TranslationKey = string

const STORAGE_KEY = 'preferred-language'

const getBrowserLanguage = (): Language => {
  const browserLang = navigator.language.split('-')[0]
  if (browserLang === 'ca' || browserLang === 'es' || browserLang === 'en') {
    return browserLang
  }
  return 'ca' // default
}

const getInitialLanguage = (): Language => {
  const stored = localStorage.getItem(STORAGE_KEY) as Language | null
  return stored || getBrowserLanguage()
}

export const useLanguage = () => {
  const [language, setLanguage] = useState<Language>(getInitialLanguage)

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, language)
    document.documentElement.lang = language
  }, [language])

  const t = (key: TranslationKey): string => {
    const keys = key.split('.')
    let value: any = translations[language]
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k]
      } else {
        return key
      }
    }
    
    return typeof value === 'string' ? value : key
  }

  return { language, setLanguage, t }
}