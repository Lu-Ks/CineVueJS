<template>
    <div>

        <v-layout row>    
            <v-flex mb-3>
                <v-btn 
                color="blue" 
                class="white--text" 
                v-on:click="back"
                >
                <v-icon>
                    keyboard_arrow_left
                </v-icon>
                    Retour accueil
                </v-btn>
            </v-flex>
        </v-layout>
        <v-layout row align-center>        
            <v-flex xs3>
                <v-img
                :src="movie.img"
                aspect-ratio="0.65"
                >
                </v-img>
            </v-flex>
            <v-flex xs10>
                <v-layout justify-center align-center>
                    <h1 class="text-xs-center .font-weight-medium text--blue">
                        {{movie.title}}&nbsp
                    </h1>
                    <span class=".font-weight-light.font-italic">
                        ({{ movie.year }})
                    </span>
                </v-layout>
                <v-layout readonly='movie.voted' row justify-center align-center>
                    <v-flex xs7 align-end>
                        <v-rating 
                        v-on:input="rating"
                        v-model="rate"
                        :readonly="movie.voted ? true : false"
                        class="text-xs-right"
                        :half-increments="true"
                        :hover="true"
                        ></v-rating>
                    </v-flex>
                    <v-flex xs5>
                        <span>{{average}}</span>
                    </v-flex>
                </v-layout>
            </v-flex>
        </v-layout>
        <v-card>
            <v-layout row ma-2>
                <v-flex xs6>
                    <h2> Année de diffusion : </h2>
                    <span>{{ movie.year }}</span>
                </v-flex>
                
                <v-flex xs6>
                    <h2>Origine : </h2>
                    <span>{{ movie.language }}</span>
                </v-flex>
            </v-layout>
            <v-layout row ma-2>
                <h2>Synopsis : </h2>
            </v-layout>     
            <v-layout row ma-2>
                {{ movie.synopsys }}
            </v-layout>
            <v-layout row>
                <v-flex text-xs-center>
                    <div class="display-3">Producteur</div>
                </v-flex>
            </v-layout>
            <v-layout row ma-2>
                <v-flex>
                    <span class="title">{{ movie.director.firstName }} {{ movie.director.lastName }}</span>
                </v-flex>
            </v-layout>
            <v-layout row ma-2>
                <v-flex>
                    <span class="body-2">{{ movie.director.birthdate }}</span>
                </v-flex>
            </v-layout>
            <v-layout row ma-2>
                <v-flex>
                    <span class="body-2">{{ movie.director.nationality }}</span>
                </v-flex>
            </v-layout>
            <v-card-actions>
                <v-flex xs6 text-xs-center>
                    <router-link v-bind:to=" { name: 'edit', params: { id: movie.id } } ">
                        <v-btn color="blue" class="white--text">Edit</v-btn>
                    </router-link>
                </v-flex>
                <v-flex xs6 text-xs-center>
                    <v-btn color="red" class="white--text" v-on:click="remove">Supprimer</v-btn>
                </v-flex>
            </v-card-actions>
        </v-card>
    </div>
</template>
<script>
export default {
    data: function() {
        return {
            movies: window.shared_data.movies,
            rate: 0
        }
    },
    created: function () {
        if(this.movie.voted){
            this.rate = this.movie.vote;
        }
    },
    methods: {
        rating: function(e){
            this.movie.voted = true;
            this.movie.rating.push(e);
            this.movie.vote = e;
        },
        back: function(){
            this.$router.push({ name: "home" })
        },
        remove: function(index) {
            this.movies.splice(index, 1)
            this.$router.push({ name: "home" })
        }
    },
    computed: {
        movie: function() {
            return this.movies.find(obj => {
                return obj.id == this.$route.params['id'];
            })
        },
        average: function() {
            let value = 0;
            if(this.movie.rating.length > 0){
                this.movie.rating.slice(0, this.movie.length).forEach(element => {
                    value += element;
                })
                return (value / this.movie.rating.length).toFixed(1) + "(" + this.movie.rating.length + ' votes)';
            }
        }
    }
}
</script>

<style>

</style>
