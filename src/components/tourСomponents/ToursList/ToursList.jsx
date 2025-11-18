import { Link } from "react-router-dom";

import ButtonsActions from "../../common/ButtonsActions/ButtonsActions.jsx";

import styles from "./ToursList.module.css";
function ToursList({ filteredTours, onBook }) {
	return (
		<>
			<div className={styles.tour__item}>
				<Link to={`/expeditions/${filteredTours.slug}`}>
					<picture>
						<source
							srcSet={filteredTours.img}
							media="(min-width: 400px)"
							width={"100%"}
							height={300}
						/>
						<img
							className={styles.tours__img}
							src={filteredTours.img}
						/>
					</picture>
				</Link>
				<div className={styles.tours__information}>
					<p className={styles.tours__country}>
						{filteredTours.country}
					</p>
					<Link
						className={styles.tours__title}
						to={`/expeditions/${filteredTours.slug}`}
					>
						{filteredTours.title}
					</Link>
					<p className={styles.tours__description}>
						{filteredTours.description}
					</p>
				</div>
				<div className={styles.tours__tariff_wrapper}>
					<p className={styles.tours__tariff_text}>
						{filteredTours.durationDays} Дней
					</p>
					<p className={styles.tours__tariff_text}>
						От ${filteredTours.price}/ чел.
					</p>
					<div className={styles.tours__tariff_button_wrapper}>
						<ButtonsActions
							id={filteredTours.id}
							slug={filteredTours.slug}
							buttonType="button"
							onClick={() => onBook(filteredTours)}
						/>
					</div>
				</div>
			</div>
		</>
	);
}
export default ToursList;
