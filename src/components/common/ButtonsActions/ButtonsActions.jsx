import { Link } from "react-router-dom";
import { useState } from "react";
import MainButton from "../MainButton/MainButton";
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
			<MainButton variant="bookingToggle" onClick={handleClick}>
				{" "}
				{isBooked ? "Бронировать" : "Убрать бронь"}
			</MainButton>
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
