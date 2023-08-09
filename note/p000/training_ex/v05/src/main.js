import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import * as tf from '@tensorflow/tfjs'

const app = createApp(App)
app.use(router).mount('#app')
app.config.globalProperties.$tf = tf
