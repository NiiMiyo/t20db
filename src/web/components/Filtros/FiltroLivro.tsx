import { TormentaUtils } from "@/utils";

import styles from "./Filtros.module.less";

/* todo: use a better selection than <select /> for desktops */
export function FiltroLivro( props: Readonly<Filtro.Livro.Props> ) {
	const { onChange } = props;

	return <select
		multiple
		size={ TormentaUtils.Livros.length + 1 }
		onChange={ e => onSelectionChange( onChange, e ) }
		className={ styles.livro }
	>
		<optgroup label="Livros">
			{ TormentaUtils.Livros.map( livro => <option key={ livro } id={ livro }>{ livro }</option> ) }
		</optgroup>
	</select>;
}

function onSelectionChange( onChange: Filtro.Livro.Props[ "onChange" ], event: React.ChangeEvent<HTMLSelectElement> ) {
	const selectedOptions = Array.from( event.currentTarget.selectedOptions );

	onChange?.( TormentaUtils.Livros.reduce( ( obj, livro ) => {
		obj[ livro ] = selectedOptions.some( o => o.value === livro );
		return obj;
	}, {} as Filtro.Livro.Selection ) );
}
