import styles from "./AboutUs.module.css";

import Header from "../../components/layout/Header/Header.jsx";
import InnerPageIntro from "../../components/intro/InnerPageIntro/InnerPageIntro.jsx";

function AboutUs() {
	return (
		<div className={styles.about_us}>
			<Header />
			<InnerPageIntro
				title={"О нас"}
				link={"Главная"}
				namePage={"О нас"}
			/>
		</div>
	);
}

export default AboutUs;
