<template>
    <div>
        <!-- Zone de recherche -->
        <v-layout row justify-center>
            <v-flex xs12 md8>
                <v-text-field append-icon="search" label="Rechercher" v-model="search" outline hide-details></v-text-field>
                <p v-if='search != ""'>{{movies_search.length}} Résultats</p>
            </v-flex>
        </v-layout>

        <!-- Liste des films -->
        <v-container>
            <p>Nombre de films enregistré : {{movies.length}}</p>
            <v-layout row wrap justify-center>
                <movie-item v-for="(movie, index) in movies_search" 
                v-bind:key="movie.id" 
                v-bind:movieIndex="index" 
                v-bind:limit="movies_search.length" 
                v-bind:movie="movie" 
                v-on:edit="edit(movie)" 
                v-on:remove="remove(index)"
                >
                </movie-item>
            </v-layout>
        </v-container>
    </div>
</template>
<script>
export default {
    data: function(){
        return {
            //Liste des films de main.js
            movies: window.shared_data.movies,
            //Valeur du champ recherche
            search: ""
        }; 
    },
    methods: {
        //Supprime le film correspondant au button
        remove: function(index) {
            this.movies.splice(index, 1)
        }
    },
    computed: {
        //Permet la recherche en fonction du nom/prenom du producteur, titre, ou genre du film
        movies_search: function() {
            return this.movies.filter(m => {
                if (m.title.toLowerCase().indexOf(this.search.toLowerCase()) != -1) {
                    return true;
                }
                if (m.gender.toLowerCase().indexOf(this.search.toLowerCase()) != -1) {
                    return true;
                }
                if (m.director.firstName.toUpperCase().indexOf(this.search.toUpperCase()) != -1) {
                    return true;
                }
                if (m.director.lastName.toUpperCase().indexOf(this.search.toUpperCase()) != -1) {
                    return true;
                }
            });

        }
    }    
}
</script>

<style>

</style>
