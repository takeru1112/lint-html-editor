<template>
    <div>
        <h1>template heading</h1>
        <slot>template body</slot>
    </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class extends Vue {}
</script>
