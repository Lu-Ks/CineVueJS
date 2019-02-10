<template> 
    <v-app>
      <v-content>
        <header-item></header-item>
        <v-container>
            <router-view></router-view>
        </v-container>
        <footer-item></footer-item>
      </v-content>
    </v-app>
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