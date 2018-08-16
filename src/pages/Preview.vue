<template>
  <div id="app" class="container">
      Preview Area
      <Viewer :value="value" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import Viewer from "../components/Viewer.vue";

@Component({
  components: {
    Viewer
  }
})
export default class extends Vue {
  value: string = "";
}
</script>
