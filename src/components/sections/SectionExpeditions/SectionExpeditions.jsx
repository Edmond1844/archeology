import styles from './SectionExpeditions.module.css';
import { useState } from 'react';

import ToursList from '../../tourСomponents/ToursList/ToursList.jsx';
import ToursCard from '../../tourСomponents/ToursCard/ToursCard.jsx';
import BookedTours from '../../common/BookedTours/BookedTours.jsx';

function SectionExpeditions({bottonList, tours}) {
    const [storeListView, setStoreListView] = useState("list");
    function handleButtonView() {
        if (storeListView === "list") {
            setStoreListView("column");
        } else {
            setStoreListView("list");
        }
    }
    return (
        <section className={`${styles.section_expeditions} container`}>
            <div className={styles.section_expeditions__header}>
                <div>
                    <h3 className={styles.section_expeditions__title}>Наши экспедиции</h3>
                    <ul className={styles.section_expeditions__list}>
                        {
                            bottonList.map((btnItem) => (
                                <li className={styles.section_expeditions__item} key={btnItem.id}>
                                    <button className={`${styles.section_expeditions__button} button`} type='button' id={btnItem.id}>{btnItem.name}</button>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div>
                    <input className={`${styles.section_expeditions__input} input`} type='text' placeholder='Поиск'/>
                    <div>
                        <button className={`${styles.section_expeditions__button_cards} button`} onClick={handleButtonView}>{storeListView === "list" ? "Списком" : "Карточками"}</button>
                    </div>   
                </div>
            </div>
            <div className={styles.section_expeditions__tours_wrapper}> 
                {storeListView === "list" ?(<ToursCard tours={tours}/>) : (<ToursList tours={tours} />)}
            </div>
            <BookedTours />
        </section>
    )
}

export default SectionExpeditions;

