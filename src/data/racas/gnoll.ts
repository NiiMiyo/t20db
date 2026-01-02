export default {
	nome: "Gnoll",
	atributos: {
		Constituição: 2,
		Sabedoria: 1,
		Inteligência: -1,
	},
	habilidades: [
		{
			nome: "Faro",
			texto: "Você tem olfato apurado. Contra inimigos em alcance curto que não possa ver, você não fica desprevenido e camuflagem total lhe causa apenas 20% de chance de falha.",
		},
		{
			nome: "Mordida",
			texto: "Você possui uma arma natural de mordida (dano 1d6, crítico x2, perfuração). Uma vez por rodada, quando usa a ação agredir para atacar com outra arma, pode gastar 1 PM para fazer um ataque corpo a corpo extra com a mordida."
		},
		{
			nome: "Oportunista",
			texto: "Você recebe +2 nas rolagens de dano contra criaturas que tenham sofrido dano de outras criaturas desde seu último turno.",
		},
		{
			nome: "Rendição",
			texto: "Quando um inimigo se rende, você recebe 1d4 PM temporários cumulativos. Da mesma forma, quando é reduzido a um quarto de seus PV ou menos, seu instinto é se render. Caso continue lutando, fica alquebrado.",
		},
	],
	longevidade: "Normal",
	livro: {
		nome: "Ameaças de Arton",
		pagina: 115,
	},
} satisfies Raca;
