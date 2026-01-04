export default {
	nome: "Finntroll",
	atributos: {
		Inteligência: 2,
		Constituição: 1,
		Força: -1,
	},
	habilidades: [
		{
			nome: "Corpo Vegetal",
			texto: "Você é uma criatura do tipo monstro e recebe natureza vegetal e visão no escuro.",
		},
		{
			nome: "Presença Arcana",
			texto: "Você recebe +2 em Misticismo e resistência a magia +2.",
		},
		{
			nome: "Regeneração Vegetal",
			texto: "Uma vez por rodada, você pode gastar 1 PM para recuperar 5 PV. Esta habilidade não cura dano de ácido ou fogo.",
		},
		{
			nome: "Intolerância a Luz",
			texto: "Você recebe sensibilidade a luz e, quando exposto à luz do sol ou similar, não consegue ativar sua Regeneração Vegetal.",
		},
	],
	longevidade: "Normal",
	livro: {
		nome: "Ameaças de Arton",
		pagina: 339,
	},
} as const satisfies Raca;
