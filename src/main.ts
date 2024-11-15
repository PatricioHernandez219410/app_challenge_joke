import { createApp } from 'vue'
import App from './App.vue'
import pinia from '@/stores'
import router from '@/router'
import vuetify from '@/plugins/vuetify'
import { loadFonts } from '@/plugins/webfontloader'

loadFonts()



createApp(App)
  .use(pinia)
  .use(vuetify)
  .use(router)
  .mount('#app')
