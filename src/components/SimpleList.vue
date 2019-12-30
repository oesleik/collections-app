<template>
  <ul class="c-simple-list" :class="{ 'm-fab-padd': includeFabPadd }">
    <slot></slot>
  </ul>
</template>

<script>
export default {
  props: {
    includeFabPadd: Boolean
  }
}
</script>

<style lang="scss">
.c-simple-list {
  list-style: none;
  padding: 0;
  margin: px2rem($page-padd-v) 0;
  font-size: px2rem(20px);

  &.m-fab-padd {
    padding-bottom: px2rem($fab-size);
  }
}
</style>
