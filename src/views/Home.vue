<template>
  <v-container fluid>
    <v-layout wrap xs12>
        <v-flex xs12 class="d-flex justify-center display-2">
            Welcome to Digit'Owl Restore
        </v-flex>
        <v-flex
            v-for="category in categories"
            v-bind:key="category.id"
            class="d-flex justify-center"
            xs4
            pa-5
        >
            <v-card
                class="mx-auto"
                width="400px"
                style="height: fit-content !important"
            >
                <v-img
                    class="white--text align-end"
                    height="200px"
                    :src="images[category.short_name]+ '?auto=compress&cs=tinysrgb&dpr=2&h=400&w=800'"
                    @click="getImage(category.name)"
                >
                    <v-card-title>{{ category.name }}
                        <v-tooltip bottom v-if="category.special_instructions" :offset-overflow="true" max-width="400">
                        <template v-slot:activator="{ on }">
                            <v-icon color="primary" v-on="on">info</v-icon>
                        </template>
                            <span> {{ category.special_instructions }}</span>
                        </v-tooltip>
                    </v-card-title>
                </v-img>

                <v-card-text class="text--primary">
                </v-card-text>

                <v-card-actions>
                    <v-btn
                        color="primary"
                        text
                        @click="openMenu(category.short_name)"
                    >
                        Explore
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from "vue-property-decorator"
import axios from 'axios'

@Component
export default class Home extends Vue {
    images = {
        L: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg",
        A: "https://images.pexels.com/photos/539451/pexels-photo-539451.jpeg",
        B: "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg",
        SP: "https://images.pexels.com/photos/280121/pexels-photo-280121.jpeg",
        C: "https://images.pexels.com/photos/60616/fried-chicken-chicken-fried-crunchy-60616.jpeg",
        F: "https://images.pexels.com/photos/769289/pexels-photo-769289.jpeg",
        V: "https://images.pexels.com/photos/675951/pexels-photo-675951.jpeg",
        DK: "https://images.pexels.com/photos/361184/asparagus-steak-veal-steak-veal-361184.jpeg",
        VG: "https://images.pexels.com/photos/533360/pexels-photo-533360.jpeg",
        CU: "https://images.pexels.com/photos/674576/pexels-photo-674576.jpeg",
        NL: "https://images.pexels.com/photos/2591594/pexels-photo-2591594.jpeg",
        NF: "https://images.pexels.com/photos/3026808/pexels-photo-3026808.jpeg",
        PF: "https://images.pexels.com/photos/2059192/pexels-photo-2059192.jpeg",
        FR: "https://images.pexels.com/photos/723198/pexels-photo-723198.jpeg",
        CM: "https://images.pexels.com/photos/2284604/pexels-photo-2284604.jpeg",
        FY: "https://images.pexels.com/photos/1410235/pexels-photo-1410235.jpeg",
        SO: "https://images.pexels.com/photos/1586942/pexels-photo-1586942.jpeg",
        DS: "https://images.pexels.com/photos/3256807/pexels-photo-3256807.jpeg",
        D: "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg",
        SR: "https://images.pexels.com/photos/357756/pexels-photo-357756.jpeg"
    }

    categories: Array<any> = []

    /**
     * Fonction exécutée au chargement de la page
     */
    async mounted() {
        await axios.get('https://mikrethor-resto-course5.herokuapp.com/categories.json')
        .then(response =>
            this.categories = response.data
        )
    }

    /**
     * Redirection vers la page menu
     */
    openMenu(id: string){
        this.$router.push({
            name: "menu",
            params: {
                id: id,
            }
        });
    }
}
</script>
