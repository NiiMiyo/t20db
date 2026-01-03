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
		livro: LivroPagina;
	}

	type Habilidade = {
		nome: string;
		magica?: boolean;
		texto: string | React.JSX.Element;
		tipoEfeito?: TipoDeEfeito;
		preRequisitos?: string[];
	};

	type Longevidade = "Normal" | "x2" | "x5" | "Indefinida" | "Variável";

	// todo: Adicionar devoções
}

type Raca = Raca.Raca;
