import { Link } from "react-router";
import { FaHome } from "react-icons/fa";

import { PagesHref } from "@/web/pages";

import styles from "./PageTitle.module.less";

export function PageTitle( props: Readonly<PageTitle.Props> ) {
	return <header className={ styles.header }>
		<Link to={ PagesHref.home } className={ styles.home }>
			<FaHome />
		</Link>

		<h1 className={ styles.title }>
			{ props.children ?? "<Título da Página não definido>" }
		</h1>

		{/* todo: add global filter button */}
		<div />
	</header>;
}
