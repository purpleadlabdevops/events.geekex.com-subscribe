export default {
  ssr: false,
  head: {
    title: 'GeekHub | Subscribe',
    htmlAttrs: { lang: 'en' },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, user-scalable=no, user-scalable=0, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0 user-scalable=0' },
      { hid: 'description', name: 'description', content: 'GeekHub Subscribe' }
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/favicon.png' },
    ]
  },
  styleResources: {
    scss: ['~/styles/_functions.scss']
  },
  css: ['~/styles/global.scss'],
  modules: [ '@nuxtjs/axios', '@nuxtjs/style-resources' ],
  components: true,
  router: { base: '/subscribe/', mode: 'history' },
  generate: { dir: './dist_server' },
  build: { target: 'static' }
}
