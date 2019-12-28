<template>
  <ul class="c-simple-list">
    <slot></slot>
  </ul>
</template>

<style lang="scss">
.c-simple-list {
  list-style: none;
  padding: 0;
  margin: $page-padd-v 0;
  font-size: px2rem(20px);
}
</style>
