<template>
  <Page :title="$t('title')" page-name="collections">
    <div class="page-padd s-loading" v-if="loading">
      {{ $t('loading') }}
    </div>
    <SimpleList v-else>
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
  created () {
    this.fetchItems()
  },
  methods: {
    fetchItems () {
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
    }
  },
  components: {
    SimpleList,
    SimpleListItem
  }
}
</script>

<style lang="scss" scoped>
.s-loading {
  font-size: px2rem(20px);
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
}
</style>

<i18n>
{
  "pt-BR": {
    "title": "Coleções",
    "loading": "Carregando"
  },
  "en": {
    "title": "Collections",
    "loading": "Loading"
  }
}
</i18n>
