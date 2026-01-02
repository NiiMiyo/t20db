export default {
	nome: "Moreau (Lobo)",
	atributos: {
		Carisma: 1,
		"Dois Atributos": 1,
	},
	habilidades: [
		{
			nome: "Faro",
			texto: "Você tem olfato apurado. Contra inimigos em alcance curto que não possa ver, você não fica desprevenido e camuflagem total lhe causa apenas 20% de chance de falha.",
		},
		{
			nome: "Mordida",
			texto: "Você possui uma arma natural de mordida (dano 1d6, crítico x2, perfuração). Uma vez por rodada, quando usa a ação agredir para atacar com outra arma, pode gastar 1 PM para fazer um ataque corpo a corpo extra com a mordida.",
		},
		{
			nome: "Táticas de Matilha",
			texto: "Você recebe +2 nas rolagens de dano e na margem de ameaça em ataques contra oponentes que esteja flanqueando.",
		},
	],
	longevidade: "Normal",
	livro: {
		nome: "Ameaças de Arton",
		pagina: 304,
	},
} satisfies Raca;
