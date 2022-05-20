<template>
  <div class="memo">
    <!-- 中间主内容 -->
    <div class="main" id="main">
      <div class="titleBoxContainer">
        <div class="title">
          <img src="../assets/image/right.svg">
          <h1>Daily Task</h1>
        </div>
        <p>something</p>
      </div>
      <div class="bodyBoxContainer">
        <div class="subtitleBox">
          <div class="subtitle" v-for="item in subtitles" key="item">{{item}}</div>
        </div>
        <div class="boxContainer">
          <div class="box" v-for="item in containers" :id="item"></div>
        </div>
      </div>
    </div>
    <!-- 右侧输入框 -->
    <div class="rightSide">
        <move-card id="card">
          <template #title>
              {{createdCardTitle}}
            </template>
            <template #default>
              {{createdCardText}}
            </template>
        </move-card>
        <div class="inputContainer">
          <el-input ref="inputTitle" v-model="createdCardTitle" clearable>
          </el-input>
          <el-input type="textarea" v-model="createdCardText" clearable></el-input>
          <el-button @click="createCard">生成卡片</el-button>
        </div>
        
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';
import getElementPosition from '../tools/getElPosition'
import MoveCard from '../components/MoveCard.vue';

//box逻辑段
const subtitles = reactive([
  'Today',
  'Tomorrow',
  'Twodays Later'
])

const containers = reactive<string[]>([
  "card1","card2","card3","card4","card5","card6","card7","card8","card9"
])

// 创建卡片逻辑段
let createdCardText = ref<string>();
let createdCardTitle = ref<string>();
const inputTitle = ref(null);
console.log(inputTitle.value);

const createCard = ():void => {
    const createdCard = document.getElementById("card") as HTMLDivElement;
    const card_container = document.getElementById("card1") as HTMLDivElement;
    const prevLeft: number = getElementPosition(createdCard)[0];
    const prevtop: number = getElementPosition(createdCard)[1];
    createdCard.style.transition= "all 0.8s";
    createdCard.style.boxShadow = "8px 8px 8px rgba(0, 0, 0, 0.1)"
    setTimeout(()=> {
      createdCard.style.left = card_container.offsetLeft - prevLeft - 3 + "px"
      createdCard.style.top = card_container.offsetTop - prevtop + "px"
    },800)
    setTimeout(()=> {
        createdCard.style.boxShadow = "0px 3px 10px -3px  rgba(0, 0, 0, 0.1)"
    },1600)
}
</script>

<style lang="less" scoped>
.memo {
  display: flex;
  height: 100%;
  .main {
    flex: 1;
    padding-left: 25px;
    padding-right: 25px;
    padding-top: 10px;
    .titleBoxContainer {
      height: 125px;
      p {
        color: #bfbfbf;
      }
      .title {
        display: flex;
        img {
          margin-right: 16px;
        }
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
  }
  .rightSide {
    position: relative;
    box-sizing: border-box;
    width: 280px;
    height: 100%;
    padding-left: 25px;
    padding-right: 25px;
    padding-top: 10px;
    border-left:3px solid #fafafa;
    .inputContainer {
      margin-top: 300px;
    }
  }
}
</style>