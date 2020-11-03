<template>
  <div class="gulu-tabs">
    <div class="gulu-tabs-nav">
      <div class="gulu-tabs-nav-item"
           v-for="(t,index) in titles"
           @click="select(t)"
           :class="{selected:t===selected}"
           :key="index">{{t}}
      </div>
      <div class="gulu-tabs-nav-indicator" ref="indicator"></div>
    </div>
    <div class="gulu-tabs-content">
      <component :is="current" :key="current.props.title"></component>
    </div>
  </div>
</template>

<script lang="ts">
import Tab from './Tab.vue';
import {computed} from 'vue';

export default {
  props: {
    selected: {
      type: String
    }
  },
  // setup函数只会在页面挂载组件的时候执行。
  setup(props, context) {
    console.log({...context.slots.default()});
    const defaults = context.slots.default();
    console.log(defaults);
    defaults.forEach((item) => {
      if (item.type !== Tab) {
        throw new Error('Tabs 的子标签必须是 Tab');
      }
    });
    const titles = defaults.map((tags) => {
      return tags.props.title;
    });

    const current = computed(() => {
      return defaults.filter((tag) => {
        return tag.props.title === props.selected;
      })[0];
    });

    const select = (title: string) => {
      context.emit('update:selected', title);
    };
    return {defaults, titles, current, select};
  }
};
</script>

<style lang="scss">
$blue: #40a9ff;
$color: #333;
$border-color: #d9d9d9;
.gulu-tabs {
  &-nav {
    display: flex;
    color: $color;
    border-bottom: 1px solid $border-color;
    position: relative;

    &-item {
      padding: 8px 0;
      margin: 0 16px;
      cursor: pointer;

      &:first-child {
        margin-left: 0;
      }

      &.selected {
        color: $blue;
      }
    }

    &-indicator {
      position: absolute;
      height: 3px;
      background: $blue;
      left: 0;
      bottom: -1px;
      width: 100px;
      transition: all 250ms;
    }
  }

  &-content {
    padding: 8px 0;
  }
}
</style>
