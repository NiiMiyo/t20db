export default {
	nome: "Elfo",
	atributos: {
		Inteligência: 2,
		Destreza: 1,
		Constituição: -1,
	},
	habilidades: [
		{
			nome: "Graça de Glórienn",
			texto: "Seu deslocamento é 12m (em vez de 9m).",
		},
		{
			nome: "Sangue Mágico",
			texto: "Você recebe +1 ponto de mana por nível.",
		},
		{
			nome: "Sentidos Élficos",
			texto: "Você recebe visão na penumbra e +2 em Misticismo e Percepção.",
		},
	],
	origem: {
		livro: "Livro Básico",
		pagina: 22,
	}
} satisfies Raca;
