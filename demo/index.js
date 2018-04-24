import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './router';
import Vnt from '../src';
import DemoBlock from './components/demo-block';
import '../src/styles';

Vue.component(DemoBlock.name, DemoBlock);

Vue.use(Vnt);
Vue.use(VueRouter);
const router = new VueRouter({
  routes,
});

new Vue({
  router,
  render: h => h('router-view'),
}).$mount('#app');
