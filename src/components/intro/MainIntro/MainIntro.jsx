import styles from './MainIntro.module.css';

import InnerPageIntro from '../InnerPageIntro/InnerPageIntro.jsx';
import ButtonContactUs from '../../common/ButtonContactUs/ButtonContactUs.jsx';
function MainIntro() {
    return (
        <>
            <InnerPageIntro  title={'Экспедиции'} link={'Главная'} namePage={'Экспедиции'} />
            <ButtonContactUs />
        </>
    )
}

export default MainIntro;