<template>
  <div id="app">
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
          <div class="column" v-for="track in tracks" :key="track.name">
            {{ track.name }} - {{ track.artist }}
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
const tracks = [
  { name: 'Toxicity', artist: 'SOAD' },
  { name: 'Chop Suey', artist: 'SOAD' }
]

export default {
  name: 'app',
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
      this.tracks = tracks
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
