<template>
  <div>
    <p v-if="hour < 12">{{ $t("morning") }}</p>
    <p v-if="hour >= 12">{{ $t("afternoooooon") }}</p> <!-- misspelled -->
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class HelloWorld extends Vue {
  @Prop() private hour!: number;
}
</script>
