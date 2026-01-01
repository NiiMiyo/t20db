import { EspiralMagica } from "@/web/components";

import styles from "./RenderHabilidade.module.less";

export function RenderHabilidade( { habilidade }: Readonly<RenderHabilidade.Props> ) {
	return <div className={ styles.habilidade }>
		<span className={ styles.nome }>{ habilidade.nome }.</span> { habilidade.texto } { habilidade.preRequisitos?.length ? <>{ " " }<i>Pré-Requisitos:</i> { habilidade.preRequisitos.join( ", " ) }.</> : null } { habilidade.magica && <EspiralMagica /> }
	</div>
}
