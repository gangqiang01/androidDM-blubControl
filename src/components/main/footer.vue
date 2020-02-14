<template>
<div class="text-center page_footer">
    <p >
        © {{releaseDate}} Powered by {{power}}
    </p>
    <!-- <p>
        Mail: jianfeng.dai@advantech.com.cn , jin.xin@advantech.com.cn
    </p> -->
</div>
    
</template>

<style lang='scss' scoped>
    @import "../../assets/css/colors";
    .page_footer{
        background-color: $nav-bg-color;
        color: $white-color;
        font-size: 13px;
        padding: 5px;
        z-index: 2001;
        position: relative;
        
    }
   
</style>

<script>
    import {releaseDate, power} from "../../assets/js/constant"
    export default{
        data(){
            return {
                releaseDate,
                power
            }
        }
    }
</script>
