<template>
  <div class="wrapper">
    <button>
      <slot/>
    </button>
  </div>
</template>

<script lang="ts">
export default {};
</script>

<style scoped lang="scss">
.wrapper {
  border: 1px solid red;
}
</style>
