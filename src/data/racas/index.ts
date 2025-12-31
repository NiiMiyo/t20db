import humano from "./humano.ts"
import anao from "./anao.ts"
import dahllan from "./dahllan.ts"
import elfo from "./elfo.ts"
import goblin from "./goblin.ts"
import lefou from "./lefou.ts"
import minotauro from "./minotauro.ts"
import qareen from "./qareen.ts"
import golem from "./golem.ts"
import hynne from "./hynne.ts"
import kliren from "./kliren.ts"
import medusa from "./medusa.ts"
import osteon from "./osteon.ts"
import sereia_tritao from "./sereia_tritao.ts"
import silfide from "./silfide.ts"
import suraggel_aggelus from "./suraggel_aggelus.ts"
import suraggel_sulfure from "./suraggel_sulfure.ts"
import trog from "./trog.ts"

export const Racas: Raca[] = [
	humano, anao, dahllan, elfo, goblin, lefou, minotauro, qareen, golem, hynne,
	kliren, medusa, osteon, sereia_tritao, silfide, suraggel_aggelus, suraggel_sulfure,
	trog,
].sort( ( r1, r2 ) => r1.nome.localeCompare( r2.nome ) );

export default Racas;
