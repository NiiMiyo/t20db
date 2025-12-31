export function isAtributo( atributo: string ): atributo is Atributo {
	switch ( atributo ) {
		case "Força":
		case "Destreza":
		case "Inteligência":
		case "Constituição":
		case "Sabedoria":
		case "Carisma":
			return true;
	
		default: return false;
	}
}
