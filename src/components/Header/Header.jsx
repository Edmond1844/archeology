import styles from './Header.module.css';
import BrandingText from '../BrandingText/BrandingText.jsx';
import { NavLink } from 'react-router-dom';

function Header() {
    return (
        <header className={`${styles.header} container`}>
            <div className={`${styles.header__banner} via-antiqua-banner`}>
                <BrandingText />
            </div>
            <nav className={styles.header__nav}>
                <ul className={styles.header__nav_list}>
                    <li className={styles.header__nav_item}>
                        <NavLink className={`${styles.header__nav_link} links-list`} href="#">Направления</NavLink>
                    </li>
                    <li className={styles.header__nav_item}>
                        <NavLink className={`${styles.header__nav_link} links-list`} to='/expeditions'>Экспедиции</NavLink>
                    </li>
                    <li className={styles.header__nav_item}>
                        <NavLink className={`${styles.header__nav_link} links-list`} href="#">О нас</NavLink>
                    </li>
                    <li className={styles.header__nav_item}>
                        <NavLink className={`${styles.header__nav_link} links-list`} href="#">Блог</NavLink>
                    </li>
                    <li className={styles.header__nav_item}>
                        <NavLink className={`${styles.header__nav_link} links-list`} to='/contact'>Контакты</NavLink>
                    </li>
                </ul>
            </nav>  
            <button className={styles.header__button} type='button'>Связаться с нами</button>
        </header>
    )
}

export default Header
