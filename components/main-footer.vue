<template>
    <footer class="footer py-5">
      <div class="container-fluid py-md-4">
        <div class="row">
          <div class="col-12-mobile col-md-4">
            <h6>Organisasi</h6>
            <ul class="mt-3">
              <li><NuxtLink class="fluid" to="/organisasi">Struktur Organisasi</NuxtLink></li>
              <li><NuxtLink class="fluid" to="/anggota">Keanggotaan</NuxtLink></li>
              <li><NuxtLink class="fluid" to="/about">Tentang Kami</NuxtLink></li>
            </ul>
          </div>
          <div class="col-12-mobile col-md-4">
            <h6>Relasi</h6>
            <ul class="mt-3">
              <li><a class="fluid" href="//home.amikom.ac.id">Universitas Amikom Yogyakarta</a></li>
              <li><a class="fluid" href="//amikompurwokerto.ac.id">Universitas Amikom Purwokerto</a></li>
              <li><a class="fluid" href="//instagram.com/kebumencampusfestival">Kebumen Campus Festival</a></li>
              <li><a class="fluid" href="//www.kebumenkab.go.id">Pemerintah Kabupaten Kebumen</a></li>
              <li><a class="fluid" href="//instagram.com/imakta">Ikatan Mahasiswa Kebumen di Yogyakarta</a></li>
            </ul>
          </div>
          <div class="col-12-mobile col-md-4">
            <h6>Tautan</h6>
            <ul class="mt-3">
              <li><a class="fluid" href="//pmb.amikom.ac.id">Pendaftaran Mahasiswa Baru</a></li>
              <li><NuxtLink class="fluid" to="/kuisioner">Penelusuran Minat Siswa</NuxtLink></li>
              <li><NuxtLink class="fluid" to="/join">Pendaftaran Anggota</NuxtLink></li>
              <li><NuxtLink class="fluid" to="/covid">Covid Resources</NuxtLink></li>
            </ul>
          </div>
        </div>
        <div class="row text-muted mt-md-5">
          <div class="col-md-6">Copyright © {{new Date().getFullYear()}} Ikatan Mahasiswa Kebumen Amikom.</div>
          <div class="col-md-6 text-lg-right">With 🧉 by <a href="//yanuaraditia.com">Yanuar Aditia</a></div>
        </div>
      </div>
    </footer>
</template>