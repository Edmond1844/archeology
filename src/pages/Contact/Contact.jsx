import styles from './Contact.module.css';
import { Link } from 'react-router-dom';

import Header from '../../components/Header/Header';
function Contact() {
    return (
        <>  
            <div className={styles.contacts}>
                <Header />
                <div className={`${styles.contacts__content} container`}>
                    <Link className={`${styles.contacts__link} links-list`} to='/home'>Вернуться на главную</Link>
                    <h2 className={styles.contacts__title}>Контакты</h2>
                </div>
            </div>
        </>
    )
}

export default Contact;