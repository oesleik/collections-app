import waitFor from '@/utils/waitFor'
import collectionsMock from '@/models/collectionsMock'

const consts = {
  sort: {
    RECENT: Symbol('recent'),
    OLDEST: Symbol('oldest'),
    NAME: Symbol('name')
  },
  errors: {
    NOT_FOUND: Symbol('not_found')
  }
}

function getAll (collectionId, filters = {}, sort = consts.sort.RECENT) {
  return waitFor(1200).then(() => {
    const collection = collectionsMock.find(({ id }) => id === collectionId)
    return collection ? collection.items : Promise.reject(consts.errors.NOT_FOUND)
  })
}

export {
  consts,
  getAll
}
