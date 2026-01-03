declare namespace Filtros {
	type TextoProps = Omit<
		React.InputHTMLAttributes<HTMLInputElement>,
		"type" | "checked" | "defaultChecked"
	>;
}
