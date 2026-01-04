export default {
	nome: "Tengu",
	atributos: {
		Destreza: 2,
		Inteligência: 1,
	},
	habilidades: [
		{
			nome: "Asas Desorientadoras",
			texto: "Quando estão livres, suas asas podem ser usadas para distrair seus oponentes. Se não estiver usando-as para voar, você recebe os benefícios de Finta Aprimorada. Se tiver esse poder, em vez disso o bônus em Enganação para fintar aumenta para +5.",
		},
		{
			nome: "Caminhante do Céu",
			texto: "Você pode pairar a 1,5m do chão com deslocamento 9m. Isso permite que você ignore terreno difícil e o torna imune a dano por queda (a menos que esteja inconsciente). Você pode gastar 1 PM por rodada para voar com deslocamento de 12m. Você precisa de espaço para abrir suas asas; quando paira ou voa, ocupa o espaço de uma criatura de uma categoria de tamanho maior que a sua.",
		},
		{
			nome: "Espírito Corvino",
			texto: "Você é uma criatura do tipo espírito e recebe visão no escuro e +2 em Percepção.",
		},
	],
	longevidade: "Normal",
	livro: {
		nome: "Ameaças de Arton",
		pagina: 164,
	},
} as const satisfies Raca;
