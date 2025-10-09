import { NavLink } from "react-router-dom";
import { useState } from "react";

import styles from "./Header.module.css";
import BrandingText from "../../common/BrandingText/BrandingText.jsx";
import MainButton from "../../common/MainButton/MainButton.jsx";
// import ButtonContactUs from "../../common/ButtonContactUs/ButtonContactUs.jsx";

import iconPhone from "../../../images/svg/icon-phone.svg";
import iconBurger from "../../../images/svg/icon-menu.svg";
import iconClose from "../../../images/svg/icon-close.svg";

function Header() {
	const [isOpen, setIsOpen] = useState(false);
	function toggleButton() {
		setIsOpen(!isOpen);
	}

	const buttonBurger = isOpen ? iconClose : iconBurger;

	return (
		<header className={styles.header}>
			<div className={`${styles.header__wrapper_content} container`}>
				<div className={`${styles.header__banner} via-antiqua-banner`}>
					<BrandingText />
				</div>
				<nav className={styles.header__nav}>
					<ul className={styles.header__nav_list}>
						<li className={styles.header__nav_item}>
							<NavLink
								className={`${styles.header__nav_link} links-list`}
								to="/directions"
							>
								Направления
							</NavLink>
						</li>
						<li className={styles.header__nav_item}>
							<NavLink
								className={`${styles.header__nav_link} links-list`}
								to="/"
							>
								Экспедиции
							</NavLink>
						</li>
						<li className={styles.header__nav_item}>
							<NavLink
								className={`${styles.header__nav_link} links-list`}
								href="#"
							>
								О нас
							</NavLink>
						</li>
						<li className={styles.header__nav_item}>
							<NavLink
								className={`${styles.header__nav_link} links-list`}
								href="#"
							>
								Блог
							</NavLink>
						</li>
						<li className={styles.header__nav_item}>
							<NavLink
								className={`${styles.header__nav_link} links-list`}
								to="/contact"
							>
								Контакты
							</NavLink>
						</li>
					</ul>
				</nav>
				<MainButton variant="contact">Связаться с нами</MainButton>
				{/* <ButtonContactUs /> */}
				<button className={styles.header__button_icon}>
					<img src={iconPhone} />
				</button>
				<button
					className={styles.header__button_icon}
					onClick={toggleButton}
				>
					<img src={buttonBurger} />
				</button>
				<div
					className={`${styles.header__burger_menu} ${isOpen ? styles.header__burger_menu_open : ""}`}
				>
					<ul className={styles.header__nav_list}>
						<li className={styles.header__nav_item}>
							<NavLink
								className={`${styles.header__nav_link} links-list`}
								to="/directions"
							>
								Направления
							</NavLink>
						</li>
						<li className={styles.header__nav_item}>
							<NavLink
								className={`${styles.header__nav_link} links-list`}
								to="/"
							>
								Экспедиции
							</NavLink>
						</li>
						<li className={styles.header__nav_item}>
							<NavLink
								className={`${styles.header__nav_link} links-list`}
								href="#"
							>
								О нас
							</NavLink>
						</li>
						<li className={styles.header__nav_item}>
							<NavLink
								className={`${styles.header__nav_link} links-list`}
								href="#"
							>
								Блог
							</NavLink>
						</li>
						<li className={styles.header__nav_item}>
							<NavLink
								className={`${styles.header__nav_link} links-list`}
								to="/contact"
							>
								Контакты
							</NavLink>
						</li>
					</ul>
				</div>
			</div>
		</header>
	);
}

export default Header;
