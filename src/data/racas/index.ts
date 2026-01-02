// imports must be relative as this script is required on vite.config.ts
import { ordenarAtributos, ordenarRacas } from "../../utils/racas";

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
import bugbear from "./bugbear.ts"
import centauro from "./centauro.ts"
import ceratops from "./ceratops.ts"
import elfo_do_mar from "./elfo_do_mar.ts"
import finntroll from "./finntroll.ts"
import gnoll from "./gnoll.ts"
import golem_desperto from "./golem_desperto.tsx"
import harpia from "./harpia.ts"
import hobgoblin from "./hobgoblin.ts"
import kallyanach from "./kallyanach.tsx"
import kaijin from "./kaijin.ts"
import kappa from "./kappa.ts"
import kobolds from "./kobolds.tsx"
import mashin from "./mashin.tsx"
import meio_orc from "./meio_orc.ts"
import minauro from "./minauro.ts"
import moreau_coruja from "./moreau_coruja.ts"
import moreau_hiena from "./moreau_hiena.ts"
import moreau_raposa from "./moreau_raposa.ts"
import moreau_serpente from "./moreau_serpente.ts"
import moreau_bufalo from "./moreau_bufalo.ts"
import moreau_coelho from "./moreau_coelho.ts"
import moreau_crocodilo from "./moreau_crocodilo.ts"
import moreau_gato from "./moreau_gato.ts"
import moreau_leao from "./moreau_leao.ts"
import moreau_lobo from "./moreau_lobo.ts"
import moreau_morcego from "./moreau_morcego.ts"
import moreau_urso from "./moreau_urso.ts"
import nagah_macho from "./nagah_macho.ts"
import nagah_femea from "./nagah_femea.ts"
import nezumi from "./nezumi.ts"
import ogro from "./ogro.ts"
import orc from "./orc.ts"
import pteros from "./pteros.ts"
import soterrado from "./soterrado.ts"
import tabrachi from "./tabrachi.ts"
import tengu from "./tengu.ts"
import trog_anao from "./trog_anao.ts"
import velocis from "./velocis.ts"
import voracis from "./voracis.ts"
import yidishan from "./yidishan.ts"

export const Racas: Raca[] = [
	humano, anao, dahllan, elfo, goblin, lefou, minotauro, qareen, golem, hynne,
	kliren, medusa, osteon, sereia_tritao, silfide, suraggel_aggelus, suraggel_sulfure,
	trog, bugbear, centauro, ceratops, elfo_do_mar, finntroll, gnoll, golem_desperto,
	harpia, hobgoblin, kallyanach, kaijin, kappa, kobolds, mashin, meio_orc, minauro,
	moreau_coruja, moreau_hiena, moreau_raposa, moreau_serpente, moreau_bufalo,
	moreau_coelho, moreau_crocodilo, moreau_gato, moreau_leao, moreau_lobo, moreau_morcego,
	moreau_urso, nagah_macho, nagah_femea, nezumi, ogro, orc, pteros, soterrado,
	tabrachi, tengu, trog_anao, velocis, voracis, yidishan,
].map( ordenarAtributos ).sort( ordenarRacas );

export default Racas;
