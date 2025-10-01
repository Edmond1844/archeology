import { Link } from "react-router-dom";
import { useState } from "react";

import styles from "./ButtonsActions.module.css";

function ButtonsActions({ slug, id, buttonType, viewMode }) {
	const [isBooked, setIsBooked] = useState(false);

	function handleClick() {
		if (isBooked === false) {
			setIsBooked(true);
		} else {
			setIsBooked(false);
		}
	}

	return (
		<>
			<button
				className={`${styles.book_button} button`}
				onClick={handleClick}
				type="button"
			>
				{isBooked ? "Бронировать" : "Убрать бронь"}
			</button>

			<Link
				to={`/expeditions/${slug}`}
				key={id}
				className={`${styles.details_button} ${viewMode === "column" ? styles.details_button_column : ""}`}
				type={buttonType}
			>
				Подробнее
			</Link>
		</>
	);
}

export default ButtonsActions;
