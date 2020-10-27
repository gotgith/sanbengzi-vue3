/*
 * @Date: 2020-10-19 14:21:57
 * @LastEditTime: 2020-10-27 15:30:52
 */
import './lib/gulu.scss'
import './index.scss';
import {createApp} from 'vue';
import App from './App.vue';
import {router} from './router';

const app = createApp(App);
app.use(router);
app.mount('#app');
