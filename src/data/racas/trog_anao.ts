import trog from "./trog";

export default {
	...trog,

	nome: "Trog Anão",
	atributos: {
		...trog.atributos,
		Destreza: -1,
	},
	habilidades: [
		trog.habilidades[0],
		trog.habilidades[1],
		trog.habilidades[3],
		{
			nome: "Quase Anão",
			texto: "Você é uma criatura do tipo monstro e recebe visão no escuro e +1 PV por nível. Além disso, seu deslocamento é 6m (em vez de 9m), mas não é reduzido por uso de armadura ou excesso de carga.",
		},
	],
	livro: {
		nome: "Ameaças de Arton",
		pagina: 39,
	},
} as const satisfies Raca;
