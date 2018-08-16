<template>
  <b-dropdown>
    <b-dropdown-item v-for="(index,item) in items" :key="index">{{item.title}}</b-dropdown-item>
  </b-dropdown>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  props: {
    items: {
      type: Array
    }
  }
})
export default class extends Vue {}
</script>

