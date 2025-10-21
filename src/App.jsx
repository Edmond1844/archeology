import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import ExpeditionPage from "./pages/ExpeditionPage/ExpeditionPage.jsx";
import Directions from "./pages/Directions/Directions.jsx";
import AboutUs from "./pages/AboutUs/AboutUs.jsx";
import Blog from "./pages/Blog/Blog.jsx";
import Contact from "./pages/Contact/Contact.jsx";

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/directions" element={<Directions />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/expeditions/:slug" element={<ExpeditionPage />} />
				<Route path="/about-us" element={<AboutUs />} />
				<Route path="/blog" element={<Blog />} />
			</Routes>
		</>
	);
}

export default App;
