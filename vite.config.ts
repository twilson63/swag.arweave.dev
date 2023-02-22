import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import autoprefixer from "autoprefixer";
import tailwind from "tailwindcss";
import tailwindConfig from "./tailwind.config.js";

export default defineConfig({
  base: "",
  define: {
    __SWAG_CONTRACT__: "pcciYWuObwPtQOhdnoQmg9jXDvEwXFryeUOGHY59c1k"
  },
  plugins: [svelte()],
  css: {
    postcss: {
      plugins: [tailwind(tailwindConfig), autoprefixer]
    }
  }
});
