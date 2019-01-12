// This is similar to include o partials, reuse of code

const trackMixin = {
  methods: {
    selectTrack () {
      if (!this.track.preview_url) {
        return
      }

      this.$store.commit('setTrack', this.track)
    }
  }
}

export default trackMixin
