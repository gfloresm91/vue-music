// This is similar to include o partials, reuse of code

const trackMixin = {
  methods: {
    selectTrack () {
      if (!this.track.preview_url) {
        return
      }

      // Emit event selected to father
      this.$emit('select', this.track.id)

      this.$bus.$emit('set-track', this.track)
    }
  }
}

export default trackMixin
