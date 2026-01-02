export default {
	nome: "Pteros",
	atributos: {
		Sabedoria: 2,
		Destreza: 1,
		Inteligência: -1,
	},
	habilidades: [
		{
			nome: "Ligação Natural",
			texto: "Você possui uma ligação mental com uma criatura inteligente (Int –3 ou mais). Vocês podem se comunicar mentalmente em alcance longo e sempre sabem em que direção e distância podem encontrar o outro. Você pode trocar a criatura com a qual mantém o vínculo no início de cada aventura.",
		},
		{
			nome: "Mãos Rudimentares",
			texto: "Suas mãos não permitem que você empunhe itens, a menos que sejam mágicos ou especialmente adaptados para você (o que demora um dia e custa 50% do preço do item, sem contar melhorias). Seus itens iniciais, e aqueles recebidos por sua origem ou habilidades, são adaptados para você.",
		},
		{
			nome: "Pés Rapinantes",
			texto: "Seus pés são duas armas naturais de garras (dano 1d6 cada, crítico x2, corte). Uma vez por rodada, quando usa a ação agredir para atacar com uma arma, você pode gastar 1 PM para fazer um ataque corpo a corpo extra com uma das garras, desde que ela esteja livre e não tenha sido usada para atacar neste turno. Como alternativa, se tiver habilidades que exijam uma arma secundária (como Estilo de Duas Armas), você pode usá-las com suas garras.",
		},
		{
			nome: "Senhor dos Céus",
			texto: "Você pode pairar a 1,5m do chão com deslocamento 9m. Isso permite que você ignore terreno difícil e o torna imune a dano por queda (a menos que esteja inconsciente). Se não estiver usando armadura pesada, você pode gastar 1 PM por rodada para voar com deslocamento de 12m. Quando abre suas asas para pairar ou voar, você ocupa o espaço de uma criatura de uma categoria de tamanho maior que a sua.",
		},
		{
			nome: "Sentidos Rapinantes",
			texto: "Você recebe visão na penumbra e +2 em Percepção e Sobrevivência.",
		},
	],
	longevidade: "Normal",
	livro: {
		nome: "Ameaças de Arton",
		pagina: 267,
	},
} satisfies Raca;
