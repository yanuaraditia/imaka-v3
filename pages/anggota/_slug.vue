<template>
    <div>
        <section class="py-5">
            <div class="container-fluid my-lg-5 pt-lg-4" v-if="isLoaded">
                <b-img :src="anggota.image_link" class="full-radius"></b-img>
                <h1 class="ndes-1 f-2 mt-2">
                    {{anggota.name}}
                    <span @click="share" v-if="canShare">
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-share-2"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line></svg>
                    </span>
                </h1>
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
            return false
        })
        if(data.data) {
            return {
                anggota: data.data,
                isLoaded: true,
                title: data.data.name,
                canShare: false,
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
    methods: {
        share() {
            if (navigator.share) {
                navigator.share({
                title: this.title,
                text: `Profil ${this.anggota.name}`,
                url: window.location.href
                }).then(() => {
                    console.log('Thanks for sharing!');
                })
                .catch(err => {
                    console.log(`Couldn't share because of`, err.message);
                });
            } else {
                console.log('web share not supported');
            }
        }
    },
    mounted() {
        if(navigator.share) {
            this.canShare = true
        }
    }
}
</script>