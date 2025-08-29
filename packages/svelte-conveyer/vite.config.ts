import { defineConfig } from "vite";
import path from "path";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import sveltePreprocess from "svelte-preprocess";
import dts from "vite-plugin-dts";

const pkg = require("./package.json");

const banner = `/*!
 * ${pkg.name} v${pkg.version}
 * (c) ${new Date().getFullYear()} ${pkg.author}
 * @license ${pkg.license}
 */`;

export default defineConfig({
  plugins: [
    svelte({
      preprocess: sveltePreprocess(),
    }),
    dts({
      insertTypesEntry: true,
    }),
  ],
  define: {
    "#__VERSION__#": JSON.stringify(pkg.version),
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/svelte-conveyer/index.ts"),
      name: "SvelteConveyer",
      formats: ["es", "cjs"],
      fileName: (format) => `conveyer.${format === "es" ? "esm" : "cjs"}.js`,
    },
    sourcemap: true,
    rollupOptions: {
      external: [/^svelte/],
      output: {
        globals: {
          svelte: "Svelte",
        },
        banner,
        exports: "named",
        freeze: false,
      },
    },
    outDir: "dist",
  },
});