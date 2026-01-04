export default {
	nome: "Orc",
	atributos: {
		Força: 2,
		Constituição: 1,
		Inteligência: -1,
	},
	habilidades: [
		{
			nome: "Feroz",
			texto: "Você recebe +2 em rolagens de dano com armas corpo a corpo e de arremesso. Quando sofre dano de um inimigo, esse bônus se torna +4 até o fim de seu próximo turno.",
		},
		{
			nome: "Habitante das Cavernas",
			texto: "Você recebe visão no escuro e +2 em testes de Percepção e Sobrevivência realizados no subterrâneo. Entretanto, recebe sensibilidade a luz.",
		},
		{
			nome: "Vigor Brutal",
			texto: "Você recebe +2 em Fortitude e soma sua Força em seu total de pontos de vida.",
		},
	],
	longevidade: "Normal",
	livro: {
		nome: "Ameaças de Arton",
		pagina: 33,
	},
} as const satisfies Raca;
