import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import VueStarrySky from "../packages/index"

Vue.use(VueStarrySky);

new Vue({
  render: h => h(App),
}).$mount('#app')
