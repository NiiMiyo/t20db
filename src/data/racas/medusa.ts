export default {
	nome: "Medusa",
	atributos: {
		Destreza: 2,
		Carisma: 1,
	},
	habilidades: [
		{
			nome: "Cria de Megalokk",
			texto: "Você é uma criatura do tipo monstro e recebe visão no escuro.",
		},
		{
			nome: "Natureza Venenosa",
			texto: "Você recebe resistência a veneno +5 e pode gastar uma ação de movimento e 1 PM para envenenar uma arma que esteja usando. A arma causa perda de 1d12 pontos de vida. O veneno dura até você acertar um ataque ou até o fim da cena (o que acontecer primeiro). (Veneno)",
		},
		{
			nome: "Olhar Atordoante",
			texto: "Você pode gastar uma ação de movimento e 1 PM para forçar uma criatura em alcance curto a fazer um teste de Fortitude (CD Car). Se a criatura falhar, fica atordoada por uma rodada (apenas uma vez por cena).",
		},
	],
	livro: {
		nome: "Livro Básico",
		pagina: 28,
	},
} satisfies Raca;
