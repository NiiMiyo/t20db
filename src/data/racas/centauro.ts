export default {
	nome: "Centauro",
	atributos: {
		Sabedoria: 2,
		Força: 1,
		Inteligência: -1,
	},
	habilidades: [
		{
			nome: "Avantajado",
			texto: "Seu tamanho é Grande e seu deslocamento é 12m.",
		},
		{
			nome: "Cascos",
			texto: "Você possui uma arma natural de cascos (dano 1d8, crítico x2, impacto). Uma vez por rodada, quando usa a ação agredir para atacar com outra arma, pode gastar 1 PM para fazer um ataque corpo a corpo extra com os cascos.",
		},
		{
			nome: "Ginete Natural",
			texto: "Você é considerado montado para efeito de fazer investidas e para benefícios das armas que empunha, e pode escolher o poder Carga de Cavalaria mesmo sem cumprir seus pré-requisitos. Entretanto, não pode se beneficiar de uma montaria e, se estiver carregando um cavaleiro, sofre −2 em testes (além das penalidades de sobrecarga, se houver) e é considerado em condição ruim para lançar magias.",
		},
		{
			nome: "Medo de Altura",
			texto: "Se estiver adjacente a uma queda de 3m ou mais (como um buraco ou penhasco), você fica abalado.",
		},
	],
	longevidade: "Normal",
	livro: {
		nome: "Ameaças de Arton",
		pagina: 105,
	},
} satisfies Raca;
