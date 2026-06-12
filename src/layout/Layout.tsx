import React from "react";
import { useLocation } from "react-router-dom";
import { Header } from './Header';
import { Footer } from "./Footer";
import { useLanguage } from "../context/LanguageContext";
import video from '../assets/intro.mp4';

interface LayoutProps {
    children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
    const { dir } = useLanguage();
    const location = useLocation();

    //Check to see if we're on the episodes page.
    const isEpisodesPage = location.pathname === '/episodes'

    return (
        <div className="relative min-h-screen text-white" dir={dir}>

            {/* Background video - only on the home page */}
            {!isEpisodesPage && (
                <div className="fixed inset-0 z-0">
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover"
                    >
                        <source src={video} type="video/mp4" />
                    </video>
                    {/* black div for better reading */}
                    <div className="absolute inset-0 bg-black/60 blur-xl"></div>
                </div>
            )}

            {/* Only on the episodes page */}
            {isEpisodesPage && (
                <>
                    {/* Dark background*/}
                    <div className="fixed inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 -z-20"></div>

                    {/* شمشیر کاتانا سمت چپ */}
                    <div className="fixed top-1/2 left-10 -translate-y-1/2 w-64 h-1 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent rotate-45 -z-10"></div>
                    <div className="fixed top-1/2 left-10 -translate-y-1/2 w-1 h-32 bg-gradient-to-b from-transparent via-blue-500/20 to-transparent -z-10" style={{ transform: 'translate(40px, -60px) rotate(45deg)' }}></div>

                    {/* شمشیر کاتانا سمت راست */}
                    <div className="fixed top-1/2 right-10 -translate-y-1/2 w-64 h-1 bg-gradient-to-l from-transparent via-red-500/20 to-transparent -rotate-45 -z-10"></div>

                    {/* عصای دوناتلو */}
                    <div className="fixed bottom-20 left-20 w-48 h-1 bg-gradient-to-r from-transparent via-purple-500/20 to-transparent rotate-12 -z-10"></div>

                    {/* نونچاکوی مایکل‌آنجلو */}
                    <div className="fixed top-20 right-20 w-32 h-1 bg-gradient-to-l from-transparent via-yellow-500/20 to-transparent -rotate-12 -z-10"></div>
                    <div className="fixed top-20 right-20 w-32 h-1 bg-gradient-to-l from-transparent via-yellow-500/20 to-transparent rotate-12 -z-10 translate-y-2"></div>
                </>
            )}

            <div className="relative z-10">
                <Header />
                <main className="container mx-auto px-4 py-8">
                    {children}
                </main>
                <Footer />
            </div>

        </div>
    )
}