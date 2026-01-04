export default {
	nome: "Harpia",
	atributos: {
		Destreza: 2,
		Carisma: 1,
		Inteligência: -1,
	},
	habilidades: [
		{
			nome: "Asas de Abutre",
			texto: "Você possui asas no lugar dos braços e das mãos. Você pode pairar a 1,5m do chão com deslocamento 12m. Isso permite que você ignore terreno difícil e o torna imune a dano por queda (a menos que esteja inconsciente). Se não estiver usando armadura pesada, você pode gastar 1 PM por rodada para voar com deslocamento de 12m.",
		},
		{
			nome: "Cria de Masmorra",
			texto: "Você é uma criatura do tipo monstro e recebe visão no escuro e +2 em Intimidação e Sobrevivência.",
		},
		{
			nome: "Grito Aterrorizante",
			texto: "Você pode gastar uma ação padrão e 1 PM para emitir um grito estridente. Criaturas em alcance curto ficam abaladas (Von CD Car evita).",
		},
		{
			nome: "Pés Rapinantes",
			texto: "Seus pés podem ser usados como mãos ou como duas armas naturais de garras (dano 1d6 cada, crítico x2, corte). Uma vez por rodada, quando usa a ação agredir para atacar com uma arma, você pode gastar 1 PM para fazer um ataque corpo a corpo extra com uma das garras, desde que ela esteja livre e não tenha sido usada para atacar neste turno. Como alternativa, se tiver habilidades que exijam uma arma secundária (como Estilo de Duas Armas), você pode usá-las com suas garras.",
		},
	],
	longevidade: "Normal",
	livro: {
		nome: "Ameaças de Arton",
		pagina: 201,
	},
} as const satisfies Raca;
