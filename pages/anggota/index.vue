<template>
    <div>
        <section class="py-5">
            <div class="container-fluid">
                <my-jumbotron title="Sedulur" desc="Sedulur"/>
                <div class="row my-4 no-gutters peoples">
                    <div class="col-12 col-md-4 col-xl-3" v-for="(anggota, i) in anggotas" :key="`${new Date().now}${i}`" @mouseover="prepAnggota(anggota)">
                        <nuxt-link :to="`/anggota/${anggota.id}`" class="card people">
                            <div class="card-body text-nowrap">
                                <b-img :src="anggota.image_link" class="full-radius" width="60px" height="60px" fluid alt="Responsive image"></b-img>
                                <h4 class="card-title f-2 text-primary mt-3 mb-0 overflow-hidden">{{anggota.name}}</h4>
                                <small class="card-text">{{anggota.major.name}}</small>
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
    head: {
        title: 'Anggota'
    },
    async asyncData({params, error}) {
        const { data } = await axios.get('https://dev.imaka.or.id/api/anggota')

        if(data.data) {
            return {
                anggotas: data.data,
                isLoaded: true,
                page: 1,
                perPage: 12,
                pages: []
            }
        } else {
            error({ statusCode: 500, message: 'Bad gateway' })
        }
    },
    methods: {
        prepAnggota(data) {
            localStorage[`a_${data.id}`] = JSON.stringify(data)
        },
        clickPg(type) {
            this.page = type
            localStorage.current_page = this.page
        },
        setPages () {
            this.pages = []
            let numberOfPages = Math.ceil(this.anggotas.length / this.perPage);
            for (let index = 1; index <= numberOfPages; index++) {
                this.pages.push(index);
            }
        },
        paginate (posts) {
            let page = this.page;
            let perPage = this.perPage;
            let from = (page * perPage) - perPage;
            let to = (page * perPage);
            return  posts.slice(from, to);
        }
    },
    watch: {
        anggotas () {
            this.setPages();
        }
    },
    computed: {
        displayedAnggota () {
            return this.paginate(this.anggotas);
        }
    },

}
</script>