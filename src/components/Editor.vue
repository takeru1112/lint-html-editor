<template>
  <b-container>
      <b-card title="パーツリスト" class="my-2">
        <PartsButtonGroup :items="partsList" @select="onSelectParts" />
      </b-card>
      <b-card class="my-2">
        <textarea ref="textarea"></textarea>
      </b-card>
  </b-container>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import * as codemirror from "codemirror";
import "codemirror/mode/htmlmixed/htmlmixed.js";
import "codemirror/lib/codemirror.css";

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
    textarea: HTMLTextAreaElement;
  };
  editor!: CodeMirror.EditorFromTextArea;
  value!: string;
  public mounted() {
    this.editor = codemirror.fromTextArea(this.$refs.textarea, {
      lineNumbers: true,
      mode: "text/html"
    });
    this.editor.on("change", this.onDidChange);
  }
  public onSelectParts(template: string) {
    this.editor.getDoc().replaceSelection(template);
    this.editor.save();
  }
  private onDidChange(
    incetance: CodeMirror.Editor,
    change: CodeMirror.EditorChangeLinkedList
  ) {
    const value = this.editor.getValue()
    this.$emit("input", value);
    
  }
}
</script>
