<template>
  <div id="app">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Bienvenido a Vue.js music'
    }
  }
}
</script>

<style lang="scss">
  @import './scss/main.scss'
</style>
