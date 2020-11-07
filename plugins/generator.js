export default async() => {
    const axios = require('axios')
    const data = await axios.get('https://api.imaka.or.id/v2/anggota')
    const anggotas = await data.datas

    const routes = []
    for(const anggota in anggotas) {
        routes.push({
            path: anggota.card_number
        })
    }

    return routes
}