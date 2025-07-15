import BrandingText from '../BrandingText/BrandingText.jsx';
import styels from './Footer.module.css';

import { Link } from 'react-router-dom';

function Footer() {
    return(
        <footer className={styels.footer}>
            <div className={styels.footer__wrapper}>
                <div className={styels.footer__content}>
                    <div className={styels.footer__banner}>
                        <BrandingText />
                    </div>
                    <ul className={styels.footer__list}>
                        <li className={styels.footer__item}>
                            <Link className={`${styels.footer__link} links-list`} href="#">Направления</Link>
                        </li>
                        <li className={styels.footer__item}>
                            <Link className={`${styels.footer__link} links-list`} to='/expeditions'>Экспедиции</Link>
                        </li>
                        <li className={styels.footer__item}>
                            <Link className={`${styels.footer__link} links-list`} href="#">О нас</Link>
                        </li>
                        <li className={styels.footer__item}>
                            <Link className={`${styels.footer__link} links-list`} href="#">Блог</Link>
                        </li>
                        <li className={styels.footer__item}>
                            <Link className={`${styels.footer__link} links-list`} to='/contact'>Контакты</Link>
                        </li>
                    </ul>
                    <ul className={styels.footer__icons_list}>
                        <li className={styels.footer__icon}>
                            <a className={styels.footer__icon_link} href="#">
                                <img className={styels.footer__icon_img} src="images/facebook.svg" alt="facebook" />
                            </a>
                        </li>
                        <li className={styels.footer__icon}>
                            <a className={styels.footer__icon_link} href="#">
                                <img className={styels.styelsfooter__icon_img} src="images/facebook.svg" alt="twitter" />
                            </a>
                        </li>
                    </ul>
                </div>
                <div className={styels.footer__border_line}></div>
                <div className={styels.footer__copyright}>
                    <p className={styels.footer__copyright_text}>Copyright © 2025. Все права защищены.</p>
                    <ul className={styels.footer__copyright_list}>
                        <li className={styels.footer__copyright_item}>
                            <Link className={styels.footer__copyright_link} href='#'>Политика конфиденциальности</Link>
                        </li>
                        <li className={styels.footer__copyright_item}> 
                            <Link className={styels.footer__copyright_link} href='#'> Правила и условия</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )   
}

export default Footer;