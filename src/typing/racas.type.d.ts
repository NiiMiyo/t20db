declare namespace Raca {
	type Raca = {
		nome: string;
		habilidades: Raca.Habilidade[];
		atributos: ({
			[ k in Atributo ]?: number;
		} & {
			[ k in string ]?: number;
		}) | string;
		longevidade: Longevidade;
		livro: LivroTormenta;
	}

	type Habilidade = {
		nome: string;
		magica?: boolean;
		texto: string | React.JSX.Element;
		preRequisitos?: string[];
	};

	type Longevidade = "Normal" | "x2" | "x5" | "Indefinida";

	// todo: Adicionar devoções
}

type Raca = Raca.Raca;
