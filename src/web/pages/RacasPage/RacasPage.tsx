import Racas from "@/data/racas";
import { RenderHabilidade, PageTitle } from "@/web/components";
import styles from "./RacasPage.module.less";
import { textoAtributos } from "@/utils/racas";

export function RacasPage() {
	return <div>
		<PageTitle>Raças</PageTitle>
		<div>
			{ Racas.map( raca => <details key={ raca.nome } className={ styles.raca }>
				<summary className={ styles.sumario }>
					<span className={ styles.nome }>{ raca.nome }</span>
					<span className={ styles.livro }>{ raca.livro.nome } p. { raca.livro.pagina }</span>
				</summary>

				<RenderHabilidade habilidade={ {
					nome: textoAtributos( raca ),
					texto: <></>,
				} }/>

				{ raca.habilidades.map( h => <RenderHabilidade key={ h.nome } habilidade={ h } /> ) }
				<RenderHabilidade habilidade={ { nome: "Longevidade", texto: `${raca.longevidade}.`, } } />
			</details> ) }
		</div>
	</div>;
}
