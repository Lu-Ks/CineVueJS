<template>
    <v-toolbar dark color="primary">
        <router-link v-bind:to="{ name: 'home' }">
            <v-btn icon>
                <v-icon>fas fa-video</v-icon>
            </v-btn>
        </router-link>
        <router-link v-bind:to="{ name: 'home' }">
            <v-toolbar-title class="white--text">CinéVueJS</v-toolbar-title>
        </router-link>
        <v-spacer></v-spacer>
        <router-link v-bind:to="{ name: 'add' }">
            <v-btn color="white" class="blue--text">Ajouter un film</v-btn>
        </router-link>
    </v-toolbar>
</template>
<script>
export default {
    data() {
        return {}
    }
}
</script>
<style>


</style>
