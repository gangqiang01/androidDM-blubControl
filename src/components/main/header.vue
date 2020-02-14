<template>
    <el-header class="nav-header">
        <ul class="nav-left" >
            <li @click="collapse()">
                <img src="@/assets/imgs/bulb.png" alt="" style="margin-top:-10px;">
            </li>
            <li>
                Bulb Control
            </li>
        </ul>
    </el-header>
</template>
<style lang="scss" scoped>
    @import "../../assets/css/colors"; 

    .nav-header{
        background: $lightgray-color;
        border-bottom: 3px solid $androidDM-color;
        display: -webkit-flex;
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        justify-content: space-between;
        .nav-left{
            padding: 0;
            margin: 0;
            display: flex;
            li{ 
                img{
                    height: 42px;
                }
                &:nth-child(1){
                    margin-right: 1rem;
                    margin-top: 1.4rem;
                    font-size: 1.1rem;
                }
                &:nth-child(2){
                    margin-top: 0.8rem;
                    font-weight:900; 
                    font-family: 'Microsoft YaHei';
                    font-size: 2.1rem; 
                }
                color:$primary-color; 
            }
        }
        
    }
   
</style>
