<template>
  <b-dropdown :text="text">
    <b-dropdown-item-button v-for="(template, key) in items" :key="key" @click="onClick(template)">{{key}}</b-dropdown-item-button>
  </b-dropdown>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  props: {
    text: {
      type: String
    },
    items: {
      type: Object
    }
  }
})
export default class PartsButton extends Vue {
  onClick(template: string) {
    this.$emit("click", template);
  }
}
</script>

