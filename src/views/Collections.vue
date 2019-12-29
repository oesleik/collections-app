<template>
  <Page :title="$t('title')" page-name="collections">
    <Promised :promise="collectionsPromise">
      <template #pending>
        <div class="page-padd flex-centered">
          {{ $t('loading') }}
        </div>
      </template>

      <SimpleList v-if="collections.length">
        <SimpleListItem v-for="collection of collections" :key="collection.id" @click="$router.push(`/collections/${collection.id}`)">
          {{ collection.name }}
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
      collections: [],
      collectionsPromise: null
    }
  },
  created () {
    this.collectionsPromise = this.$bind('collections', db.collection('collections'))
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
    "emptyMessage": "Nenhum coleção encontrada"
  },
  "en": {
    "title": "Collections",
    "loading": "Loading",
    "emptyMessage": "No collections found"
  }
}
</i18n>
