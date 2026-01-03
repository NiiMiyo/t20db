import { HandleEspiralMagica, HandlePreRequisitos } from "../RenderHabilidade/RenderHabilidade.util";

export function ListarHabilidades( props: Readonly<ListarHabilidades.Props> ) {
	const { habilidades, tipo = "Pontos" } = props;

	if ( habilidades.length === 0 )
		return null;

	const content = habilidades.map( h => <li key={ h.nome }>
		<i>{ h.nome }</i>. { " " }{ h.texto }
		<HandlePreRequisitos habilidade={ h } />
		<HandleEspiralMagica habilidade={ h } />
	</li> );

	if ( tipo === "Pontos" )
		return <ul>{ content }</ul>;

	else
		return <ol>{ content }</ol>;
}
