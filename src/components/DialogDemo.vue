<template>
  <div>
    <Button @click="toggle">打开</Button>
    <Dialog title="提示" v-model:visible="status" :closeOnClickOverlay="false" :ok="onclickEnter" :cancel="onclickCancel">
      <template v-slot:content>
        <strong>这这这</strong>
        <div>写这</div>
      </template>
      <template v-slot:title>
        <strong>自定义标题</strong>
      </template>
    </Dialog>
  </div>
</template>

<script lang="ts">
import {ref} from 'vue';
import Button from '../lib/Button.vue';
import Dialog from '../lib/Dialog.vue';

export default {
  components: {Dialog, Button},
  setup() {
    const status = ref(false);
    // 通过返回false来阻止Dialog关闭
    const onclickEnter = () => {return false;};
    const onclickCancel = () => {};
    const toggle = () => {
      status.value = !status.value;
    };
    return {status, toggle, onclickEnter, onclickCancel};
  }
};
</script>
