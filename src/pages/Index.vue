<template>
  <div id="app">
    <b-navbar variant="dark" type="dark">
      <b-navbar-brand>LintEditor</b-navbar-brand>
    </b-navbar>
    <b-row>
      <Editor v-model="value" @input="onChange" />
    </b-row>
    <b-row>
      <ViewerFrame :value="value" />
    </b-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import Editor from "../components/Editor.vue";
import ViewerFrame from "../components/ViewerFrame.vue";

@Component({
  components: {
    Editor,
    ViewerFrame
  }
})
export default class Index extends Vue {
  value: string = "\n\n\n\n\n\n\n\n\n";
  public onChange(val: string) {}
}
</script>
