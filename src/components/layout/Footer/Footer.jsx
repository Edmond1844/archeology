import BrandingText from "../../common/BrandingText/BrandingText.jsx";
import styles from "./Footer.module.css";

import { Link } from "react-router-dom";

function Footer() {
	return (
		<footer className={styles.footer}>
			<div className={`${styles.footer__wrapper} container`}>
				<div className={styles.footer__content}>
					<div className={styles.footer__banner}>
						<BrandingText />
					</div>
					<ul className={styles.footer__list}>
						<li className={styles.footer__item}>
							<Link
								className={`${styles.footer__link} links-list`}
								href="#"
							>
								Направления
							</Link>
						</li>
						<li className={styles.footer__item}>
							<Link
								className={`${styles.footer__link} links-list`}
								to="/expeditions"
							>
								Экспедиции
							</Link>
						</li>
						<li className={styles.footer__item}>
							<Link
								className={`${styles.footer__link} links-list`}
								href="#"
							>
								О нас
							</Link>
						</li>
						<li className={styles.footer__item}>
							<Link
								className={`${styles.footer__link} links-list`}
								href="#"
							>
								Блог
							</Link>
						</li>
						<li className={styles.footer__item}>
							<Link
								className={`${styles.footer__link} links-list`}
								to="/contact"
							>
								Контакты
							</Link>
						</li>
					</ul>
					<ul className={styles.footer__icons_list}>
						<li className={styles.footer__icon}>
							<a className={styles.footer__icon_link} href="#">
								<img
									className={styles.footer__icon_img}
									src="images/facebook.svg"
									alt="facebook"
								/>
							</a>
						</li>
						<li className={styles.footer__icon}>
							<a className={styles.footer__icon_link} href="#">
								<img
									className={styles.footer__icon_img}
									src="images/facebook.svg"
									alt="twitter"
								/>
							</a>
						</li>
					</ul>
				</div>
				<div className={styles.footer__border_line}></div>
				<div className={styles.footer__copyright}>
					<p className={styles.footer__copyright_text}>
						Copyright © 2025. Все права защищены.
					</p>
					<ul className={styles.footer__copyright_list}>
						<li className={styles.footer__copyright_item}>
							<Link
								className={styles.footer__copyright_link}
								href="#"
							>
								Политика конфиденциальности
							</Link>
						</li>
						<li className={styles.footer__copyright_item}>
							<Link
								className={styles.footer__copyright_link}
								href="#"
							>
								{" "}
								Правила и условия
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
