import './index.css';

function Footer() {
    return(
        <footer className="footer">
            <div className='footer__wrapper container'>
                <div className="footer__content">
                    <div className="footer__banner via-antiqua-banner">
                        <h2 className="footer__title via-antiqua-title">Via Antiqua</h2>
                        <h2 className="footer__subtitle via-antiqua-subtitle">Археологические маршруты по всему миру</h2>
                    </div>
                    <ul className='footer__list'>
                        <li className='footer__item'>
                            <a className='footer__link links-list' href="#">Направления</a>
                        </li>
                        <li className='footer__item'>
                            <a className='footer__link links-list' href="#">Экспедиции</a>
                        </li>
                        <li className='footer__item'>
                            <a className='footer__link links-list' href="#">О нас</a>
                        </li>
                        <li className='footer__item'>
                            <a className='footer__link links-list' href="#">Блог</a>
                        </li>
                        <li className='footer__item'>
                            <a className='footer__link links-list' href="#">Контакты</a>
                        </li>
                    </ul>
                    <ul className="footer__icons-list">
                        <li className="footer__icon">
                            <a className="footer__icon-link" href="#">
                                <img className="footer__icon-img" src="images/facebook.svg" alt="facebook" />
                            </a>
                        </li>
                        <li className="footer__icon">
                            <a className="footer__icon-link" href="#">
                                <img className="footer__icon-img" src="images/facebook.svg" alt="twitter" />
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="footer__border-line"></div>
                <div className="footer__copyright">
                    <p className="footer__copyright-text">Copyright © 2025. Все права защищены.</p>
                    <ul className='footer__copyright-list'>
                        <li className='footer__copyright-item'>
                            <a className="footer__copyright-link" href='#'>Политика конфиденциальности</a>
                        </li>
                        <li className="footer__copyright-item"> 
                            <a className="footer__copyright-link" href='#'> Правила и условия</a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )   
}

export default Footer