import Vue from 'vue'
import App from '@/App.vue'

// Set Vue router configuration
import VueRouter from 'vue-router'
import routes from '@/routes'

import Eventbus from '@/plugins/event-bus'

// It says to Vue he can use EventBus
Vue.use(Eventbus)

Vue.use(VueRouter)

const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  el: '#app',
  render: h => h(App),
  router
})
