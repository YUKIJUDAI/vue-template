<template>
    <div class="home">
        <img alt="Vue logo" src="../assets/img/logo.png">
        <HelloWorld msg="Welcome to Your Vue.js App" />
    </div>
</template>

<script lang="ts">

import HelloWorld from "@/components/HelloWorld.vue";
import { Component, Vue } from "vue-property-decorator";

@Component({
    components: { HelloWorld }
})
export default class Home extends Vue { }
</script>
