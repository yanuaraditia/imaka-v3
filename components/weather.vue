<template>
    <div>
        <div v-if="weather" class="weather" v-bind:class="small? 'sm' : 'lg'" @click="toggleSmall">
            <img :src="`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`" alt="">
            <h6 v-if="!small" class="cond">{{weather.weather[0].main}} in {{weather.name}}</h6>
            <span>{{weather.main.temp}}&deg;C</span>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    data() {
        return {
            small: false,
            weather: null,
        }
    },
    methods: {
        async getWeather() {
            if(localStorage.weather_small) {
                this.small = localStorage.weather_small
            }
            await axios.get('http://api.openweathermap.org/data/2.5/weather?q=Kebumen,id&appid=c88450216ee6a08d8a65e64077df68ea&units=metric')
            .then(({data}) => {
                this.weather = data
            })
        },
        kelvToCelc(num) {
            var valNum = parseFloat(num)
            return valNum-273.15
        },
        toggleSmall() {
            this.small = !this.small
            localStorage.weather_small = this.small
        },
    },
    created() {
        this.getWeather()
    }
}
</script>