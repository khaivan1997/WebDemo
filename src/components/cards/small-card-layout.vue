<template>
  <div class="small-card-layout-container">
    <div class="top" :class="backgroundCss">
    </div>
    <div class="bottom">
      <div class="polygon-icon"></div>
      <h3> DEFAULT TITLE </h3>
      <div class="horizontal-separator"></div>
      <h5> DEFAULT subTitle</h5>
      <p> fuk u bitch </p>
      <p>cmmfo khon nan</p>
      <p>ccmmd</p>
    </div>
  </div>

</template>

<script lang="ts" setup>
import {defineProps} from "vue";

defineProps<{
  backgroundCss: string
}>()
</script>

<style scoped>
.small-card-layout-container{
  background-blend-mode: overlay;
  width: 100%;
  height: 100%;
}
.polygon-icon{
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(0%, -50%);
  mask-repeat: no-repeat;
  width: 25%;
  padding-bottom: 25%;
  background: #9375B6;
  mask-size: 150%;
  mask-position: center;
}

.top{
  width: 100%;
  padding-bottom: 67%;
}

.bottom {
  position: relative;
  margin-top: -10px;
  border-radius: 20px;
  background: linear-gradient(180deg, rgba(49, 58, 91, 0.00) 4.57%, rgba(49, 58, 91, 0.44) 26.36%, #313A5B 92.56%);
  backdrop-filter: blur(10px);
  padding: 10px;
  box-sizing: border-box;
  background: transparent;
}
</style>