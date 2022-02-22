const commonjs = require("rollup-plugin-commonjs");
const buildHelper = require("@egjs/build-helper");

export default buildHelper([
	{
		input: "./src/vue-conveyer/index.ts",
		output: "./dist/conveyer.cjs.js",
		format: "cjs",
		exports: "named",
		external: {
			"vue": "vue",
			"@egjs/conveyer": "@egjs/conveyer",
		}
	},
	{
		input: "./src/vue-conveyer/index.ts",
		output: "./dist/conveyer.esm.js",
		format: "esm",
		exports: "named",
		external: {
			"vue": "vue",
			"@egjs/conveyer": "@egjs/conveyer",
		}
	},
]);

