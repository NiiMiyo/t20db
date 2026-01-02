export default {
	nome: "Moreau (Gato)",
	atributos: {
		Carisma: 1,
		"Dois Atributos": 1,
	},
	habilidades: [
		{
			nome: "As Muitas Vidas de um Gato",
			texto: "Você soma seu Carisma em testes de Constituição para estabilizar sangramento e em Acrobacia e, se estiver consciente em uma queda, reduz o dano dela em 3d6.",
		},
		{
			nome: "Garras",
			texto: "Você tem duas armas naturais de garra (dano 1d6, crítico x2, corte), uma em cada mão. Uma vez por rodada, quando usa a ação agredir para atacar com uma arma, você pode gastar 1 PM para fazer um ataque corpo a corpo extra com uma das garras, desde que ela esteja livre e não tenha sido usada para atacar neste turno. Como alternativa, se tiver habilidades que exijam uma arma secundária (como Estilo de Duas Armas), você pode usá-las com suas garras.",
		},
		{
			nome: "Sentidos Felinos",
			texto: "Você recebe visão na penumbra e +2 em Furtividade e Percepção.",
		},
	],
	longevidade: "Normal",
	livro: {
		nome: "Ameaças de Arton",
		pagina: 304,
	},
} satisfies Raca;
