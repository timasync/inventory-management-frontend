import { createApp } from "vue";
import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import router from "./router";
import { createPinia } from "pinia";
import { createPiniaMiddleware } from "./plugins/piniaMiddleware";
import piniaPersistedstate from "pinia-plugin-persistedstate";

const pinia = createPinia();

pinia.use(createPiniaMiddleware());
pinia.use(piniaPersistedstate);

const app = createApp(App);
app.use(pinia);
app.use(router);
app.mount("#app");
