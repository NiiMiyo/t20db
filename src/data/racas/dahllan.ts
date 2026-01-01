export default {
	nome: "Dahllan",
	atributos: {
		Sabedoria: 2,
		Destreza: 1,
		Inteligência: -1,
	},
	habilidades: [
		{
			nome: "Amiga das Plantas",
			texto: "Você pode lançar a magia Controlar Plantas (atributo-chave Sabedoria). Caso aprenda novamente essa magia, seu custo diminui em –1 PM.",
			magica: true,
		},
		{
			nome: "Armadura de Allihanna",
			texto: "Você pode gastar uma ação de movimento e 1 PM para transformar sua pele em casca de árvore, recebendo +2 na Defesa até o fim da cena.",
		},
		{
			nome: "Empatia Selvagem",
			texto: "Você pode se comunicar com animais por meio de linguagem corporal e vocalizações. Você pode usar Adestramento para mudar atitude e persuasão com animais (veja Diplomacia, na página 118). Caso receba esta habilidade novamente, recebe +2 em Adestramento.",
		},
	],
	livro: {
		nome: "Livro Básico",
		pagina: 21,
	}
} satisfies Raca;
