<template>
  <article class="markdown-body" v-html="content">
  </article>
</template>

<script lang="ts">
import {
  ref
} from 'vue';

export default {
  props: {
    path: {
      type: String,
      required: true
    }
  },
  // setup 前面不支持添加async标识符
  setup(props) {
    const content = ref<string>(null);
    // 动态使用import方法
    import(props.path).then(result => {
      content.value = result.default;
    });
    return {
      content
    };
  }
};
</script>
