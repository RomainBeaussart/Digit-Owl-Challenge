<template>
    <v-container fluid>
        <v-layout wrap>
            <v-flex xs12 class="d-flex justify-center headline">
                <v-btn
                    class="mx-2"
                    fab dark small
                    color="primary"
                    mr-5
                    @click="back()"
                >
                    <v-icon dark>keyboard_arrow_left</v-icon>
                </v-btn>
                {{ category.name }}
            </v-flex>
            <v-flex xs12 class="d-flex justify-center">
                {{ category.special_instructions }}
            </v-flex>
            <v-flex
                v-for="menu in menuItems"
                v-bind:key="menu.id"
                class="d-flex justify-center"
                xs4
                pa-5
            >
                <v-card
                    class="mx-auto align-self-center"
                    min-width="400"
                    max-width="400"
                    style="height: fit-content !important"
                >
                    <v-img
                        v-if="menu.image_present"
                        class="white--text align-end"
                        height="200px"
                        :src="'https://www.davidchuschinabistro.com/images/' + menu.short_name + '.jpg'"
                        @click="getImage(category.name)"
                    >
                        <v-card-title>{{ menu.name }}
                        </v-card-title>
                    </v-img>

                    <v-card-title v-else>
                        {{ menu.name }}
                    </v-card-title>

                    <v-card-text class="text--primary">
                        {{ menu.description }}
                    </v-card-text>

                    <v-card-actions>
                       $ {{ menu.price_small ? menu.price_small + ' - ' : '' }} {{ menu.price_large }}
                       <v-spacer></v-spacer>
                       <v-avatar color="primary" size="48">
                            <span class="white--text headline">{{ menu.short_name }}</span>
                        </v-avatar>
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
export default class Menu extends Vue {

    category: any = {
        name: ''
    }
    menuItems: any = []

    get id() {
        return this.$route.params.id;
    }

    async mounted() {
        await axios.get('https://mikrethor-resto-course5.herokuapp.com/menu_items.json?category=' + this.id)
        .then((response) => {
            console.log(response)
            this.category = response.data.category
            this.menuItems = response.data.menu_items
        })
    }

    back() {
        this.$router.push({
            name: "home"
        });
    }

}
</script>

<style>

</style>