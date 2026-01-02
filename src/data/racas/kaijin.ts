export default {
	nome: "Kaijin",
	atributos: {
		Força: 2,
		Constituição: 1,
		Carisma: -2,
	},
	habilidades: [
		{
			nome: "Couraça Rubra",
			texto: "Você recebe redução de dano 2. Sua couraça conta como um poder da Tormenta, exceto para perda de Carisma.",
		},
		{
			nome: "Cria da Tormenta",
			texto: "Você é uma criatura do tipo monstro e recebe +5 em testes de resistência contra efeitos causados por lefeu e pela Tormenta. Além disso, efeitos da Tormenta que não afetem lefou também não afetam você.",
		},
		{
			nome: "Disforme",
			texto: "Por sua anatomia anômala, você não pode empunhar nem vestir itens, a menos que sejam mágicos ou especialmente adaptados para você (o que demora um dia e custa 50% do preço do item, sem contar melhorias). Seus itens iniciais, e aqueles recebidos por sua origem ou habilidades, são adaptados para você. Esta habilidade conta como um poder da Tormenta, exceto para perda de Carisma.",
		},
		{
			nome: "Terror Vivo",
			texto: "Você pode usar Força como atributo-chave de Intimidação (em vez de Carisma) e recebe um poder da Tormenta a sua escolha, que não conta para perda de Carisma.",
		},
	],
	longevidade: "Normal",
	livro: {
		nome: "Ameaças de Arton",
		pagina: 157,
	},
} satisfies Raca;
