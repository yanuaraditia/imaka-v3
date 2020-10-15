<template>
    <div>
        <section class="py-5">
            <div class="container-fluid my-lg-5 pt-lg-4" v-if="isLoaded">
                <b-img :src="anggota.image_link" class="full-radius"></b-img>
                <h1 class="ndes-1 f-2 mt-2">{{anggota.name}}</h1>
                <hr>
                <div class="row mt-md-5">
                    <div class="col-12 col-md-4">
                        <h6>No. Anggota</h6>
                        <p>{{anggota.card_number}}</p>
                    </div>
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
    async asyncData({params, error}) {
        const { data } = await axios.get(`https://api.imaka.or.id/v2/anggota/${params.slug}`).catch(e => {
            error({ statusCode: 404, message: 'Anggota tidak ditemukan' })
        })
        if(data.data) {
            return {
                anggota: data.data,
                isLoaded: true,
                title: data.data.name
            }
        } else {
            error({ statusCode: 404, message: 'Anggota tidak ditemukan' })
        }
    },
    head() {
        return {
            title: this.title
        }
    },
}
</script>