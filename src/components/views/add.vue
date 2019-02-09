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
                <v-textarea label="Synopsys" v-model="movie_to_add.synopsys" outline hide-details></v-textarea>
            </v-flex>
        </v-layout>
        <v-layout row>        
            <v-flex xs12 ma-3>
                <v-text-field 
                label="Langue"
                v-model="movie_to_add.language"
                outline
                hide-details
                >
                </v-text-field>
            </v-flex>
        </v-layout>
        <v-layout row>        
            <v-flex xs12 ma-3>
                <v-text-field 
                label="Affiche (url)"
                v-model="movie_to_add.img"
                outline
                hide-details
                >
                </v-text-field>
            </v-flex>
        </v-layout>
        <v-layout row>        
            <v-flex xs12 ma-3>
                <v-text-field 
                label="Genre"
                v-model="movie_to_add.gender"
                outline
                hide-details
                >
                </v-text-field>
            </v-flex>
        </v-layout>
        <v-layout row justify-center>
            <h3>Directeur</h3>
        </v-layout>
        <!-- Director -->
        <v-layout row>        
            <v-flex xs6 ma-3>
                <v-text-field 
                label="Prénom"
                v-model="director.firstName"
                outline
                hide-details
                >
                </v-text-field>
            </v-flex>      
            <v-flex xs6 ma-3>
                <v-text-field 
                label="Nom"
                v-model="director.lastName"
                outline
                hide-details
                >
                </v-text-field>
            </v-flex>
        </v-layout>
        <v-layout row>        
            <v-flex xs6 ma-3>
                <v-text-field 
                label="Nationalité"
                v-model="director.nationality"
                outline
                hide-details
                >
                </v-text-field>
            </v-flex>
            <v-flex xs6 ma-3>
                <v-text-field 
                label="Date de naissance (jj/mm/aaaa)"
                v-model="director.birthdate"
                outline
                hide-details
                >
                </v-text-field>
            </v-flex>
        </v-layout>
        <v-layout row>        
            <v-flex ma-2>
                <v-btn color="blue" class="white--text" v-on:click="add">Ajouter un film</v-btn>
            </v-flex>
        </v-layout>
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
        add: function() {
            let id = this.movies[this.movies.length-1].id + 1
            this.movie_to_add.id = id;
            this.movie_to_add.director = this.director;
            this.movies.push(this.movie_to_add)
            this.$router.push({ name: "home" })

        }
    },
    computed: {
    }
}
</script>

<style>

</style>
