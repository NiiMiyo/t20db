import { isAtributo } from "./tormenta";

export function ordenarAtributos( raca: Raca ): Raca {
	if ( typeof raca.atributos !== "string" ) {
		const atributosList = Object.entries( raca.atributos )
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

		raca.atributos = atributosList.reduce( ( obj, atributo ) => {
			obj[ atributo.nome ] = atributo.valor;
			return obj;
		}, {} as Exclude<Raca["atributos"], string> );
	}

	return raca;
}

export function ordenarRacas( r1: Raca, r2: Raca ): number {
	return r1.nome.localeCompare(r2.nome)
}

export function textoAtributos( raca: Pick<Raca, "atributos"> ): string {
	if ( typeof raca.atributos === "string" )
		return `${raca.atributos}.`;

	return Object.entries( raca.atributos ).map( ( [ atributo, valor ] ) => {
		if ( isAtributo( atributo ) )
			return `${ atributo } ${ valor! > 0 ? "+" : "" }${valor}`;

		else
			return `${ valor! > 0 ? "+" : "" }${valor} em ${ atributo }`;
	} )
	.join( ", " ) + ".";
}
