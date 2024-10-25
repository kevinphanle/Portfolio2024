import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import './index.css';

import { OhVueIcon, addIcons } from "oh-vue-icons";
// import { ViFileTypeVue, ViFileTypeJsOfficial, ViFileTypeHtml } from "oh-vue-icons/icons";
import * as ViIcons from "oh-vue-icons/icons/vi";
import * as SiIcons from "oh-vue-icons/icons/si";

const Vi = Object.values({ ...ViIcons });
const Si = Object.values({ ...SiIcons });

addIcons(...Vi, ...Si);

// addIcons(ViFileTypeVue, ViFileTypeJsOfficial );

const app = createApp(App);

app.component("v-icon", OhVueIcon);

app.mount('#app')
