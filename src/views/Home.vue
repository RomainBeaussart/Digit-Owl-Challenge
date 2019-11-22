<template>
  <v-container fluid>
    {{ test }}
  </v-container>
</template>

<script lang="ts">
// @ is an alias to /src
import { Component, Vue, Prop, Watch } from "vue-property-decorator";

@Component
export default class Home extends Vue {
    
}
</script>
