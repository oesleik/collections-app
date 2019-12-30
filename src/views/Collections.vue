<template>
  <Page :title="$t('title')" page-name="collections">
    <Promised :promise="collectionsPromise">
      <template #pending>
        <div class="page-padd flex-centered">
          {{ $t('loading') }}
        </div>
      </template>

      <SimpleList v-if="collections.length" include-fab-padd>
        <SimpleListItem v-for="collection of collections" :key="collection.id" @click="$router.push(`/collections/${collection.id}`)">
          {{ collection.name }}
          <span style="float: right" @click.stop="removeCollection(collection.id)">
            <FaIcon :icon="['fal', 'trash-alt']"></FaIcon>
          </span>
        </SimpleListItem>
      </SimpleList>

      <div v-else class="page-padd flex-centered">
        {{ $t('emptyMessage') }}
      </div>

      <FabButton @click="newCollection"></FabButton>
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
      collections: [],
      collectionsPromise: null
    }
  },
  created () {
    this.collectionsPromise = this.$bind('collections', this.getCollectionsDb())
  },
  methods: {
    getCollectionsDb () {
      return db.collection('collections')
    },
    getCollectionItemsDb () {
      return db.collection('collectionItems')
    },
    newCollection () {
      const name = prompt(this.$t('newCollectionLabel'))

      if (name.length) {
        this.getCollectionsDb().add({ name })
      } else {
        alert(this.$t('newCollectionEmptyName'))
      }
    },
    removeCollection (collectionId) {
      if (confirm(this.$t('confirmRemoveCollection'))) {
        const collectionDoc = this.getCollectionsDb().doc(collectionId)

        this.getCollectionItemsDb().where('collection', '==', collectionDoc).get().then((snapshot) => {
          const batch = db.batch()

          snapshot.docs.forEach((doc) => {
            batch.delete(doc.ref)
          })

          return batch.commit()
        }).then(() => {
          collectionDoc.delete()
        })
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
    "title": "Coleções",
    "loading": "Carregando",
    "emptyMessage": "Nenhum coleção encontrada",
    "newCollectionLabel": "Informe um nome para a nova coleção",
    "newCollectionEmptyName": "Um nome deve ser informado para a coleção",
    "confirmRemoveCollection": "Deseja mesmo remover esta coleção?"
  },
  "en": {
    "title": "Collections",
    "loading": "Loading",
    "emptyMessage": "No collections found",
    "newCollectionLabel": "Give a name for the new collection",
    "newCollectionEmptyName": "A name must be given to the new collection",
    "confirmRemoveCollection": "Are you sure you want to remove this collection?"
  }
}
</i18n>
