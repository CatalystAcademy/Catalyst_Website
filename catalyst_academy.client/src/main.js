

import './assets/css/bootstrap.min.css'
import './assets/css/responsive.css'
import './assets/css/animate.min.css'
import './assets/css/style.css'
import './assets/css/magnific-popup.css'
import './assets/css/owl.carousel.min.css'
import './assets/css/owl.theme.default.min.css'
import './assets/plugins/kipso-icons/style.css'
import './assets/css/vegas.min.css'
import './assets/plugins/fontawesome/css/all.min.css'


// Import jQuery and jQuery plugins
import $ from 'jquery'
import './assets/js/jquery.min.js'
import './assets/js/jquery.validate.min.js'
import './assets/js/bootstrap.bundle.min.js'
import './assets/js/countdown.min.js'
import './assets/js/jquery.magnific-popup.min.js'
// import './assets/js/jquery.counterup.min.js'
import './assets/js/owl.carousel.min.js'
import './assets/js/TweenMax.min.js'
import './assets/js/vegas.min.js'
/*import './assets/js/waypoints.min.js'
import './assets/js/wow.js'*/


import { createApp } from 'vue'
import App from './App.vue'
import router from './router.js'

const app = createApp(App);

app.use(router);

app.mount('#app');