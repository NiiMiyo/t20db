export default {
	nome: "Velocis",
	atributos: {
		Destreza: 2,
		Sabedoria: 1,
		Inteligência: -1,
	},
	habilidades: [
		{
			nome: "Através de Espinheiros",
			texto: "Você recebe redução de corte e perfuração 2 e não sofre redução em seu deslocamento por terreno difícil natural.",
		},
		{
			nome: "Sentidos Selvagens",
			texto: "Você recebe +2 em Sobrevivência, visão na penumbra e faro (contra inimigos em alcance curto que não possa ver, você não fica desprevenido e camuflagem total lhe causa apenas 20% de chance de falha).",
		},
		{
			nome: "Velocista da Planície",
			texto: "Seu deslocamento é 12m. Você pode usar Destreza como atributo-chave de Atletismo (em vez de Força) e, quando faz testes de Atletismo para correr ou saltar, pode rolar dois dados e usar o melhor resultado.",
		},
	],
	longevidade: "Normal",
	livro: {
		nome: "Ameaças de Arton",
		pagina: 268,
	},
} as const satisfies Raca;
