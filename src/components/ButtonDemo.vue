<!--
 * @Date: 2020-10-20 11:29:06
 * @LastEditTime: 2020-10-27 16:15:31
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
  <div>
    <Button size="big">你好</Button>
    <Button>你好</Button>
    <Button size="small">你好</Button>
  </div>
  <div>
    <Button theme="link" size="big">你好</Button>
    <Button theme="link">你好</Button>
    <Button theme="link" size="small">你好</Button>
  </div>
  <div>
    <Button theme="text" size="big">你好</Button>
    <Button theme="text">你好</Button>
    <Button theme="text" size="small">你好</Button>
  </div>
  <h2>实例3</h2>
  <div>
    <div>
      <Button level="main">主要按钮</Button>
      <Button>普通按钮</Button>
      <Button level="danger">危险按钮</Button>
    </div>
    <div>
      <Button theme="link" level="main">主要链接按钮</Button>
      <Button theme="link">普通链接按钮</Button>
      <Button theme="link" level="danger">危险链接按钮</Button>
    </div>
    <div>
      <Button theme="text" level="main">主要文字按钮</Button>
      <Button theme="text">普通文字按钮</Button>
      <Button theme="text" level="danger">危险文字按钮</Button>
    </div>
  </div>
</template>

<script lang="ts">
import Button from "../lib/Button.vue";

export default {
  components: { Button },
  setup() {},
};
</script>>
