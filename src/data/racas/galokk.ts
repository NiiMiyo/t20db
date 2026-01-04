export default {
	nome: "Galokk",
	atributos: {
		Força: 1,
		Constituição: 1,
		"Um Atributo": 1,
		Carisma: -1,
	},
	habilidades: [
		{
			nome: "Força dos Gigantes",
			texto: "Quando acerta um ataque corpo a corpo ou de arremesso, você pode gastar 1 PM. Se fizer isso, sempre que rolar o resultado máximo em um dado de dano da arma, role um dado extra, até um limite de dados extras igual à sua Força.",
		},
		{
			nome: "Meio-Gigante",
			texto: "Você é uma criatura do tipo humanoide (gigante). Seu tamanho é Grande e você pode usar Força como atributo-chave de Intimidação.",
		},
		{
			nome: "Infância Entre os Pequenos",
			texto: "Você se torna treinado em uma perícia a sua escolha.",
		},
	],
	longevidade: "Normal",
	livro: {
		nome: "Heróis de Arton",
		pagina: 13,
	},
} as const satisfies Raca;
