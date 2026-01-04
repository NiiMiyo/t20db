export default {
	nome: "Ceratops",
	atributos: {
		Constituição: 2,
		Força: 1,
		Destreza: -1,
		Inteligência: -1,
	},
	habilidades: [
		{
			nome: "Chifres",
			texto: "Você possui uma arma natural de chifres (dano 1d8, crítico x2, perfuração). Uma vez por rodada, quando usa a ação agredir para atacar com outra arma, pode gastar 1 PM para fazer um ataque corpo a corpo extra com os chifres.",
		},
		{
			nome: "Papel Tribal",
			texto: "Você é treinado em uma perícia a sua escolha entre Cura, Intimidação, Ofício ou Sobrevivência.",
		},
		{
			nome: "Paquidérmico",
			texto: "Seu tamanho é Grande. Você recebe +1 na Defesa e pode usar Força como atributo-chave de Intimidação (em vez de Carisma).",
		},
		{
			nome: "Medo de Altura",
			texto: "Se estiver adjacente a uma queda de 3m ou mais (como um buraco ou penhasco), você fica abalado.",
		},
	],
	longevidade: "Normal",
	livro: {
		nome: "Ameaças de Arton",
		pagina: 265,
	},
} as const satisfies Raca;
