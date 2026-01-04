export default {
	nome: "Eiradaan",
	atributos: {
		Sabedoria: 2,
		Carisma: 1,
		Força: -1,
	},
	habilidades: [
		{
			nome: "Essência Feérica",
			texto: "Você é uma criatura do tipo espírito, recebe visão na penumbra e pode falar com animais livremente.",
		},
		{
			nome: "Magia Instintiva",
			texto: "Você pode usar Sabedoria no lugar de seu atributo-chave de magias arcanas e Misticismo. Além disso, quando lança uma magia, você recebe +1 PM para gastar em seus aprimoramentos (não cumulativo com outros efeitos que fornecem PM para aprimoramentos, como bolsa de pó; Tormenta20, p. 159).",
		},
		{
			nome: "Sentidos Místicos",
			texto: "Você está sempre sob o efeito básico da magia Visão Mística.",
			magica: true,
		},
		{
			nome: "Canção da Melancolia",
			texto: "Quando faz um teste de Vontade contra efeitos mentais, você rola dois dados e usa o pior resultado.",
		},
	],
	longevidade: "x5",
	livro: {
		nome: "Heróis de Arton",
		pagina: 12,
	},
} as const satisfies Raca;
