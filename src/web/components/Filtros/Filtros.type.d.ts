declare namespace Filtro {
	namespace Texto {
		type Props = Pick<
			React.InputHTMLAttributes<HTMLInputElement>,
			"className" | "placeholder"
		> & {
			onChange?( text: string ): unknown;
		};
	};

	namespace Livro {
		type Props = {
			onChange?( livros: Selection ): unknown;
		};

		type Selection = {
			[ x in LivroTormenta ]: boolean;
		};
	};
}
