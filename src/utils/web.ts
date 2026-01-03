export function makeClassName( ...names: ( string | undefined | false | null )[] ) {
	return [ ...new Set( names ) ]
		.filter( n => !!n )
		.join( " " );
}

export function setState<T>( setter: ( value: T ) => unknown ) {
	return function ( event: { currentTarget: { value: T } } ) {
		setter( event.currentTarget.value );
	}
}
