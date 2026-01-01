// imports must be relative as this script is required on vite.config.ts

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

import { isAtributo } from "../../utils/tormenta"

export const Racas: Raca[] = [
	humano, anao, dahllan, elfo, goblin, lefou, minotauro, qareen, golem, hynne,
	kliren, medusa, osteon, sereia_tritao, silfide, suraggel_aggelus, suraggel_sulfure,
	trog,
].map( tratarRaca ).sort( ordenarRacas );

function ordenarRacas(r1: Raca.Raca, r2: Raca.Raca): number {
	return r1.nome.localeCompare(r2.nome)
}

export function ordenarAtributos( atributos: Raca["atributos"] ): Raca["atributos"] {
	if ( typeof atributos === "string" )
		return atributos;

	const atributosList = Object.entries( atributos )
		.map( ( [ atributo, valor ] ) => ({
			nome: atributo,
			valor,
			fixo: isAtributo( atributo ),
		}) )
		.filter( ( { valor } ) => valor !== undefined )
		.sort( ( a1, a2 ) => {
			if ( a1.fixo === a2.fixo )
				return a2.valor! - a1.valor!;

			else if ( a1.fixo )
				return -1;

			else
				return 1;
		} );

	const atributosOrdenados: Raca["atributos"] = {};
	atributosList.forEach( a => {
		atributosOrdenados[ a.nome ] = a.valor;
	} );

	return atributosOrdenados;
}

function tratarRaca( raca: Raca ): Raca {
	raca.habilidades.sort( ( h1, h2 ) => h1.nome.localeCompare( h2.nome ) );
	raca.atributos = ordenarAtributos( raca.atributos );

	return raca;
}

export default Racas;
