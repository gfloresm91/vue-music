<template>
  <div id="app">
    <vm-header></vm-header>
    <section class="section">
      <nav class="navbar has-shadow">
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
        <div class="columns">
          <div class="column" v-for="track in tracks" :key="track.id">
            {{ track.name }} - {{ track.artists[0].name }}
          </div>
        </div>
      </div>

    </section>
    <vm-footer></vm-footer>
  </div>
</template>

<script>
import trackService from './services/track'
import VmFooter from './components/layout/Footer.vue'
import VmHeader from './components/layout/Header.vue'

export default {
  name: 'app',

  components: { VmFooter, VmHeader },

  data () {
    return {
      searchQuery: '',
      tracks: []
    }
  },

  computed: {
    searchMessage () {
      return `Se han encontrado ${this.tracks.length} canciones`
    }
  },

  methods: {
    search () {
      if (!this.searchQuery) {
        return
      }
      trackService.search(this.searchQuery)
        .then(res => {
          this.tracks = res.tracks.items
        })
    }
  }
}
</script>

<style lang="scss">
  @import './scss/main.scss';

  .results {
    margin: 50px;
  }
</style>
