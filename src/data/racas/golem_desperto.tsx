import { ListarHabilidades } from "../../web/components/ListarHabilidades";

export default {
	nome: "Golem Desperto",
	atributos: {
		Força: 1,
		Carisma: -1,
	},
	habilidades: [
		{
			nome: "Chassi",
			texto: <span>
				Você leva um dia para vestir ou remover uma armadura (pois precisa acoplar as peças dela a seu chassi). Entretanto, por ser acoplada, sua armadura não conta no limite de itens que você pode usar (mas você só pode usar uma armadura). Além disso, escolha um material para seu chassi entre os abaixo.
				<ListarHabilidades habilidades={ [
					{ nome: "Barro", texto: "Constituição +2. Seu deslocamento não é afetado por terreno difícil e você passa automaticamente em testes de Acrobacia para passar por espaços apertados. Se permanecer mais de um dia sem contato com água, você não recupera PM com descanso até voltar para a água.", },
					{ nome: "Bronze", texto: "+1 em dois atributos. Seu deslocamento não é reduzido por armaduras pesadas ou excesso de carga. Sua armadura não é acoplada ao seu corpo; você pode removê-la e colocá-la no tempo normal, mas ela conta em seu limite de itens vestidos.", },
					{ nome: "Carne", texto: "Constituição +2, Força +1, Carisma –1. Seu deslocamento é 6m, mas não é reduzido por uso de armadura ou excesso de carga. Você recebe imunidade a metamorfose e trevas, mas não pode escolher elemental (água ou fogo) ou vapor como sua fonte de energia, e dano mágico de fogo e frio o deixa lento por 1d4 rodadas.", },
					{ nome: "Espelhos", texto: "Carisma +2, Sabedoria +1, Constituição –1. Quando uma criatura em alcance curto usa uma habilidade de classe que você possa ver, você pode gastar 1 PM para copiar essa habilidade. Até o fim do seu próximo turno, você pode usá-la como uma habilidade de raça (se ela usar um atributo para algo, use seu Carisma). Se copiar outra habilidade, você perde a anterior.", },
					{ nome: "Ferro", texto: "Força +1 e Constituição +1. Seu deslocamento é 6m, mas não é reduzido por uso de armadura ou excesso de carga. Você recebe +2 na Defesa, mas possui penalidade de armadura –2.", },
					{ nome: "Gelo Eterno", texto: "Constituição +2. Seu deslocamento é 6m, mas não é reduzido por uso de armadura ou excesso de carga. Você recebe imunidade a frio e redução de fogo 10, mas não pode escolher elemental (fogo) ou vapor como sua fonte de energia (veja Golem de Nor na página 348).", },
					{ nome: "Pedra", texto: "Constituição +2. Você não pode correr e seu deslocamento é 6m, mas não é reduzido por uso de armadura ou excesso de carga. Você recebe redução de corte, fogo e perfuração 5.", },
					{ nome: "Sucata", texto: "Força +1 e Constituição +1. Seu deslocamento é 6m, mas não é reduzido por uso de armadura ou excesso de carga. Quando recebe cuidados prolongados com a perícia Ofício (artesão), sua recuperação de PV aumenta em +2 por nível nesse dia (em vez de +1).", },
				] } />
			</span>,
		},
		{
			nome: "Criatura Artificial",
			texto: "Você é uma criatura do tipo construto. Recebe visão no escuro e imunidade a cansaço, efeitos metabólicos e veneno. Além disso, não precisa respirar, alimentar-se ou dormir, mas não se beneficia de cura mundana e de itens da categoria alimentação. Você precisa ficar inerte por 8 horas por dia para recarregar sua fonte de energia. Se fizer isso, recupera PV e PM por descanso em condições normais (golens não são afetados por condições boas ou ruins de descanso). Por fim, a perícia Cura não funciona em você, mas Ofício (artesão) pode ser usada no lugar dela.",
		},
		{
			nome: "Fonte de Energia",
			texto: <span>
				Escolha sua fonte de energia da lista abaixo.
				<ListarHabilidades habilidades={ [
					{ nome: "Alquímica", texto: "Uma mistura alquímica gera a energia necessária à sua vida. Você pode gastar uma ação padrão para ingerir um item alquímico qualquer; se fizer isso, recupera 1 PM.", },
					{ nome: "Elemental", texto: "Você possui um espírito elemental preso em seu corpo. Escolha entre água (frio), ar (eletricidade), fogo (fogo) e terra (ácido). Você é imune a dano desse tipo. Se fosse sofrer dano mágico deste tipo, em vez disso cura PV em quantidade igual à metade do dano.", },
					{ nome: "Sagrada", texto: "Você foi animado por um texto ou símbolo sagrado depositado em seu corpo. Você pode lançar uma magia divina de 1º círculo a sua escolha (atributo-chave Sabedoria). Caso aprenda novamente essa magia, seu custo diminui em –1 PM. Alguém treinado em Religião pode trocar essa magia com um ritual que demora um dia e exige o gasto de um pergaminho mágico com outra magia de 1° círculo.", },
					{ nome: "Vapor", texto: "Seu corpo é movido por vapor e engrenagens. Você é imune a dano de fogo; se fosse sofrer dano desse tipo, em vez disso seu deslocamento aumenta em 4,5m por 1 rodada. Entretanto, dano de frio deixa-o lento por 1 rodada. Você pode gastar uma ação padrão e PM para soprar um jato de vapor escaldante em um cone de 4,5m. Criaturas na área sofrem 1d6 pontos de dano de fogo por PM gasto e ficam em chamas (Ref CD Con reduz à metade e evita a condição).", },
				] }
				/>
			</span>,
		},
		{
			nome: "Propósito de Criação",
			texto: "Você foi construído “pronto” para um propósito específico e não teve uma infância. Você não tem direito a escolher uma origem, mas recebe um poder geral a sua escolha.",
		},
		{
			nome: "Tamanho",
			texto: <span>
				Escolha seu tamanho da lista abaixo.
				<ListarHabilidades habilidades={ [
					{ nome: "Pequeno", texto: "Destreza +1." },
					{ nome: "Médio", texto: "Sem ajustes." },
					{ nome: "Grande", texto: "Destreza –1." },
				] } />
			</span>,
		},
	],
	longevidade: "Indefinida",
	livro: {
		nome: "Ameaças de Arton",
		pagina: 134,
	},
} as const satisfies Raca;
