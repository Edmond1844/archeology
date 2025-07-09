import styles from './MainIntro.module.css';

import { Link } from 'react-router-dom';
function MainIntro() {
    return (
        <div className={styles.main_intro__content}>
            <ul className={styles.main_intro__content_list}>
                <li className={styles.main_intro__content_item}>
                    <Link className={styles.main_intro__content_link} to="/home">Главная</Link>
                </li>
                <li className={styles.main_intro__content_item}>
                    <Link className={styles.main_intro__content_link} to="/expeditions">Экспедиции</Link>
                </li>
            </ul>
            <h2 className={styles.main_intro__content_title}>Экспедиции</h2>
        </div>
    )
}

export default MainIntro;