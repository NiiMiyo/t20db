export default {
	nome: "Sátiro",
	atributos: {
		Carisma: 2,
		Destreza: 1,
		Sabedoria: -1,
	},
	habilidades: [
		{
			nome: "Festeiro Feérico",
			texto: "Você é uma criatura do tipo espírito, recebe visão na penumbra e +2 em Atuação e Fortitude.",
		},
		{
			nome: "Instrumentista Mágico",
			texto: "Se estiver empunhando um instrumento musical, você pode lançar as magias Amedrontar, Enfeitiçar, Hipnotismo e Sono (atributo-chave Carisma). Caso aprenda novamente uma dessas magias, seu custo diminui em –1 PM.",
			magica: true,
		},
		{
			nome: "Marrada",
			texto: "Você possui uma arma natural de marrada (dano 1d6, crítico x2, impacto). Uma vez por rodada, quando usa a ação agredir para atacar com outra arma, pode gastar 1 PM para fazer um ataque corpo a corpo extra com a marrada.",
		},
		{
			nome: "Pernas Caprinas",
			texto: "Seu deslocamento é 12m e você pode usar Destreza como atributo-chave de Atletismo (em vez de Força).",
		},
	],
	longevidade: "Normal",
	livro: {
		nome: "Heróis de Arton",
		pagina: 15,
	},
} as const satisfies Raca;
