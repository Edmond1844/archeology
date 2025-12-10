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

	// Фильтрация через поиск
	const [searchValue, setSearchValue] = useState("");

	const searchTours = filteredTours.filter(
		(item) =>
			item.title.toLowerCase().includes(searchValue.toLowerCase()) ||
			item.country.toLowerCase().includes(searchValue.toLowerCase()),
	);

	// Добавление в корзину и в localStorage

	function handleSearch(event) {
		setSearchValue(event.target.value);
	}

	const [addedTours, setAddedTours] = useState(
		JSON.parse(localStorage.getItem("expeditions_tours") || "[]"),
	);

	function handleBook(tourItem) {
		const isAdded = addedTours.some((item) => item.id === tourItem.id);

		if (isAdded) {
			alert("Тур уже добавлен в корзину");
			return currentTours;
		}

		setAddedTours((currentTour) => {
			const newTours = [...currentTour, tourItem];
			localStorage.setItem("expeditions_tours", JSON.stringify(newTours));

			return newTours;
		});
	}

	function handleRemoveTour(tourId) {
		setAddedTours((currentTours) => {
			const updatedTours = currentTours.filter(
				(tour) => tour.id !== tourId,
			);

			localStorage.setItem(
				"expeditions_tours",
				JSON.stringify(updatedTours),
			);

			return updatedTours;
		});
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
						onChange={handleSearch}
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
				<ul>
					{searchTours.map((filteredTour) => (
						<ToursList
							key={filteredTour.id}
							filteredTours={filteredTour}
							onBook={handleBook}
						/>
					))}
				</ul>
			) : (
				<ul className={styles.section_expeditions__tours_card_wrapper}>
					{searchTours.map((filteredTour) => (
						<ToursCard
							key={filteredTour.id}
							viewMode={storeListView}
							filteredTours={filteredTour}
							onBook={handleBook}
						/>
					))}
				</ul>
			)}
			<BookedTours
				toursItem={addedTours}
				onRemoveTour={handleRemoveTour}
			/>
		</section>
	);
}

export default SectionExpeditions;
