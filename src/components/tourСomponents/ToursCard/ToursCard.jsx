import { Link } from "react-router-dom";
import ButtonsActions from "../../common/ButtonsActions/ButtonsActions";
import styles from "./ToursCard.module.css";

function ToursCard({ filteredTours, viewMode, onBook }) {
	return (
		<>
			<li
				className={styles.tours_card__item}
				key={filteredTours.id}
				style={{ backgroundImage: `url(${filteredTours.img})` }}
			>
				<div className={styles.tours_card__wrapper}>
					<Link
						className={styles.tours_card__link}
						to={`/expeditions/${filteredTours.slug}`}
					>
						{" "}
						<h2 className={styles.tours_card__title}>
							{filteredTours.title}
						</h2>{" "}
					</Link>
					<div className={styles.tours_card__description}>
						<p className={styles.tours_card__country}>
							{filteredTours.country}
						</p>
						<p className={styles.tours_card__price}>
							От {filteredTours.price} / чел
						</p>
					</div>
					<div className={styles.tours_card__buttons}>
						<ButtonsActions
							id={filteredTours.id}
							slug={filteredTours.slug}
							buttonType="button"
							onClick={() => onBook(filteredTours)}
							viewMode={viewMode}
						/>
					</div>
				</div>
			</li>
		</>
	);
}

export default ToursCard;
