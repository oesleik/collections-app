import waitFor from '@/utils/waitFor'

const consts = {
  sort: {
    RECENT: Symbol('recent'),
    OLDEST: Symbol('oldest'),
    NAME: Symbol('name')
  }
}

function getAll (filters = { collectionId: 0 }, sort = consts.sort.RECENT) {
  return waitFor(1000).then(() => {
    return {
      id: 1,
      name: 'Mangás',
      items: [
        {
          id: 1,
          name: 'Solo Leveling'
        },
        {
          id: 2,
          name: 'The Last Human'
        },
        {
          id: 3,
          name: 'One Piece'
        }
      ]
    }
  })
}

export {
  consts,
  getAll
}
