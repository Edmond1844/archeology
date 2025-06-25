import styles from './ButtonsActions.module.css';
function ButtonsActions() {
    return(
        <>
            <button className={`${styles.book_button} button`} type='button'>Бронировать</button>
            <button className={`${styles.details_button} button`} type='button'>Подробнее</button>
        </>
    )
}

export default ButtonsActions;