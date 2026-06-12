import React, { useState } from "react";
import { Link } from "react-router-dom";
import { LanguageToggle } from "../components/LanguageToggle";
import { useLanguage } from "../context/LanguageContext";

export const Header: React.FC = () => {
    const { t } = useLanguage()
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const navItems = [
        { href: "/", label: t('welcome'), isLink: true },
        { href: "/#about", label: t('about_series'), isLink: false },
        { href: "/#characters", label: t('characters'), isLink: false },
        { href: "/episodes", label: t('episodes'), isLink: true },
    ]

    // For rendering links
    const renderNavItem = (item: typeof navItems[0]) => {
        if (item.isLink) {
            return (
                <Link
                    key={item.href}
                    to={item.href}
                    className="text-gray-300 hover:text-green-400 transition-colors duration-300"
                    onClick={() => setIsMenuOpen(false)}
                >
                    {item.label}
                </Link>
            )
        } else {
            return (
                <a
                    key={item.href}
                    href={item.href}
                    className="text-gray-300 hover:text-green-400 transition-colors duration-300"
                    onClick={() => setIsMenuOpen(false)}
                >
                    {item.label}
                </a>
            )
        }
    }

    return (
        <header className="sticky top-0 z-50 bg-gray-900/80 backdrop-blur-md borer-b border-green-500/30">
            <nav className="container mx-auto px-4 py-4">
                <div className="flex justify-between items-center">
                    <Link to="/" className="flex items-center gap-2 group">
                        <span className="text-2xl animate-spin-slow">
                            🐢
                        </span>
                        <span className="text-xl font-bold bg-gradient-to-r from-green-500 to-green-300 bg-clip-text text-transparent">
                            TMNT 2003
                        </span>
                    </Link>

                    {/* Desktop menu */}
                    <div className="hidden md:flex items-center gap-6">
                        {navItems.map(item => renderNavItem(item))}
                    </div>

                    <div className="flex items-center gap-3">
                        <LanguageToggle />

                        {/* Hamburger menu */}
                        <button
                            className="md:hidden p-2 text-gray-300"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>

                    </div>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden mt-4 pt-4 border-t border-gray-700">
                        {navItems.map(item => {
                            if (item.isLink) {
                                return (
                                    <Link
                                        key={item.href}
                                        to={item.href}
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        {item.label}
                                    </Link>
                                )
                            } else {
                                return (
                                    <a
                                        key={item.href}
                                        href={item.href}
                                        className="block py-2 text-gray-300 hover:text-green-500 transition-colors"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        {item.label}
                                    </a>
                                )
                            }
                        })}
                    </div>
                )}
            </nav>
        </header>
    )
}