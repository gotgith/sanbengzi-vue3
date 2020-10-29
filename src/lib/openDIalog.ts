import Dialog from './Dialog.vue';
// h函数，使得有向组件传参的能力
import {createApp, h} from 'vue';
// 手动把Dialog挂载到页面上
export const openDialog = (options) => {
  const {title, content, ok, cancel} = options;
  const div = document.createElement('div');
  document.body.appendChild(div);
  const close = () => {
    app.unmount(div);
    div.remove();
  };
  // 把Dialog挂载到div里面
  const app = createApp({
    render() {
      return h(Dialog, {
        visible: true,
        'onUpdate:visible': (newValue) => {if (newValue === false) close();},
        ok() {return false;},
        cancel() {}
      }, {title, content});
    }
  });
  app.mount(div);
};
