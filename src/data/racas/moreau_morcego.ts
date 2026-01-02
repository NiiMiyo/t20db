export default {
	nome: "Moreau (Morcego)",
	atributos: {
		Destreza: 1,
		"Dois Atributos": 1,
	},
	habilidades: [
		{
			nome: "Asas",
			texto: "Você pode pairar a 1,5m do chão com deslocamento 9m. Isso permite que você ignore terreno difícil e o torna imune a dano por queda (a menos que esteja inconsciente). Se não estiver usando armadura pesada, você pode gastar 1 PM por rodada para voar com deslocamento de 12m. Você precisa de espaço para abrir suas asas; quando paira ou voa, ocupa o espaço de uma criatura de uma categoria de tamanho maior que a sua.",
		},
		{
			nome: "Criatura da Noite",
			texto: "Você recebe visão no escuro e +2 em Furtividade e Percepção.",
		},
		{
			nome: "Ecolocalização",
			texto: "Você pode gastar 1 PM para receber percepção às cegas em alcance médio por 1 rodada.",
		},
	],
	longevidade: "Normal",
	livro: {
		nome: "Ameaças de Arton",
		pagina: 304,
	},
} satisfies Raca;
