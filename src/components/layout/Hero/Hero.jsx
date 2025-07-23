import styles from './Hero.module.css';
import Header from '../../layout/Header/Header.jsx';
import MainIntro from '../../intro/MainIntro/MainIntro.jsx';
import heroImage from '../../../images/hero.png';

console.log(MainIntro)

function Hero() {
    return (
        <div className={styles.hero} style={{ backgroundImage: `url(${heroImage})`}}>
            <Header />
            <MainIntro />
        </div>
    )
}

export default Hero;