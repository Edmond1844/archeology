import { Routes, Route } from 'react-router-dom';
import Contact from './pages/Contact/Contact.jsx';
import Home from './pages/Home/Home.jsx';
import Expeditions from './pages/Expeditions/Expeditions.jsx';

function App() {
    return (
        <>
            {/* <Home /> */}
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/expeditions" element={<Expeditions />} />
            </Routes>
        </>
    )
    
}

export default App; 