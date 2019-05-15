import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'
import Meta from 'vue-meta'
import 'bootstrap/dist/css/bootstrap.css'
import 'jquery/dist/jquery.min.js'

import './assets/stylesheet/main.css'

import Home from './views/Home.vue'
import Nav from './views/Nav.vue'
import Header from './views/Header.vue'
import Buttons from './views/Buttons.vue'
import Jumbotron from './views/Jumbotron.vue'
import Footer from './views/Footer.vue'
import Scroll from './views/Scroll.vue'
import Grid from './views/Grid.vue'

Vue.use(Router);
Vue.use(Meta);

const routes =[
    {path: '/', component: Home},
    {path: '/navigation', component: Nav},
    {path: '/header', component: Header},
    {path: '/buttons', component: Buttons},
    {path: '/jumbotron', component: Jumbotron},
    {path: '/footer', component: Footer},
    {path: '/scrollbar', component: Scroll},
    {path: '/gridsystem', component: Grid}
]

const router = new Router({routes});

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
