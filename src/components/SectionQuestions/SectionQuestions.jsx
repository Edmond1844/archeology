import './index.css';

function SectionQuestions({faq}) {
    return (
        <section className="section-questions">
            <div className="section-questions__content">
                <h3 className="section-questions__title">Часто задаваемые вопросы</h3>    
                <p className="section-questions__text">Что чаще всего спрашивают наши клиенты о турах и услугах.</p>
            </div> 

            {
                faq.map((item) =>(
                    <div className="section-questions__item" key={item.id}>
                        <p className="section-questions__question">{item.question}</p>
                        <p className="section-questions__answer">{item.answer}</p>
                    </div>
                ))
            }
        </section>
    )
}

export default SectionQuestions;