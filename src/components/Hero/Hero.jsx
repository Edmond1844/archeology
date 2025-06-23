import styles from './Hero.module.css';
import Header from '../Header/Header.jsx';

function Hero() {
    return (
        <div className={styles.hero}>
            <Header />
            <div className={styles.hero__content}>
                <ul className={styles.hero__content_list}>
                    <li className={styles.hero__content_item}>
                        <a className={styles.hero__content_link} href="#">Главная</a>
                    </li>
                    <li className={styles.hero__content_item}>
                        <a className={styles.hero__content_link} href="#">Экспедиции</a>
                    </li>
                </ul>
                <h2 className={styles.hero__content_title}>Экспедиции</h2>
            </div>
        </div>
    )
}

export default Hero;