import { useParams } from "react-router-dom";
import tours from "../../data/tours.js";

import styles from "./ExpeditionPage.module.css";

import Header from "../../components/layout/Header/Header.jsx";
import InnerPageIntro from "../../components/intro/InnerPageIntro/InnerPageIntro.jsx";
import SubscribeCheckbox from "../../components/common/SubscribeCheckbox/SubscribeCheckbox.jsx";

function ExpeditionPage() {
	const { slug } = useParams();
	const currentTour = tours.find((tour) => tour.slug === slug);

	return (
		<>
			<Header />
			<div
				className={styles.expedition_page}
				style={{ backgroundImage: `url(${currentTour.imgPage})` }}
			>
				<InnerPageIntro title={currentTour.country} />
			</div>
			<div
				className={`${styles.expedition_page__wrapper_content} container`}
			>
				<h1 className={styles.expedition_page__title}>
					{currentTour.title}
				</h1>
				<p className={styles.expedition_page__subtitle}>
					{currentTour.description}
				</p>
				<SubscribeCheckbox />
			</div>
		</>
	);
}

export default ExpeditionPage;
