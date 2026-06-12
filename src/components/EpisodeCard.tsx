import React from "react";
import { useLanguage } from "../context/LanguageContext";
import { type Episode } from "../data/episodes";
import image from '../assets/TMNT.webp'

interface EpisodeCardProps {
    episode: Episode;
    onWatch: () => void; // Callback function triggered
}

// Functional component that renders a single episode card
export const EpisodeCard: React.FC<EpisodeCardProps> = ({ episode, onWatch }) => {

    const { t, language } = useLanguage()

    const isPersian = language === 'fa'

    return (
        // Clicking anywhere on the card triggers the onWatch callback
        <div
            onClick={onWatch}
            className="group bg-gray-800/30 backdrop-blur-sm rounded-xl overflow-hidden hover:transform hover:-translate-y-2 transition-all duration-300 cursor-pointer border border-green-500/30 hover:border-green-500"
        >
            {/* Thumbnail section with gradient background and play overlay */}
            <div className="aspect-video bg-gradient-to-br flex items-center justify-center relative">

                {/* Centered play button overlay - appears on top of the thumbnail */}
                <div className="absolute inset-0 flex items-center justify-center">

                    {/* Circular background that scales on group hover */}
                    <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center group-hover:scale-110 transition-all duration-300">

                        {/* Play triangle icon using CSS borders */}
                        <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-white border-b-8 border-b-transparent ml-1"></div>
                    </div>
                </div>

                {/* Episode thumbnail image*/}
                <img
                    src={image}
                    alt={t(episode.titleEn as any)}
                    className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-50 transition-opacity"
                />

                <span className="absolute bottom-2 right-2 text-xs bg-black/20 font-bold text-white px-2 py-1 rounded">
                    {episode.duration} {t('duration')}
                </span>
            </div>

            {/* Content section: title, description, and watch button */}
            <div className="p-4">
                {/* Episode title*/}
                <h3 className="text-lg font-bold text-green-400">
                    {t('episode')} {episode.id}: {isPersian ? episode.titleFa : episode.titleEn}
                </h3>

                {/* Episode description */}
                <p className="text-sm text-gray-300 mt-2 line-clamp-3">
                    {isPersian ? episode.descriptionFa : episode.descriptionEn}
                </p>

                {/* Watch button*/}
                <button
                    onClick={(e) => {
                        e.stopPropagation()
                        onWatch()
                    }}
                    className="mt-4 px-4 py-2 bg-green-600 rounded-lg text-sm font-bold hover:bg-green-500 transition-colors w-full"
                >
                    🎬 {t('watch_now')}
                </button>
            </div>
        </div>
    )
}