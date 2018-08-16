<template>
  <div :style="{height:height}" ref="container"></div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import * as monaco from "monaco-editor";
import IStandaloneCodeEditor = monaco.editor.IStandaloneCodeEditor;

@Component({
  props: {
    width: {
      type: String,
      default: "400px"
    },
    height: {
      type: String,
      default: "600px"
    },
    value: {
      type: String,
      default: ""
    }
  }
})
export default class extends Vue {
  $refs!: {
    container: HTMLDivElement;
  };
  editor!: IStandaloneCodeEditor;
  value!: string;
  public mounted() {
    const model = monaco.editor.createModel(this.value, "html");
    this.editor = monaco.editor.create(this.$refs.container, {
      model,
      automaticLayout: true,
      minimap: {
        enabled: false
      }
    });
    this.editor.onDidChangeModelContent(this.onDidChange);
  }
  private onDidChange(e: monaco.editor.IModelContentChangedEvent) {
    const value = this.editor.getValue();
    this.$emit("input", value);
  }
}
</script>
