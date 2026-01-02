export default {
	nome: "Nagah (Macho)",
	atributos: {
		Força: 1,
		Destreza: 1,
		Constituição: 1,
	},
	habilidades: [
		{
			nome: "Cauda",
			texto: "Você possui uma arma natural de cauda (dano 1d6, crítico x2, impacto). Uma vez por rodada, quando usa a ação agredir para atacar com outra arma, pode gastar 1 PM para fazer um ataque corpo a corpo extra com a cauda.",
		},
		{
			nome: "Inocência Dissimulada",
			texto: "Você recebe +2 em Enganação e pode gastar 2 PM para substituir um teste de perícia originalmente baseada em Inteligência, Sabedoria ou Carisma por Enganação.",
		},
		{
			nome: "Presentes de Sszzaas",
			texto: "Você recebe visão na penumbra, +1 na Defesa e resistência a veneno +5.",
		},
		{
			nome: "Fraquezas Ofídicas",
			texto: "Você sofre 1 ponto de dano adicional para cada dado de dano de frio e –5 em testes de resistência contra Músicas de bardo.",
		},
	],
	longevidade: "Normal",
	livro: {
		nome: "Ameaças de Arton",
		pagina: 333,
	},
} satisfies Raca;
