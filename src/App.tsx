import { HashRouter, Routes, Route } from "react-router-dom";

// import { BrowserRouter, Routes, Route } from "react-router-dom";
// === Use this line for standard starting (without GitHub Pages): ===

import { LanguageProvider } from "./context/LanguageContext";
import { HomePage } from "./pages/HomePage";
import { EpisodePage } from "./pages/EpisodesPage";
import { ScrollToTop } from "./components/scrollToTop";

function App() {
    return (
        <LanguageProvider>
            <HashRouter>
                {/* <BrowserRouter> */}
                {/* For normal mode ^^ */}

                <ScrollToTop />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/episodes" element={<EpisodePage />} />
                </Routes>
            </HashRouter>

            {/* </BrowserRouter> */}
        </LanguageProvider>
    )
}

export default App;