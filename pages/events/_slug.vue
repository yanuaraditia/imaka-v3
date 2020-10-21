<template>
    <section class="py-5 text-lg-center">
        <div class="container-fluid my-lg-5 pt-lg-4">
            <img v-if="event.image" :src="event.image" :alt="event.title" class="mb-4 card-img-top rad-0">
            <h1 class="ndes-1">{{event.title}}</h1>
            <p>{{event.desc}}</p>
            <p class="mt-4">{{onliner(event.online)}} <strong>{{event.place}}</strong>. {{event.seats}} Slot. Tanggal {{formatDate(event.start)}}</p>
            <a :href="event.doc_link" v-if="event.doc_link" class="btn btn-info">Dokumentasi</a>
            <a :href="event.online_link" v-else-if="event.online_link" class="btn" v-bind:class="`btn-${eventPlace.color}`" v-html="eventPlace.place"></a>
            <button class="btn btn-outline-light" @click="share" v-if="canShare">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-share-2"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line></svg>
                Share
            </button>
        </div>
    </section>
</template>
<script>
export default {
    async asyncData({ $content, params, error }) {
        const event = await $content('events', params.slug).fetch().catch(err => {
            error({ statusCode: 404, message: 'This page could not be found' })
        })
        if(event) {
            return {
                event
            }
        }
    },
    methods: {
        onliner(stats) {
            return stats ? 'Online melalui' : 'Langsung di'
        },
        formatDate(date) {
            const bulanIndo = ['', 'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September' , 'Oktober', 'November', 'Desember'];
        
            const string = date.split(" ")[0];
            const jam = date.split(" ")[1];
            
            const tanggal = string.split("-")[2];
            const bulan = string.split("-")[1];
            const tahun = string.split("-")[0];
        
            return tanggal + " " + bulanIndo[Math.abs(bulan)] + " " + tahun + " jam " + jam;
        },
        share() {
            if (navigator.share) {
                navigator.share({
                title: this.event.title,
                text: this.event.desc,
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
    head() {
        return {
            title: this.event.title
        }
    },
    computed: {
        canShare() {
            if(navigator.share) {
                return true
            } else {
                return false
            }
        },
        eventPlace() {
            switch(this.event.place) {
                case 'meet':
                    return  {
                        place: '<img src="/google-meet.png" height="24px" class="mr-2"/>Google Meet',
                        color: 'light'
                    }
                    break
                    case 'zoom':
                        return {
                            place: '<img src="/zoom-logo.png" height="24px" class="mr-2"/>',
                            color: 'light'
                        }
                        break
                        default:
                            return {
                                place: this.event.place,
                                color: 'warning'
                            }
                            break
            }
        }
    }
}
</script>