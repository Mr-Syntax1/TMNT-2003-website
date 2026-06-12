import React from "react";
import { useLanguage } from "../context/LanguageContext";

export const LanguageToggle: React.FC = () => {
    const { language, setLanguage } = useLanguage()

    const toggleLanguage = () => {
        setLanguage(language === 'fa' ? 'en' : 'fa')
    }

    return (
        <button
            onClick={toggleLanguage}
            className="px-3 py-1 rounded-lg bg-gray-200 dark:bg-gray-700 font-medium transition-all duration-300 hover:scale-105"
        >
            {language === 'fa' ? 'EN' : 'FA'}
        </button>
    )
}