import { useParams } from 'react-router-dom';
import tours from '../../data/tours.js';

import Header from '../../components/Header/Header.jsx';

function ExpeditionPage() {
    const { slug } = useParams();
    const currentTour = tours.find(tour => tour.slug === slug);
    return (
        <>
            <Header />
            <h1>{currentTour.title}</h1>
        </>
    )
}

export default ExpeditionPage;