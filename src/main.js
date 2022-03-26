import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import juice from './index'

Vue.use(juice)

const app = new Vue({
  render: h => h(App),
})
app.$mount('#app')
