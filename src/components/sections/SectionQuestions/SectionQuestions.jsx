import styles from "./SectionQuestions.module.css";

import QuestionAnswer from "../../QuestionComponents/QuestionAnswer/QuestionAnswer.jsx";


function SectionQuestions() {
    return (
        <section className={styles.section_questions}>
            <div className={`${styles.section_questions__content_wrapper} container`}>
                <div className={styles.section_questions__content}>
                    <h3 className={styles.section_questions__title}>Часто задаваемые вопросы</h3>    
                    <p className={styles.section_questions__text}>Что чаще всего спрашивают наши клиенты о турах и услугах.</p>
                </div> 
                <QuestionAnswer />
            </div>
        </section>
    )
}

export default SectionQuestions;
