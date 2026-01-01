export default {
	nome: "Sereia/Tritão",
	atributos: {
		"Três Atributos Diferentes": 1,
	},
	habilidades: [
		{
			nome: "Canção dos Mares",
			texto: "Você pode lançar duas das magias a seguir: Amedrontar, Comando, Despedaçar, Enfeitiçar, Hipnotismo ou Sono (atributo-chave Carisma). Caso aprenda novamente uma dessas magias, seu custo diminui em –1 PM.",
			magica: true,
		},
		{
			nome: "Mestre do Tridente",
			texto: "Para você, o tridente é uma arma simples. Além disso, você recebe +2 em rolagens de dano com azagaias, lanças e tridentes.",
		},
		{
			nome: "Transformação Anfíbia",
			texto: "Você pode respirar debaixo d’água e possui uma cauda que fornece deslocamento de natação 12m. Quando fora d’água, sua cauda desaparece e dá lugar a pernas (deslocamento 9m). Se permanecer mais de um dia sem contato com água, você não recupera PM com descanso até voltar para a água (ou, pelo menos, tomar um bom banho!).",
		},
	],
	longevidade: "Normal",
	livro: {
		nome: "Livro Básico",
		pagina: 29,
	},
} satisfies Raca;
