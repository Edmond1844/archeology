import styles from "./SectionSubscription.module.css";

function SectionSubscription() {
    return (
        <section className={styles.section_subscription}>
            <div className={`${styles.section_subscription__wrapper} container`}></div>
            <h3 className={styles.section_subscription__title}>Начни свое приключение</h3>
            <p className={styles.section_subscription__text}>Подпишись на нашу рассылку и получай эксклюзивные предложения, инсайдерские советы и вдохновение для путешествий. Не пропусти новые открытия — присоединяйся к нашей рассылке уже сегодня!</p>
            <form className={styles.section_subscription__form} action="#">
                <input className={`${styles.section_subscription__input} input`}   name="email"  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" placeholder='Введите свой email ...'  type="email"/>
                <button className={styles.section_subscription__button} type='submit'>Подписаться</button>
            </form>
        </section>
    )
}

export default SectionSubscription;