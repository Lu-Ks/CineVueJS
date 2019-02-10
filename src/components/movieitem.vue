<template>
    <v-flex xs3>
        <v-card 
        class="ma-3"
        >
            <router-link v-bind:to=" { name: 'show', params: { id: movie.id } } ">
                <v-img
                :src="movie.img"
                aspect-ratio="0.65"
                >
                </v-img>
            </router-link>

            <v-card-title primary-title>
            <div>
                <v-layout row>
                    <v-flex>
                        <h3 class="headline">{{movie.title}}</h3>
                    </v-flex>
                </v-layout>
                <v-layout row>
                    <v-flex>
                        <p>{{movie.gender}} ({{ movie.year }})
                        </p>
                    </v-flex>
                </v-layout>

                <v-layout v-if='!movie.voted' row justify-center>
                    <v-rating 
                    v-on:input="rating"
                    v-model="rate"
                    :half-increments="true"
                    :hover="true"
                    ></v-rating>
                </v-layout>
                <v-layout v-else row>
                    <span>
                        {{average}}
                    </span>
                    <v-icon color="blue">
                        star_rate
                    </v-icon>
                </v-layout>
            </div>
            </v-card-title>

            <v-card-actions>
                <router-link v-bind:to=" { name: 'edit', params: { id: movie.id } } ">
                    <v-btn flat color="blue">Edit</v-btn>
                </router-link>
                <v-btn flat color="red" v-on:click="remove">Supprimer</v-btn>
            </v-card-actions>
            <router-link v-bind:to=" { name: 'show', params: { id: movie.id } } ">
                <v-btn
                absolute
                dark
                fab
                bottom
                right
                small
                color="blue"
                >
                    <v-icon>fas fa-info</v-icon>
                </v-btn>
            </router-link>
        </v-card>
    </v-flex>
</template>

<script>
export default {
    data: function(){
        return {
            //Vote du film
            rate: 0
        };
    },
    //Recuperer les valeurs transmise pour afficher un film
    props: ["movie", "movieIndex", "limit"],
    methods: {
        //Transmet l'event supprimer du film
        remove: function() {
            this.$emit('remove');
        },
        //Vote pour le film
        rating: function(e){
            this.movie.voted = true;
            this.movie.rating.push(e);
            this.movie.vote = e;
        }
    },
    computed: {
        //Calcule la moyenne du film
        average: function() {
            let value = 0;
            if(this.movie.rating.length > 0){
                this.movie.rating.slice(0, this.movie.length).forEach(element => {
                    value += element;
                })
                return (value / this.movie.rating.length).toFixed(1) + "(" + this.movie.rating.length + ')';
            }
        }
    }
}
</script>

<style>
</style>