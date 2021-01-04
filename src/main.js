import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import x5GMaps from 'x5-gmaps'
// Option 1: Just your key
Vue.use(x5GMaps, 'YOUR_GOOGLE_KEY')
// Option 2: With libraries


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
