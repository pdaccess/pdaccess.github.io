import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

// Containers
const DefaultContainer = () => import('@/containers/DefaultContainer.vue');

// Views
const Index = () => import('@/views/Index');
const MainDetail = () => import('@/views/MainDetail');
// const Contacts = () => import('@/views/Contacts');
// const Career = () => import('@/views/Career');
// const Products = () => import('@/views/Products');
// const ProductsDetail = () => import('@/views/ProductsDetail');
// const Services = () => import('@/views/Services');
// const Blog = () => import('@/views/Blog');
const Thanks = () => import('@/pages/Thanks');


// const OpenPositions = () => import('@/components/forms/OpenPositions');

const PageNotFound = () => import('@/views/PageNotFound');

// Views - Pages
// const Login = () => import('@/views/pages/Login');
// const Page403 = () => import('@/views/pages/Page403');
// const Page404 = () => import('@/views/pages/Page404');
// const Page500 = () => import('@/views/pages/Page500');
// const Register = () => import('@/views/pages/Register');

export default new Router({
  //mode: 'hash', // https://router.vuejs.org/api/#mode
  mode: 'history', // https://router.vuejs.org/api/#mode
  linkActiveClass: '',
  scrollBehavior: () => ({
    y: 0
  }),
  routes: [{
      path: '/',
      component: DefaultContainer,
      props: {
        background: 'loginwall'
      },
      children: [{
        path: '/',
        name: 'Home',
        components: {
          default: Index,
          detail: MainDetail
        }
      }]
    },
    // {
    //   path: '/contacts',  
    //   component: DefaultContainer,
    //   props: {
    //     background: 'contact'
    //   },
    //   children: [{
    //     path: '/contacts',
    //     name: 'contacts',
    //     component: Contacts
    //   }]
    // },
    // {
    //   path: '/career',  
    //   component: DefaultContainer,
    //   props: {
    //     background: 'career'
    //   },
    //   children: [{
    //     path: '/career',
    //     name: 'career',
    //     components: {
    //       default: Career,
    //       detail: OpenPositions
    //     }
    //   }]
    // },
    // {
    //   path: '/hr',  
    //   component: DefaultContainer,
    //   props: {
    //     background: 'career'
    //   },
    //   children: [{
    //     path: '/hr',
    //     name: 'hr',
    //     components: {
    //       default: Career,
    //       detail: OpenPositions
    //     }
    //   }]
    // },
    // {
    //   path: '/products',  
    //   component: DefaultContainer,
    //   props: {
    //     background: 'products'
    //   },
    //   children: [{
    //     path: '/products',
    //     name: 'products',
    //     components: {
    //         default: Products,
    //         detail: ProductsDetail
    //     }
    //   }]
    // },
    // {
    //   path: '/services',  
    //   component: DefaultContainer,
    //   props: {
    //     background: 'services'
    //   },
    //   children: [{
    //     path: '/services',
    //     name: 'services',
    //     component: Services
    //   }]
    // },
    // {
    //   path: '/blog',  
    //   component: DefaultContainer,
    //   props: {
    //     background: 'background'
    //   },
    //   children: [{
    //     path: '/blog',
    //     name: 'blog',
    //     component: Blog
    //   }]
    // },
    // {
    //   path: '/thanks',  
    //   component: DefaultContainer,
    //   props: {
    //     background: 'thanks'
    //   },
    //   children: [{
    //     path: '/thanks',
    //     name: 'thanks',
    //     component: Thanks,
    //   }]
    // },
    {
      path: "*",
      component: DefaultContainer,
      props: {
        background: 'search'
      },
      children: [{
        path: '',
        name: 'pagenotfound',
        component: PageNotFound
      }]
    }
  ]
})