export default {
	nome: "Moreau (Coelho)",
	atributos: {
		Destreza: 1,
		"Dois Atributos": 1,
	},
	habilidades: [
		{
			nome: "Patas Ligeiras",
			texto: "Seu deslocamento é 12m e, quando faz uma investida ou um teste de Atletismo para correr, você não precisa percorrer uma linha reta.",
		},
		{
			nome: "Pé de Coelho",
			texto: "Quando faz um teste de uma perícia baseada em Destreza (exceto testes de ataque), você pode gastar 1 PM para rolar dois dados e usar o melhor resultado.",
		},
		{
			nome: "Senso de Preservação",
			texto: "Você recebe visão na penumbra e +2 em Percepção e Reflexos.",
		},
	],
	longevidade: "Normal",
	livro: {
		nome: "Ameaças de Arton",
		pagina: 304,
	},
} satisfies Raca;
