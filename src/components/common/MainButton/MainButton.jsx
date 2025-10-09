import styles from "./MainButton.module.css";

function MainButton({ children, variant, onClick }) {
	const buttonClass =
		variant === "contact"
			? styles.main_button_contact
			: variant === "filtered"
				? styles.main_button_filtered
				: variant === "filtered_active"
					? `${styles.main_button_filtered_active} ${styles.main_button_filtered}`
					: variant === "toggle"
						? styles.main_button_toggle
						: "";

	return (
		<button className={`${buttonClass} button`} onClick={onClick}>
			{children}
		</button>
	);
}

export default MainButton;
