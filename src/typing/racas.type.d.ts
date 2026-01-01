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
		// todo: Adicionar símbolo para habilidades mágicas
		texto: string | React.JSX.Element;
	};
}

type Raca = Raca.Raca;
