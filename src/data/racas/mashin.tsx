import { ListarHabilidades } from "../../web/components/ListarHabilidades";

import golem from "./golem_desperto";
const { atributos, longevidade } = golem;

export default {
	nome: "Mashin",
	atributos,
	habilidades: [
		{
			nome: "Mashin (Chassi)",
			texto: <span>
				<i>Mashins são golens especiais criados com técnicas tamuranianas. Eles são um tipo de chassi para personagens golens (veja a página 134).</i><br/>
				+1 em dois atributos a sua escolha. Você se torna treinado em duas perícias a sua escolha e pode substituir uma dessas perícias por uma maravilha mecânica. Entretanto, você é sempre Médio.
			</span>,
		},
		{
			nome: "Maravilha Mecânica",
			texto: <span>
				Se escolher uma maravilha mecânica, você recebe um dos poderes a seguir. Uma vez por patamar, você pode escolher uma maravilha mecânica no lugar de um poder de classe.
				<ListarHabilidades habilidades={ [
					{ nome: "Adaptação Elemental", texto: "Quando sofre dano de ácido, eletricidade, fogo, frio, luz ou trevas, você pode gastar 2 PM para receber redução 10 contra esse tipo de dano até o fim da cena." },
					{ nome: "Arma Acoplada", texto: "Você possui uma arma acoplada ao seu corpo. Ela fica recolhida em um compartimento e não pode ser desarmada, e você conta como se tivesse Saque Rápido para usá-la. Um personagem treinado em Ofício (artesão) pode substituir essa arma com uma hora de trabalho e o gasto de T$ 100." },
					{ nome: "Arma Elemental", texto: "Você pode gastar uma ação de movimento e 2 PM para fazer uma arma que esteja empunhando causar +1d6 pontos de dano do tipo de sua fonte elemental até o fim da cena.", preRequisitos: [ "Fonte de Energia (elemental)" ] },
					{ nome: "Auxílio de Mira", texto: "Quando faz um ataque à distância, você pode pagar 1 PM para aumentar em +2 a margem de ameaça desse ataque." },
					{ nome: "Caminho da Perfeição", texto: "Escolha uma de suas perícias treinadas. Você recebe +2 nessa perícia." },
					{ nome: "Canalizar Reparos", texto: "Como uma ação completa, você pode gastar pontos de mana para recuperar pontos de vida, à taxa de 5 PV por PM." },
					{ nome: "Canhão Energético", texto: "Se sua arma acoplada for uma arma de fogo, você pode gastar uma ação de movimento e 1 PM para energizá-la. Até o fim da cena, seu próximo ataque com ela causa +1 dado de dano do mesmo tipo. Múltiplos usos deste poder são cumulativos (limitado por sua Constituição).", preRequisitos: [ "Arma Acoplada" ] },
					{ nome: "Dínamo de Mana", texto: "Escolha uma de suas habilidades com um custo em PM. Você pode gastar uma ação de movimento para canalizar seu mana. Quando faz isso, até o fim do seu turno, o custo do próximo uso da habilidade escolhida é reduzido em –1 PM. Um personagem treinado em Ofício (artesão) pode substituir essa habilidade com uma hora de trabalho e o gasto de T$ 100." },
					{ nome: "Pernas Aprimoradas", texto: "Você pode gastar 2 PM para receber +6m em seu deslocamento e +5 em Atletismo até o fim da cena." },
					{ nome: "Reservatório Alquímico", texto: "Você possui um reservatório em seu corpo que pode armazenar até duas doses de preparados alquímicos. Uma vez por rodada, você pode usar um desses preparados ou pode consumi-lo para sua fonte de energia. Carregar seu reservatório exige uma ação completa e o gasto dos itens com os quais você quiser carregá-lo.", preRequisitos: [ "Fonte de Energia (alquímica)" ] },
				] }/>
			</span>
		},
	],
	longevidade,
	livro: {
		nome: "Ameaças de Arton",
		pagina: 160,
	},
} as const satisfies Raca;
