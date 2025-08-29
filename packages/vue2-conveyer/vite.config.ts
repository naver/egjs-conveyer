import { defineConfig } from "vite";
import path from "path";
import vue2 from "@vitejs/plugin-vue2";
import dts from "vite-plugin-dts";

const pkg = require("./package.json");

const banner = `/*!
 * ${pkg.name} v${pkg.version}
 * (c) ${new Date().getFullYear()} ${pkg.author}
 * @license ${pkg.license}
 */`;

export default defineConfig({
  plugins: [
    vue2(),
    dts({
      insertTypesEntry: true,
    }),
  ],
  define: {
    "#__VERSION__#": JSON.stringify(pkg.version),
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "VueConveyer",
      formats: ["es", "cjs"],
      fileName: (format) => `conveyer.${format === "es" ? "esm" : "cjs"}.js`,
    },
    sourcemap: true,
    rollupOptions: {
      external: [
        "vue",
        "@vue/composition-api",
        "@egjs/conveyer"
      ],
      output: {
        globals: {
          "vue": "Vue",
          "@vue/composition-api": "VueCompositionAPI",
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