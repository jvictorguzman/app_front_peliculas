import { createApp } from 'vue';
import './style.css';
import './cards-gallery.css';
import 'bootstrap/dist/css/bootstrap.css';
import './baguetteBox.min.css';

import App from './App.vue';
import { createPinia } from 'pinia';

import router from './router/router';

const app = createApp(App);

const pinia = createPinia();

app.use(pinia);

app.use(router);

app.mount('#app');
