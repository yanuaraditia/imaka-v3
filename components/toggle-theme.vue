<template>
  <b-nav-item class="d-none d-lg-inline">
    <button type="button" class="btn btn-link p-0 nav-link btn-block text-left theme-toggler" role="button" aria-label="Toggle dark/light" @click.prevent="toggleTheme">
      <svg v-if="darkTheme" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" width="24px" height="24px" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6"><path d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg>
      <svg v-else fill="none" stroke-linecap="round" stroke-linejoin="round" width="24px" height="24px" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6"><path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
    </button>
  </b-nav-item>
</template>

<script>
export default {
  data() {
    return {
      darkTheme: false,
    }
  },
  methods: {
    toggleTheme() {
      this.darkTheme = !this.darkTheme
      $nuxt.$colorMode.preference = this.darkTheme ? 'dark' : 'light'
    }
  },
  mounted() {
    if(localStorage['nuxt-color-mode'] == 'dark') {
      this.darkTheme = true
    }
    $nuxt.$colorMode.preference = this.darkTheme ? 'dark' : 'light'
  }
}
</script>
<style lang="scss">
.theme-toggler {
  @media screen and (min-width: 1024px) {
    transform: translateY(-3px);
  }
}
</style>