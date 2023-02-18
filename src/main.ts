import "./app.css";
import App from "./App.svelte";
import { defineConfig, install } from "https://esm.sh/@twind/core";
import presetAutoprefix from "https://esm.sh/@twind/preset-autoprefix";
import presetTailwind from "https://esm.sh/@twind/preset-tailwind";

install(defineConfig({
  presets: [presetAutoprefix(), presetTailwind()],
}));

const app = new App({
  target: document.getElementById("app"),
});

export default app;
