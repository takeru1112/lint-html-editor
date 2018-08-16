<template>
  <b-container>
      <b-card title="パーツリスト" class="my-2">
        <PartsButtonGroup :items="partsList" @select="onSelectParts" />
      </b-card>
      <b-card class="my-2">
        <div :style="{height:height}" ref="container"></div>
      </b-card>
  </b-container>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import * as monaco from "monaco-editor";
import IStandaloneCodeEditor = monaco.editor.IStandaloneCodeEditor;

import PartsButtonGroup from "./PartsButtonGroup.vue";

import { PARTS_LIST } from "../setting/partsList";

@Component({
  components: { PartsButtonGroup },
  props: {
    height: {
      type: String,
      default: "200px"
    },
    value: {
      type: String,
      default: ""
    }
  }
})
export default class Editor extends Vue {
  partsList = PARTS_LIST;
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
  public onSelectParts(template: string) {
    this.editor.trigger("keyboard", "type", { text: template });
  }
  private onDidChange(e: monaco.editor.IModelContentChangedEvent) {
    const value = this.editor.getValue();
    this.$emit("input", value);
  }
}
</script>
