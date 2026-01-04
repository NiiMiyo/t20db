export default {
	nome: "Moreau (Crocodilo)",
	atributos: {
		Constituição: 1,
		"Dois Atributos": 1,
	},
	habilidades: [
		{
			nome: "Mordida Poderosa",
			texto: "Você possui uma arma natural de mordida (dano 1d6, crítico x2, perfuração), com a qual recebe +2 em testes de agarrar. Uma vez por rodada, quando usa a ação agredir para atacar com outra arma, pode gastar 1 PM para fazer um ataque corpo a corpo extra com a mordida.",
		},
		{
			nome: "Predador Aquático",
			texto: "Você tem deslocamento de natação 6m e recebe +1 na Defesa e +2 em Furtividade.",
		},
		{
			nome: "Surto Reptiliano",
			texto: "Uma vez por cena, você pode gastar 1 PM para realizar uma ação de movimento adicional em seu turno.",
		},
	],
	longevidade: "Normal",
	livro: {
		nome: "Ameaças de Arton",
		pagina: 304,
	},
} as const satisfies Raca;
