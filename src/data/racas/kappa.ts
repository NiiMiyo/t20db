export default {
	nome: "Kappa",
	atributos: {
		Destreza: 2,
		Constituição: 1,
		Carisma: -1,
	},
	habilidades: [
		{
			nome: "Alma da Água",
			texto: "Você é uma criatura do tipo espírito e tem deslocamento de natação igual ao seu deslocamento terrestre.",
		},
		{
			nome: "Carapaça Kappa",
			texto: "Você não pode ser flanqueado e recebe cobertura leve se estiver submerso ou caído. Você soma sua Constituição na Defesa, limitado pelo seu nível, mas apenas se não estiver usando armaduras pesadas (se já faz isso, como pela habilidade Casca Grossa, em vez disso você recebe +2 na Defesa).",
		},
		{
			nome: "Cura das Águas",
			texto: "Você pode lançar a magia Curar Ferimentos (atributo-chave Sabedoria). Caso aprenda novamente essa magia, seu custo diminui em –1 PM. Você não pode usar esta habilidade se a água de sua cabeça estiver derramada.",
			magica: true,
		},
		{
			nome: "Tigela D’água",
			texto: "Sempre que falhar por 5 ou mais em um teste para evitar ser agarrado, derrubado ou empurrado, você derrama a água de sua cabeça. Você fica enjoado até encher a tigela novamente (o que exige uma fonte de água e uma ação padrão).",
		},
	],
	longevidade: "x2",
	livro: {
		nome: "Ameaças de Arton",
		pagina: 158,
	},
} as const satisfies Raca;
