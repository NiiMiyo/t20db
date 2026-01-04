export default {
	nome: "Moreau (Serpente)",
	atributos: {
		Inteligência: 1,
		"Dois Atributos": 1,
	},
	habilidades: [
		{
			nome: "Arborícola",
			texto: "Você recebe deslocamento de escalada 6m e +2 em Furtividade.",
		},
		{
			nome: "Constritor",
			texto: "Você recebe +2 em testes para agarrar e em rolagens de dano contra criaturas que estiver agarrando.",
		},
		{
			nome: "Instintos Traiçoeiros",
			texto: "Você recebe visão no escuro e +2 em Diplomacia e na CD de seus efeitos mentais.",
		},
	],
	longevidade: "Normal",
	livro: {
		nome: "Ameaças de Arton",
		pagina: 304,
	},
} as const satisfies Raca;
