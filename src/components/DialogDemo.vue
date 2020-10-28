<template>
  <div>
    <Button @click="toggle">打开</Button>
    <Dialog v-model:visible="status" :closeOnClickOverlay="false" :ok="f1" :cancel="f2"></Dialog>
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
    const f1 = () => {return false;};
    const f2 = () => {};
    const toggle = () => {
      status.value = !status.value;
    };
    return {status, toggle, f1, f2};
  }
};
</script>
