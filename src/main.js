import { createApp } from 'vue'
import './sass/app.scss'
import App from './App.vue'
import axios from 'axios';
import VueAxios from 'vue-axios';
import store from './store/index';
import Router from "./router";
// ;
// App.use(VueAxios, axios);
// App.use(store);
createApp(App).use(Router).use(VueAxios, axios).use(store).mount('#app')

