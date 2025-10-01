import { Link } from 'react-router-dom';

import ButtonsActions from '../../common/ButtonsActions/ButtonsActions.jsx';

import styles from './ToursList.module.css';
function ToursList({ tours }) {
	return (
		<>
			{tours.map((tourItem) => (
				<div
					className={styles.tour__item}
					key={tourItem.id}
					id={tourItem.id}
				>
					<Link to={`/expeditions/${tourItem.slug}`}>
						<img className={styles.tours__img} src={tourItem.img} />
					</Link>
					<div className={styles.tours__information}>
						<p className={styles.tours__country}>
							{tourItem.country}
						</p>
						<Link
							className={styles.tours__title}
							to={`/expeditions/${tourItem.slug}`}
						>
							{tourItem.title}
						</Link>
						<p className={styles.tours__description}>
							{tourItem.description}
						</p>
					</div>
					<div className={styles.tours__tariff_wrapper}>
						<p className={styles.tours__tariff_text}>
							{tourItem.durationDays} Дней
						</p>
						<p className={styles.tours__tariff_text}>
							От ${tourItem.price}/ чел.
						</p>
						<div className={styles.tours__tariff_button_wrapper}>
							<ButtonsActions
								id={tourItem.id}
								slug={tourItem.slug}
								buttonType="button"
							/>
						</div>
					</div>
				</div>
			))}
		</>
	);
}

export default ToursList;
