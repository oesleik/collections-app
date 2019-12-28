<template>
  <li class="c-simple-list-item" @click="$emit('click')">
    <slot></slot>
  </li>
</template>

<style lang="scss">
.c-simple-list-item {
  padding: 15px $page-padd-h;
  border-bottom: 1px solid $border-color;

  &:last-child {
    border-bottom: none;
  }
}
</style>
