import styles from "./SectionExpeditions.module.css";
import { useState } from "react";

import ToursList from "../../tourСomponents/ToursList/ToursList.jsx";
import ToursCard from "../../tourСomponents/ToursCard/ToursCard.jsx";
import BookedTours from "../../common/BookedTours/BookedTours.jsx";

function SectionExpeditions({ bottonList, tours }) {
	const [storeListView, setStoreListView] = useState("list");
	function handleButtonView() {
		if (storeListView === "list") {
			setStoreListView("column");
		} else {
			setStoreListView("list");
		}
	}

	const [filteredTours, setFilteredTours] = useState(tours);
	function hendleFilter(typeFilter) {
		if (typeFilter === "all") {
			setFilteredTours(tours);
		} else {
			setFilteredTours(
				tours.filter((item) => item.category.includes(typeFilter)),
			);
		}
	}
	return (
		<section className={`${styles.section_expeditions} container`}>
			<div className={styles.section_expeditions__header}>
				<div>
					<h3 className={styles.section_expeditions__title}>
						Наши экспедиции
					</h3>
					<ul className={styles.section_expeditions__list}>
						{bottonList.map((btnItem) => (
							<li
								className={styles.section_expeditions__item}
								key={btnItem.id}
							>
								<button
									className={`${styles.section_expeditions__button} button`}
									type="button"
									id={btnItem.id}
									onClick={() =>
										hendleFilter(btnItem.filterType)
									}
								>
									{btnItem.name}
								</button>
							</li>
						))}
					</ul>
				</div>
				<div>
					<input
						className={`${styles.section_expeditions__input} input`}
						type="text"
						placeholder="Поиск"
					/>
					<div>
						<button
							className={`${styles.section_expeditions__button_toggle} button`}
							onClick={handleButtonView}
						>
							{storeListView === "list"
								? "Карточками"
								: "Списком"}
						</button>
					</div>
				</div>
			</div>
			{storeListView === "list" ? (
				<ToursList tours={filteredTours} />
			) : (
				<ToursCard viewMode={storeListView} tours={filteredTours} />
			)}
			<BookedTours />
		</section>
	);
}

export default SectionExpeditions;
