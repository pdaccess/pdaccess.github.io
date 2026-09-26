import { defineNuxtPlugin } from '#app'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faComment, faTimes, faPaperPlane, faDesktop, faUserGraduate, faSignInAlt, faEnvelope, faSun, faMoon, faBars } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faComment, faTimes, faPaperPlane, faDesktop, faUserGraduate, faSignInAlt, faEnvelope, faSun, faMoon, faBars, faGithub, faLinkedin)

export default defineNuxtPlugin({
  name: 'fontawesome-init',
  enforce: 'pre',
  setup() {
    // Register the component globally - Nuxt handles this automatically when imported
    return {
      provide: {
        FontAwesomeIcon
      }
    }
  }
})
