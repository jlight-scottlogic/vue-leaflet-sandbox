import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import seedData from './data/seed';
import * as map from './map';
import Multiselect from 'vue-multiselect'

Vue.config.productionTip = false;

// Register global components
Vue.component('multiselect', Multiselect)

seedData();
map.setup();

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
