import './assets/base.scss';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import prismic from "./prismic";

import App from './App.vue';
import router from './router';
import HeaderComponent from "@/components/HeaderComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";

const app = createApp(App)

app.component('HeaderComponent',HeaderComponent)
    .component('FooterComponent', FooterComponent)



app.use(createPinia())
app.use(router)
app.use(prismic)

app.mount('#app')
