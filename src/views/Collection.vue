<template>
  <Page :title="name || $t('title')" page-name="collection">
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
import { get as getCollection } from '@/models/collections'
import { getAll as getItems } from '@/models/collection'
import SimpleList from '@/components/SimpleList'
import SimpleListItem from '@/components/SimpleListItem'

export default {
  data () {
    return {
      loading: false,
      id: 0,
      name: '',
      items: []
    }
  },
  created () {
    this.fetchData()
  },
  methods: {
    fetchData () {
      this.loading = true
      this.id = parseInt(this.$route.params.id)

      Promise.all([
        getCollection(this.id).then((collection) => {
          this.name = collection.name
        }),
        getItems(this.id).then((items) => {
          this.items = items
        })
      ]).then(() => {
        console.log('alow')
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
    "title": "Coleção",
    "loading": "Carregando"
  },
  "en": {
    "title": "Collection",
    "loading": "Loading"
  }
}
</i18n>
