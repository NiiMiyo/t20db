export default {
	nome: "Sílfide",
	atributos: {
		Carisma: 2,
		Destreza: 1,
		Força: -2,
	},
	habilidades: [
		{
			nome: "Asas de Borboleta",
			texto: "Seu tamanho é Minúsculo. Você pode pairar a 1,5m do chão com deslocamento 9m. Isso permite que você ignore terreno difícil e o torna imune a dano por queda (a menos que esteja inconsciente). Você pode gastar 1 PM por rodada para voar com deslocamento de 12m.",
		},
		{
			nome: "Espírito da Natureza",
			texto: "Você é uma criatura do tipo espírito, recebe visão na penumbra e pode falar com animais livremente.",
		},
		{
			nome: "Magia das Fadas",
			texto: "Você pode lançar duas das magias a seguir (atributo-chave Carisma): Criar Ilusão, Enfeitiçar, Luz (como uma magia arcana) e Sono. Caso aprenda novamente uma dessas magias, seu custo diminui em –1 PM. (Mágica)",
		},
	],
	livro: {
		nome: "Livro Básico",
		pagina: 30,
	},
} satisfies Raca;
