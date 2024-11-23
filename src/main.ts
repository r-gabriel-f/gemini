

import { createApp } from "vue";
import PrimeVue from "primevue/config";
import Aura from '@primevue/themes/aura';
import './style.css'
import App from "./App.vue";
import Button from "primevue/button"
const app = createApp(App);
app.use(PrimeVue, {
    theme: {
        preset: Aura
    }
});
app.component('Button', Button);
app.mount("#app");
