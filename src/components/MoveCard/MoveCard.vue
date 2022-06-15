<template>
    <div class="card" id="card" ref="card" @click="moveCard($event)">
        <div class="titleContainer">
            <div class="iconContainer">
                <img :src="iconSrc">
            </div>
            <div class="ellipsisContainer" @click="config($event)" @mouseleave="configleave($event)">
                <img src="@/assets/image/icon/navIcon/ellipsis.svg">
                <div class="config">
                    <img src="@/assets/image/img/edit.svg">
                </div>
                <div style="top: 60px;" class="config">
                    <img src="@/assets/image/img/delete.svg">
                </div>
            </div>
        </div>
        <div class="text">
            <slot></slot>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue';

type Props = {
    icon: string
} 
const props = defineProps<Props>()
const iconSrc = computed(() => `./src/assets/image/icon/status/${props.icon}.svg`)

const moveCard = (e: MouseEvent) => {
    
}

// 点击展开设置
const config = (e: MouseEvent) => {
    let target = e.currentTarget as HTMLElement;
    let hiddenObjects = target.children
    let children: HTMLElement[] = []
    for(let i=0;i<hiddenObjects.length;i++) {
    if (hiddenObjects[i].nodeType == 1) {
        children.push(hiddenObjects[i] as HTMLElement);
    }
    }
    children[1].style.display = "flex"
    children[2].style.display = "flex"
    target.style.height = 90 + "px";
}

//离开收缩设置
const configleave = (e: MouseEvent) => {
    let target = e.currentTarget as HTMLDivElement;
    let hiddenObjects = target.children
    let children: HTMLElement[] = []
    for(let i=0;i<hiddenObjects.length;i++) {
    if (hiddenObjects[i].nodeType == 1) {
        children.push(hiddenObjects[i] as HTMLElement);
    }
    }
    children[1].style.display = "none"
    children[2].style.display = "none"
    target.style.height = 24 + "px";
    
}



</script>

<style lang="less" scoped>
.card{
    position: absolute;
    left: -3px;
    top: -3px;
    width: 153px;
    height: 116px;
    background-color: #ffffff;
    cursor: pointer;
    z-index: 1;
    border-radius: 5%;
    box-shadow: 0px 3px 10px -3px  rgba(0, 0, 0, 0.1);
    transition: all 1s;
    animation-duration: 0.2s;
    animation-iteration-count: 1;
    .titleContainer {
        display: flex;
        justify-content: space-between;
        margin: 6px;
        .iconContainer {
            width:24px;
            height:24px;
            border-radius:50%;
            background-color:#f3f5f7;
        }
        .ellipsisContainer {
            position: relative;
            width:24px;
            height:24px;
            border-radius:12px;
            transition: background-color 0.5s;
            &:hover {
                background-color:#f3f5f7;
            }
            & div {
                position: absolute;
                top: 30px;
                width: 24px;
                height: 24px;
                display: none;
                justify-content: center;
                align-items: center;
                border-radius: 50%;
                &:hover {
                    background-color: #fde9e9;
                }
            }
        }
    }
    .text {
        padding-left: 10px;
        padding-right: 10px;
        word-wrap: break-word;
        font-size: 0.8em;
        overflow:hidden;
        text-overflow:ellipsis;
        display:-webkit-box;
        -webkit-box-orient:vertical;
        -webkit-line-clamp:5;  //表示要展示的行数
        white-space:pre-wrap;
        color: #5d5d5d;
    }
}
</style>