export default {
	nome: "Ogro",
	atributos: {
		Força: 3,
		Constituição: 2,
		Inteligência: -1,
		Carisma: -1,
	},
	habilidades: [
		{
			nome: "Quanto Maior o Tamanho...",
			texto: "Você é um humanoide do subtipo gigante; seu tamanho é Grande e você recebe visão na penumbra.",
		},
		{
			nome: "...Maior a Porrada!",
			texto: "Quando acerta um ataque corpo a corpo, você pode gastar 1 PM para causar +1d8 pontos de dano do mesmo tipo.",
		},
		{
			nome: "Camada de Ingenuidade",
			texto: "Você sofre –5 em Intuição e Vontade.",
		},
	],
	longevidade: "Normal",
	livro: {
		nome: "Ameaças de Arton",
		pagina: 40,
	},
} as const satisfies Raca;
