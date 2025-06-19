import styles from './Header.module.css';

function Header() {
    return (
        <header className={`${styles.header} container}`}>
            <div className={`${styles.header__banner} via-antiqua-banner`}>
                <h2 className={`${styles.header__title} via-antiqua-title`}>Via Antiqua</h2>
                <h1 className={`${styles.header__subtitle} via-antiqua-subtitle`}>Археологические маршруты по всему миру</h1>
            </div>
            <nav className={styles.header__nav}>
                <ul className={styles.header__nav_list}>
                    <li className={styles.header__nav_item}>
                        <a className={`${styles.header__nav_link} links-list`} href="#">Направления</a>
                    </li>
                    <li className={styles.header__nav_item}>
                        <a className={`${styles.header__nav_link} links-list`} href="#">Экспедиции</a>
                    </li>
                    <li className={styles.header__nav_item}>
                        <a className={`${styles.header__nav_link} links-list`} href="#">О нас</a>
                    </li>
                    <li className={styles.header__nav_item}>
                        <a className={`${styles.header__nav_link} links-list`} href="#">Блог</a>
                    </li>
                    <li className={styles.header__nav_item}>
                        <a className={`${styles.header__nav_link} links-list`} href="#">Контакты</a>
                    </li>
                </ul>
            </nav>  
            <button className={styles.header__button} type='button'>Связаться с нами</button>
        </header>
    )
}

export default Header
