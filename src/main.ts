/*
 * @Date: 2020-10-19 14:21:57
 * @LastEditTime: 2020-10-19 17:04:55
 */
import { createApp } from 'vue';
import App from './App.vue';
import './index.css';
import { createWebHashHistory, createRouter } from 'vue-router';
import HaHa from './components/HaHa.vue';
import HaHa2 from './components/HaHa2.vue';


const history = createWebHashHistory();
const router = createRouter({
  history,
  routes: [
    { path: '/', component: HaHa },
    { path: '/xxx', component: HaHa2 }
  ]
});
const app = createApp(App);
app.use(router);
app.mount('#app');
