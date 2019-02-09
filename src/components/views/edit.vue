<template>
    <div>
        <v-layout row justify-center>
            <h1>Ajouter un film</h1>
        </v-layout>
        <v-layout row>        
            <v-flex xs12 ma-3>
                <v-text-field label="Titre du film" v-model="movie_to_edit.title" outline hide-details></v-text-field>
            </v-flex>
        </v-layout>
        <v-layout row>        
            <v-flex xs12 ma-3>
                <v-text-field label="Année de sortie" v-model="movie_to_edit.year" outline hide-details></v-text-field>
            </v-flex>
        </v-layout>
        <v-layout row>        
            <v-flex xs12 ma-3>
                <v-textarea label="Synopsys" v-model="movie_to_edit.synopsys" outline hide-details></v-textarea>
            </v-flex>
        </v-layout>
        <v-layout row>        
            <v-flex xs12 ma-3>
                <v-text-field 
                label="Langue"
                v-model="movie_to_edit.language"
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
                v-model="movie_to_edit.img"
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
                v-model="movie_to_edit.gender"
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
                v-model="movie_to_edit.director.firstName"
                outline
                hide-details
                >
                </v-text-field>
            </v-flex>      
            <v-flex xs6 ma-3>
                <v-text-field 
                label="Nom"
                v-model="movie_to_edit.director.lastName"
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
                v-model="movie_to_edit.director.nationality"
                outline
                hide-details
                >
                </v-text-field>
            </v-flex>
            <v-flex xs6 ma-3>
                <v-text-field 
                label="Date de naissance (jj/mm/aaaa)"
                v-model="movie_to_edit.director.birthdate"
                outline
                hide-details
                >
                </v-text-field>
            </v-flex>
        </v-layout>
        <v-layout row>        
            <v-flex ma-2>
                <v-btn color="blue" class="white--text" v-on:click="back">Retour accueil</v-btn>
            </v-flex>
        </v-layout>
    </div>
</template>
<script>
export default {
    data: function() {
        return {
            movies: window.shared_data.movies,
        }
    },
    methods: {
        back: function(){
            this.$router.push({ name: "home" })
        }
    },
    computed: {
        movie_to_edit: function() {
            return this.movies.find(obj => {
                return obj.id == this.$route.params['id'];
            })
        }
    }
}
</script>

<style>

</style>
