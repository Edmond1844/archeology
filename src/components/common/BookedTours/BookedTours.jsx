import { useState } from "react";
import MainButton from "../../common/MainButton/MainButton.jsx";

import styles from "./BookedTours.module.css";

function BookedTours({ toursItem, onRemoveTour }) {
	const total = toursItem.reduce((sum, product) => {
		return sum + product.price;
	}, 0);

	const [isOpen, setIsOpen] = useState(false);

	function toggleButton() {
		if (isOpen === false) {
			setIsOpen(true);
		} else {
			setIsOpen(false);
		}
	}

	const buttonText = isOpen ? "Закрыть" : "Открыть";

	function handleRemove(tourId) {
		if (onRemoveTour) {
			onRemoveTour(tourId);
		}
	}
	return (
		<>
			<div
				className={`${styles.сart_booked_tours} ${isOpen === true ? styles.cart_booked_tours__open : ""}`}
			>
				<MainButton variant="myBookings" onClick={toggleButton}>
					{buttonText}
				</MainButton>
				<h2 className={styles.сart_booked_tours__title}>
					Забронированные туры
				</h2>
				<div className={styles.сart_booked_tours__list}>
					<h2
						className={styles.сart_booked_tours__total}
					>{`Общая стоимость: $ ${total}`}</h2>
					{toursItem.map((item) => (
						<div
							className={styles.сart_booked_tours__item}
							key={item.id}
						>
							<img
								src={item.img}
								alt={item.country}
								width={"100%"}
								height="auto"
								loading="lazy"
							/>
							<div>
								<h3
									className={
										styles.сart_booked_tours__country
									}
								>
									{item.country}
								</h3>
								<h3
									className={
										styles.сart_booked_tours__card_title
									}
								>
									{item.title}
								</h3>
								<div
									className={styles.сart_booked_tours__price}
								>
									<p>{`$ ${item.price} / чел. `}</p>
									<p>{`${item.durationDays} Дней`}</p>
								</div>
								<MainButton
									onClick={() => handleRemove(item.id)}
									variant="buttonClear"
								>
									Удалить тур
								</MainButton>
							</div>
						</div>
					))}
				</div>
			</div>
		</>
	);
}

export default BookedTours;
