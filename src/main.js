import Vue from 'vue' //librairie "vue" dans node_modules
import VueRouter from 'vue-router'
import Vuetify from 'vuetify'
import app from './app.vue' //fichier app.vue local
import header from './components/header.vue'
import footer from './components/footer.vue'
import router from './routes.js'
import MovieItemComponent from './components/movieitem.vue'
import 'vuetify/dist/vuetify.min.css'

//todo : faire une fonction qui genere des notes
window.shared_data = {
  movies : [
    {
      title: "Avenger: Infinity war",
      year: 2018,
      synopsys: "Les Avengers et leurs alliés devront être prêts à tout sacrifier pour neutraliser le redoutable Thanos avant que son attaque éclair ne conduise à la destruction complète de l’univers.",
      language: "Américain",
      img: "http://fr.web.img4.acsta.net/r_1280_720/pictures/18/03/16/14/42/0611719.jpg",
      gender: "Action, Aventure",
      rating: randomNotes(),
      director: {
        firstName: "Joe",
        lastName: "Russo",
        nationality: "Américain",
        birthdate: "08/07/1971"
      },
      voted: false,
      id: 0
    },
    {
      title: "Je suis une légende",
      year: 2018,
      synopsys: "Robert Neville était un savant de haut niveau et de réputation mondiale, mais il en aurait fallu plus pour stopper les ravages de cet incurable et terrifiant virus d'origine humaine. Mystérieusement immunisé contre le mal, Neville est aujourd'hui le dernier homme à hanter les ruines de New York. Peut-être le dernier homme sur Terre... Depuis trois ans, il diffuse chaque jour des messages radio dans le fol espoir de trouver d'autres survivants. Nul n'a encore répondu.",
      language: "Américain",
      img: "https://m.media-amazon.com/images/M/MV5BYTE1ZTBlYzgtNmMyNS00ZTQ2LWE4NjEtZjUxNDJkNTg2MzlhXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UY1200_CR90,0,630,1200_AL_.jpg",
      gender: "Science fiction",
      rating: randomNotes(),
      director: {
        firstName: "Francis",
        lastName: "Lawrence",
        nationality: "Américain, Autrichien",
        birthdate: "26/03/1971"
      },
      voted: false,
      id: 1
    },
    {
      title: "Le transporter héritage",
      year: 2015,
      synopsys: "Frank Martin, un ex-mercenaire des forces spéciales, est aujourd’hui spécialisé dans le transport de colis top secrets pour des clients pas toujours recommandables. Alors que son père lui rend visite dans le Sud de la France, Frank se retrouve entraîné dans un braquage par Anna, cliente mystérieuse et manipulatrice, et ses trois partenaires. Précipité au cœur d’une vendetta impitoyable menée par ces quatre femmes fatales, et tandis que l’ombre de la mafia russe plane sur la Riviera, Frank devra plus que jamais faire appel à ses talents de pilote et de séducteur.",
      language: "Français, Chinois",
      img: "http://fr.web.img6.acsta.net/c_215_290/pictures/15/07/07/12/04/373064.jpg",
      gender: "Action",
      rating: randomNotes(),
      director: {
        firstName: "Camille",
        lastName: "Delamarre",
        nationality: "Français",
        birthdate: "03/10/1979"
      },
      voted: false,
      id: 3
    },
    {
      title: "Intouchable",
      year: 2011,
      synopsys: "A la suite d’un accident de parapente, Philippe, riche aristocrate, engage comme aide à domicile Driss, un jeune de banlieue tout juste sorti de prison. Bref la personne la moins adaptée pour le job. Ensemble ils vont faire cohabiter Vivaldi et Earth Wind and Fire, le verbe et la vanne, les costumes et les bas de survêtement... Deux univers vont se télescoper, s’apprivoiser, pour donner naissance à une amitié aussi dingue, drôle et forte qu’inattendue, une relation unique qui fera des étincelles et qui les rendra... Intouchables.",
      language: "Français",
      img: "http://fr.web.img6.acsta.net/c_215_290/o_club300a.png_0_se/medias/nmedia/18/82/69/17/19806656.jpg",
      gender: "Comédie",
      rating: randomNotes(),
      director: {
        firstName: "Eric",
        lastName: "Toledano",
        nationality: "Français",
        birthdate: "03/07/1971"
      },
      voted: false,
      id: 4
    },
    {
      title: "The social network",
      year: 2010,
      synopsys: "Une soirée bien arrosée d'octobre 2003, Mark Zuckerberg, un étudiant qui vient de se faire plaquer par sa petite amie, pirate le système informatique de l'Université de Harvard pour créer un site, une base de données de toutes les filles du campus. Il affiche côte à côte deux photos et demande à l'utilisateur de voter pour la plus canon. Il baptise le site Facemash. Le succès est instantané : l'information se diffuse à la vitesse de l'éclair et le site devient viral, détruisant tout le système de Harvard et générant une controverse sur le campus à cause de sa misogynie. Mark est accusé d'avoir violé intentionnellement la sécurité, les droits de reproduction et le respect de la vie privée. C'est pourtant à ce moment qu'est né ce qui deviendra Facebook. Peu après, Mark crée thefacebook.com, qui se répand comme une trainée de poudre d'un écran à l'autre d'abord à Harvard, puis s'ouvre aux principales universités des États-Unis, de l'Ivy League à Silicon Valley, avant de gagner le monde entier...",
      language: "Américain",
      img: "http://fr.web.img6.acsta.net/c_215_290/o_club300a.png_0_se/medias/nmedia/18/78/52/54/19534550.jpg",
      gender: "Drame",
      rating: randomNotes(),
      director: {
        firstName: "David",
        lastName: "Fincher",
        nationality: "Américain",
        birthdate: "28/08/1962"
      },
      voted: false,
      id: 5
    }
  ]
}
function randomNotes(){
  let nbVote = Math.floor(Math.random()*100);
  let votes = [];
  for(let i=0; i < nbVote; i++){
    votes.push(Math.round(Math.random()*5))
  }
  return votes;
}

Vue.use(Vuetify)
Vue.use(VueRouter);
Vue.component('movie-item', MovieItemComponent);
Vue.component('header-item', header);
Vue.component('footer-item', footer);

new Vue({
  el: '#app',
  render: h => h(app),
  router
})

