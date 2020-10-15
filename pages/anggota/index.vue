<template>
    <div>
        <section class="py-5">
            <div class="container-fluid">
                <my-jumbotron title="Sedulur" desc="Sedulur"/>
                <div class="row my-4 no-gutters peoples">
                    <div class="col-12 col-md-4 col-xl-3" v-for="(anggota, i) in displayedAnggota" :key="`${new Date().now}${i}`" @mouseover="prepAnggota(anggota)">
                        <nuxt-link :to="`/anggota/${anggota.card_number}`" class="card people">
                            <div class="card-body text-nowrap">
                                <b-img :src="anggota.image_link" class="full-radius" width="60px" height="60px" fluid alt="Responsive image"></b-img>
                                <h4 class="card-title f-2 text-primary mt-3 mb-0 overflow-hidden">{{anggota.name}}</h4>
                                <small class="card-text">{{anggota.major.name}}</small>
                            </div>
                        </nuxt-link>
                    </div>
                </div>
                <div class="d-md-flex align-items-md-center justify-content-md-center text-wrap">
                    <nav aria-label="Page navigation example" class="text-wrap">
                        <ul class="pagination">
                            <li class="page-item d-none d-md-inline" v-bind:class="page == 1 ? 'disabled' : null">
                                <button type="button" class="page-link" @click="clickPg(page--)"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-left"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg></button>
                            </li>
                            <li class="page-item" v-for="pageNumber in pages" :key="'page-'+pageNumber" v-bind:class="page == pageNumber ? 'active' : null">
                                <button type="button" class="page-link" @click="clickPg(pageNumber)">{{pageNumber}}</button>
                            </li>
                            <li class="page-item d-none d-md-inline" v-bind:class="page < pages.length ? null : 'disabled'">
                                <button type="button" class="page-link" @click="clickPg(page++)"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-right"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></button>
                            </li>
                        </ul>
                    </nav>
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
    data() {
        return {
            isLoaded: false,
            anggotas: [],
            page: 1,
            perPage: 12,
            pages: [],
        }
    },
    methods: {
        prepAnggota(data) {
            localStorage[`a_${data.card_number}`] = JSON.stringify(data)
        },
        clickPg(type) {
            this.page = type
            localStorage.current_page = this.page
        },
        async getPosts () {
            if(localStorage.current_page) {
                this.page = localStorage.current_page
            }
            if(localStorage.anggotas) {
                this.anggotas = JSON.parse(localStorage.anggotas)
                this.isLoaded = true
            }
            await axios.get('https://api.imaka.or.id/v2/anggota')
            .then(response => {
                localStorage.anggotas = JSON.stringify(response.data.datas)
                this.anggotas = response.data.datas
                this.isLoaded = true
            })
            .catch(response => {
                console.log(response);
            });
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
    mounted () {
        this.getPosts();
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