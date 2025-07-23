import styles from './Directions.module.css';

import Header from '../../components/layout/Header/Header.jsx';
import InnerPageIntro from '../../components/intro/InnerPageIntro/InnerPageIntro.jsx';
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