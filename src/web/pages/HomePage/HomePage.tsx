import { Link } from "react-router-dom";

import { PagesHref } from "@/web/pages";
import styles from "./HomePage.module.less";

export function HomePage() {
	return <div>
		<h1 className={ styles.title }>Base de dados T20</h1>
		<Link to={ PagesHref.racas } className={ styles.link }>Raças</Link>
	</div>
}
