import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/Clientes',
    name: 'Clientes',
    component: () => import('../views/Clientes.vue')
  },
  {
    path: '/Funcionarios',
    name: 'Funcionarios',
    component: () => import('../views/Funcionarios.vue')
  },
  {
    path: '/Servicos',
    name: 'Servicos',
    component: () => import('../views/Servicos.vue')
  },
  {
    path: '/Ganhos',
    name: 'Ganhos',
    component: () => import('../views/Ganhos.vue')
  },
  {
    path: '/NovoAgendamento',
    name: 'NovoAgendamento',
    component: () => import('../views/NovoAgendamento.vue')
  },
  {
    path: '/NovoCliente',
    name: 'NovoCliente',
    component: () => import('../views/NovoCliente.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
