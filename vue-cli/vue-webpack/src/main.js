import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Home from './Home.vue'
import Users from './Users.vue'
import Login from './Login.vue'
import Help from './Help.vue'
import CrearOrden from './CrearOrden'

Vue.component('login', Login)
Vue.use(VueRouter);

const routes = [
  {path: '/users', component: Users},
  {path:'/home', component: Home},
  {path:'/login', component: Login},
  {path:'/help', component: Help},
  {path:'/crearOrden', component: CrearOrden}
  ]

const router = new VueRouter({
  routes
})

new Vue({
  el: '#app',
  router,
  render: h => h(App),
})

