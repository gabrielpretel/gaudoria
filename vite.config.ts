import { defineConfig } from "vite";
import checker from "vite-plugin-checker";
import legacy from "@vitejs/plugin-legacy";
import { fileURLToPath } from "node:url";
import svgr from "vite-plugin-svgr";

export default defineConfig({
  plugins: [
    checker({
      typescript: true,
    }),
    legacy({
      targets: ["defaults", "not IE 11"],
    }),
    svgr(),
  ],
  css: {
    modules: {
      localsConvention: "camelCase",
    },
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  server: {
    hmr: false,
  },
  build: {
    sourcemap: "inline",
  },
});
