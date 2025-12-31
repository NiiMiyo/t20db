import styles from "./PageTitle.module.less";

export function PageTitle( props: Readonly<PageTitle.Props> ) {
	return <h1 className={ styles.title }>
		{ props.children ?? "<Título da Página não definido>" }
	</h1>;
}
