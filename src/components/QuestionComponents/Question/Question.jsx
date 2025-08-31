import { useState } from 'react';

import styles from './Question.module.css';

import clouseArrow from '../../../images/svg/clouse-arrow.svg';
import openArrow from '../../../images/svg/open-arrow.svg';

function Question({question, answer, isActive}) {
    const [isOpen, setIsOpen] = useState(isActive);

    function toggleButton() {
        if(isOpen) {
            setIsOpen(false);
        } else {
            setIsOpen(true);
        }
    }
    return (
        <div className={styles.question__wrapper} onClick={toggleButton}>
            <h3 className={styles.question__title}>{question}</h3>
            { answer && (  
                <>
                    {isOpen ? <p className={styles.question__answer}>{answer}</p> : ''}
                    <button className={styles.question__button} style={{ backgroundColor: isOpen ? "" : "#fff" }}>
                        <img className={styles.question__button_img}  src={isOpen ? clouseArrow : openArrow}/>
                    </button>
                </>
            )}
        </div>   
    )
}

export default Question;