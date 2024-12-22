import './assets/styles.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import ToastPlugin from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-default.css';
import 'animate.css';

const vuetify = createVuetify({
  components,
  directives,
})
const app = createApp(App)

app.use(router)
app.use(vuetify)
app.use(ToastPlugin);

app.mount('#app')
