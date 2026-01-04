import osteon from "./osteon";

export default {
	...osteon,

	nome: "Soterrado",
	habilidades: [
		{
			nome: "Abraço Gélido",
			texto: "Você recebe +2 em testes para agarrar. Além disso, seus ataques desarmados e com armas naturais causam 2 pontos de dano de frio extras.",
		},
		{
			nome: "Esquife de Gelo",
			texto: "Você recebe redução de corte e perfuração 5 e redução de frio 10. Entretanto, sofre 1 ponto de dano adicional por dado de dano de fogo.",
		},
		osteon.habilidades[2],
		osteon.habilidades[3],
	],
	livro: {
		nome: "Ameaças de Arton",
		pagina: 354,
	},
} as const satisfies Raca;
