<template>
<div>
<iframe src="./preview.html" frameborder="0" ref="frame"></iframe>
</div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component<PreviewFrame>({
  props: {
    value: {
      type: String
    }
  },
  watch: {
    value(val: string) {
      const win = this.$refs.frame.contentWindow;
      if (!win) return;
      win.postMessage({ type: "previewText", data: val }, "http://localhost:8080");
    }
  }
})
export default class PreviewFrame extends Vue {
  $refs!: {
    frame: HTMLIFrameElement;
  };
  value!: string;
}
</script>
