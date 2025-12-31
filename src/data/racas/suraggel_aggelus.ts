export default {
	nome: "Suraggel (Aggelus)",
	atributos: {
		Sabedoria: 2,
		Carisma: 1,
	},
	habilidades: [
		{
			nome: "Herança Divina",
			texto: "Você é uma criatura do tipo espírito e recebe visão no escuro.",
		},
		{
			nome: "Luz Sagrada",
			texto: "Você recebe +2 em Diplomacia e Intuição. Além disso, pode lançar Luz (como uma magia divina; atributo-chave Carisma). Caso aprenda novamente essa magia, seu custo diminui em –1 PM. (Mágica)",
		},
	],
	origem: {
		livro: "Livro Básico",
		pagina: 30,
	},
} satisfies Raca;
