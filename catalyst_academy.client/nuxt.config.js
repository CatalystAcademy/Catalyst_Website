
export default {
  mode: 'universal',
  router: {
    extendRoutes(routes) {
        // Add custom routes if needed
    }
  },
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: './src/assets/images/favicons/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: './src/assets/images/favicons/favicon-16x16.png' },

      { rel: "stylesheet", href: "https://fonts.googleapis.com/css?family=Poppins:300,400,500,500i,600,700,800%7CSatisfy&display=swap" },

        { rel: "stylesheet", href: "./src/assets/css/animate.min.css" },
        { rel: "stylesheet", href: "./src/assets/css/bootstrap.min.css" },
        { rel: "stylesheet", href: "./src/assets/css/owl.carousel.min.css" },
        { rel: "stylesheet", href: "./src/assets/css/owl.theme.default.min.css" },
        { rel: "stylesheet", href: "./src/assets/plugins/fontawesome/css/all.min.css" },
        { rel: "stylesheet", href: "./src/assets/plugins/kipso-icons/style.css" },
        { rel: "stylesheet", href: "./src/assets/css/magnific-popup.css" },
        { rel: "stylesheet", href: "./src/assets/css/vegas.min.css" },
        { rel: "stylesheet", href: "./src/assets/css/style.css" },
        { rel: "stylesheet", href: "./src/assets/css/responsive.css" },

    ],

    script: [
        { src: "./src/assets/js/jquery.min.js", body: true },
        { src: "./src/assets/js/bootstrap.bundle.min.js", body: true },
        { src: "./src/assets/js/waypoints.min.js", body: true },
        { src: "./src/assets/js/owl.carousel.min.js", body: true },
        { src: "./src/assets/js/jquery.counterup.min.js", body: true },
        { src: "./src/assets/js/TweenMax.min.js", body: true },
        { src: "./src/assets/js/wow.js", body: true },
        { src: "./src/assets/js/jquery.magnific-popup.min.js", body: true },
        { src: "./src/assets/js/countdown.min.js", body: true },
        { src: "./src/assets/js/vegas.min.js", body: true },
        { src: "./src/assets/js/jquery.validate.min.js", body: true },
        { src: "./src/assets/js/jquery.ajaxchimp.min.js", body: true },
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: {
    color: '#f16101',
    height: '4px'
  },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
    plugins: [
        { src: "./src/assets/js/jquery.min.js", mode: 'client' }
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
