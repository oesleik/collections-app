<template>
  <li class="c-simple-list-item" @click="$emit('click')">
    <slot></slot>
  </li>
</template>

<style lang="scss">
.c-simple-list-item {
  padding: px2rem(15px) px2rem($page-padd-h);
  border-bottom: px2rem(1px) solid $border-color;

  &:last-child {
    border-bottom: none;
  }
}
</style>
