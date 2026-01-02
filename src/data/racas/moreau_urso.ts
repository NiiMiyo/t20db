export default {
	nome: "Moreau (Urso)",
	atributos: {
		Constituição: 1,
		"Dois Atributos": 1,
	},
	habilidades: [
		{
			nome: "Abraço de Urso",
			texto: "Você é Grande e pode usar Constituição como atributo-chave de Intimidação (em vez de Carisma).",
		},
		{
			nome: "Faro",
			texto: "Você tem olfato apurado. Contra inimigos em alcance curto que não possa ver, você não fica desprevenido e camuflagem total lhe causa apenas 20% de chance de falha.",
		},
		{
			nome: "Mordida",
			texto: "Você possui uma arma natural de mordida (dano 1d8, crítico x2, perfuração). Uma vez por rodada, quando usa a ação agredir para atacar com outra arma, pode gastar 1 PM para fazer um ataque corpo a corpo extra com a mordida.",
		},
	],
	longevidade: "Normal",
	livro: {
		nome: "Ameaças de Arton",
		pagina: 304,
	},
} satisfies Raca;
