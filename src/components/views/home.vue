<template>
    <div>

        <v-layout row justify-center>
            <v-flex xs12 md8>
                <v-text-field append-icon="search" label="Rechercher" v-model="search" outline hide-details></v-text-field>
                <p v-if='search != ""'>{{movies_search.length}} Résultats</p>
            </v-flex>
        </v-layout>


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
            movies: window.shared_data.movies,
            movie_to_add: {},
            director: {},
            movie_to_edit: null,
            search: ""
        }; 
    },
    methods: {
        newmovie1: function() {
            this.movies.push({title:"New movie"})
        },
        newmovie2: function() {
            let id = this.movies[this.movies.length-1].id + 1
            this.movie_to_add.id = id;
            this.movie_to_add.director = this.director;
            this.movies.push(this.movie_to_add)

            this.movie_to_add = {}
        },
        save: function() {
            this.movie_to_edit = null
        },
        remove: function(index) {
            this.movies.splice(index, 1)
        }
    },
    created: function() {
        console.log("Created")
    },

    computed: {
        movies_search: function() {
            return this.movies.filter(m => m.title.toLowerCase().indexOf(this.search.toLowerCase())!=-1);
        }
    }    
}
</script>

<style>

</style>
