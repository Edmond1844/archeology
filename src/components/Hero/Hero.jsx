import './index.css';
import Header from '../Header/Header';

function Hero() {
    return (
        <div className="hero">
            <Header />
            <div className="hero__content">
                <ul className='hero__content-list'>
                    <li className='hero__content-item'>
                        <a className='hero__content-link' href="#">Главная</a>
                    </li>
                    <li className='hero__content-item'>
                        <a className='hero__content-link' href="#">Экспедиции</a>
                    </li>
                </ul>
                <h2 className='hero__content-title'>Экспедиции</h2>
            </div>
        </div>
    )
}

export default Hero