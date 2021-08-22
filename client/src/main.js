import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import stroe from "./store";
import "./index.css";

createApp(App).use(router).use(stroe).mount("#app");
