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
      default: "400px"
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
    const options: monaco.languages.html.Options = {
      format: {
        tabSize: 4,
        insertSpaces: false,
        wrapLineLength: 120,
        unformatted:
          'default": "a, abbr, acronym, b, bdo, big, br, button, cite, code, dfn, em, i, img, input, kbd, label, map, object, q, samp, select, small, strong, sub, sup, textarea, tt, var',
        contentUnformatted: "pre",
        indentInnerHtml: false,
        preserveNewLines: true,
        maxPreserveNewLines: 0,
        indentHandlebars: false,
        endWithNewline: false,
        extraLiners: "head, body, /html",
        wrapAttributes: "auto"        
      }
    };
    monaco.languages.html.htmlDefaults.setOptions(options);
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
    template = template.replace(/.* </g, '<')
    this.editor.trigger("keyboard", "type", { text: template });
    this.editor.trigger("keyboard", "editor.action.formatDocument", {});
  }
  private onDidChange(e: monaco.editor.IModelContentChangedEvent) {
    const value = this.editor.getValue();
    this.$emit("input", value);
  }
}
</script>
