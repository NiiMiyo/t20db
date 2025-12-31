export default {
	nome: "Lefou",
	atributos: {
		"Três Atributos Diferentes (exceto Carisma)": 1,
		Carisma: -1,
	},
	habilidades: [
		{
			nome: "Cria da Tormenta",
			texto: "Você é uma criatura do tipo monstro e recebe +5 em testes de resistência contra efeitos causados por lefeu e pela Tormenta.",
		},
		{
			nome: "Deformidade",
			texto: "Todo lefou possui defeitos físicos que, embora desagradáveis, conferem certas vantagens. Você recebe +2 em duas perícias a sua escolha. Cada um desses bônus conta como um poder da Tormenta (exceto para perda de Carisma). Você pode trocar um desses bônus por um poder da Tormenta a sua escolha (ele também não conta para perda de Carisma).",
		},
	],
	livro: {
		nome: "Livro Básico",
		pagina: 24,
	},
} satisfies Raca;
