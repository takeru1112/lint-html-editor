<template>
  <div id="app">
    <b-navbar variant="dark" type="dark">
      <b-navbar-brand>LintEditor</b-navbar-brand>
    </b-navbar>
    <Editor v-model="value" @input="onChange" />
    <ViewerFrame :value="value" />
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
export default class extends Vue {
  value: string = "";
  public onChange(val: string) {}
}
</script>
