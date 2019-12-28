<template>
  <div id="page">
    <PageTopBar :title="title" />
    <div id="page-content">
      <div v-if="loading">
        Carregando...
      </div>
      <template v-else>
        <slot></slot>
      </template>
    </div>
    <PageBottomBar />
  </div>
</template>

<script>
export default {
  props: ['title', 'loading']
}
</script>

<style lang="scss">
#page {
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100%;
}

#page-content {
  flex: 1;
  width: 100%;
  overflow: auto;
}
</style>
