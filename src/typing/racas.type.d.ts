declare namespace Raca {
	type Raca = {
		nome: string;
		habilidades: Raca.Habilidade[];
		atributos: {
			[ k in Atributo ]?: number;
		} & {
			[ k in string ]?: number;
		};
		origem: Origem;
	}

	type Habilidade = {
		nome: string;
		texto: string;
	};
}

type Raca = Raca.Raca;
