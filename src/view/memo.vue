<template>
  <div class="memo">
    <!-- 中间主内容 -->
    <div class="main" id="main">
      <div class="titleBoxContainer">
        <div class="title">
          <img src="../assets/image/icon/navIcon/right.svg">
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
        <move-card id="card" class="card" :icon="iconSrc">
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
let iconSrc = ref<string>("../assets/image/icon/status/game.svg");
let createdCardText = ref<string>();
let createdCardTitle = ref<string>();
let cardIndex = ref<number>(1);

const createCard = ():void => {
  const createdCard = document.getElementById("card") as HTMLDivElement;
  const card_container = document.getElementById(`card${cardIndex.value}`) as HTMLDivElement;
  //创建一个新的卡片
  const rightSide = document.querySelector(".rightSide")
  const newCard = createdCard.cloneNode(true) as HTMLDivElement;
  //暂时隐藏原卡片,同时清空原卡片内容
  createdCard.style.display = "none"
  createdCardText.value = ""
  createdCardTitle.value = ""
  rightSide?.appendChild(newCard);
  const prevLeft: number = getElementPosition(newCard)[0];
  const prevtop: number = getElementPosition(newCard)[1];
  newCard.style.transition= "all 0.8s";
  newCard.style.boxShadow = "8px 8px 8px rgba(0, 0, 0, 0.1)"
  newCard.style.transform = "rotate(5deg)"
  setTimeout(()=> {
    newCard.style.left = card_container.offsetLeft - prevLeft - 3 + "px"
    newCard.style.top = card_container.offsetTop - prevtop + "px"
  },800)
  setTimeout(()=> {
      newCard.style.boxShadow = "0px 3px 10px -3px rgba(0, 0, 0, 0.1)"
      newCard.style.transform = "rotate(0deg)"
      newCard.style.transition= "";
  },1600)
  setTimeout(() => {
    cardIndex.value++;
    //显示原卡片
    createdCard.style.display = "block"
  },2400)
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
    .card {
      left:22%;
      top:10%;
    }
  }
}
</style>