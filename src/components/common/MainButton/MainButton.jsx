import styles from "./MainButton.module.css";

function MainButton({ children, variant, ...props }) {
	const buttonClass =
		variant === "contact"
			? styles.main_button_contact
			: variant === "filtered"
				? styles.main_button_filtered
				: variant === "filtered_active"
					? `${styles.main_button_filtered_active} ${styles.main_button_filtered}`
					: variant === "toggle"
						? styles.main_button_toggle
						: variant === "bookingToggle"
							? styles.main_button_add_booked
							: variant === "myBookings"
								? styles.main_button_booked
								: variant === "subscribeToggle"
									? styles.main_button_subscription
									: "";

	return (
		<button className={`${buttonClass} button`} {...props} type="button">
			{children}
		</button>
	);
}

export default MainButton;
