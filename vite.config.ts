import path from "node:path";

import { defineConfig } from "vite";
import generateFile from "vite-plugin-generate-file";

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
		generateFile( [
			{
				type: "json",
				output: "./racas.json",
				data: require( "./src/data/racas/index.ts" ).Racas,
			}
		] ),
	],
}) );
