import { ListarHabilidades } from "../../web/components/ListarHabilidades";

export default {
	nome: "Kallyanach",
	atributos: "+2 em um atributo a sua escolha ou +1 em dois atributos a sua escolha",
	habilidades: [
		{
			nome: "Herança Dracônica",
			texto: "Você é uma criatura do tipo monstro e recebe redução 5 contra um tipo de dano a sua escolha entre ácido, eletricidade, fogo, frio, luz ou trevas.",
		},
		{
			nome: "Bênção de Kallyadranoch",
			texto: <span>
				Escolha dois dos poderes a seguir. Uma vez por patamar, você pode escolher uma bênção no lugar de um poder de classe.
				<ListarHabilidades habilidades={ [
					{ nome:"Armamento Kallyanach", texto: "Você possui uma arma natural (dano 1d6, crítico x2) escolhida entre cauda (impacto), chifres (perfuração) ou mordida (perfuração). Uma vez por rodada, quando usa a ação agredir para atacar com outra arma, pode gastar 1 PM para fazer um ataque corpo a corpo extra com essa arma." },
					{ nome:"Asas Dracônicas", texto: "Você pode gastar 1 PM por rodada para voar com deslocamento de 9m. Enquanto estiver voando desta forma, você fica vulnerável." },
					{ nome:"Escamas Elementais", texto: "Sua pele é recoberta de escamas resistentes e brilhantes, que fornecem +2 na Defesa e aumentam a RD de sua Herança Dracônica para 10." },
					{ nome:"Prática Arcana", texto: "Escolha uma magia arcana de 1º círculo que cause dano do mesmo tipo de sua Herança Dracônica. Você pode lançar essa magia (atributo-chave Inteligência). Caso aprenda novamente essa magia, seu custo diminui em –1 PM. Você pode escolher esta bênção mais de uma vez para outras magias.", magica: true },
					{ nome:"Sentidos Dracônicos", texto: "Seus sentidos são impregnados com poder dracônico. Você recebe faro e visão no escuro." },
					{ nome:"Sopro de Dragão", texto: "Você pode gastar uma ação padrão e 1 PM para soprar um cone de 6m que causa 1d12 pontos de dano do tipo de sua Herança Dracônica (Ref CD Constituição reduz à metade). A cada quatro níveis após o 1º, você pode gastar +1 PM para aumentar o dano do sopro em +1d12." },
				] }/>
			</span>,
		},
	],
	longevidade: "x2",
	livro: {
		nome: "Ameaças de Arton",
		pagina: 151,
	},
} satisfies Raca;
