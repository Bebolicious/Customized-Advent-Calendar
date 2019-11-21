<template>
    <v-app>
        <v-content>
            <router-view />
        </v-content>
    </v-app>
</template>

<script>
export default {
    name: 'App',
    data() {
        return {
            //
        };
    }
};
</script>

<style>
html {
    height: 100%;
    overflow: hidden;
    background-color: #223355;
}
</style>
