export default {
	nome: "Suraggel (Sulfure)",
	atributos: {
		Destreza: 2,
		Inteligência: 1,
	},
	habilidades: [
		{
			nome: "Herança Divina",
			texto: "Você é uma criatura do tipo espírito e recebe visão no escuro.",
		},
		{
			nome: "Sombras Profanas",
			texto: "Você recebe +2 em Enganação e Furtividade. Além disso, pode lançar Escuridão (como uma magia divina; atributo-chave Inteligência). Caso aprenda novamente essa magia, seu custo diminui em –1 PM. (Mágica)",
		},
	],
	livro: {
		nome: "Livro Básico",
		pagina: 30,
	},
} satisfies Raca;
