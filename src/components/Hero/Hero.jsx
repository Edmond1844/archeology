import styles from './Hero.module.css';
import Header from '../Header/Header.jsx';
import MainIntro from '../MainIntro/MainIntro.jsx';

console.log(MainIntro)

function Hero() {
    return (
        <div className={styles.hero}>
            <Header />
            <MainIntro />
        </div>
    )
}

export default Hero;