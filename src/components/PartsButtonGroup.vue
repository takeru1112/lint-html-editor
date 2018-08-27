<template>
  <b-container>
      <b-form-group>
        <b-button-group>
            <PartsButton v-for="(item, index) in items" :key="index" :items="item" :text="index" @click="onSelect" />
        </b-button-group>
      </b-form-group>
  </b-container>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import PartsButton from "./PartsButton.vue";

@Component({
  components: { PartsButton },
  props: {
    items: {
      type: Object
    }
  }
})
export default class PartsButtonGroup extends Vue {
  onSelect(template: string) {
    this.$emit("select", template);
  }
}
</script>
