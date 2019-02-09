<template> 
    <v-app>
      <v-content>
        <header-item></header-item>
        <v-container>
            <router-view></router-view>
        </v-container>
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