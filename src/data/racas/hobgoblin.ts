export default {
	nome: "Hobgoblin",
	atributos: {
		Constituição: 2,
		Destreza: 1,
		Carisma: 1,
	},
	habilidades: [
		{
			nome: "Arte da Guerra",
			texto: "Você é treinado em Guerra e recebe proficiência em armas marciais. Se receber essa proficiência novamente, recebe +2 em rolagens de dano com essas armas.",
		},
		{
			nome: "Metalurgia Hobgoblin",
			texto: "Você recebe +2 em Ofício (armeiro) e, se for treinado nesta perícia, pode fabricar armas e armaduras superiores com uma melhoria. Se aprender a fabricar itens superiores desses tipos por outra habilidade, gasta apenas ¼ do preço das melhorias que aplica nesses itens (em vez de ⅓).",
		},
		{
			nome: "Táticas de Guerrilha",
			texto: "Você recebe visão no escuro e +2 em Furtividade.",
		},
	],
	longevidade: "Normal",
	livro: {
		nome: "Ameaças de Arton",
		pagina: 84,
	},
} satisfies Raca;
