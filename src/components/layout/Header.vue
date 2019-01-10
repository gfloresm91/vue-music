<template>
  <section class="hero is-success">
    <div class="hero-head">
      <header class="navbar">
        <div class="container">
          <div class="navbar-start">
            <div class="navbar-item">
              <strong>Vue music</strong>
            </div>
          </div>
          <div class="navbar-end navbar-menu">
            <router-link class="navbar-item" :to="{ name: 'search' }">Search</router-link>
            <router-link class="navbar-item" to="about">About</router-link>
          </div>
        </div>
      </header>
    </div>
    <div class="hero-body">
      <div class="container has-text-centered">
        <h1 class="title">
          Vue music
        </h1>

        <h2 class="subtitle">
          Songs that are in Vue music
        </h2>
        <vm-player></vm-player>
      </div>
    </div>
  </section>
</template>

<script>
import VmPlayer from '@/components/Player.vue'

export default {
  components: {
    VmPlayer
  }
}
</script>
