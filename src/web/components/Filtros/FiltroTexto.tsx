import { makeClassName } from "@/utils/web";

import styles from "./Filtros.module.less";

export function FiltroTexto( props: Readonly<Filtro.Texto.Props> ) {
	const { onChange, className, ...rawProps } = props;

	return <input
		{ ...rawProps }
		type="text"
		className={ makeClassName( styles.texto, className ) }
		onChange={ element => {
			onChange?.( element.currentTarget.value );
		} }
	/>
}
