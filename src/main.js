import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import i18n from './i18n'
import { firestorePlugin } from 'vuefire'

Vue.config.productionTip = false

// Plugins
Vue.use(firestorePlugin)

// Load core components
const requireComponent = require.context('./components/core', false, /[A-Z]\w+\.(vue|js)$/)

requireComponent.keys().forEach(fileName => {
  const componentConfig = requireComponent(fileName)
  const componentName = fileName.split('/').pop().replace(/\.\w+$/, '')
  Vue.component(componentName, componentConfig.default || componentConfig)
})

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
