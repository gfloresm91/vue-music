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
            <a class="navbar-item" @click="selectLang('en')">🇬🇧</a>
            <a class="navbar-item" @click="selectLang('es')">🇪🇸</a>
            <router-link class="navbar-item" :to="{ name: 'search' }">{{ $t('search') }}</router-link>
            <router-link class="navbar-item" to="about">{{ $t('about') }}</router-link>
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
  },

  methods: {
    selectLang (lang) {
      this.$i18n.locale = lang
    }
  }
}
</script>
