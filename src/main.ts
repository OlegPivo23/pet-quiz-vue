import './assets/main.css'
import 'primeicons/primeicons.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import { autoAnimatePlugin } from '@formkit/auto-animate/vue'

import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'

import Button from 'primevue/button'
import InputText from 'primevue/inputtext';
import Card from 'primevue/card';
import Knob from 'primevue/knob';
import Breadcrumb from 'primevue/breadcrumb';

const app = createApp(App)

app.component('ui-button', Button)
app.component('ui-input', InputText)
app.component('ui-card', Card)
app.component('ui-knob', Knob)
app.component('ui-breadcrumb', Breadcrumb)


app.use(createPinia())
app.use(PrimeVue, {
  theme: {
    preset: Aura
  }
})
app.use(router)

app.mount('#app')
