<template>
  <Page :title="collection ? collection.name : $t('title')" page-name="collection">
    <Promised :promise="collectionItemsPromise">
      <template #pending>
        <div class="page-padd flex-centered">
          {{ $t('loading') }}
        </div>
      </template>

      <SimpleList v-if="collectionItems.length" include-fab-padd>
        <SimpleListItem v-for="item of collectionItems" :key="item.id">
          {{ item.name }}
          <span style="float: right" @click.stop="removeCollectionItem(item.id)">
            <FaIcon :icon="['fal', 'trash-alt']"></FaIcon>
          </span>
        </SimpleListItem>
      </SimpleList>

      <div v-else class="page-padd flex-centered">
        {{ $t('emptyMessage') }}
      </div>

      <FabButton @click="newCollectionItem"></FabButton>
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

    const collectionDoc = this.getCollectionsDb().doc(this.collectionId)
    const collectionItemsDocs = this.getCollectionItemsDb().where('collection', '==', collectionDoc)

    this.$bind('collection', collectionDoc)
    this.collectionItemsPromise = this.$bind('collectionItems', collectionItemsDocs)
  },
  methods: {
    getCollectionsDb () {
      return db.collection('collections')
    },
    getCollectionItemsDb () {
      return db.collection('collectionItems')
    },
    newCollectionItem () {
      const name = prompt(this.$t('newCollectionItemLabel'))
      const collectionDoc = this.getCollectionsDb().doc(this.collectionId)

      if (name.length) {
        this.getCollectionItemsDb().add({ name, collection: collectionDoc })
      } else {
        alert(this.$t('newCollectionItemEmptyName'))
      }
    },
    removeCollectionItem (collectionItemId) {
      if (confirm(this.$t('confirmRemoveCollectionItem'))) {
        this.getCollectionItemsDb().doc(collectionItemId).delete()
      }
    }
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
    "emptyMessage": "Nenhum item encontrado",
    "newCollectionItemLabel": "Informe um nome para o novo item",
    "newCollectionItemEmptyName": "Um nome deve ser informado para o item",
    "confirmRemoveCollectionItem": "Deseja mesmo remover este item da coleção?"
  },
  "en": {
    "title": "Collection",
    "loading": "Loading",
    "emptyMessage": "No items found",
    "newCollectionItemLabel": "Give a name for the new item",
    "newCollectionItemEmptyName": "A name must be given to the new item",
    "confirmRemoveCollectionItem": "Are you sure you want to remove this item from the collection?"
  }
}
</i18n>
