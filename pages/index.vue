<template>
    <div>
        <section class="py-5 front-banner bg-dark text-white">
            <div class="body">
                <div class="container-fluid my-md-5">
                    <div class="row">
                        <div class="col-md-12 text-lg-center my-auto pl-xl-5 pt-5 pt-md-0 blurred">
                            <h1 class="ndes-1 f-2">Ngapak Bareng, Gayeng Bareng</h1>
                            <p>Kami merangkul dan menghubungkan mahasiswa kebumen yang berkuliah di lingkup amikom yogyakarta.</p>
                            <div class="text-left text-lg-center mt-md-4">
                                <nuxt-link to="/join" class="btn btn-lg btn-primary px-lg-4">
                                Selengkapnya
                                <svg class="ml-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 16 16 12 12 8"></polyline><line x1="8" y1="12" x2="16" y2="12"></line></svg>
                                </nuxt-link>
                            </div>
                        </div>
                    </div>
                </div>
                <img src="~/assets/fb-3.png" alt="ass" class="ass ass-3">
            </div>
        </section>
        <section class="py-5 bg-light">
            <div class="container-fluid py-5 my-lg-5">
                <div class="row my-lg-4">
                    <div class="col-md-8">
                        <h1 class="ndes-1 f-2">Jaga selalu kesehatanmu,<br> ada impian yang harus kau kejar</h1>
                        <p>Selalu mencuci tangan, kenakan masker, taati selalu protokol kesehatan. Kurangi aktifitas di ruang publik, terapkan pola hidup sehat.</p>
                        <div class="row mt-md-5">
                          <div class="col-md-6 col-12">
                              <h6 class="m-0">Jawa Tengah</h6>
                              <h1 class="ndes-1 f-2 text-muted">
                                  <div v-if="isLoaded">
                                      <span class="text-danger">{{jateng.counter}}</span>
                                  </div>
                                  <b-spinner v-else label="Loading..."></b-spinner>
                              </h1>
                          </div>
                          <div class="col-md-6 col-12">
                              <h6 class="m-0">Daerah Istimewa Yogyakarta</h6>
                              <h1 class="ndes-1 f-2 text-muted">
                                  <div v-if="isLoaded">
                                      <span class="text-danger">{{jogja.counter}}</span>
                                  </div>
                                  <b-spinner v-else label="Loading..."></b-spinner>
                              </h1>
                          </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <cta></cta>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    head: {
        title: 'Imaka'
    },
    data() {
        return {
            isLoaded: false,
            jateng: {
                counter: 0,
            },
            jogja: {
                counter: 0,
            },
            dataMentah: [],
        }
    },
    methods: {
        async loadData() {
            axios
            .get('https://dev.imaka.or.id/api/deployer')
            .then(res => {
                this.dataMentah = res.data.data
                for(var i = 0; i< this.dataMentah.length ; i++) {
                    if(this.dataMentah[i]['kodeProvi'] == 33) {
                        this.jateng.counter = this.dataMentah[i]['kasusPosi']
                    } else if(this.dataMentah[i]['kodeProvi'] == 34) {
                        this.jogja.counter = this.dataMentah[i]['kasusPosi']
                    }
                }
                this.isLoaded = true
            }).catch(e => {
                console.log(e)
            });
        },
    },
    created() {
        this.loadData()
        setInterval(()=>{
            this.isLoaded = false
            this.loadData()
        },300000)
    },
}
</script>
<style scoped lang="scss">
.body {
    @media screen and (min-width: 1300px) {
        min-width: 90vw;
    }
    .container-fluid {
        position: relative;
        z-index: 8;
    }
    overflow: hidden;
}
.front-banner {
    overflow: hidden;
}
.ass {
    position: absolute;
    transition: all .05s ease-in-out;
    &-3 {
        bottom: 0;
        left: 0;
        width: 100vw;
        filter: saturate(150%) blur(1px);
        opacity: .8;
        transition: all .2s ease-in-out;
    }
}
.dark-mode {
    .ass-3 {
        opacity: .2;
        filter: saturate(150%) grayscale(100%);
    }
}
</style>