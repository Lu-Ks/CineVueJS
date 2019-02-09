import Vue from 'vue' //librairie "vue" dans node_modules
import VueRouter from 'vue-router'
import Vuetify from 'vuetify'
import app from './app.vue' //fichier app.vue local
import header from './components/header.vue'
import router from './routes.js'
import MovieItemComponent from './components/movieitem.vue'
import 'vuetify/dist/vuetify.min.css'

//todo : faire une fonction qui genere des notes
window.shared_data = {
  movies : [
    {
      title: "Titre test test test test ezae aze aze aze az",
      year: 1990,
      synopsys: "Synopsys",
      language: "fr",
      img: "https://www.affiche-cine.com/images/thumb-357x476/19/423485636241014864511.jpg",
      gender: "Gender",
      rating: [3.4, 3.2, 3.4, 5],
      director: {
        firstName: "FirstName",
        lastName: "LastName",
        nationality: "Nationality",
        birthdate: "12/12/12"
      },
      voted: true,
      id: 0
    },
    {
      title: "Titre2",
      year: 1990,
      synopsys: "Synopsys",
      language: "fr",
      img: "http://t2.gstatic.com/images?q=tbn:ANd9GcSpNwIrRGgmWToAVjeYVEiN0EReZ-AWEGnKDHl4Ac9elI02i8zF",
      gender: "Gender",
      rating: [],
      director: {
        firstName: "FirstName",
        lastName: "LastName",
        nationality: "Nationality",
        birthdate: "12/12/12"
      },
      voted: false,
      id: 1
    },
    {
      title: "Titre",
      year: 1990,
      synopsys: "Synopsys",
      language: "fr",
      img: "https://www.affiche-cine.com/images/thumb-357x476/19/423485636241014864511.jpg",
      gender: "Gender",
      rating: [],
      director: {
        firstName: "FirstName",
        lastName: "LastName",
        nationality: "Nationality",
        birthdate: "12/12/12"
      },
      voted: false,
      id: 3
    },
    {
      title: "Titre2",
      year: 1990,
      synopsys: "Synopsys",
      language: "fr",
      img: "http://t2.gstatic.com/images?q=tbn:ANd9GcSpNwIrRGgmWToAVjeYVEiN0EReZ-AWEGnKDHl4Ac9elI02i8zF",
      gender: "Gender",
      rating: [],
      director: {
        firstName: "FirstName",
        lastName: "LastName",
        nationality: "Nationality",
        birthdate: "12/12/12"
      },
      voted: false,
      id: 4
    },
    {
      title: "Titre",
      year: 1990,
      synopsys: "Synopsys",
      language: "fr",
      img: "https://www.affiche-cine.com/images/thumb-357x476/19/423485636241014864511.jpg",
      gender: "Gender",
      rating: [],
      director: {
        firstName: "FirstName",
        lastName: "LastName",
        nationality: "Nationality",
        birthdate: "12/12/12"
      },
      voted: false,
      id: 5
    },
    {
      title: "quoi",
      year: 1990,
      synopsys: "Synopsys",
      language: "fr",
      img: "http://t2.gstatic.com/images?q=tbn:ANd9GcSpNwIrRGgmWToAVjeYVEiN0EReZ-AWEGnKDHl4Ac9elI02i8zF",
      gender: "Gender",
      rating: [],
      director: {
        firstName: "FirstName",
        lastName: "LastName",
        nationality: "Nationality",
        birthdate: "12/12/12"
      },
      voted: false,
      id: 6
    },
    {
      title: "Titre",
      year: 1990,
      synopsys: "Synopsys",
      language: "fr",
      img: "https://www.affiche-cine.com/images/thumb-357x476/19/423485636241014864511.jpg",
      gender: "Action",
      rating: [],
      director: {
        firstName: "FirstName",
        lastName: "LastName",
        nationality: "Nationality",
        birthdate: "12/12/12"
      },
      voted: false,
      id: 7
    },
    {
      title: "Titre2",
      year: 1990,
      synopsys: "Synopsys",
      language: "fr",
      img: "http://t2.gstatic.com/images?q=tbn:ANd9GcSpNwIrRGgmWToAVjeYVEiN0EReZ-AWEGnKDHl4Ac9elI02i8zF",
      gender: "Gender",
      rating: [],
      director: {
        firstName: "FirstName",
        lastName: "LastName",
        nationality: "Nationality",
        birthdate: "12/12/12"
      },
      voted: false,
      id: 8
    },
    {
      title: "Titre",
      year: 1990,
      synopsys: "Synopsys",
      language: "fr",
      img: "https://www.affiche-cine.com/images/thumb-357x476/19/423485636241014864511.jpg",
      gender: "Gender",
      rating: [],
      director: {
        firstName: "John",
        lastName: "LastName",
        nationality: "Nationality",
        birthdate: "12/12/12"
      },
      voted: false,
      id: 9
    },
    {
      title: "Titre2",
      year: 1990,
      synopsys: "Synopsys",
      language: "fr",
      img: "http://t2.gstatic.com/images?q=tbn:ANd9GcSpNwIrRGgmWToAVjeYVEiN0EReZ-AWEGnKDHl4Ac9elI02i8zF",
      gender: "Gender",
      rating: [],
      director: {
        firstName: "FirstName",
        lastName: "Eric",
        nationality: "Nationality",
        birthdate: "12/12/12"
      },
      voted: false,
      id: 10
    }
  ]
}

Vue.use(Vuetify)
Vue.use(VueRouter);
Vue.component('movie-item', MovieItemComponent);
Vue.component('header-item', header);

new Vue({
  el: '#app',
  render: h => h(app),
  router
})

