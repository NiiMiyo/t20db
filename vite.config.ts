import path from "node:path";

import { defineConfig } from "vite";
import generateFile from "vite-plugin-generate-file";
import react from '@vitejs/plugin-react-swc';

import { gerarJsonRacas } from "./src/scripts/gerar_json";

export default defineConfig( env => ({
	resolve: {
		alias: {
			"@": path.resolve( __dirname, "src" ),
		},
	},

	base: env.mode === "production"
		? "/t20db/"
		: undefined,

	plugins: [
		react(),
		generateFile( [
			{
				type: "json",
				output: "./racas.json",
				data: gerarJsonRacas(),
			}
		] ),
	],
}) );
