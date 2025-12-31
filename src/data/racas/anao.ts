export default {
	nome: "Anão",
	atributos: {
		Constituição: 2,
		Sabedoria: 1,
		Destreza: -1,
	},
	habilidades: [
		{
			nome: "Conhecimento das Rochas",
			texto: "Você recebe visão no escuro e +2 em testes de Percepção e Sobrevivência realizados no subterrâneo.",
		},
		{
			nome: "Devagar e Sempre",
			texto: "Seu deslocamento é 6m (em vez de 9m). Porém, seu deslocamento não é reduzido por uso de armadura ou excesso de carga.",
		},
		{
			nome: "Duro como Pedra",
			texto: "Você recebe +3 pontos de vida no 1º nível e +1 por nível seguinte.",
		},
		{
			nome: "Tradição de Heredrimm",
			texto: "Você é perito nas armas tradicionais anãs, seja por ter treinado com elas, seja por usá-las como ferramentas de ofício. Para você, todos os machados, martelos, marretas e picaretas são armas simples. Você recebe +2 em ataques com essas armas.",
		},
	],
	origem: {
		livro: "Livro Básico",
		pagina: 20,
	}
} satisfies Raca;
