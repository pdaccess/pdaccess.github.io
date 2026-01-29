import Vue from "vue";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCoffee,
  faAddressCard,
  faUsers,
  faTruck,
  faEnvelope,
  faCheck,
  faDesktop,
  faSignInAlt,
  faUser,
  faBuilding,
} from "@fortawesome/free-solid-svg-icons";
import { faBlog, faUserGraduate } from "@fortawesome/free-solid-svg-icons";
import {
  faJs,
  faVuejs,
  faProductHunt,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(
  faCoffee,
  faAddressCard,
  faUsers,
  faTruck,
  faProductHunt,
  faJs,
  faVuejs,
  faGithub,
  faLinkedin,
  faEnvelope,
  faCheck,
  faBlog,
  faUserGraduate,
  faDesktop,
  faSignInAlt,
  faUser,
  faBuilding
);

Vue.component("font-awesome-icon", FontAwesomeIcon);

import VueScrollReveal from "vue-scroll-reveal";

Vue.use(VueScrollReveal, {
  class: "v-scroll-reveal",
  duration: 800,
  scale: 1,
  distance: "10px",
  mobile: false,
});

// import vueScrollto from 'vue-scrollto'

// Vue.use(vueScrollto)

// import Chat from 'vue-beautiful-chat'
// Vue.use(Chat)

// Vue.config.productionTip = false

// Vue.mixin({
//   methods: {
//     track() {
//       window.mt ? window.mt('send', 'pageview') : console.log('mautic not found');
//     }
//   }
// });

// import Meta from 'vue-meta';

// Vue.use(Meta);

// new Vue({
//   render: h => h(App),
//   router
// }).$mount('#app')
