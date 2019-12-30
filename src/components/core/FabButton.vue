<template>
  <button type="button" class="c-fab-button flex-centered" @click="$emit('click')">
    <FaIcon :icon="icon || ['fal', 'plus']"></FaIcon>
  </button>
</template>

<script>
export default {
  props: ['icon']
}
</script>

<style lang="scss">
.c-fab-button {
  position: absolute;
  bottom: px2rem($bottom-bar-height + $page-padd-v);
  right: px2rem($page-padd-h);
  background-color: $secondary-color;
  color: invertTextColor($secondary-color);
  width: px2rem($fab-size);
  height: px2rem($fab-size);
  font-size: px2rem($fab-font-size);
  border-radius: 50%;
  border: none;
}
</style>
