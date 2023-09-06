<template>
  <div class="card-container column">
    <div class="content-center">
      <button>{{action}}</button>
    </div>
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">

import {defineExpose, defineProps, ref, toRefs} from "vue";

const props = defineProps<{
  action: string,
}>();
const {action} = toRefs(props);

</script>

<style scoped>
.card-container{
  flex-direction: column-reverse;
}
.card-container>*{
  width:100%;
}

</style>