export default {
	nome: "Elfo do Mar",
	atributos: {
		Destreza: 2,
		Constituição: 1,
		Inteligência: -1,
	},
	habilidades: [
		{
			nome: "Arcenal do Oceano",
			texto: "Você recebe proficiência em arpão, rede e tridente e +2 em testes de ataque com essas armas. Se receber proficiência em uma dessas armas novamente, pode considerá-la uma arma leve.",
		},
		{
			nome: "Cria das Águas",
			texto: "Você possui deslocamento de natação igual a seu deslocamento em terra e visão na penumbra. Quando dentro d’água, você recebe percepção às cegas e +2 na Defesa e, em Furtividade e Sobrevivência.",
		},
		{
			nome: "Dependência de Água",
			texto: "Se permanecer mais de um dia sem contato com água, você não recupera PM com descanso até voltar para a água (ou, pelo menos, tomar um bom banho!).",
		},
	],
	longevidade: "x2",
	livro: {
		nome: "Ameaças de Arton",
		pagina: 316,
	},
} as const satisfies Raca;
