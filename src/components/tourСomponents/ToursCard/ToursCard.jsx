import { Link } from 'react-router-dom';
import ButtonsActions from '../../common/ButtonsActions/ButtonsActions.jsx';

import styles from "./ToursCard.module.css";

function ToursCard({ tours }) {
    return (
        <>
        <ul className={styles.tours_card}>
            {
                tours.map((tourItem) => (
                    <Link to={`/expeditions/${tourItem.slug}`}>                    
                        <li className={styles.tours_card__item}  key={tourItem.id} style={{ backgroundImage: `url(${tourItem.img})` }}>
                            <h2>{tourItem.title}</h2>
                            <div>
                                <p>{tourItem.country}</p>
                                <p>От {tourItem.price} / чел</p>
                            </div>
                        </li>
                    </Link>
                ))
            }
            {/* <ButtonsActions tours={[tourItem]}/> */}
        </ul>
        </>
    );
}

export default ToursCard;