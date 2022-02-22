const buildHelper = require("@egjs/build-helper");

const defaultOptions = {
  sourcemap: true,
  input: "./src/index.ts",
  exports: "named",
  commonjs: true,
  external: {
    "vue": "vue",
    "@vue/composition-api": "@vue/composition-api",
    "@egjs/conveyer": "@egjs/conveyer",
  }
};
export default buildHelper([
    {
        ...defaultOptions,
        format: "es",
        output: "./dist/conveyer.esm.js",
    },
    {
        ...defaultOptions,
        format: "cjs",
        output: "./dist/conveyer.cjs.js",
    },
]);
