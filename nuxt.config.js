export default {
    modules: ['bootstrap-vue/nuxt'],
    components: true,
    css: [
        '@styles/index.scss'
    ],
    head: {
        titleTemplate: '%s – Ikatan Mahasiswa Kebumen Amikom',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'Kami adalah forum mahasiswa di lingkup Universitas Amikom Yogyakarta yang merangkul dan menghubungkan mahasiswa kebumen yang berkuliah di lingkup amikom yogyakarta.Meta description' },
            {
                name: 'generator',
                content: 'NuxtJS' 
            },
            {
                name: 'theme-color',
                content: '#f3b31e'
            }
        ],
        link: [
            {
                href: 'https://fonts.googleapis.com/css2?family=Epilogue:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap',
                rel: 'stylesheet'
            },
            {
                rel: 'icon',
                type: 'image/png',
                href: '/favicon.png'
            },
            {
                rel: 'shortcut icon',
                type: 'image/png',
                href: '/favicon.png'
            },
        ],
    },
    buildModules: [
        '@nuxtjs/pwa',
        '@nuxtjs/color-mode'
    ],
    pwa: {
        manifest: {
            name: 'Ikatan Mahasiswa Kebumen Amikom',
            short_name: 'IMAKA',
            lang: 'id',
            theme_color: '#f3b31e',
            useWebmanifestExtension: false
        }
    }
}

