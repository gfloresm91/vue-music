import Vue from 'vue'
import App from '@/App.vue'

// Set Vue router configuration
import VueRouter from 'vue-router'
import routes from '@/routes'

import Eventbus from '@/plugins/event-bus'

// Import the global filter created in filters/ms-to-mm.js
import msToMm from '@/filters/ms-to-mm'

import blur from '@/directives/blur'

import store from '@/store'

import i18n from '@/i18n'

// It says to Vue he can use EventBus
Vue.use(Eventbus)
Vue.use(VueRouter)
Vue.use(msToMm)
Vue.use(blur)

const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store,
  i18n
})
