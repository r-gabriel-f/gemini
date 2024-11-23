

import { createApp } from "vue";
import PrimeVue from "primevue/config";
import Aura from '@primevue/themes/aura';
import './style.css'
import App from "./App.vue";
import Button from "primevue/button"
import Textarea from 'primevue/textarea';
import Fieldset from 'primevue/fieldset';

const app = createApp(App);
app.use(PrimeVue, {
    theme: {
        preset: Aura
    }

});
app.component('Button', Button);
app.component('Textarea', Textarea);
app.component('Fieldset', Fieldset);
app.mount("#app");
