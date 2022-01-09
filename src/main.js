import { createApp } from 'vue'
import App from './App.vue'
import i18n from './i18n'
import CountryFlag from 'vue-country-flag-next'

createApp(App)
  .use(i18n)
  .component('country-flag', CountryFlag)
  .mount('#app');
