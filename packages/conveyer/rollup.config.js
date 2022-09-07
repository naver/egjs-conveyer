
const buildHelper = require("@egjs/build-helper");
const name = "Conveyer";

export default buildHelper([
	{
		name,
		input: "./src/index.umd.ts",
		output: "./dist/conveyer.js",
		format: "umd",
		resolve: true,
	},
	{
		name,
		input: "./src/index.umd.ts",
		output: "./dist/conveyer.min.js",
		format: "umd",
		uglify: true,
		resolve: true,
	},
	{
		input: "./src/index.cjs.ts",
		output: "./dist/conveyer.cjs.js",
		format: "cjs",
		exports: "named",
	},
	{
		input: "./src/index.ts",
		output: "./dist/conveyer.esm.js",
		format: "esm",
		exports: "named",
	},
]);

