<template>
    <v-app>
        <v-app-bar
            app
            color="primary"
            dark
        >
            <v-layout wrap>
                <v-flex xs2 class="d-flex justify-center">
                </v-flex>
                <v-flex xs8 class="d-flex justify-center">
                    <span 
                        @click="$router.push({ name: 'home'})"
                        class="title" style="cursor: pointer"
                    >
                        Digit'Owl Restaurant <v-icon>fastfood</v-icon></span>
                </v-flex>
                <v-flex xs2 class="d-flex justify-end">
                    <v-menu
                        :open-on-hover="true"
                        :offset-y="true"
                        :close-on-content-click="false"
                    >
                        <template v-slot:activator="{ on }">
                            <v-btn
                                color="primary"
                                dark
                                elevation="0"
                                v-on="on"
                            >
                            <v-badge color="white">
                                <template v-slot:badge>
                                    <span v-if="total > 0" class="primary--text">{{ total }}</span>
                                </template>
                                <v-icon>shopping_cart</v-icon>
                            </v-badge>
                            </v-btn>
                        </template>
                        <v-list v-if="items.length">
                            <v-list-item
                                v-for="(item, index) in items"
                                :key="index"
                            >
                                <v-list-item-title>
                                    <v-layout wrap>
                                        <v-flex xs9 class="subtitle-1 fill-width" style="overflow: hidden">
                                            {{ item.name }}
                                        </v-flex>
                                        <v-flex xs1 class="subtitle-2 fill-width">
                                            <span class="primary white--text px-1 rounded">
                                                {{ item.short_name }}
                                            </span>
                                        </v-flex>
                                        <v-flex xs2 class="subtitle-2 fill-width">
                                            <v-btn icon
                                                @click="remove(item)"
                                            >
                                                <v-icon>remove</v-icon>
                                            </v-btn>
                                        </v-flex>
                                        <v-flex xs6 class="overline">
                                            Portion: {{ item.portion_name }}
                                        </v-flex>
                                        <v-flex xs3 class="overline">
                                            Qtt:{{ item.quantity }}
                                        </v-flex>
                                        <v-flex xs3 class="overline">
                                            ${{ item.price }}
                                        </v-flex>
                                    </v-layout>
                                </v-list-item-title>
                            </v-list-item>
                            <hr />
                            <v-list-item>
                                <v-list-item-title>Total ${{ total }}</v-list-item-title>
                            </v-list-item>
                        </v-list>
                        <v-list v-else>
                            <v-list-item>
                                <v-list-item-title>You haven't ordered anything yet</v-list-item-title>
                            </v-list-item>
                        </v-list>
                    </v-menu>
                </v-flex>
            </v-layout>
        </v-app-bar>

        <v-content>
            <router-view/>
        </v-content>
    </v-app>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'
import axios from 'axios'


@Component
export default class App extends Vue {
    get items(){
        console.log(this.$store.state.command)
        return this.$store.state.command
    }

    get total() {
        return this.items.reduce((accumulateur: any, valeurCourante: any) =>
            accumulateur + valeurCourante.price * valeurCourante.quantity,
        0)
    }

    remove(menu: any) {
        this.$store.commit('remove', {
            name: menu.name,
            short_name: menu.short_name,
            price: menu.price,
            portion_name: menu.portion_name
        })
    }
}
</script>
