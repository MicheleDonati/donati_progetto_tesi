import Vue from 'vue'
import App from './App.vue'
import router from "./router";
import vuetify from '@/plugins/vuetify' // path to vuetify export
import json from './assets/data.json'
import VModal from 'vue-js-modal'

Vue.config.productionTip = false
Vue.use(require('vue-faker'));
Vue.use(VModal)

export const bus = new Vue();
export default{
  data(){
    return{
      myJson: json
    }
  }
}

new Vue({
  router,
  vuetify,
  render: h => h(App),
}).$mount('#app')
