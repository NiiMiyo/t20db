export default {
	nome: "Voracis",
	atributos: {
		Destreza: 2,
		Constituição: 1,
		Inteligência: -1,
	},
	habilidades: [
		{
			nome: "Garras",
			texto: "Suas mãos são duas armas naturais de garras (dano 1d6 cada, crítico x2, corte). Uma vez por rodada, quando usa a ação agredir para atacar com uma arma, você pode gastar 1 PM para fazer um ataque corpo a corpo extra com uma das garras, desde que ela esteja livre e não tenha sido usada para atacar neste turno. Como alternativa, se tiver habilidades que exijam uma arma secundária (como Estilo de Duas Armas), você pode usá-las com suas garras.",
		},
		{
			nome: "Rainha da Selva",
			texto: "Você recebe deslocamento de escalada 9m, +2 em Atletismo e recupera +1 PV por nível quando descansa.",
		},
		{
			nome: "Sentidos Selvagens",
			texto: "Você recebe +2 em Sobrevivência, visão na penumbra e faro (contra inimigos em alcance curto que não possa ver, você não fica desprevenido e camuflagem total lhe causa apenas 20% de chance de falha).",
		},
	],
	longevidade: "Normal",
	livro: {
		nome: "Ameaças de Arton",
		pagina: 270,
	},
} satisfies Raca;
