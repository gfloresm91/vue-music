import Vue from 'vue'
import App from '@/App.vue'

import Eventbus from '@/plugins/event-bus'

// It says to Vue he can use EventBus
Vue.use(Eventbus)

new Vue({
  el: '#app',
  render: h => h(App)
})
