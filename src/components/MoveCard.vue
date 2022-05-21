<template>
    <div class="card" id="card" ref="card">
        <div class="iconContainer">
            <img :src="icon">
        </div>
        <div class="title">
            <slot name="title"></slot>
        </div>
        <div class="text">
            <slot></slot>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

type Props = {
    icon: string
} 

const props = defineProps<Props>()
console.log(props.icon)

// let iconSrc = ref<string>();
// iconSrc.value = `../assets/image/icon/status/${icon}.svg`



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
    // transition: left,right 1s ease-in-out 1s;
    .iconContainer {
        width:24px;
        height:24px;
        border-radius:50%;
        background-color:#f3f5f7;
    }
    .title {
        box-sizing: border-box;
        height: 30px;
        font-weight: bold;
        padding-left: 10px;
        padding-top: 5px;
        overflow: hidden;
        text-overflow: ellipsis;
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
    }
}
</style>