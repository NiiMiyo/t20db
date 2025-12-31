export default {
	nome: "Goblin",
	atributos: {
		Destreza: 2,
		Inteligência: 1,
		Carisma: -1,
	},
	habilidades: [
		{
			nome: "Engenhoso",
			texto: "Você não sofre penalidades em testes de perícia por não usar ferramentas. Se usar a ferramenta necessária, recebe +2 no teste de perícia.",
		},
		{
			nome: "Espelunqueiro",
			texto: "Você recebe visão no escuro e deslocamento de escalada igual ao seu deslocamento terrestre.",
		},
		{
			nome: "Peste Esguia",
			texto: "Seu tamanho é Pequeno (veja a página 106), mas seu deslocamento se mantém 9m. Apesar de pequenos, goblins são rápidos.",
		},
		{
			nome: "Rato das Ruas",
			texto: "Você recebe +2 em Fortitude e sua recuperação de PV e PM nunca é inferior ao seu nível.",
		},
	],
	livro: {
		nome: "Livro Básico",
		pagina: 23,
	},
} satisfies Raca;
