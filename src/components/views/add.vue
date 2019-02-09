<template>
    <div>
        <v-layout row justify-center>
            <h1>Ajouter un film</h1>
        </v-layout>
        <v-layout row>        
            <v-flex xs12 ma-3>
                <v-text-field label="Titre du film" v-model="movie_to_add.title" outline hide-details></v-text-field>
            </v-flex>
        </v-layout>
        <v-layout row>        
            <v-flex xs12 ma-3>
                <v-text-field label="Année de sortie" v-model="movie_to_add.year" outline hide-details></v-text-field>
            </v-flex>
        </v-layout>
        <v-layout row>        
            <v-flex xs12 ma-3>
                <v-text-field label="Synopsys" v-model="movie_to_add.synopsys" outline hide-details></v-text-field>
            </v-flex>
        </v-layout>
        Year : <input type="text" v-model="movie_to_add.year" /><br />
        Synopsys : <textarea v-model="movie_to_add.synopsys"></textarea><br />
        Language : <input type="text" v-model="movie_to_add.language" /><br />
        Poster : <input type="url" v-model="movie_to_add.img" /><br />
        Gender : <input type="text" v-model="movie_to_add.gender" /><br />
        Director <br>
        First name <input type="text" v-model="director.firstName">
        Last name <input type="text" v-model="director.lastName">
        Nationality <input type="text" v-model="director.nationality">
        Birthdate <input type="date" v-model="director.birthdate">
            
        <button v-on:click="newmovie2">Add</button>
        <button><router-link to="/">Save</router-link></button>
    </div>
</template>
<script>
export default {
    data: function() {
        return {
            movies: window.shared_data.movies,
            movie_to_add: {},
            director: {}
        }
    },
    methods: {
        newmovie2: function() {
            let id = this.movies[this.movies.length-1].id + 1
            this.movie_to_add.id = id;
            this.movie_to_add.director = this.director;
            this.movies.push(this.movie_to_add)

            this.movie_to_add = {}
        }
    },
    computed: {
    }
}
</script>

<style>

</style>
