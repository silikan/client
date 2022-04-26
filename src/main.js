import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import "./index.css";

import ElementPlus from "element-plus";

import "element-plus/dist/index.css";
import './assets/tailwind.css'

createApp(App).use(store).use(ElementPlus).use(router).mount("#app");
