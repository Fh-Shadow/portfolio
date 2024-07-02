import { addIcons } from 'ionicons'
import { logoHtml5, logoCss3 } from 'ionicons/icons'
import * as allIcons from 'ionicons/icons'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faPhp } from '@fortawesome/free-brands-svg-icons'

addIcons({
    logoHtml5,
    logoCss3,
    ...allIcons,
})

library.add(
    faPhp,
)