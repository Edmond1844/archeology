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
	function handleClick(typeFilter) {
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

	const [addedTours, setAddedTours] = useState([]);

	function handleBook(tourItem) {
		setAddedTours((currentTours) => [...currentTours, tourItem]);
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
										handleClick(btnItem.filterType)
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
			{storeListView === "list"
				? filteredTours.map((filteredTour) => (
						<ToursList
							key={filteredTour.id}
							filteredTours={filteredTour}
							onBook={handleBook}
						/>
					))
				: filteredTours.map((filteredTour) => (
						<ToursCard
							key={filteredTour.id}
							viewMode={storeListView}
							filteredTours={filteredTour}
						/>
					))}
			<BookedTours toursItem={addedTours} />
		</section>
	);
}

export default SectionExpeditions;
