import { useState } from 'react';

import styles from './Question.module.css';

import clouseArrow from '../../../images/svg/clouse-arrow.svg';
import openArrow from '../../../images/svg/open-arrow.svg';

function Question({question, answer}) {
    const [isOpen, setIsOpen] = useState(false);

    function toggleButton() {
        if(isOpen === false) {
            setIsOpen(true);
        } else {
            setIsOpen(false);
        }
    }
    return (
        <div className={styles.question__wrapper} onClick={toggleButton}>
            <h3 className={styles.question__title}>{question}</h3>
            {isOpen ? <p className={styles.question__answer}>{answer}</p> : ''}
            <button className={styles.question__button} style={{ backgroundColor: isOpen ? "" : "#fff" }}>
                <img className={styles.question__button_img}  src={isOpen ? clouseArrow : openArrow}/>
            </button>
        </div>   
    )
}

export default Question;