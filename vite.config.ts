import path from "node:path";

import { defineConfig } from "vite";
import generateFile from "vite-plugin-generate-file";

export default defineConfig( {
	resolve: {
		alias: {
			"@": path.resolve( __dirname, "src" ),
		},
	},

	plugins: [
		generateFile( [
			{
				type: "json",
				output: "./racas.json",
				data: require( "./src/data/racas/index.ts" ).Racas,
			}
		] ),
	],
} );
