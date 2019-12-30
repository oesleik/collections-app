<template>
  <div id="page-top-bar">
    {{ title }}
    <span style="margin-left: auto;" @click="changeLanguage">
      <FaIcon :icon="['fal', 'language']"></FaIcon>
    </span>
  </div>
</template>

<script>
export default {
  props: ['title'],
  methods: {
    changeLanguage () {
      this.$i18n.locale = this.$i18n.locale === 'pt-BR' ? 'en' : 'pt-BR'
    }
  }
}
</script>

<style lang="scss">
#page-top-bar {
  height: px2rem($top-bar-height);
  background-color: $primary-color;
  color: invertTextColor($primary-color);
  box-shadow: 0 0 8px 1px rgba($box-shadow-color, 0.6);
  display: flex;
  align-items: center;
  font-size: px2rem(22px);
  padding: 0 px2rem($page-padd-h);
}
</style>
