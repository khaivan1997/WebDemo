<script setup lang="ts">
import TitleBar from '../components/title-bar-element.vue'
import {ref} from "vue";
import CardItem from "@/components/cards/card-item.vue";
import {TITLE_BAR} from "@/pure-ts-code/view-configs";
import SmallCardLayout from "@/components/cards/small-card-layout.vue";

const titleBar = ref( TITLE_BAR);

const cardList = ref(
    ["background-1", "background-2", "background-3"]
)
</script>

<template>
  <main>
    <div class="home-title-bar-container">
      <TitleBar :items="titleBar"></TitleBar>
    </div>
    <video autoplay muted loop id="myVideo" width="400" height="800">
      <source src="../assets/background.mp4" type="video/mp4">
    </video>
    <div class="column">
      <div class="row top">
        <div class="test border-test"></div>
<!--        <div class="test hover-animation content-center"> O cai dit me may</div>-->
      </div>
      <div class="row bottom">
        <card-item v-for="(item, index) in cardList" action="DEFAULT" style="width: 25vw;" :key="index">
          <small-card-layout :backgroundCss="`m-background ${item}`"></small-card-layout>
        </card-item>
      </div>
    </div>
  </main>
</template>


<style>
main {
  width: 100vw;
  height: 100vh;
  position: relative;
}

#myVideo {
  position: fixed;
  right: 0;
  bottom: 0;
  min-width: 100vw;
  min-height: 100vh;
  z-index: -99;
  object-fit: cover;
}

.home-title-bar-container{
  position: absolute;
  width: 40%;
  top: 60px;
  right: 50px;
}

.row.top {
  height: 500px;
  margin-top: 50px;
}
card-item{
  min-width: 500px;
}
.row.bottom {
  padding: 50px;
  justify-content: space-around;
  flex:1;
}
</style>