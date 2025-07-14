import styles from './SectionExpeditions.module.css';
import ButtonsActions from '../ButtonsActions/ButtonsActions.jsx';

import { Link } from 'react-router-dom';

function SectionExpeditions({bottonList, tours}) {
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
                <div className={styles.section_expeditions__sort_wrapper}>
                    <input className={`${styles.section_expeditions__input} input`} type='text' placeholder='Поиск'/>
                </div>
            </div>
            <div className={styles.section_expeditions__tours_wrapper}>
                {
                    tours.map((tourItem) => (
                        <div className={styles.section_expeditions__tour} key={tourItem.id} id={tourItem.id}>
                            <img className={styles.section_expeditions__tour_img} width={358} height={206} src={tourItem.img} alt={tourItem.title}/>
                            <div className={styles.section_expeditions__tour_information}>
                                <p className={styles.section_expeditions__tour_country}>{tourItem.country}</p>
                                <Link className={styles.section_expeditions__tour_title} to={`/expeditions/${tourItem.slug}`}>{tourItem.title}</Link>
                                <p className={styles.section_expeditions__tour_description}>{tourItem.description}</p>
                            </div>
                            <div className={styles.section_expeditions__tariff_wrapper}>
                                <p className={styles.section_expeditions__tariff_text}>{tourItem.durationDays} Дней</p>
                                <p className={styles.section_expeditions__tariff_text}>От ${tourItem.price}/ чел.</p>
                                <div >
                                    <ButtonsActions />
                                </div>
                            </div>
                        </div>
                    ))
                }

            </div>
        </section>
    )
}

export default SectionExpeditions;