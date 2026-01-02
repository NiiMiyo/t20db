export default {
	nome: "Moreau (Búfalo)",
	atributos: {
		Força: 1,
		"Dois Atributos": 1,
	},
	habilidades: [
		{
			nome: "Chifres",
			texto: "Você possui uma arma natural de chifres (dano 1d6, crítico x2, perfuração). Uma vez por rodada, quando usa a ação agredir para atacar com outra arma, pode gastar 1 PM para fazer um ataque corpo a corpo extra com os chifres.",
		},
		{
			nome: "Constritor",
			texto: "Você recebe +2 em testes para agarrar e em rolagens de dano contra criaturas que estiver agarrando.",
		},
		{
			nome: "Instintos Traiçoeiros",
			texto: "Você recebe visão no escuro e +2 em Diplomacia e na CD de seus efeitos mentais.",
		},
	],
	longevidade: "Normal",
	livro: {
		nome: "Ameaças de Arton",
		pagina: 304,
	},
} satisfies Raca;
