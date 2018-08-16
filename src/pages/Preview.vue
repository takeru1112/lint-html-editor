<template>
  <Viewer :value="value" />
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
  mounted() {
    window.addEventListener("message", this.onMessage);
  }
  onMessage(e: MessageEvent) {
    const recieveData: { type: string; data: string } = e.data;
    if (recieveData.type != "previewText") return;
    this.value = recieveData.data;
  }
}
</script>
