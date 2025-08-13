import styles from "./SectionQuestions.module.css";
import { useState } from "react";

function SectionQuestions({questions}) {
    const [isOpen, setIsOpen] = useState(false);

    function toggleButton() {
        if(isOpen === false) {
            setIsOpen(true);
        } else {
            setIsOpen(false);
        }
    }

    return (
        <section className={styles.section_questions}>
            <div className={`${styles.section_questions__content_wrapper} container`}>
                <div className={styles.section_questions__content}>
                    <h3 className={styles.section_questions__title}>Часто задаваемые вопросы</h3>    
                    <p className={styles.section_questions__text}>Что чаще всего спрашивают наши клиенты о турах и услугах.</p>
                </div> 
                {
                    questions.map((questionItem) => (
                        <div className={styles.section_questions__wrapper} key={questionItem.id}>
                            <p className={styles.section_questions__question}>{questionItem.question}</p>
                            <p className={isOpen === false ? `${styles.section_questions__answer} ${styles.section_questions__answer_hidden}` : `${styles.section_questions__answer} ${styles.section_questions__answer_visible}`}>
                                {questionItem.answer}
                            </p>
                            <button className={`${styles.section_questions__button_toggle} button`} onClick={toggleButton} type="button">
                                {isOpen === false ? 'Показать ответ' : 'Скрыть ответ'}
                            </button>
                        </div>
                    ))
                }
            </div>
            
        </section>
    )
}

export default SectionQuestions;
