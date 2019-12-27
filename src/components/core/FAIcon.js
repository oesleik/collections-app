import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// solid regular light duotone

import {
  faAlbumCollection as farAlbumCollection,
  faSparkles as farSparkles,
  faHistory as farHistory,
  faCog as farCog
} from '@fortawesome/pro-regular-svg-icons'

library.add(
  farAlbumCollection,
  farSparkles,
  farHistory,
  farCog
)

export default FontAwesomeIcon
