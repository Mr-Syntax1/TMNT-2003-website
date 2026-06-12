import React, { createContext, useContext, useState, useEffect } from "react";
import { translations, type TranslationKey } from "../data/translations";

// Define supported language types
type Language = 'fa' | 'en'


interface LanguageContextType {
    language: Language;           // Current active language
    setLanguage: (lang: Language) => void  // Function to change language
    t: (key: TranslationKey) => string     // Translation function
    dir: 'rtl' | 'ltr'           // Text direction
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)


export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {

    // Initialize language state from localStorage or default to English
    const [language, setLanguage] = useState<Language>(() => {
        const saved = localStorage.getItem('TMNT-Language')
        return (saved as Language) || 'en'
    })

    // Update localStorage and HTML document attributes whenever language changes
    useEffect(() => {
        localStorage.setItem('TMNT-Language', language)
        document.documentElement.dir = language === 'fa' ? 'rtl' : 'ltr'  // Set text direction
        document.documentElement.lang = language  // Set HTML language attribute
    }, [language])

    // Translation function: returns translated text or falls back to English or the key itself
    const t = (key: TranslationKey): string => {
        return translations[language][key] || translations.en[key] || key
    }

    // Determine text direction based on language
    const dir = language === 'fa' ? 'rtl' : 'ltr'

    // Provide context value to all children components
    return (
        <LanguageContext.Provider value={{ language, setLanguage, t, dir }}>
            {children}
        </LanguageContext.Provider>
    )
}

// Custom hook to easily access language context anywhere in the app
export const useLanguage = () => {
    const context = useContext(LanguageContext)
    if (!context) throw new Error('useLanguage must be used within LanguageProvider')
    return context
}