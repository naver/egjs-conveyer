// vite.config.ts
import { defineConfig } from "vite";
import path from "path";

const pkg = require("./package.json");

const banner = `/*!
 * ${pkg.name} v${pkg.version}
 * (c) ${new Date().getFullYear()} ${pkg.author}
 * @license ${pkg.license}
 */`;

const format = process.env.VITE_BUILD_FORMAT;

export default defineConfig({
  define: {
    "#__VERSION__#": JSON.stringify(pkg.version),
    "#__FILETYPE__#": JSON.stringify(format || "unknown"),
  },
  build: {
    emptyOutDir: false,
    lib: {
      entry: path.resolve(__dirname, `src/index${format === "umd" || format === "cjs" ? "." + format : ""}.ts`),
      name: "Conveyer",
      formats: [format],
      fileName: (format) => {
        if (process.env.VITE_BUILD_MINIFY) {
          return `conveyer.min.js`;
        }
        const formatExt = {
          "umd": "js",
          "cjs": "cjs.js",
          "es": "esm.js",
        };
        return `conveyer.${formatExt[format]}`;
      },
    },
    sourcemap: true,
    minify: process.env.VITE_BUILD_MINIFY ? "terser" : false,
    terserOptions: process.env.VITE_BUILD_MINIFY ? {
      compress: {
        drop_console: true,
      },
      format: {
        comments: (node, comment) => {
          const text = comment.value;
          const type = comment.type;
          if (type === "comment2") {
            return new RegExp(pkg.name, "i").test(text) || /license/i.test(text);
          }
        },
      },
    } : {},
    rollupOptions: {
      external: [],
      output: {
        globals: {},
        banner,
        freeze: false,
        exports: format === "umd" ? "default" : "named",
      },
    },
    outDir: "dist",
  },
});