<template>
  <div class="titleBoxContainer">
    <div class="title">
      <!-- 需要一个24px的勾 -->
      <img  style="margin-right: 16px;" src="../assets/image/right.svg">
      <h1>Daily Task</h1>
    </div>
    <p style="color: #bfbfbf;">something</p>
  </div>
  <div class="bodyBoxContainer">
    <div class="subtitleBox">
      <div class="subtitle" v-for="item in subtitles" key="item">{{item}}</div>
    </div>
    <div class="boxContainer">
      <div class="box" v-for="index in 9"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';
const subtitles = reactive([
  'Today',
  'Tomorrow',
  'Twodays Later'
])
</script>

<style lang="less" scoped>
.titleBoxContainer {
  height: 125px;
  .title {
    display: flex;
  }
}
.bodyBoxContainer {
  .subtitleBox {
    display: grid;
    grid-template-columns: repeat(3,153px);
    grid-template-rows: 24px;
    gap: 16px;
    font-size: 12px;
    font-weight: bold;
    margin-bottom: 1em;
    .subtitle {
    font-size: 0.9em;
    background-color: #f3f5f7;
    padding: 5px;
    border-radius: 5%;
    box-shadow: 0px 3px 10px -3px  rgba(0, 0, 0, 0.1);
    }
  }
  .boxContainer {
    display: grid;
    height: 450px;
    grid-template-columns: repeat(3,153px);
    grid-template-rows: repeat(3,115px);
    gap: 16px;
    overflow-y: scroll;
  }
  .box {
    border-radius: 5%;
    border: 3px solid #f3f5f7;
  }
}
</style>