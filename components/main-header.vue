<template>
  <b-navbar toggleable="lg" type="dark" v-bind:class="isFixed ? 'fixed' : 'rel'">
      <div class="container-fluid">
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-navbar-brand to="/" class="mr-md-5 pr-md-3"><main-logo></main-logo></b-navbar-brand>
        <toggle-mobile></toggle-mobile>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="px-0 px-lg-3 py-2 ml-auto mt-2 mt-md-0 p-md-0 justify-content-lg-end">
              <b-nav-item class="px-lg-3" to="/anggota">Anggota</b-nav-item>
              <b-nav-item class="px-lg-3" to="/kuisioner">Kuisioner</b-nav-item>
              <b-nav-item class="px-lg-3" to="/about">Tentang Kami</b-nav-item>
              <b-nav-item class="px-lg-3" to="/join">Gabung</b-nav-item>
              <toggle-theme></toggle-theme>
          </b-navbar-nav>
        </b-collapse>
      </div>
  </b-navbar>
</template>
<script>
export default {
    data() {
        return {
            isFixed: true,
            lastScrollPosition: 0
        }
    },
    methods: {
        onScroll () {
            const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop
            this.isFixed = currentScrollPosition > 60 ? true : false
            this.lastScrollPosition = currentScrollPosition
        }
    },
    mounted () {
        this.onScroll
        window.addEventListener('scroll', this.onScroll)
    },
    beforeDestroy () {
        window.removeEventListener('scroll', this.onScroll)
    }
}
</script>