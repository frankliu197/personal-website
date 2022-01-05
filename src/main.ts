import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import '@/assets/css/main.scss'
import i18n from './i18n'
import CountryFlag from 'vue-country-flag'
//vue 3-> https://stackoverflow.com/questions/63471824/vue-js-3-event-bus
Vue.component('country-flag', CountryFlag)
Vue.config.productionTip = false

const app = new Vue({
  router,
  vuetify,
  i18n,
  render: h => h(App)
}).$mount('#app')