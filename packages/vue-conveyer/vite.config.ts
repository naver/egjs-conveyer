// vite.config.ts
import { defineConfig } from "vite";
import path from "path";
import vue from "@vitejs/plugin-vue";
import dts from "vite-plugin-dts";

const pkg = require("./package.json");

const banner = `/*!
 * ${pkg.name} v${pkg.version}
 * (c) ${new Date().getFullYear()} ${pkg.author}
 * @license ${pkg.license}
 */`;

export default defineConfig({
  plugins: [
    vue(),
    dts({
      insertTypesEntry: true,
    }),
  ],
  define: {
    "#__VERSION__#": JSON.stringify(pkg.version),
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/vue-conveyer/index.ts"),
      name: "VueConveyer",
      formats: ["es", "cjs"],
      fileName: (format) => `conveyer.${format === "es" ? "esm" : "cjs"}.js`,
    },
    sourcemap: true,
    rollupOptions: {
      external: [
        "vue",
        "@egjs/conveyer"
      ],
      output: {
        globals: {
          "vue": "Vue",
          "@egjs/conveyer": "Conveyer",
        },
        banner,
        exports: "named",
        freeze: false,
      },
    },
    outDir: "dist",
  },
});