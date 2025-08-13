import { useState } from 'react';

import styles from './BookedTours.module.css';

function BookedTours() {
    const [isOpen, setIsOpen] = useState(false);

    function toggleButton() {
        if(isOpen === false) {
            setIsOpen(true);
        } else {
            setIsOpen(false);
        }
    }

    const buttonText = isOpen ? 'Закрыть' : 'Открыть';

    return (
        <>
            <div className={`${styles.сart_booked_tours} ${isOpen === true ? styles.cart_booked_tours__open : ''}`}>
                <button className={`${styles.сart_booked_tours__button} button`} onClick={toggleButton}>{buttonText}</button>
                <h3 className={styles.сart_booked_tours__title}>Забронированные туры</h3>
                <div className={styles.сart_booked_tours__list}></div>
            </div>
        </>
    )
}

export default BookedTours;