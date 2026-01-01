import EspiralMagica from "../EspiralMagica";

export function HandlePreRequisitos( { habilidade }: Readonly<RenderHabilidade.Props> ) {
	if ( habilidade.preRequisitos?.length )
		return <>{ " " }<i>Pré-Requisitos:</i> { habilidade.preRequisitos }.</>;

	else
		return null;
}

export function HandleEspiralMagica( { habilidade }: Readonly<RenderHabilidade.Props> ) {
	if ( habilidade.magica )
		return <>{ " " }<EspiralMagica /></>;
}
