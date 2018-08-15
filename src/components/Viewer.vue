<template>
    <div v-html="value"></div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  props: {
    value: {
      type: String
    }
  }
})
export default class extends Vue {}
</script>

