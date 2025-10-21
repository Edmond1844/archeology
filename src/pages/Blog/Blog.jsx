import styles from "./Blog.module.css";

import Header from "../../components/layout/Header/Header.jsx";
import InnerPageIntro from "../../components/intro/InnerPageIntro/InnerPageIntro.jsx";

function Blog() {
	return (
		<div className={styles.blog}>
			<Header />
			<InnerPageIntro title={"Блог"} link={"Главная"} namePage={"Блог"} />
		</div>
	);
}

export default Blog;
