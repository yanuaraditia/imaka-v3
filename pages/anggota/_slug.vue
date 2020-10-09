<template>
    <div>
        <section class="py-5">
            <div class="container-fluid my-lg-4" v-if="isLoaded">
                <b-img :src="anggota.image_link" class="full-radius"></b-img>
                <h1 class="ndes-1 f-2 mt-2">{{anggota.name}}</h1>
                <hr>
                <div class="row mt-md-5">
                    <div class="col-12 col-md-4">
                        <h6>Jurusan</h6>
                        <p>{{anggota.major.name}}</p>
                    </div>
                    <div class="col-12 col-md-4">
                        <h6>Tahun Angkatan</h6>
                        <p>{{anggota.year}}</p>
                    </div>
                    <div class="col-12 col-md-4">
                        <h6>Asal Sekolah</h6>
                        <p>{{anggota.school.name}}</p>
                    </div>
                    <div class="col-12 col-md-4">
                        <h6>Asal Tempat Tinggal</h6>
                        <p>{{anggota.address_now}}</p>
                    </div>
                    <div class="col-12 col-md-4">
                        <h6>Tempat Tinggal</h6>
                        <p>{{anggota.address_from}}</p>
                    </div>
                </div>
            </div>
            <div class="container-fluid my-lg-4" v-else>
                <b-spinner label="Loading..."></b-spinner>
                <h1 class="ndes-1 f-2 mt-2"><b-spinner label="Loading..."></b-spinner><b-spinner label="Loading..."></b-spinner><b-spinner label="Loading..."></b-spinner></h1>
                <hr>
                <div class="row mt-md-5">
                    <div class="col-12 col-md-4">
                        <h6>Jurusan</h6>
                        <p><b-spinner label="Loading..."></b-spinner></p>
                    </div>
                    <div class="col-12 col-md-4">
                        <h6>Tahun Angkatan</h6>
                        <p><b-spinner label="Loading..."></b-spinner></p>
                    </div>
                    <div class="col-12 col-md-4">
                        <h6>Asal Sekolah</h6>
                        <p><b-spinner label="Loading..."></b-spinner></p>
                    </div>
                    <div class="col-12 col-md-4">
                        <h6>Asal Tempat Tinggal</h6>
                        <p><b-spinner label="Loading..."></b-spinner></p>
                    </div>
                    <div class="col-12 col-md-4">
                        <h6>Tempat Tinggal</h6>
                        <p><b-spinner label="Loading..."></b-spinner></p>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    validate({ params }) {
        this.params = params.slug
        // Must be a number
        return /^\d+$/.test(params.slug)
    },
    data() {
        return {
            isLoaded: false,
            anggota: null,
            title: 'Detail Anggota'
        }
    },
    head() {
        return {
            title: this.title
        }
    },
    methods: {
        async getUser() {
            const { slug } = this.$route.params
            await axios.get(`https://dev.imaka.or.id/api/anggota/${slug}`)
            .then(res => {
                localStorage[`a_${slug}`] = JSON.stringify(res.data.data)
                this.anggota = res.data.data
                this.title = this.anggota.name
                this.isLoaded =true
            })
            .catch(err => console.log(err))
        }
    },
    mounted() {
        this.getUser()
    },
}
</script>