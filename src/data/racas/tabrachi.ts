export default {
	nome: "Tabrachi",
	atributos: {
		Constituição: 2,
		Força: 1,
		Carisma: -1,
	},
	habilidades: [
		{
			nome: "Batráquio",
			texto: "Você recebe visão na penumbra e deslocamento de natação igual ao seu deslocamento terrestre.",
		},
		{
			nome: "Linguarudo",
			texto: "Sua língua é uma arma natural que pode atacar inimigos a até 3m (dano 1d4, crítico x2, impacto). Ela é uma arma versátil, fornecendo +2 em testes para desarmar e derrubar. Uma vez por rodada, quando usa a ação agredir com outra arma, você pode gastar 1 PM para fazer um ataque corpo a corpo extra com a língua.",
		},
		{
			nome: "Saltador",
			texto: "Você recebe +10 em testes de Atletismo para saltar.",
		},
	],
	longevidade: "Normal",
	livro: {
		nome: "Ameaças de Arton",
		pagina: 37,
	},
} satisfies Raca;
