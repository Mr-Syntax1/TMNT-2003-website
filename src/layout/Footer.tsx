import React from "react";
import { useLanguage } from "../context/LanguageContext";

export const Footer: React.FC = () => {
    const { t } = useLanguage()

    return (
        <footer className="bg-black/50 border-t border-green-500/30 py-8 mt-16">
            <div className="container mx-auto px-4 text-center">
                <p className="text-gray-400 text-sm">
                    TMNT Fan Site 2026©. {t('title')}
                </p>

                <p className="text-gray-500 text-xs mt-2">
                    {t('Designed_by')} GreenRose.
                </p>
            </div>
        </footer>
    )
}