<template>
    <section class="py-4 py-lg-5 bg-dark text-white text-lg-center">
        <div class="container-fluid py-5 my-lg-5">
            <div class="row my-lg-4">
                <div class="col-lg-12">
                    <ul class="peng d-flex p-0 justify-content-lg-center list-unstyled">
                        <li v-for="pengurus in penguruses" :key="pengurus.id">
                            <img :src="pengurus.user.image_link" :alt="pengurus.name" width="50px" height="50px" class="full-radius">
                        </li>
                    </ul>
                    <h1 class="ndes-1 f-2">Wong ngapak tapi bingung isin ngapak?</h1>
                    <p>Ora usah isin, anggap imaka ki sedulurmu pada, susah seneng bareng. Sekolah sing bener, lulus sing berkualitas, sip.</p>
                </div>
                <div class="col-lg-12">
                    <nuxt-link to="/join" class="btn btn-link px-0 btn-lg">
                        Aja isin
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="ml-2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 16 16 12 12 8"></polyline><line x1="8" y1="12" x2="16" y2="12"></line></svg>
                    </nuxt-link>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import axios from 'axios'
export default {
    data() {
        return {
            isLoaded : false,
            penguruses : []
        }
    },
    methods: {
        loadPengurus() {
            if(localStorage.penguruses) {
                this.penguruses = JSON.parse(localStorage.penguruses)
                this.isLoaded = true
            } else {
                axios.get('https://dev.imaka.or.id/api/pengurus')
                .then(res => {
                    this.penguruses = res.data.data
                    localStorage.penguruses = JSON.stringify(this.penguruses)
                    this.isLoaded = true
                })
                .catch(err => {
                    console.log(err)
                })
            }
        }
    },
    mounted() {
        this.loadPengurus()
    }
}
</script>