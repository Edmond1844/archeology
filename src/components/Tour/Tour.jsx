import styles from './Tour.module.css';
import Tariffs from '../Tariffs/Tariffs.jsx';

function Tour({country, title, description}) {
    return (
        <>
            <div> 
                <p className={styles.tour__country}>{country}</p>
                <h3 className={styles.tour__title}>{title}</h3> 
                <p className={styles.tour__description}>{description}</p>
            </div>
            <Tariffs />
        </>
    )
}

export default Tour;