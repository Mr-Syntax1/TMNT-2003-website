import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./context/LanguageContext";
import { HomePage } from "./pages/HomePage";
import { EpisodePage } from "./pages/EpisodesPage";
import { ScrollToTop } from "./components/scrollToTop";

function App() {
    return (
        <LanguageProvider>
            <BrowserRouter>
                <ScrollToTop />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/episodes" element={<EpisodePage />} />
                </Routes>
            </BrowserRouter>
        </LanguageProvider>
    )
}

export default App;