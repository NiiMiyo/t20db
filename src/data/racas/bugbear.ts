export default {
	nome: "Bugbear",
	atributos: {
		Força: 2,
		Destreza: 1,
		Carisma: -1,
	},
	habilidades: [
		{
			nome: "Empunhadura Poderosa",
			texto: "Ao usar uma arma feita para uma categoria de tamanho maior que a sua (por exemplo, uma arma aumentada para uma criatura Pequena ou Média), a penalidade que você sofre nos testes de ataque diminui para –2. Caso receba esta habilidade novamente, a penalidade diminui para 0 e você pode também usar armas de até duas categorias de tamanho maiores que a sua com uma penalidade de –5 nos testes de ataque.",
		},
		{
			nome: "Saborear Pavor",
			texto: "Você pode usar Força como atributo-chave de Intimidação (em vez de Carisma). Além disso, se estiver em alcance curto de outra criatura abalada ou apavorada, você recebe um bônus em testes de ataque igual à penalidade causada pela condição.",
		},
		{
			nome: "Sentidos de Predador",
			texto: "Você recebe faro e visão no escuro.",
		},
	],
	longevidade: "Normal",
	livro: {
		nome: "Ameaças de Arton",
		pagina: 79,
	},
} satisfies Raca;
