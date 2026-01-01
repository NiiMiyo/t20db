import Racas from "@/data/racas";
import { RenderHabilidade, PageTitle } from "@/web/components";
import styles from "./RacasPage.module.less";

export function RacasPage() {
	return <div>
		<PageTitle>Raças</PageTitle>
		<div>
			{ Racas.map( raca => <details key={ raca.nome } className={ styles.raca }>
				<summary className={ styles.sumario }>
					<span className={ styles.nome }>{ raca.nome }</span>
					<span className={ styles.livro }>{ raca.livro.nome } p. { raca.livro.pagina }</span>
				</summary>

				<p className={ styles.atributos }>
					{ typeof raca.atributos === "string"
						? raca.atributos
						: Object.entries( raca.atributos ).map( ( [ atributo, valor ] ) => {
							return `${ atributo } ${ valor! > 0 ? "+" : "" }${valor}`;
						} )
						.join( ", " )
					}.
				</p>

				{ raca.habilidades.map( h => <RenderHabilidade key={ h.nome } habilidade={ h } /> ) }
				<RenderHabilidade habilidade={ { nome: "Longevidade", texto: `${raca.longevidade}.`, } } />
			</details> ) }
		</div>
	</div>;
}
