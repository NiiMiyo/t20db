export default {
	nome: "Meio-orc",
	atributos: {
		Força: 2,
		"outro atributo (exceto Carisma)": 1,
	},
	habilidades: [
		{
			nome: "Adaptável",
			texto: "Você recebe +2 em Intimidação e se torna treinado em uma perícia a sua escolha.",
		},
		{
			nome: "Criatura das Profundezas",
			texto: "Você recebe visão no escuro e +2 em testes de Percepção e Sobrevivência realizados no subterrâneo.",
		},
		{
			nome: "Sangue Orc",
			texto: "Você recebe +1 em rolagens de dano com armas corpo a corpo e de arremesso e é considerado um orc para efeitos relacionados a raça.",
		},
	],
	longevidade: "Normal",
	livro: {
		nome: "Ameaças de Arton",
		pagina: 31,
	},
} as const satisfies Raca;
