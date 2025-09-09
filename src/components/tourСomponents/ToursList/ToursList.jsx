import { Link } from 'react-router-dom';

import ButtonsActions from '../../common/ButtonsActions/ButtonsActions.jsx';


import styles from './ToursList.module.css';
function ToursList({ tours }) {
    return (
        <>
            <ul className={styles.tours_list}>
                {
                    tours.map((tourItem) => (
                        <li className={styles.tour_list__item} key={tourItem.id} id={tourItem.id}>
                            <Link to={`/expeditions/${tourItem.slug}`}><img className={styles.tours_list__img} src={tourItem.img}/></Link>
                            <div className={styles.tours_list__information}>
                                <p className={styles.tours_list__country}>{tourItem.country}</p>
                                <Link className={styles.tours_list__title} to={`/expeditions/${tourItem.slug}`}>{tourItem.title}</Link>
                                    <p className={styles.tours_list__description}>{tourItem.description}</p>
                            </div>
                            <div className={styles.tours_list__tariff_wrapper}>
                                <p className={styles.tours_list__tariff_text}>{tourItem.durationDays} Дней</p>
                                <p className={styles.tours_list__tariff_text}>От ${tourItem.price}/ чел.</p>
                                <div className={styles.tours_list__tariff_button_wrapper}>
                                    <ButtonsActions tours={[tourItem]}/>
                                </div>
                            </div>
                        </li>
                    ))
                }
            </ul>
        </>
    )
}

export default ToursList;
