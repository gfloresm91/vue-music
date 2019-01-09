<template>
  <div id="app">

    <vm-header></vm-header>

    <vm-notification v-show="showNotification">
      <p slot="body">
        No results found
      </p>
    </vm-notification>

    <vm-loader v-show="isLoading"></vm-loader>

    <section class="section" v-show="!isLoading">
      <nav class="navbar">
        <div class="container">

          <div class="field has-addons">

            <div class="control is-expanded">
              <input type="text" placeholder="Search songs" class="input is-large" v-model="searchQuery">
            </div>

            <div class="control">
              <!-- For WDS error must remove href attribute -->
              <a class="button is-info is-large" @click="search">Search</a>
            </div>

            <div class="control">
              <a class="button is-danger is-large">&times;</a>
            </div>

          </div>

        </div>
      </nav>

      <div class="container">
        <p>
          <small>{{ searchMessage }}</small>
        </p>
      </div>

      <div class="container results">
        <div class="columns is-multiline">
          <div class="column is-one-quarter" v-for="track in tracks" :key="track.id">

            <vm-track :track="track" @select="setSelectedTrack"
                      :class="{ 'is-active': track.id === selectedTrack }"
            ></vm-track>

          </div>
        </div>
      </div>

    </section>

    <vm-footer></vm-footer>

  </div>
</template>

<script>
// @ is a alias set in webpack.config.js
import trackService from '@/services/track'

import VmFooter from '@/components/layout/Footer.vue'
import VmHeader from '@/components/layout/Header.vue'
import VmTrack from '@/components/Track'

import VmLoader from '@/components/shared/Loader.vue'
import VmNotification from '@/components/shared/Notification.vue'

export default {
  name: 'app',

  // Components register the new components imports to app
  components: {
    VmFooter,
    VmHeader,
    VmTrack,
    VmLoader,
    VmNotification
  },

  data () {
    return {
      searchQuery: '',
      tracks: [],
      isLoading: false,
      selectedTrack: '',
      showNotification: false
    }
  },

  // Computed allways return
  computed: {
    searchMessage () {
      return `Se han encontrado ${this.tracks.length} canciones`
    }
  },

  // This only execute code
  // This has to be called the same as the properties
  watch: {
    showNotification () {
      if (this.showNotification) {
        setTimeout(() => {
          this.showNotification = false
        }, 3000)
      }
    }
  },

  methods: {
    search () {
      if (!this.searchQuery) {
        return
      }

      this.isLoading = true

      trackService.search(this.searchQuery)
        .then(res => {
          // Verify if have data
          this.showNotification = res.tracks.total === 0
          this.tracks = res.tracks.items
          this.isLoading = false
        })
    },

    setSelectedTrack (id) {
      this.selectedTrack = id
    }
  }
}
</script>

<style lang="scss">
  @import './scss/main.scss';

  .results {
    margin: 50px;
  }

  .is-active {
    border: 3px solid #23d160;
  }
</style>
