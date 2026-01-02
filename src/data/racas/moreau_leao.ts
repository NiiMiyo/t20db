export default {
	nome: "Moreau (Leão)",
	atributos: {
		Força: 1,
		"Dois Atributos": 1,
	},
	habilidades: [
		{
			nome: "Mordida",
			texto: "Você possui uma arma natural de mordida (dano 1d8, crítico x2, perfuração). Uma vez por rodada, quando usa a ação agredir para atacar com outra arma, pode gastar 1 PM para fazer um ataque corpo a corpo extra com a mordida.",
		},
		{
			nome: "Rugido Imponente",
			texto: "Você pode gastar uma ação de movimento e 1 PM para emitir um rugido assustador. Todos os inimigos em alcance curto sofrem -2 em rolagens de dano por 1 rodada.",
			tipoEfeito: "Medo",
		},
		{
			nome: "Sentidos da Realeza",
			texto: "Você recebe visão na penumbra e +2 em Intimidação e Percepção.",
		},
	],
	longevidade: "Normal",
	livro: {
		nome: "Ameaças de Arton",
		pagina: 304,
	},
} satisfies Raca;
