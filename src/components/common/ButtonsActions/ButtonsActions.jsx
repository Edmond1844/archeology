import { Link } from 'react-router-dom';
import { useState } from 'react';

import styles from './ButtonsActions.module.css';   

import BookedTours  from '../BookedTours/BookedTours.jsx';

function ButtonsActions({ tours = [] }) { 
    const [text, setText] = useState('Бронировать');

    function handleClick() {    
        const buttonState = text ==='Бронировать';

        buttonState ? setText('Убрать бронь') : setText('Бронировать');
    }
    
    return (
        <>
            <button className={`${styles.book_button} button`} onClick={handleClick} type="button">{text}</button>
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