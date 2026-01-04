export default {
	nome: "Trog",
	atributos: {
		Constituição: 2,
		Força: 1,
		Inteligência: -1,
	},
	habilidades: [
		{
			nome: "Mau Cheiro",
			texto: "Você pode gastar uma ação padrão e 2 PM para expelir um gás fétido. Todas as criaturas (exceto trogs) em alcance curto devem passar em um teste de Fortitude contra veneno (CD Con) ou ficarão enjoadas durante 1d6 rodadas. Uma criatura que passe no teste de resistência fica imune a esta habilidade por um dia.",
		},
		{
			nome: "Mordida",
			texto: "Você possui uma arma natural de mordida (dano 1d6, crítico x2, perfuração). Uma vez por rodada, quando usa a ação agredir para atacar com outra arma, pode gastar 1 PM para fazer um ataque corpo a corpo extra com a mordida.",
		},
		{
			nome: "Reptiliano",
			texto: "Você é uma criatura do tipo monstro e recebe visão no escuro, +1 na Defesa e, se estiver sem armadura ou roupas pesadas, +5 em Furtividade.",
		},
		{
			nome: "Sangue Frio",
			texto: " Você sofre 1 ponto de dano adicional por dado de dano de frio.",
		},
	],
	longevidade: "Normal",
	livro: {
		nome: "Livro Básico",
		pagina: 31,
	},
} as const satisfies Raca;
