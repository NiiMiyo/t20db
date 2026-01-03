// imports must be relative as this script is required on vite.config.ts
import { ordenarAtributos, ordenarRacas } from "../../utils/racas";

import humano from "./humano"
import anao from "./anao"
import dahllan from "./dahllan"
import elfo from "./elfo"
import goblin from "./goblin"
import lefou from "./lefou"
import minotauro from "./minotauro"
import qareen from "./qareen"
import golem from "./golem"
import hynne from "./hynne"
import kliren from "./kliren"
import medusa from "./medusa"
import osteon from "./osteon"
import sereia_tritao from "./sereia_tritao"
import silfide from "./silfide"
import suraggel_aggelus from "./suraggel_aggelus"
import suraggel_sulfure from "./suraggel_sulfure"
import trog from "./trog"
import bugbear from "./bugbear"
import centauro from "./centauro"
import ceratops from "./ceratops"
import elfo_do_mar from "./elfo_do_mar"
import finntroll from "./finntroll"
import gnoll from "./gnoll"
import golem_desperto from "./golem_desperto"
import harpia from "./harpia"
import hobgoblin from "./hobgoblin"
import kallyanach from "./kallyanach"
import kaijin from "./kaijin"
import kappa from "./kappa"
import kobolds from "./kobolds"
import mashin from "./mashin"
import meio_orc from "./meio_orc"
import minauro from "./minauro"
import moreau_coruja from "./moreau_coruja"
import moreau_hiena from "./moreau_hiena"
import moreau_raposa from "./moreau_raposa"
import moreau_serpente from "./moreau_serpente"
import moreau_bufalo from "./moreau_bufalo"
import moreau_coelho from "./moreau_coelho"
import moreau_crocodilo from "./moreau_crocodilo"
import moreau_gato from "./moreau_gato"
import moreau_leao from "./moreau_leao"
import moreau_lobo from "./moreau_lobo"
import moreau_morcego from "./moreau_morcego"
import moreau_urso from "./moreau_urso"
import nagah_macho from "./nagah_macho"
import nagah_femea from "./nagah_femea"
import nezumi from "./nezumi"
import ogro from "./ogro"
import orc from "./orc"
import pteros from "./pteros"
import soterrado from "./soterrado"
import tabrachi from "./tabrachi"
import tengu from "./tengu"
import trog_anao from "./trog_anao"
import velocis from "./velocis"
import voracis from "./voracis"
import yidishan from "./yidishan"
import duende from "./duende";
import eiradaan from "./eiradaan";
import galokk from "./galokk";
import meio_elfo from "./meio_elfo";
import satiro from "./satiro";

export const Racas: Raca[] = [
	humano, anao, dahllan, elfo, goblin, lefou, minotauro, qareen, golem, hynne,
	kliren, medusa, osteon, sereia_tritao, silfide, suraggel_aggelus, suraggel_sulfure,
	trog, bugbear, centauro, ceratops, elfo_do_mar, finntroll, gnoll, golem_desperto,
	harpia, hobgoblin, kallyanach, kaijin, kappa, kobolds, mashin, meio_orc, minauro,
	moreau_coruja, moreau_hiena, moreau_raposa, moreau_serpente, moreau_bufalo,
	moreau_coelho, moreau_crocodilo, moreau_gato, moreau_leao, moreau_lobo, moreau_morcego,
	moreau_urso, nagah_macho, nagah_femea, nezumi, ogro, orc, pteros, soterrado,
	tabrachi, tengu, trog_anao, velocis, voracis, yidishan, duende, eiradaan,
	galokk, meio_elfo, satiro,
].map( ordenarAtributos ).sort( ordenarRacas );

export default Racas;
