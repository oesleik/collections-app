<template>
  <Page :title="collection ? collection.name : $t('title')" page-name="collection">
    <Promised :promise="collectionItemsPromise">
      <template #pending>
        <div class="page-padd flex-centered">
          {{ $t('loading') }}
        </div>
      </template>

      <SimpleList v-if="collectionItems.length">
        <SimpleListItem v-for="item of collectionItems" :key="item.id">
          {{ item.name }}
        </SimpleListItem>
      </SimpleList>

      <div v-else class="page-padd flex-centered">
        {{ $t('emptyMessage') }}
      </div>
    </Promised>
  </Page>
</template>

<script>
import { db } from '@/db'
import SimpleList from '@/components/SimpleList'
import SimpleListItem from '@/components/SimpleListItem'

export default {
  data () {
    return {
      collectionId: 0,
      collection: null,
      collectionItems: [],
      collectionItemsPromise: null
    }
  },
  created () {
    this.collectionId = this.$route.params.id

    const collectionDoc = db.collection('collections').doc(this.collectionId)
    const collectionItemsDocs = db.collection('collectionItems').where('collection', '==', collectionDoc)

    this.$bind('collection', collectionDoc)
    this.collectionItemsPromise = this.$bind('collectionItems', collectionItemsDocs)
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
    "title": "Coleção",
    "loading": "Carregando",
    "emptyMessage": "Nenhum item encontrado"
  },
  "en": {
    "title": "Collection",
    "loading": "Loading",
    "emptyMessage": "No items found"
  }
}
</i18n>
