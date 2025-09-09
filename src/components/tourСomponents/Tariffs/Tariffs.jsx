import styles from './Tariffs.module.css';
import Tariff from '../Tariff/Tariff.jsx';

function Tariffs() {
    return(
        <>
            <Tariff 
                days={'10 Дней'}
                price={'От $1,800 / чел.'}
            />
        </>
    )
}

export default Tariffs;