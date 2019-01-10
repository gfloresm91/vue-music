<template>
<div class="container">
  <div class="columns">
    <div class="column is-5 is-offset-4">
      <vm-track :track="track"></vm-track>
    </div>
  </div>
</div>
</template>

<script>
import trackService from '@/services/track'

import VmTrack from '@/components/Track.vue'

export default {
  components: {
    VmTrack
  },

  data () {
    return {
      track: {}
    }
  },

  created () {
    const id = this.$route.params.id

    trackService.getById(id)
      .then(res => {
        this.track = res
      })
  }
}
</script>

<style lang="scss" scoped>
  .columns {
    margin: 20px;
  }
</style>
