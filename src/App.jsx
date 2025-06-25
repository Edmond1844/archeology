import Hero from './components/Hero/Hero.jsx';
import SectionExpeditions from './components/SectionExpeditions/SectionExpeditions.jsx';    
// import SectionQuestions from './components/SectionQuestions/SectionQuestions.jsx';
import SectionSubscription from './components/SectionSubscription/SectionSubscription.jsx';
import Footer from './components/Footer/Footer.jsx';

import filterButtons from './data/filterButtons.js';
import archeologyTours from './data/tours.js';

function App() {
    return (
        <>
            <Hero />
            <main>
                <SectionExpeditions bottonList={filterButtons} tours={archeologyTours}/>
                {/* <SectionQuestions faq={faq}/> */}
                <SectionSubscription />
            </main>
            <Footer />
        </>
    )
}

export default App; 