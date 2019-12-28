import waitFor from '@/utils/waitFor'
import pick from '@/utils/objectPick'
import collectionsMock from '@/models/collectionsMock'

const consts = {
  sort: {
    NEWEST: Symbol('newest'),
    OLDEST: Symbol('oldest'),
    NAME: Symbol('name')
  },
  errors: {
    NOT_FOUND: Symbol('not_found')
  }
}

function getAll (filters = {}, sort = consts.sort.NEWEST) {
  return waitFor(1000).then(() => {
    return collectionsMock.map(({ id, name }) => ({ id, name }))
  })
}

function get (collectionId) {
  return waitFor(800).then(() => {
    const collection = collectionsMock.find(({ id }) => id === collectionId)
    return collection ? pick('id', 'name')(collection) : Promise.reject(consts.errors.NOT_FOUND)
  })
}

export {
  consts,
  getAll,
  get
}
