import './app.css'
import App from './App.svelte'
import { install, defineConfig } from "https://esm.sh/@twind/core"

install(defineConfig({}))

const app = new App({
  target: document.getElementById('app'),
})

export default app
