import Vue from 'vue'
import Router from 'vue-router'

import edit from './components/views/edit.vue'
import home from './components/views/home.vue'
import add from './components/views/add.vue'
import show from './components/views/show.vue'

Vue.use(Router)

export default new Router({
  //Liste des routes disponible dans vueJS
  routes: [
    { path: '/', name: "home", component: home },
    { path: '/edit/:id', name: 'edit', component: edit },
    { path: '/add', name: 'add', component: add },
    { path: '/:id', name: 'show', component: show }
  ]
})