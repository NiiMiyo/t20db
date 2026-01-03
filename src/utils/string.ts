export function removeDiacritics( text: string ) {
	return text.normalize( "NFKD" )
		.replaceAll( /[\u0300-\u036f]/g , "" );
}

export function includesIgnoreCaseIgnoreDiacritics( outer: string, inner: string ) {
	return removeDiacritics( outer.toLocaleUpperCase() ).includes( removeDiacritics( inner.toLocaleUpperCase() ) );
}
