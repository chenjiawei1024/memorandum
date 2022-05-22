<template>
    <div class="card" id="card" ref="card">
        <div class="titleContainer">
            <div class="iconContainer">
                <img :src="iconSrc">
            </div>
            <div class="ellipsisContainer">
                <img src="../assets/image/icon/navIcon/ellipsis.svg">
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



</script>

<style lang="less" scoped>
.card{
    position: absolute;
    left: 0;
    top: 0;
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
            width:24px;
            height:24px;
            border-radius:50%;
            transition: background-color 0.5s;
            &:hover {
                background-color:#f3f5f7;
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