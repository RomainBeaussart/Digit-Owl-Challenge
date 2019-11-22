<template>
    <v-app>
        <v-app-bar
            app
            color="primary"
            dark
        >
            <v-layout wrap>
                <v-flex xs12 class="d-flex justify-center">
                    <v-icon>fastfood</v-icon>
                </v-flex>
            </v-layout>
        </v-app-bar>

        <v-content>
            <router-view/>
        </v-content>
    </v-app>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    name: 'App',

    data: () => ({
        //
    }),
});
</script>
