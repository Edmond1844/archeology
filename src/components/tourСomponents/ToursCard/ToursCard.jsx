import { Link } from 'react-router-dom';
import ButtonsActions from '../../common/ButtonsActions/ButtonsActions.jsx';

import styles from './ToursCard.module.css';

function ToursCard({ tours, viewMode }) {
	return (
		<>
			<ul className={styles.tours_card__list}>
				{tours.map((tourItem) => (
					<li
						className={styles.tours_card__item}
						key={tourItem.id}
						style={{ backgroundImage: `url(${tourItem.img})` }}
					>
						<div className={styles.tours_card__wrapper}>
							<Link
								className={styles.tours_card__link}
								to={`/expeditions/${tourItem.slug}`}
							>
								{' '}
								<h2 className={styles.tours_card__title}>
									{tourItem.title}
								</h2>{' '}
							</Link>
							<div className={styles.tours_card__description}>
								<p className={styles.tours_card__country}>
									{tourItem.country}
								</p>
								<p className={styles.tours_card__price}>
									От {tourItem.price} / чел
								</p>
							</div>
							<div className={styles.tours_card__buttons}>
								<ButtonsActions
									id={tourItem.id}
									slug={tourItem.slug}
									viewMode={viewMode}
									buttonType="button"
								/>
							</div>
						</div>
					</li>
				))}
			</ul>
		</>
	);
}

export default ToursCard;
