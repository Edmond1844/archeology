import { createRoot } from 'react-dom/client';
import './index.css';
import Hero from './components/Hero/Hero.jsx';
import SectionQuestions from './components/SectionQuestions/SectionQuestions.jsx';
import SectionSubscription from './components/SectionSubscription/SectionSubscription.jsx';
import Footer from './components/Footer/Footer.jsx';

createRoot(document.getElementById('root')).render(
  <>
    <Hero />
    <SectionQuestions />
    <SectionSubscription />
    <Footer />
  </>
)