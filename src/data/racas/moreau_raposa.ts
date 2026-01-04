export default {
	nome: "Moreau (Raposa)",
	atributos: {
		Inteligência: 1,
		"Dois Atributos": 1,
	},
	habilidades: [
		{
			nome: "Agarra-me Se Puderes",
			texto: "Seu deslocamento é 12m (em vez de 9m) e você tem visão na penumbra.",
		},
		{
			nome: "Esperteza Vulpina",
			texto: "Você recebe +2 em duas perícias originalmente baseadas em Inteligência ou Carisma, a sua escolha.",
		},
		{
			nome: "Faro",
			texto: "Você tem olfato apurado. Contra inimigos em alcance curto que não possa ver, você não fica desprevenido e camuflagem total lhe causa apenas 20% de chance de falha.",
		},
	],
	longevidade: "Normal",
	livro: {
		nome: "Ameaças de Arton",
		pagina: 304,
	},
} as const satisfies Raca;
