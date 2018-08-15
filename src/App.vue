<template>
  <div id="app" class="container">
    <Editor v-model="value" @input="onChange" />
    <ErrorLog :items="messages" />
    <span v-html="value"></span>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import Editor from "./components/Editor.vue";
import ErrorLog from "./components/ErrorLog.vue";
import {
  TextlintResult,
  TextlintKernel,
  TextlintMessage
} from "@textlint/kernel";

@Component({
  components: {
    Editor,
    ErrorLog
  }
})
export default class App extends Vue {
  value: string = "";
  messages: TextlintMessage[] = [];
  linter: TextlintKernel = new TextlintKernel();
  public onChange(val: string) {
    this.execLint(val).then((result: TextlintResult | null) => {
      if (!result) {
        return;
      }
      this.messages = result.messages;
    });
  }
  private async execLint(text: string) {
    const preset = await require("textlint-rule-preset-japanese");
    const rules = Object.keys(preset.rules).map(name => {
      return {
        ruleId: name,
        rule: preset.rules[name],
        options: preset.rulesConfig[name]
      };
    });
    const plugin = await require("textlint-plugin-html");
    console.log(plugin);
    try {
      return this.linter.lintText(text, {
        rules: rules,
        plugins: [
          {
            pluginId: "html",
            plugin
          }
        ],
        ext: ".html"
      });
    } catch {
      return null;
    }
  }
}
</script>
