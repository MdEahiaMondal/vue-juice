import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import juice from '/dist/vue-juice.common'

Vue.use(juice)

const app = new Vue({
  render: h => h(App),
})
app.$mount('#app')
