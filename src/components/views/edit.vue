<template>
    <p>
        New movie<br />
        <button><router-link to="/">Save</router-link></button>
        New movie<br />
        Title : <input type="text" v-model="movie_to_edit.title" /><br />
        Year : <input type="text" v-model="movie_to_edit.year" /><br />
        Synopsys : <textarea v-model="movie_to_edit.synopsys"></textarea><br />
        Language : <input type="text" v-model="movie_to_edit.language" /><br />
        Poster : <input type="url" v-model="movie_to_edit.img" /><br />
        Gender : <input type="text" v-model="movie_to_edit.gender" /><br />
        Director <br>
        First name <input type="text" v-model="movie_to_edit.director.firstName">
        Last name <input type="text" v-model="movie_to_edit.director.lastName">
        Nationality <input type="text" v-model="movie_to_edit.director.nationality">
        Birthdate <input type="date" v-model="movie_to_edit.director.birthdate">
    </p>
</template>
<script>
export default {
    data: function() {
        return {
            movies: window.shared_data.movies,
        }
    },
    methods: {
        save: function(){
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
