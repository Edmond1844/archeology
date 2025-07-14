import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home.jsx';
import Directions from './pages/Directions/Directions.jsx';
import Contact from './pages/Contact/Contact.jsx';
import ExpeditionPage from './pages/ExpeditionPage/ExpeditionPage.jsx';
function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/directions" element={<Directions />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/expeditions/:slug" element={<ExpeditionPage />} />
            </Routes>
        </>
    )
}

export default App; 