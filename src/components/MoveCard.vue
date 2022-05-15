<template>
    <div class="card" id="card" ref="card" @mouseup="" @mousedown=""></div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';


</script>

<style lang="less" scoped>
.card{
    position: absolute;
    width: 159px;
    height: 121px;
    background-color: #ffffff;
    cursor: pointer;
    z-index: 1;
    border-radius: 5%;
    box-shadow: 0px 3px 10px -3px  rgba(0, 0, 0, 0.1);
}
</style>