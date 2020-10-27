<!--
 * @Date: 2020-10-20 11:29:06
 * @LastEditTime: 2020-10-27 16:05:48
-->
<template>
  <h2>实例1</h2>
  <div>
    <Button>你好</Button>
    <Button theme="button">你好</Button>
    <Button theme="link">你好</Button>
    <Button theme="text">你好</Button>
  </div>
  <h2>实例2</h2>
  <Button>你好</Button>
  <Button size="big">你好</Button>
  <Button size="small">你好</Button>
</template>

<script lang="ts">
import Button from "../lib/Button.vue";

export default {
  components: { Button },
  setup() {},
};
</script>>
