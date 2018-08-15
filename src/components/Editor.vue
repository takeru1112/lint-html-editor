<template>
  <div ref="container"></div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import * as monaco from "monaco-editor";
import IStandaloneCodeEditor = monaco.editor.IStandaloneCodeEditor;

@Component({})
export default class extends Vue {
  $refs: {
    container: HTMLDivElement;
  };
  public mounted() {
    monaco.editor.create(this.$refs.container, {
      language: "html"
    });
  }
}
</script>
