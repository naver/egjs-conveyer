
// conveyer.js
// conveyer.min.js
// conveyer.pkgd.js
// conveyer.pkgd.min.js
// conveyer.esm.js


const buildHelper = require("@egjs/build-helper");

export default buildHelper([
	{
		input: "./src/react-conveyer/index.tsx",
		output: "./dist/conveyer.cjs.js",
		format: "cjs",
		exports: "named",
	},
	{
		input: "./src/react-conveyer/index.tsx",
		output: "./dist/conveyer.esm.js",
		format: "esm",
		exports: "named",
	},
]);

