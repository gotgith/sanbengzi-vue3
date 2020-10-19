<!--
 * @Date: 2020-10-19 14:21:57
 * @LastEditTime: 2020-10-19 17:07:47
-->
<template>
  <div>
    <div>
      我是头部|
      <router-link to="/">haha</router-link> |
      <router-link to="/xxx">haha2</router-link>
    </div>

    <router-view />
  </div>
</template>

<script>
import HaHa from "./components/HaHa.vue";

export default {
  name: "App",
  components: {},
};
</script>
