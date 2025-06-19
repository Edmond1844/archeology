import './index.css';

function SectionSubscription() {
    return (
        <section className="section-subscription">
            <h3 className="section-subscription__title">Начни свое приключение</h3>
            <p className="section-subscription__text">Подпишись на нашу рассылку и получай эксклюзивные предложения, инсайдерские советы и вдохновение для путешествий. Не пропусти новые открытия — присоединяйся к нашей рассылке уже сегодня!</p>
            <form className='section-subscription__form ' action="#">
                <input className="section-subscription__input "   name="email"  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" placeholder='Введите свой email ...'  type="email"/>
                <button className="section-subscription__button" type='submit'>Подписаться</button>
            </form>
        </section>
    )
}

export default SectionSubscription