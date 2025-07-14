import styles from './Directions.module.css';

import Header from '../../components/Header/Header.jsx';
import InnerPageIntro from '../../components/InnerPageIntro/InnerPageIntro.jsx';
function Directions() {
    return (
        <>
            <div className={styles.directions}>
                <Header />
                <InnerPageIntro title={'Направления'} link={'Главная'} namePage={'Направления'}/>
            </div>
        </>
    )
}

export default Directions;