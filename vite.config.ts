import { defineConfig } from "vite";
import checker from "vite-plugin-checker";
import legacy from "@vitejs/plugin-legacy";

export default defineConfig({
  plugins: [
    checker({
      typescript: true,
    }),
    legacy({
      targets: ["defaults", "not IE 11"],
    }),
  ],
});
