import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'
import firebase from 'firebase/app'
import 'firebase/analytics'
import { firebaseConfig } from './configs/firebaseConfig'
import App from './App.vue'
import router from './router'
import store from './store'

createApp(App).use(store).use(router).use(ElementPlus).mount('#app')

firebase.initializeApp(firebaseConfig)
firebase.analytics()
