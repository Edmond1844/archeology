import Hero from "../../components/layout/Hero/Hero.jsx";
import SectionExpeditions from "../../components/sections/SectionExpeditions/SectionExpeditions.jsx";
import SectionQuestions from "../../components/sections/SectionQuestions/SectionQuestions.jsx";
import SectionSubscription from "../../components/sections/SectionSubscription/SectionSubscription.jsx";
import Footer from "../../components/layout/Footer/Footer.jsx";

import filterButtons from "../../data/filterButtons.js";
import archeologyTours from "../../data/tours.js";

function Home() {
	return (
		<>
			<Hero />
			<main>
				<SectionExpeditions
					buttonList={filterButtons}
					tours={archeologyTours}
				/>
				<SectionQuestions />
				<SectionSubscription />
			</main>
			<Footer />
		</>
	);
}

export default Home;
