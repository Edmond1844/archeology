import { useState } from "react";
import MainButton from "../../common/MainButton/MainButton.jsx";

import styles from "./BookedTours.module.css";

function BookedTours() {
	const [isOpen, setIsOpen] = useState(false);

	function toggleButton() {
		if (isOpen === false) {
			setIsOpen(true);
		} else {
			setIsOpen(false);
		}
	}

	const buttonText = isOpen ? "Закрыть" : "Открыть";

	return (
		<>
			<div
				className={`${styles.сart_booked_tours} ${isOpen === true ? styles.cart_booked_tours__open : ""}`}
			>
				<MainButton variant="myBookings" onClick={toggleButton}>
					{buttonText}
				</MainButton>
				<h3 className={styles.сart_booked_tours__title}>
					Забронированные туры
				</h3>
				<div className={styles.сart_booked_tours__list}></div>
			</div>
		</>
	);
}

export default BookedTours;
