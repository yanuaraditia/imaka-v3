<template>
    <div>
        <section class="py-5">
            <div class="container-fluid my-lg-5 pt-lg-4">
                <h1 class="ndes-1 f-2">Struktur Organisasi</h1>
                <div class="row my-4 no-gutters peoples">
                    <div class="col-12 col-md-4" v-for="anggota in penguruses" :key="anggota.id">
                        <nuxt-link :to="'/anggota/'+anggota.user.card_number" class="card people">
                            <div class="card-body text-nowrap">
                                <b-img :src="anggota.user.image_link" class="full-radius" width="60px" height="60px" fluid alt="Responsive image"></b-img>
                                <h4 class="f-2 card-title text-primary mt-3 mb-0 overflow-hidden">{{anggota.user.name}}</h4>
                                <small class="card-text">{{anggota.name}}</small>
                            </div>
                        </nuxt-link>
                    </div>
                </div>
            </div>
        </section>
    </div>
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
    head: {
        title: "Sesepuh"
    },
    methods: {
        loadPengurus() {
            if(localStorage.penguruses) {
                this.penguruses = JSON.parse(localStorage.penguruses)
                this.isLoaded = true
            }
            axios.get('https://api.imaka.or.id/v2/pengurus')
            .then(res => {
                this.penguruses = res.data.datas
                localStorage.penguruses = JSON.stringify(this.penguruses)
                this.isLoaded = true
            })
            .catch(err => {
                console.log(err)
            })
        }
    },
    mounted() {
        this.loadPengurus()
    }
}
</script>