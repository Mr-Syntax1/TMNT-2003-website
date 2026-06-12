import React, { useState, useEffect } from "react";
import { Layout } from "../layout/Layout";
import { EpisodeCard } from "../components/EpisodeCard";
import { EPISODES, type Episode } from "../data/episodes";
import { useLanguage } from "../context/LanguageContext";

export const EpisodePage: React.FC = () => {
    const { t, language } = useLanguage()
    const [selectedEpisode, setSelectedEpisode] = useState<Episode | null>(null)
    const [searchTerm, setSearchTerm] = useState('')
    const [filteredEpisodes, setFilteredEpisodes] = useState(EPISODES)
    const [isLoading, setIsLoading] = useState(true)

    // Search in episodes
    useEffect(() => {
        if (searchTerm.trim() === '') {
            setFilteredEpisodes(EPISODES)
        } else {
            const filtered = EPISODES.filter(episode => {
                const title = language === 'fa' ? episode.titleFa : episode.titleEn
                return title.toLowerCase().includes(searchTerm.toLowerCase())
            })
            setFilteredEpisodes(filtered)
        }
    }, [searchTerm, language])

    // loading setting
    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 500);
        return () => clearTimeout(timer)// If we go out of the page, set the animation to false.
    }, [])

    const getEpisodeTitle = (episode: Episode) => {
        return language === 'fa' ? episode.titleFa : episode.titleEn
    }

    const getEpisodeDescription = (episode: Episode) => {
        return language === 'fa' ? episode.descriptionFa : episode.descriptionEn
    }

    return (
        <Layout>
            <div className="py-8">
                {/* Header with Stats */}
                <div className="text-center mb-8">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
                        🎬 {t('episodes')}
                    </h1>
                    <p className="text-gray-600 dark:text-gray-300 text-lg">
                        {t('season1_badge')}
                    </p>

                    {/* Stats Cards */}
                    <div className="flex justify-center gap-6 mt-6">
                        <div className="bg-green-500/10 backdrop-blur-sm rounded-lg px-6 py-2 border border-green-500/30">
                            <span className="text-2xl font-bold text-green-400">10</span>
                            <span className="text-gray-400 text-sm ml-2">
                                {t('episodes_count')}
                            </span>
                        </div>
                        <div className="bg-blue-500/10 backdrop-blur-sm rounded-lg px-6 py-2 border border-blue-500/30">
                            <span className="text-2xl font-bold text-blue-400">~220</span>
                            <span className="text-gray-400 text-sm ml-2">
                                {t('minutes_count')}
                            </span>
                        </div>
                        <div className="bg-purple-500/10 backdrop-blur-sm rounded-lg px-6 py-2 border border-purple-500/30">
                            <span className="text-2xl font-bold text-purple-400">⭐ 8.7</span>
                            <span className="text-gray-400 text-sm ml-2">
                                {t('rating_label')}
                            </span>
                        </div>
                    </div>
                </div>

                {/* Search Bar */}
                <div className="max-w-md mx-auto mb-10">
                    <div className="relative">
                        <input
                            type="text"
                            placeholder={t('search_placeholder')}
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full px-5 py-3 bg-gray-800/50 border border-gray-700 rounded-xl 
                                     text-white placeholder-gray-400 focus:outline-none focus:border-green-500 
                                     transition-all duration-300 backdrop-blur-sm"
                        />
                        {searchTerm && (
                            <button
                                onClick={() => setSearchTerm('')}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                            >
                                ✕
                            </button>
                        )}
                    </div>

                    {/* Search Result Count */}
                    {searchTerm && (
                        <p className="text-center text-sm text-gray-400 mt-2">
                            {filteredEpisodes.length} {t('episodes_found')}
                        </p>
                    )}
                </div>

                {/* Video Modal The Place That Videos Play*/}
                {selectedEpisode && (
                    <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 animate-fadeIn" onClick={() => setSelectedEpisode(null)}>
                        <div className="relative w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
                            <button
                                onClick={() => setSelectedEpisode(null)}
                                className="absolute -top-12 right-0 text-white hover:text-green-500 transition-colors flex items-center gap-2"
                            >
                                <span>✕</span> <span>{t('back_to_home')}</span>
                            </button>

                            {/* Episode Info Bar */}
                            <div className="bg-gradient-to-r from-green-600/20 to-transparent rounded-t-lg px-4 py-2 flex justify-between items-center">
                                <span className="text-green-400 font-bold">
                                    {t('episode')} {selectedEpisode.id}
                                </span>
                                <span className="text-gray-300 text-sm">
                                    ⏱️ {selectedEpisode.duration} {t('duration')}
                                </span>
                            </div>

                            <div className="aspect-video bg-black rounded-b-lg overflow-hidden">
                                <iframe
                                    src={selectedEpisode.aparatEmbed.split('src="')[1].split('"')[0]}
                                    className="w-full h-full"
                                    allowFullScreen
                                    title={getEpisodeTitle(selectedEpisode)}
                                />
                            </div>
                            <div className="mt-4 text-white">
                                <h3 className="text-xl font-bold text-green-400">
                                    {getEpisodeTitle(selectedEpisode)}
                                </h3>
                                <p className="text-gray-300 mt-2 leading-relaxed">
                                    {getEpisodeDescription(selectedEpisode)}
                                </p>
                            </div>
                        </div>
                    </div>
                )}

                {/* Loading State */}
                {isLoading ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[1, 2, 3, 4, 5, 6].map((i) => (
                            <div key={i} className="bg-gray-800/30 rounded-xl animate-pulse">
                                <div className="aspect-video bg-gray-700/50 rounded-t-xl"></div>
                                <div className="p-4">
                                    <div className="h-5 bg-gray-700/50 rounded w-3/4 mb-2"></div>
                                    <div className="h-4 bg-gray-700/50 rounded w-full mb-1"></div>
                                    <div className="h-4 bg-gray-700/50 rounded w-2/3"></div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : filteredEpisodes.length === 0 ? (
                    /* No Results */
                    <div className="text-center py-20">
                        <div className="text-6xl mb-4">🔍</div>
                        <h3 className="text-xl font-bold text-gray-400 mb-2">
                            {t('no_episodes_found')}
                        </h3>
                        <p className="text-gray-500">
                            {t('no_episodes_message')}
                        </p>
                    </div>
                ) : (
                    /* Episodes Grid with Animation */
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredEpisodes.map((episode, index) => (
                            <div
                                key={episode.id}
                                style={{
                                    animationDelay: `${index * 0.05}s`,
                                    opacity: 0,
                                    animation: 'fadeInUp 0.5s ease-out forwards'
                                }}
                            >
                                <EpisodeCard
                                    episode={episode}
                                    onWatch={() => setSelectedEpisode(episode)}
                                />
                            </div>
                        ))}
                    </div>
                )}

                {/* Coming Soon Section with Progress */}
                <div className="mt-20 text-center">
                    <div className="bg-gradient-to-r from-green-500/10 to-purple-500/10 rounded-2xl p-10 border border-green-500/20">
                        <div className="text-6xl mb-4">🐢</div>
                        <p className="text-xl text-green-400 font-bold mb-3">
                            {t('more_episodes_title')}
                        </p>
                        <p className="text-gray-400 mb-6">
                            {t('more_episodes_desc')}
                        </p>

                        {/* Progress Bar */}
                        <div className="max-w-md mx-auto">
                            <div className="flex justify-between text-sm text-gray-400 mb-2">
                                <span>{t('completed_label')}</span>
                                <span>10/156</span>
                            </div>
                            <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                                <div className="bg-gradient-to-r from-green-500 to-green-400 h-2 rounded-full animate-pulse" style={{ width: '6.4%' }}></div>
                            </div>
                            <p className="text-xs text-gray-500 mt-3">
                                {t('total_episodes_info')}
                            </p>
                        </div>

                    </div>
                </div>

            </div>

            {/* Add Animation Keyframes */}
            <style>{`
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
            `}</style>
        </Layout>
    );
};