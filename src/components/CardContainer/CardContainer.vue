<template>
    <div class="box">
        <slot></slot>
    </div>
</template>

<script setup lang="ts">
</script>

<style lang="less" scoped>
.box {
    position: relative;
    box-sizing: border-box;
    border-radius: 5%;
    border: 3px solid #f3f5f7;
}
</style>