import styles from "./SectionExpeditions.module.css";
import { useState } from "react";

import ToursList from "../../tourСomponents/ToursList/ToursList.jsx";
import ToursCard from "../../tourСomponents/ToursCard/ToursCard.jsx";
import BookedTours from "../../common/BookedTours/BookedTours.jsx";
import MainButton from "../../common/MainButton/MainButton.jsx";

function SectionExpeditions({ buttonList, tours }) {
	const [storeListView, setStoreListView] = useState("list");
	function handleButtonView() {
		if (storeListView === "list") {
			setStoreListView("column");
		} else {
			setStoreListView("list");
		}
	}

	// Фильтрация

	const [activeButton, setActiveButton] = useState("All"); // состояние активной кнопки
	const [filteredTours, setFilteredTours] = useState(tours); // состояние отфильтрованных туров
	function handlleClick(typeFilter) {
		setActiveButton(typeFilter);
		if (typeFilter === "All") {
			setFilteredTours(tours);
		} else {
			const filtered = tours.filter((item) =>
				item.category.includes(typeFilter),
			);
			setFilteredTours(filtered);
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
						{buttonList.map((btnItem) => (
							<li
								className={styles.section_expeditions__item}
								key={btnItem.id}
							>
								<MainButton
									onClick={() =>
										handlleClick(btnItem.filterType)
									}
									variant={
										activeButton === btnItem.filterType
											? "filtered_active"
											: "filtered"
									}
								>
									{btnItem.name}
								</MainButton>
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
						<MainButton
							onClick={handleButtonView}
							variant={"toggle"}
						>
							{storeListView === "list"
								? "Карточками"
								: "Списком"}
						</MainButton>
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
