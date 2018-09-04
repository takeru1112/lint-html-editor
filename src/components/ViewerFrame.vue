<template>
  <b-container fluid class="preview-frame">
    <iframe src="./preview.html" frameborder="0" ref="frame" width="1024" height="768"></iframe>
  </b-container>
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
      win.postMessage(
        { type: "previewText", data: val },
        "*"
      );
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

<style lang="scss" scoped>
.preview-frame {
  text-align: center;
}
</style>
