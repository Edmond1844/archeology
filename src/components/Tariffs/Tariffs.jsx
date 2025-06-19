import styles from './Tariffs.module.css';
import Tariff from '../Tariff/Tariff.jsx';

function Tariffs() {
    return(
        <div className={styles.tariffs_wrapper}>
            {/* <Tariff 
                days={'10 Дней'}
                price={'От $1,800 / чел.'}
            /> */}
                        <Tariff 
                days={'1000000 Дней'}
                price={'От $1,800 / чел.'}
            />
        </div>
    )
}

export default Tariffs;