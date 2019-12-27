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
