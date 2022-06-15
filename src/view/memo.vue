<template>
  <div class="memo">
    <!-- 中间主内容 -->
    <div class="main" id="main">
      <div class="titleBoxContainer">
        <div class="title">
          <div class="title-left">
            <img style="margin-right:16px" src="@/assets/image/icon/navIcon/right.svg">
            <h1>Daily Task</h1>
          </div>
          <div class="title-right">
            <div class="iconContainer">
              <img src="@/assets/image/icon/top/search.svg">
            </div>
            <div class="iconContainer">
              <img src="@/assets/image/icon/top/hint.svg">
            </div>
            <div class="iconContainer">
              <img src="@/assets/image/icon/top/boy.svg">
            </div>
          </div>
        </div>
        <p>something</p>
      </div>
      <div class="bodyBoxContainer">
        <div class="subtitleBox">
          <div class="subtitle" v-for="item in subtitles" key="item">{{item}}</div>
        </div>
        <div class="boxContainer">
          <card-container v-for="(index,item) in containers" :id="item">
              <move-card></move-card>
          </card-container>
        </div>
      </div>
    </div>
    <!-- 右侧输入框 -->
    <div class="rightSide">
        <move-card id="card" class="card" :icon="iconSrc" ref="card">
            <template #default>
              {{createdCardText}}
            </template>
        </move-card>
        <div class="inputContainer">
          <div class="statusContainer">
            <div>status🔥: </div>
            <ul>
              <li v-for="item in status" @click="iconCLick(item)">
                <img :src="`@/assets/image/icon/status/${item}.svg`">
              </li>
            </ul>
          </div>
          <el-input type="textarea" v-model="createdCardText" rows="8" clearable></el-input>
          <el-button @click="createCardwithThrottle()">publish</el-button>
        </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref, defineCustomElement, onMounted, getCurrentInstance } from 'vue';
import getElementPosition from '../assets/tools/getElPosition'
import throttle from "../assets/tools/throttle";
import MoveCard from '../components/MoveCard/MoveCard.vue';
import CardContainer from '../components/CardContainer/CardContainer.vue';

//box逻辑段
const subtitles = reactive([
  'Today',
  'Tomorrow',
  'Twodays Later'
])

const containers = reactive<string[]>([
  "card1","card2","card3","card4","card5","card6","card7","card8","card9"
])

let iconSrc = ref<string>("game");

//右侧输入框status切换
const status = reactive([
  'game',
  'sport',
  'cloth'
])

const iconCLick = (item: string) => {
  iconSrc.value = item;
}

// 创建卡片逻辑段
let createdCardText = ref<string>();
let cardIndex = ref<number>(1);
let component = ref<string>('CardContainer');

const createCard = ():void => {
  const createdCard = document.getElementById("card") as HTMLDivElement;
  const card_container = document.getElementById(`card${cardIndex.value}`) as HTMLDivElement;
  // 超过9个则无法添加，提示警告。
  if(cardIndex.value > 8) {
    createdCard.style.animationName = "refuse-move";
    ElMessage.error("ops, you have too much work to do!");
      setTimeout(()=> {
        createdCard.style.animationName = "";
      },200)
      return
  }
  //创建一个新的卡片
  const rightSide = document.querySelector(".rightSide")
  const newCard = createdCard.cloneNode(true) as HTMLDivElement;
  //暂时隐藏原卡片,同时清空原卡片内容
  createdCard.style.display = "none"
  createdCardText.value = ""
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
// 包一层节流
const createCardwithThrottle = throttle(createCard, 2400);
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
        align-items: center;
        justify-content: space-between;
        .title-left {
          width: 300px;
          display: flex;
        }
        .title-right {
          width: 200px;
          display: flex;
          justify-content: end;
          .iconContainer {
            display: flex;
            justify-content: center;
            margin-right: 12px;
            align-items: center;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            background-color: #f3f5f7;
            transition: all 0.3s;
            cursor: pointer;
            &:hover {
              background-color: #fde9e9;
            }
          }
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
      margin-top: 220px;
      height: 320px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
      .statusContainer {
        display: flex;
        align-items: center;
        width: 200px;
        ul {
          display: flex;
          justify-content: start;
          li {
            list-style:none;
            width: 24px;
            height: 24px;
            border-radius: 50%;
            transition: all 0.3s;
            cursor: pointer;
            &:hover {
              background-color: #fde9e9;
            }
          }
        }
      }
    }
    .card {
      position: absolute;
      left:22%;
      top:10%;
    }
  }
}
</style>