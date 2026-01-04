import nagah_macho from "./nagah_macho";

export default {
	...nagah_macho,

	nome: "Nagah (Fêmea)",
	atributos: {
		Inteligência: 1,
		Sabedoria: 1,
		Carisma: 1,
	},
} as const satisfies Raca;
