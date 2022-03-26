import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import utilities from './index'

Vue.use(utilities)

const app = new Vue({
  render: h => h(App),
})
app.$mount('#app')
