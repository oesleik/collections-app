<template>
  <div id="page-top-bar">
    {{ title }}
  </div>
</template>

<script>
export default {
  props: ['title']
}
</script>

<style lang="scss">
#page-top-bar {
  height: $top-bar-height;
  background-color: $primary-color;
  color: invertTextColor($primary-color);
  box-shadow: 0 0 8px 1px rgba($box-shadow-color, 0.6);
  display: flex;
  align-items: center;
  font-size: px2rem(22px);
  padding: 0 $page-padd-h;
}
</style>
