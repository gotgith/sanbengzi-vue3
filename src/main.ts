/*
 * @Date: 2020-10-19 14:21:57
 * @LastEditTime: 2020-10-19 17:46:21
 */
import { createApp } from 'vue';
import App from './App.vue';
import './index.css';
import { createWebHashHistory, createRouter } from 'vue-router';
import Home from './views/Home.vue'
import Doc from './views/Doc.vue'

const history = createWebHashHistory();
const router = createRouter({
  history,
  routes: [
    { path: '/', component: Home },
    { path: '/Doc', component: Doc }
  ]
});
const app = createApp(App);
app.use(router);
app.mount('#app');
