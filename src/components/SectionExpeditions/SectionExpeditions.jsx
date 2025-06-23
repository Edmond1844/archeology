import styles from './SectionExpeditions.module.css';
function SectionExpeditions({bottonList}) {
    return (
        <section className={styles.section_expeditions}>
            <div className={`${styles.section_expeditions__container} container`}>
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
        </section>
    )
}

export default SectionExpeditions;