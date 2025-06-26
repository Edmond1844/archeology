import styles from "./SectionQuestions.module.css";

function SectionQuestions({questions}) {
    return (
        <section className={`${styles.section_questions} container`}>
            <div className={styles.section_questions__content}>
                <h3 className={styles.section_questions__title}>Часто задаваемые вопросы</h3>    
                <p className={styles.section_questions__text}>Что чаще всего спрашивают наши клиенты о турах и услугах.</p>
            </div> 
            {
                questions.map((questionItem) => (
                    <div className={styles.section_questions__wrapper} key={questionItem.id}>
                        <p className={styles.section_questions__question}>{questionItem.question}</p>
                        <p className={styles.section_questions__answer}>{questionItem.answer}</p>
                    </div>
                ))
            }
        </section>
    )
}

export default SectionQuestions;