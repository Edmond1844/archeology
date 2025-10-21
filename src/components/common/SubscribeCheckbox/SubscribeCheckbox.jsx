import { useState } from "react";
import MainButton from "../MainButton/MainButton";

import styles from "./SubscribeCheckbox.module.css";

function SubscribeCheckbox() {
	const [checked, setChecked] = useState(false);

	function handleCheckbox() {
		if (checked === false) {
			setChecked(true);
		} else {
			setChecked(false);
		}
	}
	return (
		<>
			<form className={styles.subscription_form}>
				<label className={styles.subscription_form__label}>
					<input
						className={styles.subscription_form__checkbox}
						type="checkbox"
						onChange={handleCheckbox}
						checked={checked ? true : false}
					/>
					<span
						className={styles.subscription_form__text}
						style={{ color: checked ? "green" : "" }}
					>
						{checked
							? "Вы подписаны на рассылку"
							: "Вы не подписаны на рассылку"}
					</span>
				</label>
				<br />
				<MainButton
					className={`${styles.subscription_form__button} button`}
					type="submit"
					style={{ backgroundColor: checked ? "#4997d3" : "" }}
					disabled={checked ? false : true}
				>
					Отправить
				</MainButton>
			</form>
		</>
	);
}

export default SubscribeCheckbox;
