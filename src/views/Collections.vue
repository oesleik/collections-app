<template>
  <Page :title="$t('title')" page-name="collections" :loading="loading">
    <div>
      <h1>Coleções</h1>
      <ul>
        <li v-for="item of items" :key="item.id">
          {{ item.name }}
        </li>
      </ul>
    </div>
  </Page>
</template>

<script>
import { getAll as getAllItems } from '@/models/collections'

export default {
  data () {
    return {
      loading: false,
      items: []
    }
  },
  mounted () {
    this.loading = true

    getAllItems().then((items) => {
      this.items = items
      // for (let i = 0; i < 100; i++) {
      //   this.items.push(Object.assign({}, this.items[0]))
      // }
      // this.items[0].name = 'Primeiro'
      // this.items[this.items.length - 1].name = 'ultimo'
      this.loading = false
    })
  }
}
</script>

<i18n>
{
  "pt-BR": {
    "title": "Coleções"
  },
  "en": {
    "title": "Collections"
  }
}
</i18n>
