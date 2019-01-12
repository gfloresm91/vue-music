<template>
<div class="container" v-if="track && track.id">
  <div class="columns">
    <div class="column is-3 has-text-centered">
      <figure class="media-left">
        <p class="image">
          <img :src="track.album.images[0].url" alt="">
        </p>
        <p class="button-bar">
          <a class="button is-primary is-large">
            <span class="icon" @click="selectTrack">
              ▶️
            </span>
          </a>
        </p>
      </figure>
    </div>
    <div class="column is-8">
      <div class="panel">
        <div class="panel-heading">
          <h1 class="title">{{ trackTitle }}</h1>
        </div>
        <div class="panel-block">

          <article class="media">
            <div class="media-content">
              <div class="content">
                <ul v-for="(value,key) in track" :key="key">
                  <li>
                    <strong>{{ key }}</strong>&nbsp;
                    <span>{{ value }}</span>
                  </li>
                </ul>
              </div>
            </div>
          </article>

          <nav class="level">
            <div class="level-left">
              <a class="level-item"></a>
            </div>
          </nav>

        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import trackMixin from '@/mixins/track'
import { mapState, mapActions, mapGetters } from 'vuex'

export default {
  mixins: [ trackMixin ],

  // Whit this i dont go to api, extract info from store
  computed: {
    ...mapState([ 'track' ]),
    ...mapGetters([ 'trackTitle' ])
  },

  created () {
    const id = this.$route.params.id

    if (!this.track || !this.track.id || this.track.id !== id) {
      this.getTrackById({ id })
        .then(() => console.log('Track loaded...'))
    }
  },

  methods: {
    ...mapActions([ 'getTrackById' ])
  }
}
</script>

<style lang="scss" scoped>
  .column {
    margin: 20px;
  }

  .button-bar {
    margin-top: 20px;
  }
</style>
