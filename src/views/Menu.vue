<template>
    <v-container fluid>
        <v-layout wrap>
            <v-flex xs4 class="d-flex headline">
                <v-btn
                    icon big
                    x-large
                    color="primary"
                    mr-5
                    @click="back()"
                >
                    <v-icon dark>keyboard_arrow_left</v-icon>
                </v-btn>
            </v-flex>
            <v-flex xs4 class="d-flex justify-center display-2">
                {{ category.name }}
            </v-flex>
            <v-flex xs4 class="d-flex justify-center headline">
            </v-flex>
            
            <v-flex xs12 mt-5 class="d-flex justify-center" v-if="category.special_instructions">
                <v-alert type="primary" max-width="90%">
                    {{ format(category.special_instructions) }}
                </v-alert>
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
                >
                    <v-img
                        v-if="menu.image_present"
                        class="white--text align-end"
                        height="250px"
                        :src="'https://www.davidchuschinabistro.com/images/' + menu.short_name + '.jpg'"
                    >
                        <v-card-title style="background: rgba(0, 0, 0, 0.3)">{{ menu.name }}
                        </v-card-title>
                    </v-img>

                    <v-card-title v-else>
                        {{ menu.name }}
                    </v-card-title>

                    <v-card-text class="text--primary">
                        {{ format(menu.description) }}
                    </v-card-text>

                    <v-card-actions v-if="!menu.price_small">
                        ${{ menu.price_large }}
                        <v-btn icon small
                            @click="add(menu)"
                        >
                            <v-icon>add</v-icon>
                        </v-btn><br />
                       <v-spacer></v-spacer>
                       <v-avatar color="primary" size="48">
                            <span class="white--text headline">{{ menu.short_name }}</span>
                        </v-avatar>
                    </v-card-actions>

                    <v-card-actions v-else>
                        <v-layout wrap>
                            <v-flex xs6>
                                <span class="font-weight-black">Price</span><br />
                                    {{ menu.small_portion_name }}: ${{ menu.price_small }} 
                                    <v-btn icon small
                                        @click="addSmall(menu)"
                                    >
                                        <v-icon>add</v-icon>
                                    </v-btn><br />
                                    {{ menu.large_portion_name }}: ${{ menu.price_large }}
                                    <v-btn icon small 
                                        @click="add(menu)"
                                    >
                                        <v-icon>add</v-icon>
                                    </v-btn><br />
                            </v-flex>
                            <v-flex xs6 class="d-flex align-center justify-end">
                                <v-avatar color="primary" size="48">
                                    <span class="white--text headline">{{ menu.short_name }}</span>
                                </v-avatar>
                            </v-flex>
                        </v-layout>
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
            this.category = response.data.category
            this.menuItems = response.data.menu_items
        })
    }

    back() {
        this.$router.push({
            name: "home"
        });
    }

    format(text: string) {
        return text.charAt(0).toUpperCase() + text.slice(1)
    }

    addSmall(menu: any) {
        this.$store.commit('add', {
            name: menu.name,
            short_name: menu.short_name,
            price: menu.price_small,
            portion_name: menu.small_portion_name
        })
    }

    add(menu: any) {
        this.$store.commit('add', {
            name: menu.name,
            short_name: menu.short_name,
            price: menu.price_large,
            portion_name: menu.large_portion_name
        })
    }

}
</script>

<style>

</style>