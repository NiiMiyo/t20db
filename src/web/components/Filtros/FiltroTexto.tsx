import { makeClassName } from "@/utils/web";

import styles from "./Filtros.module.less";

export function FiltroTexto( props: Readonly<Filtros.TextoProps> ) {
	return <input
		{ ...props }
		type="text"
		className={ makeClassName( styles.texto, props.className ) }
	/>
}
