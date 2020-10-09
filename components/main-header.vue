<template>
  <b-navbar toggleable="lg" type="dark">
      <div class="container-fluid">
        <b-navbar-brand to="/" class="mr-md-5 pr-md-3"><main-logo></main-logo></b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="px-0 px-lg-3 py-2 ml-auto mt-2 mt-md-0 p-md-0 justify-content-lg-end">
              <b-nav-item to="/anggota">Anggota</b-nav-item>
              <b-nav-item to="/kuisioner">Kuisioner</b-nav-item>
              <b-nav-item to="/join">Gabung</b-nav-item>
              <b-nav-item to="/about">Tentang Kami</b-nav-item>
              <toggle-theme></toggle-theme>
          </b-navbar-nav>
        </b-collapse>
      </div>
  </b-navbar>
</template>