<template>
  <div>
    <Button @click="toggle">打开</Button>
    <Dialog v-model:visible="status" :closeOnClickOverlay="false"></Dialog>
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
    const toggle = () => {
      status.value = !status.value;
    };
    return {status, toggle};
  }
};
</script>
