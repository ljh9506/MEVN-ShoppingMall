import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import Vuesax from 'vuesax';
import vueScrollBehavior from 'vue-scroll-behavior';
import { formatDate } from './utils/filters';

import 'vuesax/dist/vuesax.css'; //Vuesax styles
Vue.use(Vuesax, {
  // options here
});
Vue.use(vueScrollBehavior, { router: router });

Vue.filter('formatDate', formatDate);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
