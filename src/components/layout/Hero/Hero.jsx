import styles from "./Hero.module.css";
import Header from "../../layout/Header/Header.jsx";
import MainIntro from "../../intro/MainIntro/MainIntro.jsx";

function Hero() {
	return (
		<div className={styles.hero}>
			<Header />
			<MainIntro />
		</div>
	);
}

export default Hero;
