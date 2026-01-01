import { HandleEspiralMagica, HandlePreRequisitos } from "./RenderHabilidade.util";

import styles from "./RenderHabilidade.module.less";

export function RenderHabilidade( { habilidade }: Readonly<RenderHabilidade.Props> ) {
	return <div className={ styles.habilidade }>
		<span className={ styles.nome }>{ habilidade.nome }</span>
		{ " " }{ habilidade.texto }
		<HandlePreRequisitos habilidade={ habilidade } />
		<HandleEspiralMagica habilidade={ habilidade } />
	</div>;
}
