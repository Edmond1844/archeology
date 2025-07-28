import { Link } from 'react-router-dom';

import styles from './ButtonsActions.module.css';   

function ButtonsActions({ tours = [] }) { 
    return (
        <>
        <button className={`${styles.book_button} button`} type="button">Бронировать</button>
        {
            tours.map((item) => (
                <Link to={`/expeditions/${item.slug}`} key={item.id}>
                    <button className={`${styles.details_button} button`} type="button">Подробнее</button>
                </Link>
            ))
        }
        </>
    );
}

export default ButtonsActions;