import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import '@mdi/font/css/materialdesignicons.css'
import 'chartist/dist/chartist.min.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import i18n from './plugins/i18n'
import vuetify from './plugins/vuetify'
import baseComponents from './plugins/base'
import vueChartist from 'vue-chartist'
import './styles/legacy.scss'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(i18n)
app.use(vuetify)
app.use(baseComponents)
app.use(vueChartist)

app.mount('#app')
