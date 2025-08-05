import Hero from '../../components/layout/Hero/Hero.jsx';
import SectionExpeditions from '../../components/sections/SectionExpeditions/SectionExpeditions.jsx';    
import SectionQuestions from '../../components/sections/SectionQuestions/SectionQuestions.jsx';
import SectionSubscription from '../../components/sections/SectionSubscription/SectionSubscription.jsx';
import ButtonsActions from '../../components/common/ButtonsActions/ButtonsActions.jsx';
import Footer from '../../components/layout/Footer/Footer.jsx';

import filterButtons from '../../data/filterButtons.js';
import archeologyTours from '../../data/tours.js';
import questions from '../../data/questions.js';

function Home() {
    return (
        <>
            <Hero />
            {/* <main>
                <SectionExpeditions bottonList={filterButtons} tours={archeologyTours}/>
                <SectionQuestions questions={questions}/>
                <SectionSubscription />
            </main>
            <Footer /> */}
        </>
    )
}

export default Home;