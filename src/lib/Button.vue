<!--
 * @Author: your name
 * @Date: 2020-10-21 13:56:45
 * @LastEditTime: 2020-10-27 14:57:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /sanbengzi-vue3/src/lib/Button.vue
-->
<template>
  <button class="gulu-button" :class="`gulu-${theme}`">
    <slot />
  </button>
</template>

<script lang="ts">
export default {
  props: {
    theme: {
      type: String,
      default: "button",
    },
  },
  setup() {},
};
</script>

