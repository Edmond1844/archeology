import { Link } from "react-router-dom";
import styles from "./InnerPageIntro.module.css";

function InnerPageIntro({ namePage, link, title }) {
	return (
		<div className={styles.intro__content}>
			<div className={styles.intro__content_wrapper}>
				<Link className={styles.intro__content_text} to="/">
					{link}
				</Link>
				<p className={styles.intro__content_text}>{namePage}</p>
			</div>
			<h2 className={styles.intro__content_title}>{title}</h2>
		</div>
	);
}

export default InnerPageIntro;
