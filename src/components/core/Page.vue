<template>
  <div id="page">
    <PageTopBar :title="title" />
    <div id="page-content">
      <slot></slot>
    </div>
    <PageBottomBar />
  </div>
</template>

<script>
export default {
  props: ['title']
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

.page-padd {
  padding: $page-padd-v $page-padd-h;
}

.page-padd-v {
  padding-top: $page-padd-v;
  padding-bottom: $page-padd-v;
}

.page-padd-h {
  padding-left: $page-padd-h;
  padding-right: $page-padd-h;
}
</style>
