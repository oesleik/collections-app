import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// solid regular light duotone

import {
  faAlbumCollection as farAlbumCollection,
  faSparkles as farSparkles,
  faHistory as farHistory,
  faCog as farCog
} from '@fortawesome/pro-regular-svg-icons'

import {
  faPlus as falPlus,
  faTrashAlt as falTrashAlt
} from '@fortawesome/pro-light-svg-icons'

library.add(
  // regular
  farAlbumCollection,
  farSparkles,
  farHistory,
  farCog,

  // light
  falPlus,
  falTrashAlt
)

export default FontAwesomeIcon
