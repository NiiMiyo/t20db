import Racas from "@/data/racas";
import { PageTitle } from "@/web/components";
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
					{ Object.entries( raca.atributos ).map( ( [ atributo, valor ] ) => {
						return `${ atributo } ${ valor! > 0 ? "+" : "" }${valor}`;
					} )
					.join( ", " ) }.
				</p>

				{ raca.habilidades.map( h => <HabilidadeComponent key={ h.nome } habilidade={ h } /> ) }
			</details> ) }
		</div>
	</div>;
}

export function HabilidadeComponent( { habilidade }: Readonly<HabilidadeComponentProps> ) {
	return <div className={ styles.habilidade }>
		<span className={ styles.habilidade_nome }>{ habilidade.nome }.</span> { habilidade.texto } { habilidade.magica && "🌀" }
		{ /* todo: Usar um símbolo de magia mais bonitinho */ }
	</div>
}

type HabilidadeComponentProps = {
	habilidade: Raca.Habilidade;
};
