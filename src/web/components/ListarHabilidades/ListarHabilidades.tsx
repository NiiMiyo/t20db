import { HandleEspiralMagica, HandlePreRequisitos } from "../RenderHabilidade/RenderHabilidade.util";

export function ListarHabilidades( props: Readonly<ListarHabilidades.Props> ) {
	const { habilidades } = props;

	if ( habilidades.length === 0 )
		return null;

	return <ul>
		{ habilidades.map( h => <li key={ h.nome }>
			<i>{ h.nome }</i>. { " " }{ h.texto }
			<HandlePreRequisitos habilidade={ h } />
			<HandleEspiralMagica habilidade={ h } />
		</li> ) }
	</ul>;
}
