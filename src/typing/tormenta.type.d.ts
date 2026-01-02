declare type LivroTormenta = "Livro Básico"
	| "Ameaças de Arton";

declare type LivroPagina = {
	nome: LivroTormenta,
	pagina: number,
};

declare type Atributo = "Força"
	| "Destreza"
	| "Inteligência"
	| "Constituição"
	| "Sabedoria"
	| "Carisma";

declare type TipoDeEfeito = "Arcano"
	| "Atordoamento"
	| "Cansaço"
	| "Climático"
	| "Cura"
	| "Dano"
	| "Divino"
	| "Luz"
	| "Mágico"
	| "Medo"
	| "Mental"
	| "Metabolismo"
	| "Metamorfose"
	| "Movimento"
	| "Perda de Vida"
	| "Sentidos"
	| "Trevas"
	| "Veneno";
