<template>
  <div id="page-bottom-bar">
    <router-link to="/">
      <FAIcon :icon="['far', 'album-collection']"></FAIcon>
    </router-link>
    <router-link to="/next">
      <FAIcon :icon="['far', 'sparkles']"></FAIcon>
    </router-link>
    <router-link to="/recent">
      <FAIcon :icon="['far', 'history']"></FAIcon>
    </router-link>
    <router-link to="/settings">
      <FAIcon :icon="['far', 'cog']"></FAIcon>
    </router-link>
  </div>
</template>

<style lang="scss">
#page-bottom-bar {
  height: $bottom-bar-height;
  background-color: $white-color;
  color: $black-color;
  box-shadow: 0 0 6px 0 rgba($box-shadow-color, 0.25);
  display: flex;

  > a {
    flex: 1 1 auto;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: px2rem(18px);
    color: $gray-800;
    -webkit-tap-highlight-color: rgba($gray-200, 0.1);

    &.router-link-exact-active {
      color: $primary-color;
    }

    &:focus,
    &:hover,
    &:active {
      outline: none;
      background-color: $gray-100;
    }
  }
}
</style>
