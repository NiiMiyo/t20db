declare namespace Raca {
	type Raca = {
		nome: string;
		habilidades: Raca.Habilidade[];
		atributos: {
			[ k in Atributo ]?: number;
		} & {
			[ k in string ]?: number;
		};
		livro: LivroTormenta;
	}

	type Habilidade = {
		nome: string;
		magica?: boolean;
		texto: string | React.JSX.Element;
	};

	// todo: Adicionar devoções
}

type Raca = Raca.Raca;
