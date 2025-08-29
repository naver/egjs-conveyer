import { defineConfig } from "vite";
import path from "path";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";

const pkg = require("./package.json");

const banner = `/*!
 * ${pkg.name} v${pkg.version}
 * (c) ${new Date().getFullYear()} ${pkg.author}
 * @license ${pkg.license}
 */`;

export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
    }),
  ],
  define: {
    "#__VERSION__#": JSON.stringify(pkg.version),
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/react-conveyer/index.tsx"),
      name: "ReactConveyer",
      formats: ["es", "cjs"],
      fileName: (format) => `conveyer.${format === "es" ? "esm" : "cjs"}.js`,
    },
    sourcemap: true,
    rollupOptions: {
      external: ["react", "react-dom", "react/jsx-runtime"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "react/jsx-runtime": "jsxRuntime",
        },
        banner,
        exports: "named",
        freeze: false,
      },
    },
    outDir: "dist",
  },
});