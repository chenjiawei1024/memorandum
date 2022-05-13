<template>
    <div class="background">
        <div class="container">
            <!-- 左侧边栏 -->
            <div class="leftSide">
                <div class="idCard"></div>
                <div class="settingBox">
                    <div class="setting"><img style="margin-right: 7px" src="../assets/image/dashboard.svg"> dashboard</div>
                    <div class="setting"><img style="margin-right: 7px" src="../assets/image/setting.svg"> setting</div>
                    <div class="setting"><img style="margin-right: 7px" src="../assets/image/activity.svg"> activities</div>
                </div>
                <div class="navList">
                    <nav-item v-for="item in navlist" key="item">{{item}}</nav-item>
                </div>
                <button>+ New Project</button>
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

<script setup lang="ts">
import NavItem from '../components/NavItem.vue';
import { reactive,ref } from 'vue';
const navlist: String[] = reactive([
    "Daily Task",
    "Item1",
    "Item2"
])
</script>


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
            font-size: 0.8em;
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
                display: flex;
                flex-direction: column;
                justify-content: space-around;
                width: 140px;
                height: 120px;
                // background-color: blue;
                margin-top: 15px;
                margin-bottom: 15px;
                color: #bfbfbf;
                .setting {
                    display: flex;
                    align-items: center;
                    height: 20px;
                    margin-left: 10px;
                    transition: color 0.3s;
                }
                .setting:hover {
                    color: #515151;
                }
            }
            .navList {
                width: 140px;
                height: 300px;
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
                .navItem:active {
                    background-color: #ffffff;
                    box-shadow: 0px 3px 20px -3px  rgba(0, 0, 0, 0.1);
                    transform: scale(1.1);
                }
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