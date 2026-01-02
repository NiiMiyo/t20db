import { renderToString } from "react-dom/server";
import * as cheerio from "cheerio";

// imports must be relative as this script is required on vite.config.ts
import Racas from "../data/racas/index.ts";

export function gerarJsonRacas(): Raca[] {
	return Racas.map( raca => {
		raca.habilidades = raca.habilidades.map( habilidade => {
			if ( typeof habilidade.texto !== "string" ) {
				const html = renderToString( habilidade.texto );
				habilidade.texto = cheerio.load( html )
					.html()

					// Adicionar quebras de linha
					.replaceAll( /<(?:br|p)(>| *?)/gm, "\n" )
					.replaceAll( /<(?:li)(>| *?)/gm, "\n• " )

					// Remover elementos HTML
					.replaceAll( /<(?:.|\n)*?>/gm, "" )

					// Remover duplicações desnecessárias
					.replaceAll( "\n\n", "\n" );
			}

			return habilidade;
		} );

		return raca;
	} );
}
