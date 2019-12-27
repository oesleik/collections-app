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
