export default {
	nome: "Minauro",
	atributos: {
		Força: 1,
		"Dois atributos": 1,
	},
	habilidades: [
		{
			nome: "Faro",
			texto: "Você tem olfato apurado. Contra inimigos em alcance curto que não possa ver, você não fica desprevenido e camuflagem total lhe causa apenas 20% de chance de falha.",
		},
		{
			nome: "Mente Aberta",
			texto: "Você recebe +2 em Diplomacia e Investigação.",
		},
		{
			nome: "Plurivalente",
			texto: "Você recebe um poder geral a sua escolha.",
		},
	],
	longevidade: "Normal",
	livro: {
		nome: "Ameaças de Arton",
		pagina: 175,
	},
} as const satisfies Raca;
