import waitFor from '@/utils/waitFor'

const consts = {
  sort: {
    NEWEST: Symbol('newest'),
    OLDEST: Symbol('oldest'),
    NAME: Symbol('name')
  }
}

function getAll (filters = {}, sort = consts.sort.NEWEST) {
  return waitFor(1000).then(() => {
    return [
      {
        id: 1,
        name: 'Mangás'
      },
      {
        id: 2,
        name: 'Filmes'
      }
    ]
  })
}

export {
  consts,
  getAll
}
