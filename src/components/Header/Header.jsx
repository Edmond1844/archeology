import './index.css'

function Header() {
    return (
        <header className='header'>
            <div className='header__banner via-antiqua-banner'>
                <h2 className='header__title via-antiqua-title'>Via Antiqua</h2>
                <h1 className='header__subtitle  via-antiqua-subtitle'>Археологические маршруты по всему миру</h1>
            </div>
            <nav className='header__nav'>
                <ul className='header__nav-list'>
                    <li className='header__nav-item'>
                        <a className='header__nav-link links-list' href="#">Направления</a>
                    </li>
                    <li className='header__nav-item'>
                        <a className='header__nav-link links-list' href="#">Экспедиции</a>
                    </li>
                    <li className='header__nav-item'>
                        <a className='header__nav-link links-list' href="#">О нас</a>
                    </li>
                    <li className='header__nav-item'>
                        <a className='header__nav-link links-list' href="#">Блог</a>
                    </li>
                    <li className='header__nav-item'>
                        <a className='header__nav-link links-list' href="#">Контакты</a>
                    </li>
                </ul>
            </nav>  
            <button type='button' className="header__button">Связаться с нами</button>
        </header>
    )
}

export default Header
