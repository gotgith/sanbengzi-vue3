<template>
  <div>
    <div v-for="(t,index) in titles" :key="index">{{t}}</div>
    <!--    Tabs组件-->
    <component v-for="(c,index) in defaults" :key="index" :is="c"></component>
  </div>
</template>

<script lang="ts">
import Tab from './Tab.vue';

export default {
  setup(props, context) {
    console.log({...context.slots.default()});
    const defaults = context.slots.default();
    defaults.forEach((item) => {
      if (item.type !== Tab) {
        throw new Error('Tabs 的子标签必须是 Tab');
      }
    });
    const titles = defaults.map((tags) => {
      return tags.props.title;
    });
    return {defaults, titles};
  }
};
</script>
