<template>
  <b-container>
    <PartsButton />
  </b-container>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import PartsButton from "./PartsButton.vue";

@Component({
  components: { PartsButton },
  props: {
    items: {
      type: Array
    }
  }
})
export default class extends Vue {}
</script>

