<template>
  <div class="row title-bar-container">
    <div class="item" v-for="(item,index) in props.items" :key="index">
      <div class="title-name content-center"> {{item.title}}</div>
      <div class="pop-up">
        <ul>
          <li class="row clickable hover-animation" v-for="(subItem, index) in item.subItems" :key="index">
            <div class="icon-container">
              <div class="icon" :class="subItem.cssClasses"></div>
            </div>
            <div class="column">
              <div class="sub-title-name"> {{subItem.title}}</div>
              <div class="sub-title-detail"> {{subItem.detail}}</div>
            </div>

          </li>
        </ul>
        <div class="content-center">
          <div class="view-more">
            View More
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
 import {defineProps} from "vue";

 const props = defineProps<{
   items:{
     title: string
     subItems:{
       cssClasses: string,
       title: string;
       detail: string;
     } []
   } []
 }>();

</script>

<style scoped>
.title-bar-container{
  overflow: visible;
  gap:10px;
  position: relative;
}

.item {
  flex: 1 1 0px;
  border-radius: 10px;
  background: linear-gradient(180deg, rgba(254, 200, 241, 0.90) 0%, rgba(237, 146, 215, 0.00) 40.39%), radial-gradient(96.63% 140.33% at 76.68% 66.67%, rgba(96, 46, 166, 0.00) 0%, rgba(201, 119, 214, 0.50) 100%);
  background-blend-mode: overlay, normal;
  box-shadow: 0px 10px 10px 0px rgba(0, 0, 0, 0.10);
  cursor: pointer;
}

.item:hover{
  box-shadow: 0px 0px 5px 0px #FFACE4 inset, 0px -1px 8px 0px #9375B6 inset;
}
.pop-up {
  position: absolute;
  overflow: hidden;
  transition: max-height ease-in .5s;
  width:75%;
  max-height: 0;
  left: 40px;
  top: 150%;
  border-radius: 20px;
  background: var(--layout-dark-landing), linear-gradient(114deg, rgba(27, 51, 81, 0.30) 15.80%, rgba(155, 97, 149, 0.30) 92.73%);
  box-shadow: 0px 40px 40px 0px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(30px);
  box-sizing: border-box;
}

.item:hover .pop-up{
  max-height: 500px;
  height: fit-content;
  padding: 5px;
}
ul{
  list-style-type: none;
  padding: 0;
  gap: 10px;
}
ul li {
  border-radius: 20px;
  padding: 10px;
  box-shadow: 0px 40px 40px 0px rgba(0, 0, 0, 0.25);
  /*backdrop-filter: blur(30px);*/
  border-radius: 0px 20px 20px 0px;
  background: linear-gradient(91deg, rgba(17, 16, 24, 1) 0%, rgba(17, 16, 24, 1) 100%);
  background-blend-mode: overlay;
  box-sizing: border-box;

}
li:not(:last-child) {
  margin-bottom: 5px;
}

.clickable{
  gap: 15px;
}

.title-name{

}

.sub-title-name{
  text-align: left;
}

.sub-title-detail{
  text-align: left;
}

.view-more {
  padding: 10px;
  border-radius: 10px;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.00) 48.05%, rgba(0, 0, 0, 0.20) 48.90%), linear-gradient(180deg, rgba(49, 58, 91, 0.00) 0%, #313A5B 78.91%, rgba(49, 58, 91, 0.22) 100%);
  box-shadow: 0px 14px 20px 0px rgba(42, 51, 83, 0.80);
  color: #FFF;
  text-align: center;
  leading-trim: both;
  text-edge: cap;
  font-feature-settings: 'clig' off, 'liga' off;

  /* Subtitle/Subtitle 2 */
  font-family: Inter;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: 23px; /* 153.333% */
}

.view-more:before{
  content: '\2192';
}
</style>