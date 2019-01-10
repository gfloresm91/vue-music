<template>
  <div id="app">

    <vm-header></vm-header>

    <router-view></router-view>

    <vm-footer></vm-footer>

  </div>
</template>

<script>
import VmFooter from '@/components/layout/Footer.vue'
import VmHeader from '@/components/layout/Header.vue'
export default {
  name: 'app',

  // Components register the new components imports to app
  components: {
    VmFooter,
    VmHeader
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
