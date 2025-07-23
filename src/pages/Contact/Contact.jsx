import styles from './Contact.module.css';

import Header from '../../components/layout/Header/Header.jsx';
import InnerPageIntro from '../../components/intro/InnerPageIntro/InnerPageIntro.jsx'
function Contact() {
    return (
        <>  
            <div className={styles.contacts}>
                <Header />
                <InnerPageIntro title={'Контакты'} link={'Главная'} namePage={'Контакты'}/>
            </div>
        </>
    )
}

export default Contact;