export function makeClassName( ...names: ( string | undefined | false | null )[] ) {
	return [ ...new Set( names ) ]
		.filter( n => !!n )
		.join( " " );
}
