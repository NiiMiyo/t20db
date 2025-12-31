export default {
	nome: "Qareen",
	atributos: {
		Carisma: 2,
		Inteligência: 1,
		Sabedoria: -1,
	},
	habilidades: [
		{
			nome: "Desejos",
			texto: "Se lançar uma magia que alguém tenha pedido desde seu último turno, o custo da magia diminui em –1 PM. Fazer um desejo ao qareen é uma ação livre.",
		},
		{
			nome: "Resistência Elemental",
			texto: "Conforme sua ascendência, você recebe redução 10 a um tipo de dano. Escolha uma: frio (qareen da água), eletricidade (do ar), fogo (do fogo), ácido (da terra), luz (da luz) ou trevas (qareen das trevas).",
		},
		{
			nome: "Tatuagem Mística",
			texto: "Você pode lançar uma magia de 1º círculo a sua escolha (atributo-chave Carisma). Caso aprenda novamente essa magia, seu custo diminui em –1 PM. (Mágica)",
		},
	],
	livro: {
		nome: "Livro Básico",
		pagina: 26,
	},
} satisfies Raca;
