import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import '@/assets/css/main.scss';
import i18n from './i18n'
import CountryFlag from 'vue-country-flag'
Vue.component('country-flag', CountryFlag)

Vue.config.productionTip = false
new Vue({
  router,
  vuetify,
  i18n,
  render: h => h(App)
}).$mount('#app')