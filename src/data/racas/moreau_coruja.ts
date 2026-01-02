export default {
	nome: "Moreau (Coruja)",
	atributos: {
		Sabedoria: 1,
		"Dois Atributos": 1,
	},
	habilidades: [
		{
			nome: "Espreitador",
			texto: "Você recebe visão no escuro e +2 em Percepção e Vontade.",
		},
		{
			nome: "Garras",
			texto: "Você tem duas armas naturais de garra (dano 1d6, crítico x2, corte), uma em cada mão. Uma vez por rodada, quando usa a ação agredir para atacar com uma arma, você pode gastar 1 PM para fazer um ataque corpo a corpo extra com uma das garras, desde que ela esteja livre e não tenha sido usada para atacar neste turno. Como alternativa, se tiver habilidades que exijam uma arma secundária (como Estilo de Duas Armas), você pode usá-las com suas garras.",
		},
		{
			nome: "Sapiência",
			texto: "Você pode lançar uma magia de 1º círculo de adivinhação a sua escolha (atributo-chave Sabedoria). Caso aprenda novamente essa magia, seu custo diminui em –1 PM.",
			magica: true,
		},
	],
	longevidade: "Normal",
	livro: {
		nome: "Ameaças de Arton",
		pagina: 304,
	},
} satisfies Raca;
