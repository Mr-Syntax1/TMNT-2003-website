import React, { useEffect, useRef } from "react";
import { Layout } from "../layout/Layout";
import { CharacterCard } from "../components/CharacterCard";
import { CHARACTERS } from "../data/characters";
import { useLanguage } from "../context/LanguageContext";
import image from '../assets/TMNT-4K.jpg'
import { Link } from "react-router-dom";

export const HomePage: React.FC = () => {
    const { t } = useLanguage()
    const sectionsRef = useRef<HTMLDivElement[]>([])

    const addToRefs = (el: HTMLDivElement | null) => {
        if (el && !sectionsRef.current.includes(el)) {
            sectionsRef.current.push(el)
        }
    }

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('opacity-100', 'translate-y-0')
                        entry.target.classList.remove('opacity-0', 'translate-y-10')
                    }
                })
            },
            { threshold: 0.1 }
        )

        sectionsRef.current.forEach((section) => {
            if (section) observer.observe(section)
        })

        return () => observer.disconnect()

    }, [])

    return (
        <Layout>
            {/* Hero Section */}
            <section
                ref={addToRefs}
                className="min-h-[80vh] flex flex-col items-center justify-center text-center opacity-0 translate-y-10 transition-all duration-700"
            >
                <div className="relative">
                    <div className="absolute inset-0 bg-green-500 blur-3xl opacity-20 animate-pulse"></div>

                    <img
                        src={image}
                        alt="TMNT"
                        className="relative w-[30rem] md:w-[40rem] lg:w-[50rem] m-auto rounded-2xl shadow-2xl border-4 border-green-500 mb-8 hover:scale-105 transition-transform duration-500"
                    />
                </div>

                <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-green-500 to-green-300 bg-clip-text text-transparent md-4">
                    {t('title')}
                </h1>

                <p className="text-xl text-gray-300 mb-8 max-w-2xl">
                    {t('subtitle')}
                </p>

                <Link to="/episodes"
                    className="px-8 py-3 bg-gradient-to-r from-green-600 to-green-500 text-white rounded-full font-bold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-green-500/50"
                >
                    {t('start_adventure')}
                </Link>
            </section>

            {/* About Section */}
            <section
                id="about"
                ref={addToRefs}
                className="py-20 opacity-0 translate-y-10 transition-all duration-700"
            >
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-green-500">
                    {t('about_series')}
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                    {[
                        { icon: '🎬', title: t('high_quality'), desc: t('high_quality_desc') },
                        { icon: '🎵', title: t('great_voice'), desc: t('great_voice_desc') },
                        { icon: '📱', title: t('mobile_friendly'), desc: t('mobile_friendly_desc') }
                    ].map((feature, idx) => (
                        <div
                            key={idx}
                            className="bg-white/10 dark:bg-gray-700/30 backdrop-blur-sm p-6 pb-14 rounded-xl text-center hover:bg-white/20 transition-all duration-300 hover:transform h-72 flex justify-around flex-col hover:-translate-y-2"
                        >
                            <div className="text-4xl mb-4">
                                {feature.icon}
                            </div>

                            <h3 className="text-2xl lg:text-3xl font-bold mb-2 text-green-400">
                                {feature.title}
                            </h3>

                            <p className="text-gray-300 font-bold">
                                {feature.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Characters Section */}
            <section
                id="characters"
                ref={addToRefs}
                className="py-20 opacity-0 translate-y-10 transition-all duration-700"
            >
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-green-500">
                    {t('characters')}
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
                    {CHARACTERS.map((character) => (
                        <CharacterCard key={character.id} character={character} />
                    ))}
                </div>
            </section>
        </Layout>
    )
} 