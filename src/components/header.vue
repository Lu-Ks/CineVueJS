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
<!--    <v-flex xs12 sm6 md3>
            <v-text-field label="Rechercher" color="white" v-model="search" box ></v-text-field>
        </v-flex>
        <v-btn icon>
            <v-icon>search</v-icon>
        </v-btn> -->
        <router-link v-bind:to="{ name: 'add' }">
            <v-btn color="white" class="blue--text">Ajouter un film</v-btn>
        </router-link>
        <!-- <v-btn icon>
            <v-icon>more_vert</v-icon>
        </v-btn> -->
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

    a {
    text-decoration: none;
    }

</style>
