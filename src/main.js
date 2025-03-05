import { createApp } from 'vue';
import App from './App.vue';
import './assets/style.css';
const link = document.createElement('link');
link.href = "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0";
link.rel = "stylesheet";
document.head.appendChild(link);

const app = createApp(App);
app.mount('#app');
