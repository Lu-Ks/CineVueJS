<template>
    <p>
       {{movie.title}}
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
    },
    computed: {
        movie: function() {
            return this.movies.find(obj => {
                return obj.id == this.$route.params['id'];
            })
        }
    }
}
</script>

<style>

</style>
