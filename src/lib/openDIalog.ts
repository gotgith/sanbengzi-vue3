import Dialog from './Dialog.vue';
// h函数，使得有向组件传参的能力
import {createApp, h} from 'vue';
// 手动把Dialog挂载到页面上
export const openDialog = (options) => {
  const {title, content} = options;
  const div = document.createElement('div');
  document.body.appendChild(div);
  // 把Dialog挂载到div里面
  createApp({
    render() {
      return h(Dialog, {visible: true}, {title: '提示', content: '这是内容'});
    }
  }).mount(div);
};
