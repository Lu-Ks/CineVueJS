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
                aspect-ratio="0.75"
                >
                </v-img>
            </v-flex>
            <v-flex xs10>
                <v-layout justify-center align-center>
                    <h1 class="text-xs-center .font-weight-medium text--blue">
                        {{movie.title}}
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
