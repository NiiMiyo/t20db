export default {
	nome: "Minotauro",
	atributos: {
		Força: 2,
		Constituição: 1,
		Sabedoria: -1,
	},
	habilidades: [
		{
			nome: "Chifres",
			texto: "Você possui uma arma natural de chifres (dano 1d6, crítico x2, perfuração). Uma vez por rodada, quando usa a ação agredir para atacar com outra arma, pode gastar 1 PM para fazer um ataque corpo a corpo extra com os chifres.",
		},
		{
			nome: "Couro Rígido",
			texto: "Sua pele é dura como a de um touro. Você recebe +1 na Defesa.",
		},
		{
			nome: "Faro",
			texto: "Você tem olfato apurado. Contra inimigos em alcance curto que não possa ver, você não fica desprevenido e camuflagem total lhe causa apenas 20% de chance de falha.",
		},
		{
			nome: "Medo de Altura",
			texto: "Se estiver adjacente a uma queda de 3m ou mais de altura (como um buraco ou penhasco), você fica abalado.",
		},
	],
	longevidade: "Normal",
	livro: {
		nome: "Livro Básico",
		pagina: 25,
	},
} as const satisfies Raca;
