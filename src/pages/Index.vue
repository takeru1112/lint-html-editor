<template>
  <div id="app" class="container">
    <Editor v-model="value" @input="onChange" />
    <ViewerFrame>
      <Viewer :value="value" />
    </ViewerFrame>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import Editor from "../components/Editor.vue";
import ViewerFrame from "../components/ViewerFrame.vue";
import Viewer from "../components/Viewer.vue";

@Component({
  components: {
    Editor,
    ViewerFrame,
    Viewer
  }
})
export default class App extends Vue {
  value: string = "";
  public onChange(val: string) {}
}
</script>
<style lang="scss" scoped>
.container {
  display: flex;
}
</style>
