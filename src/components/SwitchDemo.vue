<template>
  <div>
    <Switch v-model:value="switchStatus"/>
  </div>
</template>

<script lang="ts">
import Switch from '../lib/Switch.vue';
import {ref} from 'vue';

export default {
  components: {Switch},
  setup() {
    const switchStatus = ref(false);
    return {switchStatus};
  }
};
</script>
