import { useMemo, useState } from "react";

import Racas from "@/data/racas";
import { RenderHabilidade, PageTitle, Filtros } from "@/web/components";
import { RacaUtils, StringUtils } from "@/utils";

import styles from "./RacasPage.module.less";
import { makeClassName } from "@/utils/web";

export function RacasPage() {
	const [ filtroTexto, setFiltroTexto ] = useState( "" );
	const [ filtroLivro, setFiltroLivro ] = useState<Filtro.Livro.Selection>();

	const { racasExibidas, exibir } = useMemo( () => {
		let racasExibidas = Racas.map( r => ({ ...r, exibir: true, }) );

		if ( filtroTexto ) racasExibidas.forEach( r => {
			r.exibir = StringUtils.includesIgnoreCaseIgnoreDiacritics( r.nome, filtroTexto );
		} )

		if ( filtroLivro && Object.values( filtroLivro ).some( Boolean ) ) racasExibidas.forEach( r => {
			r.exibir = r.exibir && filtroLivro[ r.livro.nome ];
		} );

		return {
			racasExibidas,
			exibir: racasExibidas.some( r => r.exibir ),
		};
	}, [ filtroTexto, filtroLivro ] );

	return <div>
		<PageTitle>Raças</PageTitle>
		<div className={ styles.filtros }>
			<Filtros.FiltroTexto onChange={ setFiltroTexto } placeholder="Nome..." />
			<Filtros.FiltroLivro onChange={ setFiltroLivro } />
		</div>

		<div>
			{ exibir
				? racasExibidas.map( raca => <details key={ raca.nome } className={ makeClassName( styles.raca, raca.exibir || styles.oculto ) }>
					<summary className={ styles.sumario }>
						<span className={ styles.nome }>{ raca.nome }</span>
						<span className={ styles.livro }>{ raca.livro.nome } p. { raca.livro.pagina }</span>
					</summary>

					<RenderHabilidade habilidade={ {
						nome: RacaUtils.textoAtributos( raca ),
						texto: <></>,
					} }/>

					{ raca.habilidades.map( h => <RenderHabilidade key={ h.nome } habilidade={ h } /> ) }
					<RenderHabilidade habilidade={ { nome: "Longevidade", texto: `${raca.longevidade}.`, } } />
				</details> )
				: <p className={ styles.filtro_fail }><i>Nenhuma raça encontrada com o(s) filtro(s) indicado.</i></p> }
		</div>
	</div>;
}
