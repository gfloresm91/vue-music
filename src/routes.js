import Search from '@/components/Search.vue'
import About from '@/components/About.vue'
import TrackDetail from '@/components/TrackDetail.vue'

const routes = [
  // Search view
  {
    path: '/',
    component: Search,
    name: 'search'
  },

  // About view
  {
    path: '/about',
    component: About,
    name: 'about'
  },

  // Track detail view
  {
    path: '/track/:id',
    component: TrackDetail,
    name: 'track'
  }
]

export default routes
