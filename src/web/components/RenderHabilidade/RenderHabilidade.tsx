import { HandleEspiralMagica, HandlePreRequisitos, HandleTipoEfeito } from "./RenderHabilidade.util";

import styles from "./RenderHabilidade.module.less";

export function RenderHabilidade( { habilidade }: Readonly<RenderHabilidade.Props> ) {
	return <div className={ styles.habilidade }>
		<span className={ styles.nome }>{ habilidade.nome }{ habilidade.nome.match( /[A-Z]$/i ) && "." }</span>
		{ " " }{ habilidade.texto }
		<HandlePreRequisitos habilidade={ habilidade } />
		<HandleEspiralMagica habilidade={ habilidade } />
		<HandleTipoEfeito habilidade={ habilidade } />
	</div>;
}
