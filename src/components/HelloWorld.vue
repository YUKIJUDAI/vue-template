<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component({})
export default class HelloWorld extends Vue {
    @Prop() 
    private msg: string;
}
</script>

<style scoped lang="less">
</style>
