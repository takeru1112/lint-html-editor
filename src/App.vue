<template>
  <div id="app" class="container">
    <Editor v-model="value" />
    <span v-html="value"></span>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import Editor from "./components/Editor.vue";

@Component({
  components: {
    Editor
  }
})
export default class App extends Vue {
  value = "";
}
</script>
