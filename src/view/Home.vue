<script setup lang="ts">
  
</script>

<template>
    <div class="background">
        <div class="container">
            <!-- 左侧边栏 -->
            <div class="leftSide">
                <div class="idCard"></div>
                <div class="settingBox"></div>
                <div class="navList"></div>
                <div class="button"></div>
            </div>
            <!-- 主内容 -->
            <div class="main">
                <router-view></router-view>
            </div>
            <!-- 右侧输入框 -->
            <div class="rightSide"></div>
        </div>
    </div>
</template>

<style lang="less" scoped>
.background {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #dedfea;
    .container {
        display: grid;
        grid-template-columns: 175px 1fr 280px;
        width:1000px;
        height: 650px;
        background-color: #ffffff;
        border-radius: 8%;
        box-shadow: 0px 6px 20px -6px  rgba(0, 0, 0, 0.1);
        .main {
            height: 100%;
            padding-left: 25px;
            padding-right: 25px;
            padding-top: 10px;
        }
        .leftSide {
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            background-color: #f3f5f7;
            .idCard {
                border-radius: 10px;
                width: 140px;
                height: 40px;
                margin-top: 30px;
                background-color: #ffffff;
                box-shadow: 0px 3px 10px -3px  rgba(0, 0, 0, 0.1);
            }
            .settingBox {
                width: 140px;
                height: 120px;
                background-color: blue;
                margin-top: 10px;
            }
            .navList {
                width: 140px;
                height: 300px;
                background-color: yellow;
                margin-top: 20px;
            }
            .button {
                margin-top: 50px;
                width: 140px;
                height: 30px;
                background-color: green;
            }
        }
        .rightSide {
            height: 100%;
            border-left:3px solid #fafafa;
        }
    }
}
.newButton {
    margin-bottom: 30px;
}
.card {
    width: 150px;
    height: 115px;
}

</style>>