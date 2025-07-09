import { Link } from 'react-router-dom';

import styles from './Expeditions.module.css';
import Header from '../../components/Header/Header';

function Expeditions() {
    return (
        <> 
            <div className={styles.expeditions}>
                <Header />
                <div className={`${styles.expeditions__content} container`}>
                    <Link className={`${styles.expeditions__link} links-list`} to='/home'>Вернуться на главную</Link>
                    <h2 className={styles.expeditions__title}>Экспедиции</h2>
                </div>
            </div>
        </>
    )
}

export default Expeditions;