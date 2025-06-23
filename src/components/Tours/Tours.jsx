import Tour from "../Tour/Tour.jsx";
import styles from "./Tours.module.css";
// import Tariffs from "../Tariffs/Tariffs.jsx";

function Tours({tours}) {
    return (
        <section className={styles.section_tours}>
            {
                tours.map((itemTour) => (
                    <div className={styles.section_tour__wrapper} key={itemTour.id}>
                        <p>{itemTour.title}</p>
                        <Tour /> 
                    </div>
                ))
            }
            {/* <div className={styles.section_tours__wrapper}>
                <Tour 
                    country={'Перу'}
                    title={'Уанчако и север Перу'}
                    description={'Север Перу и территория вокруг Уанчако были заселены более 3500 лет назад. Этот район привлекает внимание всего мира благодаря статьям в National Geographic и журнале Archeology о местах жертвоприношений в культуре Чиму.'}
                />
            </div>
            <div className={styles.section_tours__wrapper}>
                <Tour 
                    country={'Греция'}
                    title={'Эхо Афин: по следам философов и богов'}
                    description={'Север Перу и территория вокруг Уанчако были заселены более 3500 лет назад. Этот район привлекает внимание всего мира благодаря статьям в National Geographic и журнале Archeology о местах жертвоприношений в культуре Чиму.'}
                />
            </div>
            <div className={styles.section_tours__wrapper}>
                <Tour 
                    country={'Ирак'}
                    title={'Под песками Месопотамии'}
                    description={'Познакомьтесь с колыбелью человеческой цивилизации, пройдя по древним руинам Вавилона, Ура и других шумерских городов, где зародились письменность, первые города-государства и мифы, повлиявшие на культуру всего мира.'}
                />
            </div> */}
        </section>
    )
}

export default Tours;