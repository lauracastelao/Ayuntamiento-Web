import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import PrimeVue from 'primevue/config';
import DataTable from 'primevue/datatable';
import Column from "primevue/column";
import Panel from "primevue/panel";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(PrimeVue);
app.mount("#app");
app.component('DataTable', DataTable);
app.component('Column', Column);
app.component('Panel', Panel);