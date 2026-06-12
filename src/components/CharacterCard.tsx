import React from "react";
import { useLanguage } from "../context/LanguageContext";
import { type Character } from "../data/characters";


interface CharacterCardProps {
    character: Character
}

export const CharacterCard: React.FC<CharacterCardProps> = ({ character }) => {
    const { t } = useLanguage()

    return (
        <div className="group bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border-2 border-transparent hover:border-green-500 transition-all duration-300 hover:transform hover:-translate-y-2 cursor-pointer"
        >

            <div className="relative overflow-hidden w-full min-h-[200px] max-h-[400px] h-auto">
                <img
                    src={character.image}
                    alt={t(character.nameKey as any)}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                        background: `linear-gradient(to top, 
                        ${character.color}40, transparent)`
                    }}
                />
            </div>

            <div className="p-4 text-center">
                <h3
                    className="text-xl font-bold mb-2"
                    style={{ color: character.color }}
                >
                    {t(character.nameKey as any)}
                </h3>

                <p className="text-gray-300 text-sm">
                    {t(character.descKey as any)}
                </p>
            </div>
        </div>
    )
}