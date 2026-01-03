import { useMemo, useState } from "react";

import Racas from "@/data/racas";
import { RenderHabilidade, PageTitle, Filtros } from "@/web/components";
import { RacaUtils, StringUtils, WebUtils } from "@/utils";

import styles from "./RacasPage.module.less";

export function RacasPage() {
	const [ filtroTexto, setFiltroTexto ] = useState( "" );

	const { racasExibidas, exibir } = useMemo( () => {
		let racasExibidas = Racas.map( r => ({ ...r, exibir: true, }) );

		if ( filtroTexto ) racasExibidas.forEach( r => {
			r.exibir = StringUtils.includesIgnoreCaseIgnoreDiacritics( r.nome, filtroTexto );
		} )

		return {
			racasExibidas,
			exibir: racasExibidas.some( r => r.exibir ),
		};
	}, [ filtroTexto ] );

	return <div>
		<PageTitle>Raças</PageTitle>
		<div className={ styles.filtros }>
			<Filtros.FiltroTexto
				onChange={ WebUtils.setState( setFiltroTexto ) }
				placeholder="Nome..."
			/>
		</div>

		<div>
			{ exibir
				? racasExibidas.map( raca => <details key={ raca.nome } className={ styles.raca } style={ { display: raca.exibir ? undefined : "none" } }>
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
