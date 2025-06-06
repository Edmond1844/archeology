import './index.css'

function Header() {
    return (
        <header className='header'>
            <div className='header__banner'>
                <h2 className='header__title'>Via Antiqua</h2>
                <p className='header__subtitle'>Археологические маршруты по всему миру</p>
            </div>
            <nav className='header__nav'>
                <ul className='header__nav-list'>
                    <li className='header__nav-item'>
                        <a className='header__nav-link' href="">Направления</a>
                    </li>
                    <li className='header__nav-item'>
                        <a className='header__nav-link' href="">Экспедиции</a>
                    </li>
                    <li className='header__nav-item'>
                        <a className='header__nav-link' href="">О нас</a>
                    </li>
                    <li className='header__nav-item'>
                        <a className='header__nav-link' href="">Блог</a>
                    </li>
                    <li className='header__nav-item'>
                        <a className='header__nav-link' href="">Контакты</a>
                    </li>
                </ul>
            </nav>  
            <button type='button' className="header__button">Связаться с нами</button>
        </header>
    )
}

export default Header
