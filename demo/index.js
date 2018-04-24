import Vue from 'vue';
import VueRouter from 'vue-router';
// import App from './App';
import routes from './router';

Vue.use(VueRouter);

console.log(routes);
const router = new VueRouter({
  routes,
});

new Vue({
  router,
  render: h => h('router-view'),
}).$mount('#app');
