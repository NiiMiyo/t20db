export default {
	nome: "Yidishan",
	atributos: {
		"três atributos diferentes (exceto Carisma)": 1,
		Carisma: -1,
	},
	habilidades: [
		{
			nome: "Híbrido Mecânico",
			texto: "Você é uma criatura do tipo construto. Recebe visão no escuro e imunidade a cansaço, efeitos metabólicos e veneno. Além disso, não precisa respirar, alimentar-se ou dormir, mas não se beneficia de itens da categoria alimentação e efeitos de cura mundana são reduzidos pela metade em você. Você precisa ficar inerte por 8 horas por dia para recarregar suas forças. Se fizer isso, recupera PV e PM por descanso em condições normais (yidishan não são afetados por condições boas ou ruins de descanso).",
		},
		{
			nome: "Natureza Orgânica",
			texto: "Você se torna treinado em uma perícia (que não precisa ser da sua classe) ou recebe um poder geral a sua escolha. Como alternativa, você pode ser um yidishan de outra raça humanoide além de humano. Neste caso, você ganha uma habilidade dessa raça a sua escolha. Se a raça era de tamanho diferente de Médio, você também possui sua categoria de tamanho.",
		},
		{
			nome: "Peças Metálicas",
			texto: "As partes mecânicas que complementam seu corpo fornecem +2 na Defesa, mas impõem uma penalidade de armadura de –2.",
		},
	],
	longevidade: "x5",
	livro: {
		nome: "Ameaças de Arton",
		pagina: 300,
	},
} satisfies Raca;
