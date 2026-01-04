export default {
	nome: "Nezumi",
	atributos: {
		Constituição: 2,
		Destreza: 1,
		Inteligência: -1,
	},
	habilidades: [
		{
			nome: "Empunhadura Poderosa",
			texto: "Ao usar uma arma feita para uma categoria de tamanho maior que a sua (por exemplo, uma arma aumentada para uma criatura Pequena ou Média), a penalidade que você sofre nos testes de ataque diminui para –2. Caso receba esta habilidade novamente, a penalidade diminui para 0.",
		},
		{
			nome: "Pequeno, mas não metade",
			texto: "Seu tamanho é Pequeno, mas seu deslocamento se mantém 9m e você recebe resistência a medo +5 contra criaturas maiores que você e +2 em Intimidação.",
		},
		{
			nome: "Roedor",
			texto: "Você possui uma arma natural de mordida (dano 1d6, crítico x2, corte). Uma vez por rodada, quando usa a ação agredir para atacar com outra arma, pode gastar 1 PM para fazer um ataque corpo a corpo extra com a mordida. Além disso, quando faz um acerto crítico com sua mordida, você deixa a armadura da vítima avariada ou, se ela estiver sem armadura, aumenta em +1 o multiplicador desse crítico.",
		},
		{
			nome: "Sentidos Murídeos",
			texto: "Você recebe faro e visão na penumbra.",
		},
	],
	longevidade: "Normal",
	livro: {
		nome: "Ameaças de Arton",
		pagina: 162,
	},
} as const satisfies Raca;
