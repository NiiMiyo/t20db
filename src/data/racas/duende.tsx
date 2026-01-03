import { EspiralMagica } from "../../web/components/EspiralMagica";
import { ListarHabilidades } from "../../web/components/ListarHabilidades";

export default {
	nome: "Duende",
	atributos: "Atributos variam de duende para duende",
	habilidades: [
		{
			nome: "Sonhos Malucos",
			texto: <>
				<p>Sabe quando você tem um sonho maluco, no qual nada faz sentido? Alguns duendes são exatamente assim. O que não é de se estranhar — afinal, Nimb tem um dedo na criação das fadas. Se quiser emular essa esquisitice toda, você pode criar seu duende de forma aleatória. Para isso, role 1d3, 1d4, 2d6 e 3d12, todos ao mesmo tempo. Esses dados irão definir, respectivamente, sua natureza, tamanho, dois bônus de atributos e três poderes (se você rolar bônus de atributos ou poderes repetidos, role novamente). Você ainda recebe as três limitações de todos os duendes (veja o passo 5) e ainda precisa definir seu tabu junto com o mestre.</p>
				<p>Se criar seu duende de forma aleatória, você começa o jogo com +2 PM — um presente do Deus do Caos por sua ousadia.</p>
			</>,
		},
		{
			nome: "Passo 1: Natureza",
			texto: <span>
				Você é uma criatura do tipo espírito. Além disso, escolha se você será <strong>animal</strong>, <strong>vegetal</strong> ou <strong>mineral</strong>.<br/>
				<ListarHabilidades habilidades={ [
					{ nome: "Animal", texto: "Você é feito de carne e osso. Seu corpo é humanoide, mas sua aparência varia: pode ser algo similar a um elfo ou sílfide, um animal que anda sobre duas patas ou uma mistura dessas possibilidades. Você recebe +1 em um atributo a sua escolha." },
					{ nome: "Vegetal", texto: "Você é feito de folhas, vinhas, cortiça ou madeira. Você recebe as habilidades Natureza Vegetal (é imune a atordoamento e metamorfose, mas é afetado por efeitos que afetam plantas monstruosas — se o efeito não tiver um teste de resistência, você tem direito a um teste de Fortitude) e Florescer Feérico (uma vez por rodada, pode gastar uma quantidade de PM limitada pela sua Constituição para curar 2d8 PV por PM gasto no início do seu próximo turno)." },
					{ nome: "Mineral", texto: "Você é feito de material inorgânico, como argila, rocha, cristal ou vidro. Você recebe imunidade a efeitos de metabolismo e redução de corte, fogo e perfuração 5, mas não se beneficia de itens da categoria alimentação." },
				] }/>
			</span>,
		},
		{
			nome: "Passo 2: Tamanho",
			texto: <span>
				Escolha seu tamanho, entre <strong>Minúsculo</strong>, <strong>Pequeno</strong>, <strong>Médio</strong> ou <strong>Grande</strong>.<br/>
				<ListarHabilidades habilidades={ [
					{ nome: "Minúsculo", texto: "Você é miudinho e fofinho. Pode ser uma caneca falante, um gato de monóculo ou um corvo com cara de velho (é, talvez não seja tão fofo assim). Você é Minúsculo (+5 em testes de Furtividade, –5 em testes de manobras de combate, usa armas reduzidas), possui deslocamento base 6m e sofre –1 em Força." },
					{ nome: "Pequeno", texto: "Você tem o tamanho de um hynne, de uma criança, de um cachorro ou de um barril. Talvez você seja um barril! Você é Pequeno (+2 em testes de Furtividade, –2 em testes de manobra) e possui deslocamento base 6m." },
					{ nome: "Médio", texto: "Você é Médio (sem modificadores por tamanho) e possui deslocamento base 9m. Blé!" },
					{ nome: "Grande", texto: "Agora sim! Meta medo em qualquer um que achar que fadas são fracotes. Você é Grande (–2 em testes de Furtividade, +2 em testes de manobra, usa armas aumentadas), possui deslocamento base 9m e sofre –1 em Destreza." },
				] }/>
			</span>,
		},
		{
			nome: "Passo 3: Dons",
			texto: <div>
				<p>Escolha dois atributos diferentes. Você recebe +1 em cada atributo escolhido. Não, não pode ser +2 em um único atributo. Xô, larga disso! Porém, se você for animal, pode adicionar um desses +1 no mesmo atributo que aumentou pela natureza.</p>
				<p>Se você estiver criando seu duende de forma aleatória, a rolagem de 2d6 determina os atributos nos quais você receberá +1, sendo uma rolagem 1 = Força, 2 = Destreza, 3 = Constituição e assim por diante.</p>
			</div>,
		},
		{
			nome: "Passo 4: Presentes de Magia e de Caos",
			texto: <span>
				Duendes não só são esquisitos: eles também conseguem fazer coisas esquisitas. Escolha três poderes da lista abaixo. Todos eles são mágicos. No caso de habilidades que permitam teste de resistência, a CD é Car, a menos que especificado em contrário. Uma vez por patamar, você pode escolher um presente no lugar de um poder de classe. <EspiralMagica />

				<ListarHabilidades tipo="Habilidades" habilidades={ [
					{
						nome: "1. Afinidade Elemental", texto: <span>
							Você possui ligação com um tipo de elemento do mundo natural, entre água, fogo ou vegetação (escolha uma quando adquirir este presente). Seu atributo-chave para as magias a seguir é Carisma. Caso aprenda novamente qualquer uma delas, seu custo diminui em –1 PM.
							<ListarHabilidades habilidades={ [
								{ nome: "Água", texto: "Você é ligado a lagos e rios. Provavelmente tem a pele e/ou os cabelos azulados. Você recebe deslocamento de natação igual ao seu deslocamento base e pode lançar as magias Criar Elementos (apenas água) e Névoa." },
								{ nome: "Fogo", texto: "Você é ligado a calor e chamas. Provavelmente tem a pele e/ou os cabelos avermelhados. Você recebe redução de fogo 5 e pode lançar as magias Criar Elementos (apenas fogo) e Explosão de Chamas." },
								{ nome: "Vegetação", texto: "Você é ligado a bosques e florestas. Provavelmente tem a pele e/ou os cabelos esverdeados. Você pode atravessar terrenos difíceis naturais sem sofrer redução em seu deslocamento e pode lançar as magias Armamento da Natureza e Controlar Plantas." },
							] }/>
						</span>,
					},
					{ nome: "2. Encantar Objetos", texto: "Você pode gastar uma ação de movimento e 3 PM para tocar um item e colocar nele um encanto pertinente a sua escolha (por exemplo, se tocar uma arma, pode colocar um encanto de arma nela). O encanto não pode ter pré-requisitos e dura até o fim da cena ou até você usar este poder novamente." },
					{ nome: "3. Enfeitiçar", texto: "Suas feições feéricas podem deslumbrar outros seres. Você pode lançar Enfeitiçar e usar seus aprimoramentos como se tivesse acesso aos mesmos círculos de magia que um arcanista de seu nível." },
					{ nome: "4. Invisibilidade", texto: "Um poder comum entre duendes e responsável por boa parte do folclore confuso sobre eles (“Como assim você não viu aquela tartaruga alada falante que estava aqui agora há pouco?”). Você pode lançar Invisibilidade e usar seus aprimoramentos como se tivesse acesso aos mesmos círculos de magia que um arcanista de seu nível." },
					{ nome: "5. Língua da Natureza", texto: "Você recebe +2 em Adestramento e Sobrevivência, e pode falar com animais e plantas (como o efeito da magia Voz Divina)." },
					{ nome: "6. Maldição", texto: <div>
						<p>Nem todos os poderes feéricos são fofos ou engraçados… Você pode gastar uma ação padrão e 3 PM para amaldiçoar uma criatura em alcance curto. A criatura tem direito a um teste de resistência. Se falhar, sofre o efeito da maldição. Se passar, fica imune a este presente por um dia. Para construir sua maldição, escolha qual resistência ela permite (entre Fortitude ou Vontade) e seu efeito (da lista abaixo). Uma vez feitas, essas escolhas não podem ser mudadas.</p>
						<p>A maldição é permanente, mas você pode cancelá-la como uma ação livre, e ela pode ser curada por Purificação com o aprimoramento de +7 PM. Além disso, você só pode manter uma maldição por vez (se quiser amaldiçoar uma nova criatura, precisa cancelar a maldição anterior). Com a permissão do mestre, você pode criar uma maldição personalizada, usando os efeitos abaixo como referência.</p>
						<ListarHabilidades habilidades={ [
							{ nome: "Apatia Profunda", texto: "A criatura fica alquebrada e frustrada." },
							{ nome: "Coração de Geleia", texto: "A criatura fica abalada e, na primeira vez que tentar fazer uma ação hostil em cada cena, deve repetir o teste de resistência. Se falhar, não consegue e perde sua ação." },
							{ nome: "Envelhecimento Súbito", texto: "A criatura fica fraca e lenta." },
							{ nome: "Loucura do Verão", texto: "No início de cada cena, a criatura deve repetir o teste de resistência. Se falhar, fica confusa." },
							{ nome: "Mil Verrugas", texto: "A vítima sofre –2 em Carisma e, na primeira vez em cada cena que outra criatura inicie seu turno em alcance curto dela, essa segunda criatura deve fazer um teste de Vontade. Se falhar, a atitude dela em relação à criatura amaldiçoada piora em uma categoria. Ser feio pode matar!" },
							{ nome: "Ruína do Corpo", texto: "A criatura fica fatigada e vulnerável." },
						] }/>
					</div> },
					{ nome: "7. Mais Lá do que Aqui", texto: "Você pode gastar uma ação padrão e 2 PM para fazer seu corpo, exceto por uma parte (como a cabeça ou uma cauda), desaparecer pela cena. Nesse estado, recebe camuflagem leve e +5 em Furtividade." },
					{ nome: "8. Metamorfose Animal", texto: "Você pode se transformar em um tipo de animal. Escolha uma forma selvagem do druida, como ágil ou veloz (veja Tormenta20, p. 63). Você pode gastar uma ação completa e 3 PM para assumir essa forma, recebendo todos seus modificadores. Ao contrário de um druida, você pode falar e lançar magias mesmo em sua forma selvagem. Porém, você pode assumir apenas a forma escolhida, e apenas em sua versão básica." },
					{ nome: "9. Sonhos Proféticos", texto: "Uma vez por cena, você pode gastar 3 PM para ter uma visão que, graças a sua natureza feérica, provavelmente se concretizará. Role 1d20. Até o fim da cena, você pode substituir o resultado do d20 de um teste realizado por uma criatura em alcance curto pelo resultado do dado que você rolou ao usar este presente." },
					{ nome: "10. Velocidade do Pensamento", texto: "Em seu primeiro turno em cada cena, você pode gastar 2 PM para realizar uma ação padrão adicional. Se fizer isso, você pula seu turno na segunda rodada." },
					{ nome: "11. Visão Feérica", texto: "Você recebe visão na penumbra e está permanentemente sob efeito da magia Visão Mística com o aprimoramento de enxergar criaturas e objetos invisíveis." },
					{ nome: "12. Voo", texto: "Você possui asas ou alguma fonte de voo mágico. Consegue flutuar 1,5m acima do nível do chão com deslocamento igual ao seu deslocamento base +3m, o que permite que ignore terreno difícil e torna-o imune a dano por queda (a menos que esteja inconsciente). Você também pode voar, mas isso é cansativo: você gasta 1 PM por rodada para voar com deslocamento igual ao seu deslocamento base +6m." },
				] }/>
			</span>,
		},
		{
			nome: "Passo 5: Limitações",
			texto: <span>
				<p>A natureza mágica e caótica dos duendes faz com que eles sejam poderosos — mas também lhes impõe várias limitações. Você recebe as habilidades a seguir.</p>
				<ListarHabilidades tipo="Habilidades" habilidades={ [
					{ nome: "Aversão a Ferro", texto: "Um material rígido e inflexível, o ferro é nocivo a duendes. Você sofre 1 ponto de dano adicional por dado de dano de ataques com armas de ferro e sofre 1d6 pontos de dano por rodada se estiver empunhando ou vestindo um item de ferro. Isso também se aplica a aço, que inclui ferro em sua composição. Na prática, duendes usam apenas armas de madeira ou de materiais especiais, como mitral." },
					{ nome: "Aversão a Sinos", texto: "O badalar de um sino representa ordem e devoção, algo que faz mal a duendes. Se você escutar esse som, fica alquebrado e esmorecido até o fim da cena. No início de qualquer cena em um ambiente urbano no qual haja uma ou mais igrejas ou templos (o que inclui praticamente todas as aldeias e cidades do Reinado!), role 1d6. Em um resultado 1, você escutará um sino badalando em algum lugar." },
					{ nome: "Tabu", texto: "Você possui um tabu — algo que nunca pode fazer (ou deixar de fazer). Crie seu tabu junto com o mestre. Em termos de regras, a esquisitice de seu tabu impõe uma penalidade de –5 em Diplomacia, Iniciativa, Luta ou Percepção, a sua escolha (um tabu que afete seu comportamento, por exemplo, impõe –5 em Diplomacia). Se você desrespeitar seu tabu, fica fatigado por um dia (mesmo que seja imune a essa condição). Nenhum efeito pode curar essa condição. Se no dia seguinte continuar desrespeitando o tabu, você fica exausto. Se no terceiro dia não mudar seu comportamento, você morre." },
				] }/>
			</span>,
		},
	],
	longevidade: "Variável",
	livro: {
		nome: "Heróis de Arton",
		pagina: 8,
	},
} satisfies Raca;
