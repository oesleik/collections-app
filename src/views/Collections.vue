<template>
  <Page :title="$t('title')" page-name="collections" :loading="loading">
    <SimpleList>
      <SimpleListItem v-for="item of items" :key="item.id">
        {{ item.name }}
      </SimpleListItem>
    </SimpleList>
  </Page>
</template>

<script>
import { getAll as getAllItems } from '@/models/collections'
import SimpleList from '@/components/SimpleList'
import SimpleListItem from '@/components/SimpleListItem'

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
      // for (let i = 0; i < 20; i++) {
      //   this.items.push(Object.assign({}, this.items[0]))
      // }
      // this.items[0].name = 'Primeiro'
      // this.items[this.items.length - 1].name = 'ultimo'
      this.loading = false
    })
  },
  components: {
    SimpleList,
    SimpleListItem
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
