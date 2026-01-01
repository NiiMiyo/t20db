export default {
	nome: "Kliren",
	atributos: {
		Inteligência: 2,
		Carisma: 1,
		Força: -1,
	},
	habilidades: [
		{
			nome: "Híbrido",
			texto: " Sua natureza multifacetada fez com que você aprendesse conhecimentos variados. Você se torna treinado em uma perícia a sua escolha (não precisa ser da sua classe).",
		},
		{
			nome: "Engenhosidade",
			texto: "Quando faz um teste de perícia, você pode gastar 2 PM para somar sua Inteligência no teste. Você não pode usar esta habilidade em testes de ataque. Caso receba esta habilidade novamente, seu custo é reduzido em –1 PM.",
		},
		{
			nome: "Ossos Frágeis",
			texto: "Você sofre 1 ponto de dano adicional por dado de dano de impacto. Por exemplo, se for atingido por uma clava (dano 1d6), sofre 1d6+1 pontos de dano. Se cair de 3m de altura (dano 2d6), sofre 2d6+2 pontos de dano.",
		},
		{
			nome: "Vanguardista",
			texto: "Você recebe proficiência em armas de fogo e +2 em Ofício (um qualquer, a sua escolha).",
		},
	],
	longevidade: "Normal",
	livro: {
		nome: "Livro Básico",
		pagina: 28,
	},
} satisfies Raca;
