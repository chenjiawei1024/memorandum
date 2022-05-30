<template>
    <div class="navItem">
        <img style="margin-right: 4px" src="@/assets/image/icon/navIcon/arrow.svg">
        <slot></slot>
    </div>
</template>

<script setup lang="ts">
import { reactive, ref} from 'vue';

</script>

<style lang="less" scoped>
.navItem {
    width: 100%;
    display: flex;
    align-items: center;
    height: 38px;
    background-color: #f3f5f7;
    padding-left: 4px;
    border-radius: 5px;
    font-size: 1.1em;
    cursor: pointer;
    transition: all 0.3s;
}
.navItem:hover {
    background-color: #ffffff;
    box-shadow: 0px 3px 20px -3px  rgba(0, 0, 0, 0.1);
    transform: scale(1.1);
}
</style>>